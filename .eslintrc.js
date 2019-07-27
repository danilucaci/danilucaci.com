// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
// "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
module.exports = {
  env: {
    browser: 2,
    es6: 2,
    "jest/globals": true,
  },
  extends: "airbnb",
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  plugins: [
    "html",
    "import",
    "react",
    "jsx-a11y",
    "markdown",
    "react-hooks",
    "jest",
  ],
  rules: {
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,
    "jest/no-disabled-tests": 1,
    "jest/no-focused-tests": 2,
    "jest/no-identical-title": 2,
    "jest/prefer-to-have-length": 1,
    "jest/valid-expect": 2,
    indent: ["error", 1],
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild",
        ],
        ignoreComments: false,
      },
    ],
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
      0,
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
    "no-unused-vars": 1,
    "no-undef": 2,
    "no-inline-comments": 0,
    "no-trailing-spaces": 1,
    "no-multiple-empty-lines": 1,
    "space-in-parens": 1,
    "spaced-comment": 0,
    "prefer-destructuring": 0,
    "array-callback-return": 0,
    "no-unused-": 0,
    "prefer-template": 0,
    "dot-notation": 0,
    "no-underscore-dangle": 0,
    "template-curly-spacing": 0,
    "prefer-const": 0,
    "no-lonely-if": 0,
    "import/prefer-default-export": 0,
    "object-shorthand": 0,
    "react/destructuring-assignment": 0,
  },
};
