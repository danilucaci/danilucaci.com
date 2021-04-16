const mongoose = require("mongoose");

const { config } = require("../config");

function connect() {
  console.log(config.db.url);

  return mongoose.connect(config.db.url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
}

module.exports = {
  connect: connect,
};
