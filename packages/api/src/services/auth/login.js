const { signOut } = require("./sign-out");

/**
 * Adds the user claims to the request object
 *
 * @param {Request} req Request object
 * @param {Object} userClaims {uid: String}
 *
 * req.user = { uid: userClaims.uid }
 * req.signOut = auth.signOut
 */
function login(req = {}, userClaims = {}) {
  const { uid } = userClaims;

  if (typeof uid !== "string") {
    throw new Error("Missing user claims");
  }

  req.user = {
    uid: uid,
  };

  req.signOut = signOut;
}

module.exports = {
  login: login,
};
