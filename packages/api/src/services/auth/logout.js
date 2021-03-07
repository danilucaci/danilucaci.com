/**
 * Sets the request.user object to null
 *
 * @param {Request} req Request object
 *
 * req.user = null
 */
function logout(req = {}) {
  req.user = null;
}

module.exports = {
  logout: logout,
};
