const { isPromise } = require("../utils/contact-validation");

/**
 * Normalizes the promise response and rejection
 *
 * @param {Promise} promise orm promise
 * @returns object { data: null | Promise, error: null | error.message }
 */
async function normalizeDBQuery(promise) {
  if (!isPromise(promise)) {
    return {
      data: null,
      error: `${promise} is not a Promise`,
    };
  }

  let result = {
    data: null,
    error: null,
  };

  try {
    const data = await promise;
    result.data = data;
  } catch (error) {
    result.error = error.message;
  }

  return result;
}

module.exports = {
  normalizeDBQuery: normalizeDBQuery,
};
