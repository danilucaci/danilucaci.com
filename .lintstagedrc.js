const path = require("path");

const WEB_PATH = "web";
const API_PATH = "api";

const LINT_JS_CMD = "lint:js";
const LINT_FORMAT_CHECK_CMD = "lint:format:check";
const TEST_RELATED_CMD = "test:related";

const DOCKER_CMD = "docker-compose exec -T";
const NPM_CLIENT = "yarn";
const PACKAGES_PATH = "packages";

function makeExecCommand({
  packagesPath = "packages",
  appPath = "web",
  dockerCmd = "docker-compose exec -T",
  npmClient = "yarn",
  script = "test:related",
} = {}) {
  return function lintStagedThunk(absolutePaths) {
    const cwd = process.cwd();

    const relativePaths = absolutePaths
      .map((file) =>
        path.relative(cwd, file).replace(`${packagesPath}/${appPath}/`, ""),
      )
      .join(" ");

    console.log({ relativePaths: relativePaths });

    return `${dockerCmd} ${appPath} ${npmClient} run ${script} ${relativePaths}`;
  };
}

module.exports = {
  [`${PACKAGES_PATH}/${WEB_PATH}/src/**/*.js`]: makeExecCommand({
    packagesPath: PACKAGES_PATH,
    appPath: WEB_PATH,
    dockerCmd: DOCKER_CMD,
    npmClient: NPM_CLIENT,
    script: TEST_RELATED_CMD,
  }),
  [`${PACKAGES_PATH}/${API_PATH}/src/**/*.js`]: makeExecCommand({
    packagesPath: PACKAGES_PATH,
    appPath: API_PATH,
    dockerCmd: DOCKER_CMD,
    npmClient: NPM_CLIENT,
    script: TEST_RELATED_CMD,
  }),
  [`${PACKAGES_PATH}/${WEB_PATH}/**/*.js`]: makeExecCommand({
    packagesPath: PACKAGES_PATH,
    appPath: WEB_PATH,
    dockerCmd: DOCKER_CMD,
    npmClient: NPM_CLIENT,
    script: LINT_JS_CMD,
  }),
  [`${PACKAGES_PATH}/${API_PATH}/**/*.js`]: makeExecCommand({
    packagesPath: PACKAGES_PATH,
    appPath: API_PATH,
    dockerCmd: DOCKER_CMD,
    npmClient: NPM_CLIENT,
    script: LINT_JS_CMD,
  }),
  [`${PACKAGES_PATH}/${WEB_PATH}/**/*.{js,json,css,yml,yaml,toml,md,mdx}`]: makeExecCommand(
    {
      packagesPath: PACKAGES_PATH,
      appPath: WEB_PATH,
      dockerCmd: DOCKER_CMD,
      npmClient: NPM_CLIENT,
      script: LINT_FORMAT_CHECK_CMD,
    },
  ),
  [`${PACKAGES_PATH}/${API_PATH}/**/*.{js,json,yml,yaml,md}`]: makeExecCommand({
    packagesPath: PACKAGES_PATH,
    appPath: API_PATH,
    dockerCmd: DOCKER_CMD,
    npmClient: NPM_CLIENT,
    script: LINT_FORMAT_CHECK_CMD,
  }),
};
