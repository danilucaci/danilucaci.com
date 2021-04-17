const auth = require("./auth");
const logger = require("./logger");
const emailService = require("./email-service");

module.exports = {
  auth: auth,
  logger: logger,
  emailService: emailService,
};
