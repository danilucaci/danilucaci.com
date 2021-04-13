const { UserRepo, MessageRepo } = require("../repositories");
const { logger } = require("../services");

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
    const {
      data: prevUserData,
      error: prevUserError,
    } = await UserRepo.findByEmail(email);

    if (prevUserError) {
      logger.error(prevUserError);
      return res.status(400).send({
        data: null,
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
          data: null,
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
        data: null,
        error: `Failed to create the message.`,
      });
    }

    res.status(201).send({
      data: "Message created.",
      error: null,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  contact: contact,
};
