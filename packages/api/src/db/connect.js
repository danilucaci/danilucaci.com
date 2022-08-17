const mongoose = require("mongoose");

const { config } = require("../config");

function connect() {
  return mongoose.connect(config.db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = {
  connect: connect,
};
