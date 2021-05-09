function getAuthToken(headers = {}) {
  return new Promise(function authTokenHandler(resolve, reject) {
    if (headers.authorization && headers.authorization.startsWith("Bearer ")) {
      // Bearer authorization header: `Bearer jwt...`
      const bearerToken = headers.authorization.substr(7);

      resolve(bearerToken);
    }

    reject(new Error("Missing authorization header"));
  });
}

module.exports = {
  getAuthToken: getAuthToken,
};
