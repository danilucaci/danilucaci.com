require("dotenv").config();
const logger = require("loglevel");

logger.enableAll();

const {
  NODE_ENV = "development",
  MONGO_DB_URL_PRODUCTION,
  MONGO_DB_URL_DEVELOPMENT,
  MONGO_DB_URL_TEST,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  PORT = 4000,
  FB_CERT_TYPE,
  FB_CERT_PROJECT_ID,
  FB_CERT_PRIVATE_KEY_ID,
  FB_CERT_PRIVATE_KEY,
  FB_CERT_CLIENT_EMAIL,
  FB_CERT_CLIENT_ID,
  FB_CERT_AUTH_URI,
  FB_CERT_TOKEN_URI,
  FB_CERT_AUTH_PROVIDER_X_509_CERT_URL,
  FB_CERT_CLIENT_X_509_CERT_URL,
} = process.env;

const baseConfig = {
  app: {
    PORT: PORT || 4000,
  },
  client: {
    URL: process.env.CLIENT_URL || "http://localhost:3000",
  },
  jwt: {
    secret: JWT_SECRET,
  },
  logger: {
    warn: logger.warn,
    info: logger.info,
    error: logger.error,
    trace: logger.trace,
    debug: logger.debug,
  },
  db: {
    user: MONGO_USERNAME,
    password: MONGO_PASSWORD,
  },
  firebase: {
    certConfig: {
      type: FB_CERT_TYPE,
      project_id: FB_CERT_PROJECT_ID,
      private_key_id: FB_CERT_PRIVATE_KEY_ID,
      private_key: FB_CERT_PRIVATE_KEY.replace(/\\n/gm, "\n"),
      client_email: FB_CERT_CLIENT_EMAIL,
      client_id: FB_CERT_CLIENT_ID,
      auth_uri: FB_CERT_AUTH_URI,
      token_uri: FB_CERT_TOKEN_URI,
      auth_provider_x509_cert_url: FB_CERT_AUTH_PROVIDER_X_509_CERT_URL,
      client_x509_cert_url: FB_CERT_CLIENT_X_509_CERT_URL,
    },
  },
};

const config = {
  development: {
    ...baseConfig,
    db: {
      ...baseConfig.db,
      url: MONGO_DB_URL_DEVELOPMENT,
    },
  },
  test: {
    ...baseConfig,
    db: {
      ...baseConfig.db,
      url: MONGO_DB_URL_TEST,
    },
  },
  production: {
    ...baseConfig,
    db: {
      ...baseConfig.db,
      url: MONGO_DB_URL_PRODUCTION,
    },
  },
};

module.exports = config[NODE_ENV];
