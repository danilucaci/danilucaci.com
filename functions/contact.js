const { URL } = require("url");
const ow = require("ow");
const differenceInHours = require("date-fns/difference_in_hours");

require("dotenv").config({
  path: ".env.development",
});

const {
  MJ_APIKEY_PUBLIC,
  MJ_APIKEY_PRIVATE,
  EMAIL_NOTIFY_ME,
  EMAIL_FROM_EN,
  EMAIL_FROM_ES,
  EMAIL_MY_NAME,
} = process.env;

const mailjet = require("node-mailjet").connect(
  MJ_APIKEY_PUBLIC,
  MJ_APIKEY_PRIVATE,
  {
    url: "api.mailjet.com",
    version: "v3.1",
  },
);

const STATUS_MESSAGES = require("../src/functions/contact/statusMessages");

const isValidEmail = ow.string.is((e) => /^.+@.+\..+$/.test(e));

const templateID = 890910;

exports.handler = async (event) => {
  let body = "";

  try {
    body = JSON.parse(event.body);
  } catch (error) {
    console.error(error);
    return {
      statusCode: 400,
      body: error.message,
      headers,
    };
  }

  const {
    fullname,
    email,
    message,
    acceptsconsentcheckbox,
    consentcheckboxvalue,
    botfield,
    datesent,
    locale = "en",
  } = body;

  const sendFrom = locale === "en" ? EMAIL_FROM_EN : EMAIL_FROM_ES;

  const origin = new URL(event.headers.origin);
  const isValidHostname =
    origin.hostname === "localhost" || origin.hostname === "www.danilucaci.com";

  let allowOrigin = "*";

  if (origin.hostname === "www.danilucaci.com") {
    allowOrigin = "https://www.danilucaci.com";
  }

  const headers = {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "GET, POST",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (!isValidHostname) {
    return {
      statusCode: 403,
      body: `Hostname Validation Error in Contact Function. ${origin.hostname}`,
      headers,
    };
  }

  // Filter out bots
  try {
    ow(botfield, STATUS_MESSAGES[locale].botFound, ow.string.empty);
  } catch (error) {
    console.error("Bot Stuff happened: ", error.message);
    return {
      statusCode: 403,
      body: "Nope.",
      headers,
    };
  }

  // Filter out legal issues
  try {
    ow(
      consentcheckboxvalue,
      STATUS_MESSAGES[locale].checkboxValue,
      ow.string.minLength(10),
    );
    ow(
      acceptsconsentcheckbox,
      STATUS_MESSAGES[locale].checkboxAccepted,
      ow.boolean.true,
    );
  } catch (error) {
    console.error("Legal Stuff Happened: ", error.message);
    return {
      statusCode: 451,
      body: error.message,
      headers,
    };
  }

  // Validate inputs
  try {
    ow(email, STATUS_MESSAGES[locale].invalidEmail, isValidEmail);
    ow(fullname, STATUS_MESSAGES[locale].nameShort, ow.string.minLength(2));
    ow(datesent, STATUS_MESSAGES[locale].invalidDateSent, ow.string.date);
    ow(
      message,
      STATUS_MESSAGES[locale].messageTooShort,
      ow.string.minLength(2),
    );
    ow(
      message,
      STATUS_MESSAGES[locale].messageTooLong,
      ow.string.maxLength(800),
    );
  } catch (error) {
    console.error("Validation error: ", error.message);
    return {
      statusCode: 500,
      body: error.message,
      headers,
    };
  }

  // Check for an invalid date sent value
  // datesent is comming in as a ISOString also, UTC timezone 0
  const newDateToCompare = new Date().toISOString();
  const newDateFromDateSent = new Date(datesent);
  const hoursDiff = differenceInHours(newDateFromDateSent, newDateToCompare);

  if (hoursDiff > 1) {
    console.error("Date sent hour validation error: ", hoursDiff);
    return {
      statusCode: 500,
      body: STATUS_MESSAGES[locale].invalidDateSent,
      headers,
    };
  }

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: "Europe/Madrid",
  };

  /*
   * Steps
   * 1- Send from the frontend a new Date().toISOString()
   * 2- Create a new Date() out of the previous one
   * 3- Convert it to toLocaleString
   */

  // Send it to me in a spanish local time
  const formattedDate = newDateFromDateSent.toLocaleString(
    "es-ES",
    dateOptions,
  );

  let resBody = {
    mail_message: "initial",
    mail_success: false,
  };

  let statusCode;

  const msg = {
    Messages: [
      {
        From: {
          Email: sendFrom,
          Name: EMAIL_MY_NAME,
        },
        To: [
          {
            Email: EMAIL_NOTIFY_ME,
            Name: EMAIL_MY_NAME,
          },
        ],
        TemplateID: templateID,
        TemplateLanguage: true,
        TemplateErrorDeliver: true,
        Subject: "Got Mail! danilucaci.com Contact Form Notification",
        Variables: {
          email,
          fullname,
          formattedDate,
          message,
          acceptsconsentcheckbox,
          consentcheckboxvalue,
        },
      },
    ],
  };

  try {
    const res = await mailjet
      .post("send", { version: "v3.1", url: "api.mailjet.com" })
      .request(msg);

    resBody.mail_message = "Mail sent";
    resBody.mail_success = true;
    statusCode = res.statusCode;
  } catch (error) {
    resBody.mail_success = false;
    resBody.mail_message = error.message;
    statusCode = error.statusCode;
  }

  return {
    statusCode: statusCode || 200,
    body: JSON.stringify(resBody),
    headers,
  };
};
