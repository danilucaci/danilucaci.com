import * as Sentry from "@sentry/browser";

export function captureMessage(message, logger = Sentry) {
  logger.captureMessage(message);
}

export function captureException(error, logger = Sentry) {
  logger.captureException(error);
}
