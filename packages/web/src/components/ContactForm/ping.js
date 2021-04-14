import axios from "axios";
import * as Sentry from "@sentry/browser";

import GA_EVENTS from "../../helpers/gaEvents";

function makePing(
  httpClient = axios,
  errorService = Sentry,
  ANALYTICS_EVENTS = GA_EVENTS,
) {
  return async function ping({
    userToken,
    mounted,
    sendContactFormEvent,
    setPingSent,
  } = {}) {
    try {
      const response = await httpClient.post(
        process.env.GATSBY_FIREBASE_FUNCTIONS_CONTACT_PING_URL,
        { message: "ping" },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        },
      );

      const { data: { error } = {} } = response;

      if (mounted) {
        sendContactFormEvent({
          action: ANALYTICS_EVENTS.contactForm.actions.ping.name,
          label: ANALYTICS_EVENTS.contactForm.actions.ping.labels.success,
        });
        setPingSent(true);
      }

      if (error) {
        sendContactFormEvent({
          action: ANALYTICS_EVENTS.contactForm.actions.ping.name,
          label: ANALYTICS_EVENTS.contactForm.actions.ping.labels.failed,
        });
        errorService.captureMessage("Contact Form ping failed");
        setPingSent(true);
      }
    } catch (error) {
      sendContactFormEvent({
        action: ANALYTICS_EVENTS.contactForm.actions.ping.name,
        label: ANALYTICS_EVENTS.contactForm.actions.ping.labels.error,
      });
      errorService.captureException(error);
      setPingSent(true);
    }
  };
}

export default makePing;
