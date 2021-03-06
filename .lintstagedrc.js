const path = require("path");

const WEB_PACKAGE = "web";
const API_PACKAGE = "api";

const LINT_JS_CMD = "lint:js";
const LINT_FORMAT_CHECK_CMD = "lint:format:check";
const TEST_RELATED_CMD = "test:related";

function makeDockerComposeExecCommand(
  packageName = WEB_PACKAGE,
  script = TEST_RELATED_CMD,
) {
  return function dockerComposeExecCommandThunk(absolutePaths) {
    const cwd = process.cwd();

    console.log(absolutePaths);

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
  "packages/web/src/**/*.js": makeDockerComposeExecCommand(
    WEB_PACKAGE,
    TEST_RELATED_CMD,
  ),
  "packages/api/src/**/*.js": makeDockerComposeExecCommand(
    API_PACKAGE,
    TEST_RELATED_CMD,
  ),
  "packages/web/**/*.js": makeDockerComposeExecCommand(
    WEB_PACKAGE,
    LINT_JS_CMD,
  ),
  "packages/api/**/*.js": makeDockerComposeExecCommand(
    API_PACKAGE,
    LINT_JS_CMD,
  ),
  "packages/web/**/*.{js,json,css,yml,yaml,toml,md,mdx}": makeDockerComposeExecCommand(
    WEB_PACKAGE,
    LINT_FORMAT_CHECK_CMD,
  ),
  "packages/api/**/*.{js,json,yml,yaml,md}": makeDockerComposeExecCommand(
    API_PACKAGE,
    LINT_FORMAT_CHECK_CMD,
  ),
};
