import { useEffect, useState } from "react";

import { sendContactFormEvent } from "../../helpers/ga";
import { errorLoggerService } from "../../services";
import GA_EVENTS from "../../helpers/gaEvents";
import * as api from "../../api";

function Ping({ touched, userToken }) {
  const [pingSent, setPingSent] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function pingApi() {
      try {
        const response = await api.ping(userToken);

        const { error } = response;

        if (mounted) {
          sendContactFormEvent({
            action: GA_EVENTS.contactForm.actions.ping.name,
            label: GA_EVENTS.contactForm.actions.ping.labels.success,
          });
          setPingSent(true);
        }

        if (error) {
          sendContactFormEvent({
            action: GA_EVENTS.contactForm.actions.ping.name,
            label: GA_EVENTS.contactForm.actions.ping.labels.failed,
          });
          errorLoggerService.captureMessage("Contact Form ping failed");
          setPingSent(true);
        }
      } catch (error) {
        sendContactFormEvent({
          action: GA_EVENTS.contactForm.actions.ping.name,
          label: GA_EVENTS.contactForm.actions.ping.labels.error,
        });
        errorLoggerService.captureException(error);
        setPingSent(true);
      }
    }

    if (
      !pingSent &&
      userToken &&
      (touched.email ||
        touched.fullName ||
        touched.message ||
        touched.consentAccepted)
    ) {
      pingApi();
    }

    return () => {
      mounted = false;
    };
  }, [
    pingSent,
    userToken,
    touched.consentAccepted,
    touched.email,
    touched.fullName,
    touched.message,
  ]);

  return null;
}

export default Ping;
