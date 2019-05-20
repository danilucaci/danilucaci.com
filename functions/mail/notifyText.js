function notifyContactText(
  fullname = "",
  email = "",
  message = "",
  acceptsconsentcheckbox = false,
  consentcheckboxvalue = "",
  formattedDate = "",
) {
  return `
-----------------------------------
New Message
danilucaci.com Contact Form Notification
-----------------------------------
From:
-----------------------------------
${email}
${fullname}
${formattedDate}
-----------------------------------
Message Received:
-----------------------------------
${message}
-----------------------------------
Accepted Legal Notice and Privacy Policy?
${acceptsconsentcheckbox}
-----------------------------------
Legal Notice and Privacy Policy Message Accepted:
${consentcheckboxvalue}
-----------------------------------
  `;
}

module.exports = { notifyContactText };
