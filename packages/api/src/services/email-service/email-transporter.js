const nodemailer = require("nodemailer");

/**
 * Returns an email transporter
 * @param {String} service The email service provider
 * @param {String} senderEmail The sender email
 * @param {String} senderPassword The sender password
 * @param {Function} emailSender The email sender service
 * @returns {Function}
 */
function emailTransporter(
  service = "",
  senderEmail = "",
  senderPassword = "",
  emailSender = nodemailer,
) {
  return emailSender.createTransport({
    service: service,
    auth: {
      user: senderEmail,
      pass: senderPassword,
    },
  });
}

module.exports = {
  emailTransporter: emailTransporter,
};
