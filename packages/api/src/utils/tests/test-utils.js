// eslint-disable-next-line node/no-unpublished-require
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

const { logger } = require("../../services/logger-service");

async function makeMongoTestServer(Server = MongoMemoryServer) {
  const mongoTestServer = new Server();

  return mongoTestServer;
}

function makeTestServerMethods(
  makeMongoServer = makeMongoTestServer,
  odm = mongoose,
) {
  let mongoTestServer = null;
  let serverURI = null;

  const mongoOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };

  async function _startTestServer() {
    mongoTestServer = await makeMongoServer();
    serverURI = await mongoTestServer.getUri();
  }

  async function _connectTestServer() {
    try {
      await odm.connect(serverURI, mongoOptions);

      odm.connection.on("error", (error) => {
        if (error.message.code === "ETIMEDOUT") {
          logger.debug(error);
          odm.connect(serverURI, mongoOptions);
        }

        logger.debug(error);
      });
    } catch (error) {
      logger.error(error);
    }
  }

  async function startTestServer() {
    await _startTestServer();
    await _connectTestServer();
  }

  async function clearUsersCollection() {
    await odm.connection.db.collection("users").deleteMany({});
  }

  async function clearMessagesCollection() {
    await odm.connection.db.collection("messages").deleteMany({});
  }

  async function stopTestServer() {
    await odm.disconnect();
    await mongoTestServer.stop();
  }

  return {
    startTestServer: startTestServer,
    stopTestServer: stopTestServer,
    clearUsersCollection: clearUsersCollection,
    clearMessagesCollection: clearMessagesCollection,
  };
}

module.exports = {
  makeMongoTestServer: makeMongoTestServer,
  makeTestServerMethods: makeTestServerMethods,
};
