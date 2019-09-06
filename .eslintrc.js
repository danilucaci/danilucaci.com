// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
// "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
module.exports = {
  extends: [
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/standard",
  ],
  plugins: [
    "prettier",
    "html",
    "react",
    "jsx-a11y",
    "markdown",
    "react-hooks",
    "jest",
  ],
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: 2,
    es6: 2,
    "jest/globals": true,
  },
  rules: {
    "prettier/prettier": 2,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,
    "jest/no-disabled-tests": 1,
    "jest/no-focused-tests": 2,
    "jest/no-identical-title": 2,
    "jest/prefer-to-have-length": 1,
    "jest/valid-expect": 2,
    "no-console": 0,
    "no-inline-comments": 0,
    "spaced-comment": 0,
    "prefer-destructuring": 0,
    "array-callback-return": 0,
    "no-unused-": 0,
    "prefer-template": 0,
    "dot-notation": 0,
    "no-underscore-dangle": 0,
    "prefer-const": 0,
    "no-lonely-if": 0,
    "import/prefer-default-export": 0,
    "object-shorthand": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-props-no-spreading": 0,
    "react/state-in-constructor": 0,
  },
};
