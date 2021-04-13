const { logger } = require("../services");
const {
  validateBotField,
  validateCheckboxValue,
  validateCheckboxActive,
  validateEmail,
  validateFullName,
  validateDate,
  validateMessageMinLength,
  validateMessageMaxLength,
  validateLocale,
} = require("../utils/contact-validation");

async function contactValidationMiddleware(req, res, next) {
  const {
    fullName,
    email,
    message,
    consentAccepted,
    consentValue,
    botField,
    dateSent,
    locale,
  } = req.body;

  // Filter out bots
  try {
    await validateBotField(botField);
  } catch (error) {
    logger.error("Bot field had a value: ", error.message);
    return res.status(401).send({
      data: null,
      error: "Unauthorized",
    });
  }

  // Filter out gdpr issues
  try {
    await validateCheckboxValue(consentValue);
    await validateCheckboxActive(consentAccepted);
  } catch (error) {
    logger.error(
      "Legal notice and privacy policy were not accepted.",
      error.message,
    );
    return res.status(451).send({
      data: null,
      error: "Legal notice and privacy policy were not accepted.",
    });
  }

  try {
    await validateEmail(email);
  } catch (error) {
    logger.error("Email validation failed: ", error.message);
    return res.status(400).send({
      data: null,
      error: error.message.replace('"value"', "The email"),
    });
  }

  try {
    await validateFullName(fullName);
  } catch (error) {
    logger.error("Full name validation failed: ", error.message);
    return res.status(400).send({
      data: null,
      error: error.message.replace('"value"', "The full name"),
    });
  }

  try {
    await validateDate(dateSent);
  } catch (error) {
    logger.error("Date validation failed: ", error.message);
    return res.status(400).send({
      data: null,
      error: error.message.replace('"value"', "The date"),
    });
  }

  try {
    await validateMessageMinLength(message);
    await validateMessageMaxLength(message);
  } catch (error) {
    logger.error("Message validation failed: ", error.message);
    return res.status(400).send({
      data: null,
      error: error.message.replace('"value"', "The message"),
    });
  }

  try {
    await validateLocale(locale);
  } catch (error) {
    logger.error("Locale validation failed: ", error.message);
    return res.status(400).send({
      data: null,
      error: error.message.replace('"value"', "The locale"),
    });
  }

  next();
}

module.exports = {
  contactValidationMiddleware: contactValidationMiddleware,
};
