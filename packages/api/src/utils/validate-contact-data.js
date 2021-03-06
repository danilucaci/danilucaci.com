const ow = require("ow");

const statusMessages = {
  botFound: "Bot field issue.",
  checkboxAccepted: "The checkbox was not accepted.",
  checkboxValue: "The consent value was not provided.",
  invalidDateSent: "The date sent is invalid.",
  nameShort: "The name is too short.",
  invalidEmail: "The email received is invalid.",
  messageTooShort: "The message is too short.",
  messageTooLong: "The message is too long.",
};

const isValidEmail = ow.string.is((e) => /^.+@.+\..+$/.test(e));

function validateData(req, res, next) {
  try {
    const {
      fullname,
      email,
      message,
      consentAccepted,
      consentValue,
      botfield,
      datesent,
    } = req.body;

    // Filter out bots
    try {
      ow(botfield, statusMessages.botFound, ow.string.empty);
    } catch (error) {
      console.error("Bot field had a value: ", error.message);

      return res.status(401).send({
        data: null,
        error: "Unauthorized",
      });
    }

    // Filter out legal issues
    try {
      ow(consentValue, statusMessages.checkboxValue, ow.string.minLength(10));
      ow(consentAccepted, statusMessages.checkboxAccepted, ow.boolean.true);
    } catch (error) {
      console.error(
        "Legal notice and privacy policy were not accepted.",
        error.message,
      );

      return res.status(451).send({
        data: null,
        error: "Legal notice and privacy policy were not accepted.",
      });
    }

    // Validate inputs
    try {
      ow(email, statusMessages.invalidEmail, isValidEmail);
      ow(fullname, statusMessages.nameShort, ow.string.minLength(2));
      ow(datesent, statusMessages.invalidDateSent, ow.string.date);
      ow(message, statusMessages.messageTooShort, ow.string.minLength(2));
      ow(message, statusMessages.messageTooLong, ow.string.maxLength(800));
    } catch (error) {
      console.error("Form data validation failed: ", error.message);

      return res
        .status(400)
        .send({ data: null, error: `Input validation failed.` });
    }
  } catch (error) {
    console.error("Data validation failed: ", error.message);

    return res.status(400).send({
      data: null,
      error: `Data validation failed.`,
    });
  }

  return next();
}

module.exports = validateData;
