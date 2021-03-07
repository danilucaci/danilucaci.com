const { verifyAuthToken } = require("./verify-auth-token");
const { getAuthToken } = require("./get-auth-token");
const { login } = require("./login");
const { logout } = require("./logout");

module.exports = {
  verifyAuthToken: verifyAuthToken,
  getAuthToken: getAuthToken,
  login: login,
  logout: logout,
};
