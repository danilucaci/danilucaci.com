module.exports = {
  transform: {
    "^.+\\.jsx?$": "<rootDir>/jest-preprocess.js",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test))\\.([tj]sx?)$",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file-mock.js",
  },
  testPathIgnorePatterns: ["node_modules", "\\.cache", "<rootDir>.*/public"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  globals: {
    __PATH_PREFIX__: "",
  },
  testEnvironmentOptions: {
    url: "http://localhost",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  setupFiles: ["<rootDir>/loadershim.js", "<rootDir>/jest-env-vars.js"],
  roots: ["<rootDir>/src/", "<rootDir>/__mocks__/"],
};
