const { app } = require("./server");
const { config } = require("./config");
const logger = require("./services/logger-service");
const { connect } = require("./db");

if (!config.app.port) {
  throw new Error("App config is invalid");
}

connect().then(async () => {
  logger.info(`DB connected`);

  app.listen(config.app.port, () => {
    logger.info(`Server running at http://localhost:${config.app.port}`);
  });
});
