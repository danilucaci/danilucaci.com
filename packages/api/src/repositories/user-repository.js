const db = require("../models");
const { normalizeDBQuery } = require("../utils/normalize-db-query");

class UserRepository {
  create(options) {
    return normalizeDBQuery(db.User.create(options));
  }

  findByEmail(email = "") {
    return normalizeDBQuery(
      db.User.findOne(
        {
          email: email,
        },
        "-__v",
      ),
    );
  }
}

module.exports = {
  UserRepository: new UserRepository(),
};
