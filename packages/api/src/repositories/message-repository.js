const db = require("../models");
const { normalizeDBQuery } = require("../db/normalize-db-query");

class MessageRepository {
  create(options) {
    return normalizeDBQuery(db.Message.create(options));
  }
}

module.exports = {
  MessageRepository: new MessageRepository(),
};
