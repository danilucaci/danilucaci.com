module.exports = {
  "src/**/*.js": ["npm run lint:js", "npm run test:related"],
  "*.{md,mdx,css}": ["npm run lint:prettier:write"],
};
