const nodemailer = require("nodemailer");
const { URL } = require("url");
const ow = require("ow");
const differenceInHours = require("date-fns/difference_in_hours");
const format = require("date-fns/format");
const esLocale = require("date-fns/locale/es");
const { notifyContact } = require("./mail/notify");
const { notifyContactText } = require("./mail/notifyText");

require("dotenv").config({
  path: ".env.development",
});

const validEmail = ow.string.is((e) => /^.+@.+\..+$/.test(e));

const transporter = nodemailer.createTransport({
  host: process.env.SENDGRID_SERVER,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.SENDGRID_USER,
    pass: process.env.SENDGRID_API_KEY,
  },
});

// const transporter = nodemailer.createTransport({
//   host: process.env.MAILTRAP_HOST,
//   port: process.env.MAIL_PORT,
//   auth: {
//     user: process.env.MAILTRAP_USER,
//     pass: process.env.MAILTRAP_PASSWORD,
//   },
// });

const STATUS_MESSAGES = {
  en: {
    botFound: "Got a bot in here.",
    checkboxAccepted: "Please accept the privacy policy and legal notice to continue.",
    checkboxValue: "The consent value was not provided.",
    invalidDateSent: "The date sent is invalid.",
    nameShort: "The name is too short.",
    invalidEmail: "The email received is invalid.",
    messageTooShort: "The message is too short.",
    messageTooLong: "The message is too long.",
  },
  es: {
    botFound: "Got a bot in here.",
    checkboxAccepted: "Please accept the privacy policy and legal notice to continue.",
    checkboxValue: "The consent value was not provided.",
    invalidDateSent: "The date sent is invalid.",
    nameShort: "The name is too short.",
    invalidEmail: "The email received is invalid.",
    messageTooShort: "The message is too short.",
    messageTooLong: "The message is too long.",
  },
};

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
};

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

  const sendFrom = locale === "en" ? process.env.EMAIL_FROM_EN : process.env.EMAIL_FROM_ES;

  const origin = new URL(event.headers.origin);
  const letMeIn = origin.hostname === "localhost" || origin.hostname === "www.danilucaci.com";

  if (!letMeIn) {
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
    ow(consentcheckboxvalue, STATUS_MESSAGES[locale].checkboxValue, ow.string.minLength(10));
    ow(acceptsconsentcheckbox, STATUS_MESSAGES[locale].checkboxAccepted, ow.boolean.true);
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
    ow(email, STATUS_MESSAGES[locale].invalidEmail, validEmail);
    ow(fullname, STATUS_MESSAGES[locale].nameShort, ow.string.minLength(2));
    ow(datesent, STATUS_MESSAGES[locale].invalidDateSent, ow.string.date);
    ow(message, STATUS_MESSAGES[locale].messageTooShort, ow.string.minLength(2));
    ow(message, STATUS_MESSAGES[locale].messageTooLong, ow.string.maxLength(800));
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
  const newDate = new Date().toISOString();
  const hoursDiff = differenceInHours(datesent, newDate);
  if (hoursDiff > 1) {
    console.error("Date sent hour validation error: ", hoursDiff);
    return {
      statusCode: 500,
      body: STATUS_MESSAGES[locale].invalidDateSent,
      headers,
    };
  }

  // Send it to me in a spanish local time
  const formattedDate = format(datesent, "dddd, DD MMMM YYYY, HH:mm", { locale: esLocale });

  let mailTemplate = "";
  let textTemplate = "";

  try {
    mailTemplate = await notifyContact(
      fullname,
      email,
      message,
      acceptsconsentcheckbox,
      consentcheckboxvalue,
      formattedDate,
    );
  } catch (error) {
    return {
      statusCode: 500,
      body: `Error Templating the Email: ${error}`,
      headers,
    };
  }

  try {
    textTemplate = await notifyContactText(
      fullname,
      email,
      message,
      acceptsconsentcheckbox,
      consentcheckboxvalue,
      formattedDate,
    );
  } catch (error) {
    return {
      statusCode: 500,
      body: `Error Templating the Text for the Email: ${error}`,
      headers,
    };
  }

  const emailData = {
    from: sendFrom,
    to: process.env.EMAIL_NOTIFY_ME,
    subject: "danilucaci.com: New Contact Submission.",
    text: textTemplate,
    html: mailTemplate,
  };

  try {
    console.log("Sending email...");
    await transporter.verify();
    await transporter.sendMail(emailData);
    console.log("Email Sent!");
  } catch (error) {
    console.error("Email Not Sent!", error.message);

    return Promise.reject({
      statusCode: 500,
      body: error.message,
      headers,
    });
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
    headers,
  };
};
