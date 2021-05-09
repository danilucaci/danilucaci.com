const logger = require("./logger");

module.exports = {
  warn: logger.warn,
  info: logger.info,
  error: logger.error,
  trace: logger.trace,
  debug: logger.debug,
};
