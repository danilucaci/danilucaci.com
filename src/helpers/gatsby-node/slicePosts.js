/**
 * Split into chunks of 5 posts per paginated page.
 *
 * @param {Array} array The edges to slice in chunks
 * @param {Number} currentPage The current page index the array to slice from
 * @param {Number} postsPerPage The size of each chunk
 *
 * @returns {Array} Chunk of edges
 */
function slicePosts({ array = [], currentPage = 1, postsPerPage = 5 }) {
  return [...array].slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );
}

module.exports = slicePosts;
