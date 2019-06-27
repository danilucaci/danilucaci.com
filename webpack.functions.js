let webpack = require("webpack");

// fix for using node-mailjet issues with formidable and webpack
module.exports = {
  plugins: [new webpack.DefinePlugin({ "global.GENTLY": false })],
};
