const { verifyAuthToken } = require("../services/auth/verify-auth-token");
const { getAuthToken } = require("../services/auth/get-auth-token");
const { login } = require("../services/auth/login");
const { logout } = require("../services/auth/logout");

async function authMiddleware(req, res, next) {
  try {
    const bearerToken = await getAuthToken(req.headers);
    const userClaims = await verifyAuthToken(bearerToken);

    login(req, userClaims);

    next();
  } catch (error) {
    logout();

    return res.status(401).send({
      data: null,
      error: "Unauthorized",
    });
  }
}

module.exports = {
  authMiddleware: authMiddleware,
};
