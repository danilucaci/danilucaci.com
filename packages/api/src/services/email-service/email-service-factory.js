const { emailTransporter } = require("./email-transporter");
const { makeSendEmail } = require("./make-send-email");

const { config } = require("../../config");
const { senderEmail, senderPassword, service } = config.email;

module.exports = {
  sendEmail: makeSendEmail(
    emailTransporter(service, senderEmail, senderPassword),
  ),
};
