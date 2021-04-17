const { sendEmail } = require("./send-email");

function makeSendEmail(emailTransporterService) {
  return function getEmailData(emailData) {
    return sendEmail(emailData, emailTransporterService);
  };
}

module.exports = {
  makeSendEmail: makeSendEmail,
};
