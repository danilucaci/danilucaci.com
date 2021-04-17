const { formatDate, getEmailOptions } = require("./email-service-helpers");

const { config } = require("../../config");
const { defaultDateLocale } = config.email;

/**
 * Email sender service.
 * @param {Object} emailData The data used in the email body
 * @param {Function} emailTransporterService The email transporter service
 * @returns {Promise} The promise of the email transporter service
 */
async function sendEmail(emailData, emailTransporterService) {
  const {
    fullName,
    email,
    message,
    consentAccepted,
    dateSent,
    locale,
  } = emailData;

  const formattedDate = formatDate(dateSent, defaultDateLocale);
  const emailOptions = getEmailOptions({
    message,
    fullName,
    email,
    formattedDate,
    consentAccepted,
    locale,
  });

  return emailTransporterService.sendMail(emailOptions);
}

module.exports = {
  sendEmail: sendEmail,
};
