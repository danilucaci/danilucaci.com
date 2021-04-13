const mongoose = require("mongoose");

function disconnect() {
  return mongoose.disconnect();
}

module.exports = {
  disconnect: disconnect,
};
