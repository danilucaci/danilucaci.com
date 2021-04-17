import ky from "ky-universal";

/**
 * Note: since Gatsby uses the webpack DefinePlugin to make
 * the environment variables available at runtime, they cannot
 * be destructured from process.env;
 * instead, they have to be fully referenced.
 *
 * @see https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/
 *
 * @returns {String} The prefixUrl to use in the http client
 */
export function getCurrentEnv() {
  if (process.env.GATSBY_ENV === "production") {
    return `${process.env.GATSBY_CONTACT_BASE_URL}/api`;
  }

  return "/api";
}

/**
 * Together with "proxy": "http://localhost:4000" in gatsby-config.js
 * allows for making requests to /api/endpoint
 * only in development mode.
 * @see https://www.gatsbyjs.com/docs/api-proxy/
 *
 * "Keep in mind that proxy only has effect in development (with gatsby develop),
 * and it is up to you to ensure that URLs like /api/todos point to the right
 * place in production."
 */
export const api = ky.create({
  prefixUrl: getCurrentEnv(),
});
