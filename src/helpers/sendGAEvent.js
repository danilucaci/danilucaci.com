import ReactGA from "react-ga";
import * as Sentry from "@sentry/browser";
import PropTypes from "prop-types";

function sendGAEvent(category, action, label, value) {
  const globalWindow = typeof window !== "undefined";

  // Only send if it’s initialized
  if (globalWindow && window._DL_GA_INITIALIZED) {
    try {
      ReactGA.event({
        category,
        action,
        label,
        value,
      });
    } catch (error) {
      console.error(error);
      Sentry.captureException(error);
    }
  }
}

sendGAEvent.propTypes = {
  category: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.number,
};

sendGAEvent.defaultProps = {
  label: undefined,
  value: undefined,
};

export default sendGAEvent;
