const db = require("../models");
const { normalizeDBQuery } = require("../db/normalize-db-query");

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
      )
        .lean()
        .exec(),
    );
  }

  findMany(options) {
    return normalizeDBQuery(db.User.find(options).lean().exec());
  }
}

module.exports = {
  UserRepository: new UserRepository(),
};
