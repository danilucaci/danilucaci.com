const Joi = require("joi");

function validateBotField(botField) {
  const schema = Joi.string().required().valid("");
  return schema.validateAsync(botField);
}

function validateCheckboxValue(consentValue) {
  const schema = Joi.string()
    .required()
    .min(10)
    .valid(
      "He leído y acepto el aviso legal y la política de privacidad.",
      "I have read and accept the legal notice and the privacy policy.",
    );
  return schema.validateAsync(consentValue);
}

function validateCheckboxActive(consentAccepted) {
  const schema = Joi.boolean().required().valid(true);
  return schema.validateAsync(consentAccepted);
}

function validateEmail(email) {
  const schema = Joi.string().required().email();
  return schema.validateAsync(email);
}

function validateFullName(fullName) {
  const schema = Joi.string().required().min(2);
  return schema.validateAsync(fullName);
}

function validateDate(date) {
  const schema = Joi.string().required().isoDate();
  return schema.validateAsync(date);
}

function validateMessageMinLength(message) {
  const schema = Joi.string().required().min(2);
  return schema.validateAsync(message);
}

function validateMessageMaxLength(message) {
  const schema = Joi.string().required().max(800);
  return schema.validateAsync(message);
}

function validateLocale(locale) {
  const schema = Joi.string().required().min(2).max(2).valid("en", "es");
  return schema.validateAsync(locale);
}

module.exports = {
  validateBotField: validateBotField,
  validateCheckboxValue: validateCheckboxValue,
  validateCheckboxActive: validateCheckboxActive,
  validateEmail: validateEmail,
  validateFullName: validateFullName,
  validateDate: validateDate,
  validateMessageMinLength: validateMessageMinLength,
  validateMessageMaxLength: validateMessageMaxLength,
  validateLocale: validateLocale,
};
