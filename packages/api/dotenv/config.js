const path = require("path");
const dotenv = require("dotenv");

const ENV_PATH = path.resolve(__dirname, "../.env.development");

module.exports = () => {
  dotenv.config({
    path: ENV_PATH,
  });
};
