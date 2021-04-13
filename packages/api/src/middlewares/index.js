const { authMiddleware } = require("./auth-middleware");
const { errorMiddleware } = require("./error-middleware");
const {
  contactValidationMiddleware,
} = require("./contact-validation-middleware");

module.exports = {
  authMiddleware: authMiddleware,
  errorMiddleware: errorMiddleware,
  contactValidationMiddleware: contactValidationMiddleware,
};
