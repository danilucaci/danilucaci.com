// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
// "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
module.exports = {
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "plugin:node/recommended",
  ],
  plugins: ["jest", "import", "prettier"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  settings: {
    jest: {
      version: 26,
    },
  },
  env: {
    commonjs: true,
    node: true,
    "jest/globals": true,
  },
  rules: {
    "prefer-destructuring": "off",
    "object-shorthand": "off",
    "arrow-body-style": "off",
    "no-underscore-dangle": "off",
  },
};
