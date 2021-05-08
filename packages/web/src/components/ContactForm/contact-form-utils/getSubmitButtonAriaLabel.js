function getSubmitButtonAriaLabel(messageSent = false, isSubmitting = false) {
  if (messageSent) {
    return "Message sent";
  }

  if (isSubmitting) {
    return "Sending message";
  }

  return "Send message";
}

export default getSubmitButtonAriaLabel;
