// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
// "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
module.exports = {
  env: {
    browser: 2,
    es6: 2,
  },
  extends: "airbnb",
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["html", "import", "react", "jsx-a11y", "markdown"],
  rules: {
    indent: ["error", 1],
    "react/jsx-indent": [1, 1],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "jsx-a11y/no-noninteractive-element-interactions": [
      "error",
      {
        handlers: [
          "onClick",
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp",
        ],
      },
    ],
    "lines-around-comment": [
      "0",
      {
        beforeBlockComment: 1,
        afterBlockComment: 1,
        beforeLineComment: 1,
        afterLineComment: 1,
        allowBlockStart: 1,
        allowBlockEnd: 1,
        allowObjectStart: 1,
        allowObjectEnd: 1,
        allowArrayStart: 1,
        allowArrayEnd: 1,
      },
    ],
    "jsx-a11y/click-events-have-key-events": [0],
    "linebreak-style": [1, "unix"],
    quotes: [1, "double"],
    semi: [1, "always"],
    "no-console": 0,
    "wrap-iife": 0,
    "space-before-function-paren": 0,
    "func-names": 0,
    "arrow-parens": 0,
    "no-use-before-define": 0,
    "no-unused-vars": 0,
    "no-undef": ["error"],
    beforeLineComment: 1,
    "no-inline-comments": 1,
    "no-trailing-spaces": 1,
    "no-multiple-empty-lines": 1,
    "space-in-parens": 1,
    "spaced-comment": 0,
  },
};
