module.exports = {
  "packages/*/src/**/*.js": [
    "docker-compose exec -T web yarn run test:related",
    "docker-compose exec -T api yarn run test:related",
  ],
  "*.js": [
    "docker-compose exec -T web yarn run lint:js",
    "docker-compose exec -T api yarn run lint:js",
  ],
  "*.{js,json,css,yml,yaml,toml,md,mdx}": [
    "docker-compose exec -T web yarn run lint:format:check",
    "docker-compose exec -T api yarn run lint:format:check",
  ],
};
