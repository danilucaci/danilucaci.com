module.exports = {
  "src/**/*.js": ["npm run test:related"],
  "*.js": ["npm run lint:js"],
  "*.{js,json,css,yml,yaml,toml,md,mdx}": ["npm run lint:format:check"],
};
