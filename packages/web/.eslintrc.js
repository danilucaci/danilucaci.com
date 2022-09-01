// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
// "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
module.exports = {
  parser: "@babel/eslint-parser",
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:cypress/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: [
    "prettier",
    "html",
    "react",
    "jsx-a11y",
    "markdown",
    "react-hooks",
    "jest",
    "import",
    "cypress",
  ],
  settings: {
    react: {
      version: "detect",
    },
    jest: {
      version: 28,
    },
  },
  parserOptions: {
    sourceType: "module",
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    "jest/globals": true,
    "cypress/globals": true,
  },
  overrides: [
    {
      files: ["*.spec.js"],
      rules: {
        "jest/expect-expect": 0,
        "jest/valid-expect": 0,
        "jest/valid-expect-in-promise": 0,
      },
    },
    {
      files: ["*.test.js"],
      rules: {
        "react/jsx-no-constructed-context-values": 0,
      },
    },
  ],
  rules: {
    "prettier/prettier": 2,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,
    "jest/no-disabled-tests": 0,
    "jest/no-focused-tests": 2,
    "jest/no-identical-title": 2,
    "jest/prefer-to-have-length": 1,
    "jest/valid-expect": 2,
    "no-inline-comments": 0,
    "spaced-comment": 0,
    "prefer-destructuring": 0,
    "array-callback-return": 0,
    "prefer-template": 0,
    "dot-notation": 0,
    "no-console": 2,
    "no-underscore-dangle": 0,
    "prefer-const": 0,
    "no-lonely-if": 0,
    "no-restricted-exports": ["off", { restrictedNamedExports: ["default"] }],
    "import/prefer-default-export": 0,
    "object-shorthand": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-props-no-spreading": 0,
    "react/state-in-constructor": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
    "react/prop-types": 0,
    "react/forbid-prop-types": [0, { forbid: ["object"] }],
    "no-use-before-define": ["error", { functions: false }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "src/helpers/gatsby-node/createPages.js",
          "src/helpers/tests.js",
          "gatsby-node.js",
          "gatsby-config.js",
          "cypress/**",
          "jest-preprocess.js",
          "jest.setup.js",
          "**/__tests__/**",
        ],
      },
    ],
  },
};
