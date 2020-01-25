const kebabCase = require("lodash/kebabCase");

function createPagesWithTwinPost({ createPage, edges, template, locale }) {
  edges.forEach((edge, index) => {
    let prevTitle = null;
    let prevSlug = null;
    let nextTitle = null;
    let nextSlug = null;

    if (index === 0 && edges.length > 1) {
      prevTitle = edges[index + 1].node.frontmatter.title;
      prevSlug = edges[index + 1].node.fields.slug;
    } else if (index > 0 && index + 1 < edges.length) {
      prevTitle = edges[index + 1].node.frontmatter.title;
      prevSlug = edges[index + 1].node.fields.slug;
      nextTitle = edges[index - 1].node.frontmatter.title;
      nextSlug = edges[index - 1].node.fields.slug;
    } else if (index === edges.length - 1 && edges.length > 1) {
      prevTitle = null;
      prevSlug = null;
      nextTitle = edges[index - 1].node.frontmatter.title;
      nextSlug = edges[index - 1].node.fields.slug;
    }

    createPage({
      path: edge.node.fields.slug,
      component: template,
      context: {
        slug: edge.node.fields.slug,
        twinPost: kebabCase(edge.node.frontmatter.twinPost),
        nextTitle: nextTitle,
        nextSlug: nextSlug,
        prevTitle: prevTitle,
        prevSlug: prevSlug,
        locale: locale,
      },
    });
  });
}

function createLegalPages({ createPage, edges, template, locale }) {
  edges.forEach((edge) => {
    createPage({
      path: edge.node.fields.slug,
      component: template,
      context: {
        slug: edge.node.fields.slug,
        twinPost: kebabCase(edge.node.frontmatter.twinPost),
        locale: locale,
      },
    });
  });
}

function getBlogPaginationCurrentPath({
  isFirstPage,
  currentPage,
  blogPath,
  paginationName,
}) {
  if (isFirstPage) {
    return blogPath;
  } else {
    return blogPath + paginationName + currentPage;
  }
}

function getBlogPaginationPrevPath({
  isFirstPage,
  currentPage,
  blogPath,
  paginationName,
}) {
  if (isFirstPage) {
    return null;
  } else {
    if (currentPage - 1 > 1) {
      return blogPath + paginationName + `${currentPage - 1}`;
    } else {
      return blogPath;
    }
  }
}

function getBlogPaginationNextPath({
  isFirstPage,
  currentPage,
  blogPath,
  paginationName,
  totalPagesInBlog,
}) {
  if (isFirstPage) {
    if (totalPagesInBlog > 1) {
      return blogPath + paginationName + "2";
    } else {
      return null;
    }
  } else {
    if (currentPage + 1 <= totalPagesInBlog) {
      return blogPath + paginationName + `${currentPage + 1}`;
    } else {
      return null;
    }
  }
}

function getBlogTagsPaginationCurrentPath({
  isFirstPage,
  currentPage,
  blogPath,
  paginationName,
  tagsPath,
  tagName,
}) {
  if (isFirstPage) {
    return blogPath + tagsPath + tagName;
  } else {
    return blogPath + tagsPath + tagName + paginationName + currentPage;
  }
}

function getBlogTagsPaginationPrevPath({
  isFirstPage,
  currentPage,
  blogPath,
  paginationName,
  tagsPath,
  tagName,
}) {
  if (isFirstPage) {
    return null;
  } else {
    if (currentPage - 1 > 1) {
      return (
        blogPath + tagsPath + tagName + paginationName + `${currentPage - 1}`
      );
    } else {
      return blogPath + tagsPath + tagName;
    }
  }
}

function getBlogTagsPaginationNextPath({
  isFirstPage,
  currentPage,
  blogPath,
  paginationName,
  tagsPath,
  tagName,
  totalCount,
  postsPerPage,
}) {
  if (isFirstPage) {
    return blogPath + tagsPath + tagName + paginationName + "2";
  } else {
    if (currentPage + 1 <= Math.ceil(totalCount / postsPerPage)) {
      return (
        blogPath + tagsPath + tagName + paginationName + `${currentPage + 1}`
      );
    } else {
      return null;
    }
  }
}

function getWorkPaginationCurrentPath({
  isFirstPage,
  currentPage,
  workPath,
  paginationName,
}) {
  if (isFirstPage) {
    return workPath;
  } else {
    return workPath + paginationName + currentPage;
  }
}

function getWorkPaginationPrevPath({
  isFirstPage,
  currentPage,
  workPath,
  paginationName,
}) {
  if (isFirstPage) {
    return null;
  } else {
    if (currentPage - 1 > 1) {
      return workPath + paginationName + `${currentPage - 1}`;
    } else {
      return workPath;
    }
  }
}

function getWorkPaginationNextPath({
  isFirstPage,
  currentPage,
  workPath,
  paginationName,
  totalPagesInWork,
}) {
  if (isFirstPage) {
    if (totalPagesInWork > 1) {
      return workPath + paginationName + "2";
    } else {
      return null;
    }
  } else {
    if (currentPage + 1 <= totalPagesInWork) {
      return workPath + paginationName + `${currentPage + 1}`;
    } else {
      return null;
    }
  }
}

module.exports = {
  createPagesWithTwinPost,
  createLegalPages,
  getBlogPaginationCurrentPath,
  getBlogPaginationPrevPath,
  getBlogPaginationNextPath,
  getBlogTagsPaginationCurrentPath,
  getBlogTagsPaginationPrevPath,
  getBlogTagsPaginationNextPath,
  getWorkPaginationCurrentPath,
  getWorkPaginationPrevPath,
  getWorkPaginationNextPath,
};
