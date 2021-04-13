const db = require("../models");
const { normalizeDBQuery } = require("../utils/normalize-db-query");

class MessageRepository {
  create(options) {
    return normalizeDBQuery(db.Message.create(options));
  }
}

module.exports = {
  MessageRepository: new MessageRepository(),
};
