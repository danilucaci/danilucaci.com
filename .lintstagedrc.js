const path = require("path");

const WEB_PATH = "web";
const API_PATH = "api";

const LINT_JS_CMD = "lint:js";
const LINT_FORMAT_CHECK_CMD = "lint:format:check";
const TEST_RELATED_CMD = "test:related";

function makeDockerComposeExecCommand(
  packageName = WEB_PATH,
  script = TEST_RELATED_CMD,
) {
  return function dockerComposeExecCommandThunk(absolutePaths) {
    const cwd = process.cwd();

    const relativePaths = absolutePaths
      .map((file) =>
        path.relative(cwd, file).replace(`packages/${packageName}/`, ""),
      )
      .join(" ");

    console.log(relativePaths);

    return `docker-compose exec -T ${packageName} yarn run ${script} ${relativePaths}`;
  };
}

module.exports = {
  [`packages/${WEB_PATH}/src/**/*.js`]: makeDockerComposeExecCommand(
    WEB_PATH,
    TEST_RELATED_CMD,
  ),
  [`packages/${API_PATH}/src/**/*.js`]: makeDockerComposeExecCommand(
    API_PATH,
    TEST_RELATED_CMD,
  ),
  [`packages/${WEB_PATH}/**/*.js`]: makeDockerComposeExecCommand(
    WEB_PATH,
    LINT_JS_CMD,
  ),
  [`packages/${API_PATH}/**/*.js`]: makeDockerComposeExecCommand(
    API_PATH,
    LINT_JS_CMD,
  ),
  [`packages/${WEB_PATH}/**/*.{js,json,css,yml,yaml,toml,md,mdx}`]: makeDockerComposeExecCommand(
    WEB_PATH,
    LINT_FORMAT_CHECK_CMD,
  ),
  [`packages/${API_PATH}/**/*.{js,json,yml,yaml,md}`]: makeDockerComposeExecCommand(
    API_PATH,
    LINT_FORMAT_CHECK_CMD,
  ),
};
