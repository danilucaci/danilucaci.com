const { logger } = require("../services");

function errorMiddleware(err, req, res, next) {
  logger.debug("Error Handler Middleware: ");
  logger.error(err);

  if (req.headersSent) {
    // When you add a custom error handler,
    // you must delegate to the default Express error handler,
    // when the headers have already been sent to the client:
    return next(err);
  }

  res.status(500).send({
    data: null,
    error: "Something went wrong",
  });
}

module.exports = {
  errorMiddleware: errorMiddleware,
};
