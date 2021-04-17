const path = require("path");

const ENV_PATH = path.resolve(process.cwd(), ".env.development");

require("dotenv").config({
  path: ENV_PATH,
});

const {
  NODE_ENV = "development",
  MONGO_USERNAME = "danilucaci",
  MONGO_PASSWORD = MONGO_USERNAME,
  MONGO_PROJECT_ID = MONGO_USERNAME,
  CLIENT_URL = "http://localhost:8000",
  PORT = 4000,
  EMAIL_USERNAME = "",
  EMAIL_PASSWORD = "",
} = process.env;

const baseConfig = {
  app: {
    port: PORT,
  },
  client: {
    url: CLIENT_URL,
  },
  db: {
    url: `mongodb://localhost:27018/danilucaci-dev`,
  },
  email: {
    senderEmail: EMAIL_USERNAME,
    senderPassword: EMAIL_PASSWORD,
    service: "gmail",
    defaultDateLocale: "es-ES",
  },
};

const config = {
  development: {
    ...baseConfig,
    db: {
      ...baseConfig.db,
    },
  },
  test: {
    ...baseConfig,
    db: {
      ...baseConfig.db,
    },
  },
  production: {
    ...baseConfig,
    db: {
      ...baseConfig.db,
      url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_PROJECT_ID}.mongodb.net/danilucaci?retryWrites=true&w=majority`,
    },
  },
};

module.exports = {
  config: config[NODE_ENV],
};
