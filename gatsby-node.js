const path = require("path");
const _ = require("lodash");
const gatsbyNodeQuery = require("./src/helpers/gatsbyNodeQuery");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// Create pages with translated url for localePaths
const localePaths = require("./src/i18n/localePaths");

// Controls
// Limit of posts to show per paginated page
const postsPerPage = 5;

const enLocale = "en";
const esLocale = "es";

// Template Pages Path
const blogTemplate = path.resolve("src/templates/blog.js");
const postTemplate = path.resolve("src/templates/post.js");
const tagTemplate = path.resolve("src/templates/tag.js");
const workTemplate = path.resolve("src/templates/work.js");
const caseStudyTemplate = path.resolve("src/templates/caseStudy.js");
const legalTemplate = path.resolve("src/templates/legal.js");

// Replacing '/' would result in empty string which is invalid
// function replacePath(path) {
//   return path === "/" ? path : path.replace(/\/$/, "");
// }

/*******************************************************
 * Split into chunks of 5 posts per paginated page
 * and pass them to the blog, tag or work template pages
 */
function slicePosts(array, currentPage) {
  return array.slice(0).slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);
}

// For importing jsx components in mdx
// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       modules: [path.resolve(__dirname, "src"), "node_modules"],
//     },
//   });
// };

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  return new Promise((resolve) => {
    // First delete the page made by gatsby
    deletePage(page);

    Object.keys(localePaths).map((locale) => {
      // const localizedPath = localePaths[locale].default
      //   ? page.path
      //   : localePaths[locale].siteLocalePrefix + page.path;
      let localizedPath = "";

      // Remove trailing slash from page path
      let hasTrailingSlash = page.path.endsWith("/") && page.path.length > 2;

      // Create default english urls
      if (localePaths[locale].default) {
        localizedPath = hasTrailingSlash ? page.path.slice(0, -1) : page.path;

        // Translate urls to spanish
      } else {
        if (page.path === "/") {
          localizedPath = localePaths[locale].siteLocalePrefix;
        } else if (page.path.includes("/about-me")) {
          localizedPath = localePaths[locale].about;
        } else if (page.path.includes("/contact")) {
          localizedPath = localePaths[locale].contact;
        } else if (page.path.includes("/thanks")) {
          localizedPath = localePaths[locale].thanks;
        } else {
          localizedPath = localePaths[locale].siteLocalePrefix + page.path;

          // If the has a trailing slash, remove it
          if (hasTrailingSlash) {
            localizedPath = `${localePaths[locale].siteLocalePrefix}${page.path.slice(0, -1)}`;
          }
        }
      }

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale,
        },
      });
    });

    resolve();
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;

  // if (node.internal.type === "Mdx") {
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);

    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")
    ) {
      if (node.frontmatter.category === "work") {
        if (node.frontmatter.locale === enLocale) {
          slug = `${localePaths[enLocale].work}/${_.kebabCase(node.frontmatter.slug)}`;
        }

        if (node.frontmatter.locale === esLocale) {
          slug = `${localePaths[esLocale].work}/${_.kebabCase(node.frontmatter.slug)}`;
        }
      } else if (node.frontmatter.category === "blog") {
        if (node.frontmatter.locale === enLocale) {
          slug = `${localePaths[enLocale].blog}/${_.kebabCase(node.frontmatter.slug)}`;
        }

        if (node.frontmatter.locale === esLocale) {
          slug = `${localePaths[esLocale].blog}/${_.kebabCase(node.frontmatter.slug)}`;
        }
      } else if (node.frontmatter.category === "legal") {
        if (node.frontmatter.locale === enLocale) {
          slug = `/${_.kebabCase(node.frontmatter.slug)}`;
        } else if (node.frontmatter.locale === esLocale) {
          slug = `/es/${_.kebabCase(node.frontmatter.slug)}`;
        }
      }
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `${parsedFilePath.name}/`;
    } else {
      slug = `${parsedFilePath.name}/`;
    }

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Create english pages
  try {
    const result = await graphql(`{ ${gatsbyNodeQuery(enLocale)} }`);
    const paginationName = localePaths[enLocale].paginationName;
    // Data Sources
    // Blog
    const totalCountBlog = result.data.blog.totalCount;
    const edgesBlog = result.data.blog.edges;
    const tagsBlog = result.data.blog.tags;

    // Legal Docs
    const edgesLegal = result.data.legal.edges;

    // Work / case studies
    const totalCountWork = result.data.work.totalCount;
    const edgesWork = result.data.work.edges;

    // Total amount of paginated pages with 5 posts each
    // amount of pages in the blog / 5
    const totalPagesInBlog = Math.ceil(totalCountBlog / postsPerPage);
    const totalPagesInWork = Math.ceil(totalCountWork / postsPerPage);

    /********************************************************
     * Blog pagination
     *
     * First page in pagination is: /blog/
     * Next pages will be: /blog/page/2...n
     *
     * For the first page return a prev path of null
     * next path of /blog/page/2
     *
     * For the second page return a prev path of /blog,
     * next path of /blog/page/3
     *
     * For the next ones return path under /blog/page/n
     */

    for (let currentPage = 1; currentPage <= totalPagesInBlog; currentPage += 1) {
      if (currentPage === 1) {
        createPage({
          path: localePaths[enLocale].blog,
          component: blogTemplate,
          context: {
            edges: slicePosts(edgesBlog, currentPage).map(({ node }) => node),
            currentPage,
            totalPagesInBlog,
            paginationPathPrefix: localePaths[enLocale].blog,
            prevPath: null,
            nextPath: localePaths[enLocale].blog + paginationName + "2",
            totalCountBlog,
            // necessary for react-intl
            locale: enLocale,
          },
        });
      } else {
        createPage({
          path: localePaths[enLocale].blog + paginationName + currentPage,
          component: blogTemplate,
          context: {
            edges: slicePosts(edgesBlog, currentPage).map(({ node }) => node),
            currentPage,
            totalPagesInBlog,
            paginationPathPrefix: localePaths[enLocale].blog,
            // current index in loop minus 1
            // for index = 2, /page/1
            // only if its > 1 (not resulting in /page/0)
            prevPath:
              currentPage - 1 > 1
                ? localePaths[enLocale].blog + paginationName + `${currentPage - 1}`
                : localePaths[enLocale].blog,
            // current index in loop plus 1
            // index = 3 > /page/3
            // nextPath = null
            // only if its <= totalPages (not resulting in more pages than there are)
            nextPath:
              currentPage + 1 <= totalPagesInBlog
                ? localePaths[enLocale].blog + paginationName + `${currentPage + 1}`
                : null,
            totalCountBlog,
            // necessary for react-intl
            locale: enLocale,
          },
        });
      }
    }

    /********************************************************
     * Tags with pagination
     *
     * First page in pagination is: /blog/tags/tagName
     * Next pages will be: /blog/tags/tagName/2...n
     *
     * For the first page return a prev path of null
     * next path of /blog/tags/tagName/page/2
     *
     * For the second page return a prev path of /blog/tags/tagName
     * next path of /blog/tags/tagName/page/3
     *
     * For the next ones return path under /blog/tags/tagName/page/n
     */

    tagsBlog.forEach((tag) => {
      for (
        let currentPage = 1;
        currentPage <= Math.ceil(tag.totalCount / postsPerPage);
        currentPage += 1
      ) {
        if (currentPage === 1) {
          createPage({
            path: localePaths[enLocale].blog + "/tags/" + tag.fieldValue,
            component: tagTemplate,
            context: {
              edges: slicePosts(tag.edges, currentPage).map(({ node }) => node),
              currentPage,
              totalPagesInBlog: Math.ceil(tag.totalCount / postsPerPage),
              paginationPathPrefix: localePaths[enLocale].blog + "/tags/" + tag.fieldValue,
              prevPath: null,
              nextPath:
                localePaths[enLocale].blog + "/tags/" + tag.fieldValue + paginationName + "2",
              totalCount: tag.totalCount,
              tag: tag.fieldValue,
              // necessary for react-intl
              locale: enLocale,
            },
          });
        } else {
          createPage({
            path: `${localePaths[enLocale].blog}/tags/${tag.fieldValue}${paginationName +
              currentPage}`,
            component: tagTemplate,
            context: {
              edges: slicePosts(tag.edges, currentPage).map(({ node }) => node),
              currentPage,
              totalPagesInBlog: Math.ceil(tag.totalCount / postsPerPage),
              paginationPathPrefix: localePaths[enLocale].blog + "/tags/" + tag.fieldValue,
              // current index in loop minus 1
              // for index = 2, /page/1
              // only if its > 1 (not resulting in /page/0)
              prevPath:
                currentPage - 1 > 1
                  ? localePaths[enLocale].blog +
                    "/tags/" +
                    tag.fieldValue +
                    paginationName +
                    `${currentPage - 1}`
                  : localePaths[enLocale].blog + "/tags/" + tag.fieldValue,
              // current index in loop plus 1
              // index = 3 > /page/3
              // nextPath = null
              // only if its <= totalPages (not resulting in more pages than there are)
              nextPath:
                currentPage + 1 <= Math.ceil(tag.totalCount / postsPerPage)
                  ? localePaths[enLocale].blog +
                    "/tags/" +
                    tag.fieldValue +
                    paginationName +
                    `${currentPage + 1}`
                  : null,
              totalCount: tag.totalCount,
              tag: tag.fieldValue,
              // necessary for react-intl
              locale: enLocale,
            },
          });
        }
      }
    });

    /*******************************************************
     * Posts Page Creation
     */

    edgesBlog.forEach((edge, index) => {
      let nextTitle = null;
      let nextSlug = null;
      let prevTitle = null;
      let prevSlug = null;

      if (index === 0 && edgesBlog.length > 1) {
        prevTitle = edgesBlog[index + 1].node.frontmatter.title;
        prevSlug = edgesBlog[index + 1].node.fields.slug;
      } else if (index > 0 && index + 1 < edgesBlog.length) {
        prevTitle = edgesBlog[index + 1].node.frontmatter.title;
        prevSlug = edgesBlog[index + 1].node.fields.slug;
        nextTitle = edgesBlog[index - 1].node.frontmatter.title;
        nextSlug = edgesBlog[index - 1].node.fields.slug;
      } else if (index === edgesBlog.length - 1 && edgesBlog.length > 1) {
        prevTitle = null;
        prevSlug = null;
        nextTitle = edgesBlog[index - 1].node.frontmatter.title;
        nextSlug = edgesBlog[index - 1].node.fields.slug;
      }

      createPage({
        path: edge.node.fields.slug,
        component: postTemplate,
        context: {
          slug: edge.node.fields.slug,
          twinPost: _.kebabCase(edge.node.frontmatter.twinPost),
          // necessary for react-intl
          locale: enLocale,
          nextTitle,
          nextSlug,
          prevTitle,
          prevSlug,
        },
      });
    });

    /*******************************************************
     * Legal Pages Creation
     */

    edgesLegal.forEach((edge) => {
      createPage({
        path: edge.node.fields.slug,
        component: legalTemplate,
        context: {
          slug: edge.node.fields.slug,
          twinPost: _.kebabCase(edge.node.frontmatter.twinPost),
          // necessary for react-intl
          locale: enLocale,
        },
      });
    });

    /********************************************************
     * Work pagination
     *
     * First page in pagination is: /work/
     * Next pages will be: /work/page/2...n
     *
     * For the first page return a prev path of null
     * next path of /work/page/2
     *
     * For the second page return a prev path of /work,
     * next path of /work/page/3
     *
     * For the next ones return path under /work/page/n
     */

    for (let currentPage = 1; currentPage <= totalPagesInWork; currentPage += 1) {
      if (currentPage === 1) {
        createPage({
          path: localePaths[enLocale].work,
          component: workTemplate,
          context: {
            edgesWork: slicePosts(edgesWork, currentPage).map(({ node }) => node),
            currentPage,
            totalPagesInWork,
            paginationPathPrefix: localePaths[enLocale].work,
            prevPath: null,
            nextPath: localePaths[enLocale].work + paginationName + "2",
            totalCountWork,
            // necessary for react-intl
            locale: enLocale,
          },
        });
      } else {
        createPage({
          path: localePaths[enLocale].work + paginationName + currentPage,
          component: workTemplate,
          context: {
            edgesWork: slicePosts(edgesWork, currentPage).map(({ node }) => node),
            currentPage,
            totalPagesInWork,
            paginationPathPrefix: localePaths[enLocale].work,
            // current index in loop minus 1
            // for index = 2, /page/1
            // only if its > 1 (not resulting in /page/0)
            prevPath:
              currentPage - 1 > 1
                ? localePaths[enLocale].work + paginationName + `${currentPage - 1}`
                : localePaths[enLocale].work,
            // current index in loop plus 1
            // index = 3 > /page/3
            // nextPath = null
            // only if its <= totalPages (not resulting in more pages than there are)
            nextPath:
              currentPage + 1 <= totalPagesInWork
                ? localePaths[enLocale].work + paginationName + `${currentPage + 1}`
                : null,
            totalCountWork,
            // necessary for react-intl
            locale: enLocale,
          },
        });
      }
    }

    /*******************************************************
     * Work Case Studies Creation
     */

    edgesWork.forEach((edge, index) => {
      let nextTitle = null;
      let nextSlug = null;
      let prevTitle = null;
      let prevSlug = null;

      if (index === 0 && edgesWork.length > 1) {
        prevTitle = edgesWork[index + 1].node.frontmatter.title;
        prevSlug = edgesWork[index + 1].node.fields.slug;
      } else if (index > 0 && index + 1 < edgesWork.length) {
        prevTitle = edgesWork[index + 1].node.frontmatter.title;
        prevSlug = edgesWork[index + 1].node.fields.slug;
        nextTitle = edgesWork[index - 1].node.frontmatter.title;
        nextSlug = edgesWork[index - 1].node.fields.slug;
      } else if (index === edgesWork.length - 1 && edgesWork.length > 1) {
        prevTitle = null;
        prevSlug = null;
        nextTitle = edgesWork[index - 1].node.frontmatter.title;
        nextSlug = edgesWork[index - 1].node.fields.slug;
      }

      createPage({
        path: edge.node.fields.slug,
        component: caseStudyTemplate,
        context: {
          slug: edge.node.fields.slug,
          twinPost: _.kebabCase(edge.node.frontmatter.twinPost),
          // necessary for react-intl
          locale: enLocale,
          nextTitle,
          nextSlug,
          prevTitle,
          prevSlug,
        },
      });
    });
  } catch (error) {
    console.warn("Error running the english graphql query: ", error);
  }

  // Create spanish pages
  try {
    const result = await graphql(`{ ${gatsbyNodeQuery(esLocale)} }`);
    const paginationName = localePaths[esLocale].paginationName;

    // Data Sources
    // Blog
    const totalCountBlog = result.data.blog.totalCount;
    const edgesBlog = result.data.blog.edges;
    const tagsBlog = result.data.blog.tags;

    // Legal Docs
    const edgesLegal = result.data.legal.edges;

    // Work / case studies
    const totalCountWork = result.data.work.totalCount;
    const edgesWork = result.data.work.edges;

    // Total amount of paginated pages with 5 posts each
    // amount of pages in the blog / 5
    const totalPagesInBlog = Math.ceil(totalCountBlog / postsPerPage);
    const totalPagesInWork = Math.ceil(totalCountWork / postsPerPage);

    /********************************************************
     * Blog pagination
     *
     * First page in pagination is: /blog/
     * Next pages will be: /blog/page/2...n
     *
     * For the first page return a prev path of null
     * next path of /blog/page/2
     *
     * For the second page return a prev path of /blog,
     * next path of /blog/page/3
     *
     * For the next ones return path under /blog/page/n
     */

    for (let currentPage = 1; currentPage <= totalPagesInBlog; currentPage += 1) {
      if (currentPage === 1) {
        createPage({
          path: localePaths[esLocale].blog,
          component: blogTemplate,
          context: {
            edges: slicePosts(edgesBlog, currentPage).map(({ node }) => node),
            currentPage,
            totalPagesInBlog,
            paginationPathPrefix: localePaths[esLocale].blog,
            prevPath: null,
            nextPath: localePaths[esLocale].blog + paginationName + "2",
            totalCountBlog,
            // necessary for react-intl
            locale: esLocale,
          },
        });
      } else {
        createPage({
          path: localePaths[esLocale].blog + paginationName + currentPage,
          component: blogTemplate,
          context: {
            edges: slicePosts(edgesBlog, currentPage).map(({ node }) => node),
            currentPage,
            totalPagesInBlog,
            paginationPathPrefix: localePaths[esLocale].blog,
            // current index in loop minus 1
            // for index = 2, /page/1
            // only if its > 1 (not resulting in /page/0)
            prevPath:
              currentPage - 1 > 1
                ? localePaths[esLocale].blog + paginationName + `${currentPage - 1}`
                : localePaths[esLocale].blog,
            // current index in loop plus 1
            // index = 3 > /page/3
            // nextPath = null
            // only if its <= totalPages (not resulting in more pages than there are)
            nextPath:
              currentPage + 1 <= totalPagesInBlog
                ? localePaths[esLocale].blog + paginationName + `${currentPage + 1}`
                : null,
            totalCountBlog,
            // necessary for react-intl
            locale: esLocale,
          },
        });
      }
    }

    /********************************************************
     * Tags with pagination
     *
     * First page in pagination is: /blog/tags/tagName
     * Next pages will be: /blog/tags/tagName/2...n
     *
     * For the first page return a prev path of null
     * next path of /blog/tags/tagName/page/2
     *
     * For the second page return a prev path of /blog/tags/tagName
     * next path of /blog/tags/tagName/page/3
     *
     * For the next ones return path under /blog/tags/tagName/page/n
     */

    tagsBlog.forEach((tag) => {
      for (
        let currentPage = 1;
        currentPage <= Math.ceil(tag.totalCount / postsPerPage);
        currentPage += 1
      ) {
        if (currentPage === 1) {
          createPage({
            path: localePaths[esLocale].blog + "/tags/" + tag.fieldValue,
            component: tagTemplate,
            context: {
              edges: slicePosts(tag.edges, currentPage).map(({ node }) => node),
              currentPage,
              totalPagesInBlog: Math.ceil(tag.totalCount / postsPerPage),
              paginationPathPrefix: localePaths[esLocale].blog + "/tags/" + tag.fieldValue,
              prevPath: null,
              nextPath:
                localePaths[esLocale].blog + "/tags/" + tag.fieldValue + (paginationName + 2),
              totalCount: tag.totalCount,
              tag: tag.fieldValue,
              // necessary for react-intl
              locale: esLocale,
            },
          });
        } else {
          createPage({
            path:
              localePaths[esLocale].blog + "/tags/" + tag.fieldValue + paginationName + currentPage,
            component: tagTemplate,
            context: {
              edges: slicePosts(tag.edges, currentPage).map(({ node }) => node),
              currentPage,
              totalPagesInBlog: Math.ceil(tag.totalCount / postsPerPage),
              paginationPathPrefix: localePaths[esLocale].blog + "/tags/" + tag.fieldValue,
              // current index in loop minus 1
              // for index = 2, /page/1
              // only if its > 1 (not resulting in /page/0)
              prevPath:
                currentPage - 1 > 1
                  ? localePaths[esLocale].blog +
                    "/tags/" +
                    tag.fieldValue +
                    paginationName +
                    `${currentPage - 1}`
                  : localePaths[esLocale].blog + "/tags/" + tag.fieldValue,
              // current index in loop plus 1
              // index = 3 > /page/3
              // nextPath = null
              // only if its <= totalPages (not resulting in more pages than there are)
              nextPath:
                currentPage + 1 <= Math.ceil(tag.totalCount / postsPerPage)
                  ? localePaths[esLocale].blog +
                    "/tags/" +
                    tag.fieldValue +
                    paginationName +
                    `${currentPage + 1}`
                  : null,
              totalCount: tag.totalCount,
              tag: tag.fieldValue,
              // necessary for react-intl
              locale: esLocale,
            },
          });
        }
      }
    });

    /*******************************************************
     * Posts Page Creation
     */

    edgesBlog.forEach((edge, index) => {
      let nextTitle = null;
      let nextSlug = null;
      let prevTitle = null;
      let prevSlug = null;

      if (index === 0 && edgesBlog.length > 1) {
        prevTitle = edgesBlog[index + 1].node.frontmatter.title;
        prevSlug = edgesBlog[index + 1].node.fields.slug;
      } else if (index > 0 && index + 1 < edgesBlog.length) {
        prevTitle = edgesBlog[index + 1].node.frontmatter.title;
        prevSlug = edgesBlog[index + 1].node.fields.slug;
        nextTitle = edgesBlog[index - 1].node.frontmatter.title;
        nextSlug = edgesBlog[index - 1].node.fields.slug;
      } else if (index === edgesBlog.length - 1 && edgesBlog.length > 1) {
        prevTitle = null;
        prevSlug = null;
        nextTitle = edgesBlog[index - 1].node.frontmatter.title;
        nextSlug = edgesBlog[index - 1].node.fields.slug;
      }

      createPage({
        path: edge.node.fields.slug,
        component: postTemplate,
        context: {
          slug: edge.node.fields.slug,
          twinPost: _.kebabCase(edge.node.frontmatter.twinPost),
          // necessary for react-intl
          locale: esLocale,
          nextTitle,
          nextSlug,
          prevTitle,
          prevSlug,
        },
      });
    });

    /*******************************************************
     * Legal Pages Creation
     */

    edgesLegal.forEach((edge) => {
      createPage({
        path: edge.node.fields.slug,
        component: legalTemplate,
        context: {
          slug: edge.node.fields.slug,
          twinPost: _.kebabCase(edge.node.frontmatter.twinPost),
          // necessary for react-intl
          locale: esLocale,
        },
      });
    });

    /********************************************************
     * Work pagination
     *
     * First page in pagination is: /work/
     * Next pages will be: /work/page/2...n
     *
     * For the first page return a prev path of null
     * next path of /work/page/2
     *
     * For the second page return a prev path of /work,
     * next path of /work/page/3
     *
     * For the next ones return path under /work/page/n
     */

    for (let currentPage = 1; currentPage <= totalPagesInWork; currentPage += 1) {
      if (currentPage === 1) {
        createPage({
          path: localePaths[esLocale].work,
          component: workTemplate,
          context: {
            edgesWork: slicePosts(edgesWork, currentPage).map(({ node }) => node),
            currentPage,
            totalPagesInWork,
            paginationPathPrefix: localePaths[esLocale].work,
            prevPath: null,
            nextPath: localePaths[esLocale].work + paginationName + "2",
            totalCountWork,
            // necessary for react-intl
            locale: esLocale,
          },
        });
      } else {
        createPage({
          path: localePaths[esLocale].work + paginationName + currentPage,
          component: workTemplate,
          context: {
            edgesWork: slicePosts(edgesWork, currentPage).map(({ node }) => node),
            currentPage,
            totalPagesInWork,
            paginationPathPrefix: localePaths[esLocale].work,
            // current index in loop minus 1
            // for index = 2, /page/1
            // only if its > 1 (not resulting in /page/0)
            prevPath:
              currentPage - 1 > 1
                ? localePaths[esLocale].work + paginationName + `${currentPage - 1}`
                : localePaths[esLocale].work,
            // current index in loop plus 1
            // index = 3 > /page/3
            // nextPath = null
            // only if its <= totalPages (not resulting in more pages than there are)
            nextPath:
              currentPage + 1 <= totalPagesInWork
                ? localePaths[esLocale].work + paginationName + `${currentPage + 1}`
                : null,
            totalCountWork,
            // necessary for react-intl
            locale: esLocale,
          },
        });
      }
    }

    /*******************************************************
     * Work Case Studies Creation
     */

    edgesWork.forEach((edge, index) => {
      let nextTitle = null;
      let nextSlug = null;
      let prevTitle = null;
      let prevSlug = null;

      if (index === 0 && edgesWork.length > 1) {
        prevTitle = edgesWork[index + 1].node.frontmatter.title;
        prevSlug = edgesWork[index + 1].node.fields.slug;
      } else if (index > 0 && index + 1 < edgesWork.length) {
        prevTitle = edgesWork[index + 1].node.frontmatter.title;
        prevSlug = edgesWork[index + 1].node.fields.slug;
        nextTitle = edgesWork[index - 1].node.frontmatter.title;
        nextSlug = edgesWork[index - 1].node.fields.slug;
      } else if (index === edgesWork.length - 1 && edgesWork.length > 1) {
        prevTitle = null;
        prevSlug = null;
        nextTitle = edgesWork[index - 1].node.frontmatter.title;
        nextSlug = edgesWork[index - 1].node.fields.slug;
      }

      createPage({
        path: edge.node.fields.slug,
        component: caseStudyTemplate,
        context: {
          slug: edge.node.fields.slug,
          twinPost: _.kebabCase(edge.node.frontmatter.twinPost),

          // necessary for react-intl
          locale: esLocale,
          nextTitle,
          nextSlug,
          prevTitle,
          prevSlug,
        },
      });
    });
  } catch (error) {
    console.warn("Error running the spanish graphql query: ", error);
  }
};
