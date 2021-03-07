/**
 * Adds the user claims to the request object
 *
 * @param {Request} req Request object
 * @param {Object} userClaims {email: String, uid: String}
 *
 * req.user = { email: userClaims.email, uid: userClaims.uid }
 */
function login(req = {}, userClaims = {}) {
  const { email, uid } = userClaims;

  if (typeof email !== "string" || typeof uid !== "string") {
    throw new Error("Missing authorization header");
  }

  req.user = {
    email: email,
    uid: uid,
  };
}

module.exports = {
  login: login,
};
