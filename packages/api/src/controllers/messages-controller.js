const { UserRepo, MessageRepo } = require("../repositories");
const logger = require("../services/logger-service");
const emailService = require("../services/email-service");

const {
  getErrorMessages,
} = require("../services/email-service/email-service-helpers");

async function contact(req, res, next) {
  const { uid } = req.user;

  const {
    email,
    fullName,
    message,
    consentAccepted,
    consentValue,
    dateSent,
    locale,
  } = req.body;

  let userData = null;

  try {
    const { data: prevUserData, error: prevUserError } =
      await UserRepo.findByEmail(email);

    if (prevUserError) {
      logger.error(prevUserError);
      return res.status(400).send({
        data: {
          message: null,
          email: null,
        },
        error: `Failed to fetch the user by email.`,
      });
    }

    if (prevUserData) {
      userData = prevUserData;
    } else {
      const { data: newUserData, error: newUserError } = await UserRepo.create({
        firebaseUID: uid,
        email: email,
        fullName: fullName,
      });

      if (newUserError) {
        logger.error(newUserError);
        return res.status(400).send({
          data: {
            message: null,
            email: null,
          },
          error: `Failed to create a new user.`,
        });
      }

      userData = newUserData;
    }

    const { error: newMessageError } = await MessageRepo.create({
      user: userData._id,
      message: message,
      consentAccepted: consentAccepted,
      consentValue: consentValue,
      dateSent: dateSent,
      locale: locale,
    });

    if (newMessageError) {
      logger.error(newMessageError);
      return res.status(400).send({
        data: {
          message: null,
          email: null,
        },
        error: `Failed to create the message.`,
      });
    }

    try {
      await emailService.sendEmail(req.body);

      res.status(201).send({
        data: {
          message: "Ok",
          email: "Ok",
        },
        error: null,
      });
    } catch (error) {
      const errorMessages = getErrorMessages(locale);
      logger.error("Failed to send the email", error);

      return res.status(200).send({
        data: {
          message: "Ok",
          email: null,
        },
        error: errorMessages.generic,
      });
    }
  } catch (error) {
    next(error);
  }
}

function ping(req, res) {
  const { message } = req.body || {};

  if (message === "ping") {
    return res.status(200).send({
      data: {
        message: "pong",
      },
      error: null,
    });
  }

  return res.status(400).send({
    data: null,
    error: "Bad request",
  });
}

module.exports = {
  contact: contact,
  ping: ping,
};
