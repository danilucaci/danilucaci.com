const admin = require("firebase-admin");

const config = require("../config/config");

admin.initializeApp({
  credential: admin.credential.cert(config.firebase.certConfig),
});

const auth = admin.auth();

function verifyIdToken() {
  return auth.verifyIdToken;
}

module.exports = {
  verifyIdToken: verifyIdToken,
};
