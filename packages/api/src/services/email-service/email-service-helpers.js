/**
 * Returns the formatted dated based on the locale received
 * @param {Date} dateSent The date in ISO format
 * @param {String} defaultDateLocale The default locale
 * @returns {Date} The formatted date in the current locale
 */
function formatDate(
  dateSent = new Date().toISOString(),
  defaultDateLocale = "en",
) {
  const dateISOString = new Date(dateSent);

  const dateOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: "Europe/Madrid",
  };

  const formattedDate = dateISOString.toLocaleDateString(
    defaultDateLocale,
    dateOptions,
  );

  return formattedDate;
}

/**
 * Returns the localized error messages used when sending the email
 * @param {String} locale The current locale
 * @returns {Object} messages The messages of the current locale
 */
function getErrorMessages(locale = "en") {
  const messages = {
    en: {
      generic:
        "Something went wrong while sending the message. Please try again.",
    },
    es: {
      generic:
        "Algo ha salido mal mientras se enviaba el mensaje. Por favor intentalo de nuevo.",
    },
  };

  return messages[locale];
}

/**
 * Returns the email transporter options needed
 * @param {Object} options The options used in the email transporter
 * @returns {Object} The configured email transporter object
 */
function getEmailOptions({
  message,
  fullName,
  email,
  formattedDate,
  consentAccepted,
  locale,
}) {
  return {
    from: '"Dani Lucaci" <danilucaci@gmail.com>',
    to: "danilucaci@gmail.com",
    subject: `New contact message on danilucaci.com`,
    text: message,
    html: `
    <h4>From</h4>
    <p>${fullName}</p>
    <p>${email}</p>
    <h4>Message</h4>
    <p>${message}</p>
    <h4>Date sent</h4>
    <p>${formattedDate}</p>
    <h4>Consent accepted?</h4>
    <p>${consentAccepted}</p>
    <h4>Locale</h4>
    <p>${locale}</p>`,
  };
}

module.exports = {
  formatDate: formatDate,
  getErrorMessages: getErrorMessages,
  getEmailOptions: getEmailOptions,
};
