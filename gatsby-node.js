const path = require("path");
const _ = require("lodash");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");
const gatsbyNodeQuery = require("./src/helpers/gatsbyNodeQuery");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// Create pages with translated url for locales
const locales = require("./src/locales/locales");

// Only store posts in blog or work category
// used in addSiblingNodes() for adding nextTitle/Slug and prevTitle/Slug
// to blog posts and work case studies
let allPostNodes = [];

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  return new Promise((resolve) => {
    // First delete the page made by gatsby
    deletePage(page);

    Object.keys(locales).map((locale) => {
      // const localizedPath = locales[locale].default
      //   ? page.path
      //   : locales[locale].path + page.path;
      let localizedPath = "";
      let hasTrailingSlash = page.path.endsWith("/") && page.path.length > 2;

      // Translate page urls
      if (locales[locale].default) {
        localizedPath = hasTrailingSlash ? page.path.slice(0, -1) : page.path;
      } else {
        if (page.path === "/") {
          localizedPath = locales[locale].path;
        } else if (page.path.includes("/about-me")) {
          localizedPath = locales[locale].path + "/sobre-mi";
        } else if (page.path.includes("/contact")) {
          localizedPath = locales[locale].path + "/contacto";
        } else {
          localizedPath = locales[locale].path + page.path;
          if (hasTrailingSlash) {
            localizedPath = `${locales[locale].path}${page.path.slice(0, -1)}`;
          }
        }
      }

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: locale,
        },
      });
    });

    resolve();
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;

  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);

    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")
    ) {
      if (node.frontmatter.category === "work") {
        // Only store posts in blog or work category
        // used in addSiblingNodes() for adding nextTitle/Slug and prevTitle/Slug
        // to blog posts and work case studies
        allPostNodes.push(node);

        if (node.frontmatter.locale === "en") {
          slug = `/work/${_.kebabCase(node.frontmatter.slug)}`;
        }

        if (node.frontmatter.locale === "es") {
          slug = `/trabajos/${_.kebabCase(node.frontmatter.slug)}`;
        }
      } else if (node.frontmatter.category === "blog") {
        // Only store posts in blog or work category
        // used in addSiblingNodes() for adding nextTitle/Slug and prevTitle/Slug
        // to blog posts and work case studies
        allPostNodes.push(node);

        slug = `/blog/${_.kebabCase(node.frontmatter.slug)}`;
      } else if (node.frontmatter.category === "legal") {
        slug = `/${_.kebabCase(node.frontmatter.slug)}`;
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

function sortNodesByDate(nodesArr) {
  return nodesArr.sort(
    ({ frontmatter: { date: date1 } }, { frontmatter: { date: date2 } }) => {
      let dateA = moment(date1, siteConfig.dateFromFormat);
      let dateB = moment(date2, siteConfig.dateFromFormat);

      if (dateA.isBefore(dateB)) return -1;
      if (dateB.isBefore(dateA)) return 1;
      return 0;
    }
  );
}

function filterNodesByCategory(category = "blog") {
  // allPostNodes = Only store posts in blog or work category
  // filled in when calling onCreateNode
  return allPostNodes.filter((node) => node.frontmatter.category === category);
}

function filterNodesByLocale(arr = [], locale = "en") {
  return arr.filter((node) => node.frontmatter.locale === locale);
}

// Used to log the values of the array when gatsby creates the nodes
function logNodes(arr = []) {
  arr.forEach((node) => {
    console.log(
      `${node.frontmatter.title} ${node.frontmatter.locale} ${
        node.frontmatter.category
      } ${node.frontmatter.date}`
    );
  });
}

// Creates prevTitle/Slug and nextTitle/Slug
// for each locale in the blog and work categories
function createSiblingNodes(arr = [], createNodeField) {
  for (let i = 0; i < arr.length; i += 1) {
    let nextID = i + 1 < arr.length ? i + 1 : null;
    let prevID = i - 1 >= 0 ? i - 1 : null;
    let currNode = arr[i];
    let nextNode = nextID === null ? null : arr[nextID];
    let prevNode = prevID === null ? null : arr[prevID];

    createNodeField({
      node: currNode,
      name: "nextTitle",
      value: nextNode === null ? null : nextNode.frontmatter.title,
    });
    createNodeField({
      node: currNode,
      name: "nextSlug",
      value: nextNode === null ? null : nextNode.fields.slug,
    });
    createNodeField({
      node: currNode,
      name: "prevTitle",
      value: prevNode === null ? null : prevNode.frontmatter.title,
    });
    createNodeField({
      node: currNode,
      name: "prevSlug",
      value: prevNode === null ? null : prevNode.fields.slug,
    });
  }
}

function addSiblingNodesByLocale(categoryArr, createNodeField) {
  Object.keys(locales).map((locale) => {
    // Temporal array that stores the locale posts on each category
    let _localeConsumableArr = filterNodesByLocale(categoryArr, locale);

    // Sort the posts in each category locale entry by date
    _localeConsumableArr = sortNodesByDate(_localeConsumableArr);

    // Create prevTitle/Slug and nextTitle/Slug
    // for each locale in the blog and work categories
    createSiblingNodes(_localeConsumableArr, createNodeField);
  });
}

// Add next and previous posts links based on posted date
function addSiblingNodes(createNodeField) {
  let blogPostNodes = filterNodesByCategory("blog");
  let workPostNodes = filterNodesByCategory("work");

  addSiblingNodesByLocale(blogPostNodes, createNodeField);
  addSiblingNodesByLocale(workPostNodes, createNodeField);
}

exports.setFieldsOnGraphQLNodeType = ({ type, actions }) => {
  const { name } = type;
  const { createNodeField } = actions;
  if (name === "MarkdownRemark") {
    addSiblingNodes(createNodeField);
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Template Pages Path
  const blogTemplate = path.resolve("src/templates/blog.js");
  const postTemplate = path.resolve("src/templates/post.js");
  const tagTemplate = path.resolve("src/templates/tag.js");
  const workTemplate = path.resolve("src/templates/work.js");
  const caseStudyTemplate = path.resolve("src/templates/caseStudy.js");
  const legalTemplate = path.resolve("src/templates/legal.js");

  // Controls
  // Limit of posts to show per paginated page
  const postsPerPage = 5;

  const enLocale = "en";
  const esLocale = "es";

  // Create english pages
  await graphql(`{ ${gatsbyNodeQuery(enLocale)} }`).then((result) => {
    if (result.errors) {
      console.log(result.errors);
    }

    console.log(result.errors);

    const localeUrlPrefix = "/";
    const localeUrlWorkPrefix = "work";
    const paginationName = "page/";

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

    for (let currentPage = 1; currentPage <= totalPagesInBlog; currentPage++) {
      if (currentPage === 1) {
        createPage({
          path: `${localeUrlPrefix}blog`,
          component: blogTemplate,
          context: {
            edges: slicePosts(edgesBlog, postsPerPage, currentPage).map(
              ({ node }) => node
            ),
            currentPage,
            totalPagesInBlog,
            paginationPathPrefix: `/blog`,
            prevPath: null,
            nextPath: `/blog/${paginationName}2`,
            totalCountBlog,
            // necessary for react-intl
            locale: enLocale,
          },
        });
      } else {
        createPage({
          path: `${localeUrlPrefix}blog/${paginationName + currentPage}`,
          component: blogTemplate,
          context: {
            edges: slicePosts(edgesBlog, postsPerPage, currentPage).map(
              ({ node }) => node
            ),
            currentPage,
            totalPagesInBlog,
            paginationPathPrefix: `/blog`,
            // current index in loop minus 1
            // for index = 2, /page/1
            // only if its > 1 (not resulting in /page/0)
            prevPath:
              currentPage - 1 > 1
                ? `/blog/${paginationName}${currentPage - 1}`
                : `/blog`,
            // current index in loop plus 1
            // index = 3 > /page/3
            // nextPath = null
            // only if its <= totalPages (not resulting in more pages than there are)
            nextPath:
              currentPage + 1 <= totalPagesInBlog
                ? `/blog/${paginationName}${currentPage + 1}`
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
        currentPage++
      ) {
        if (currentPage === 1) {
          createPage({
            path: `${localeUrlPrefix}blog/tags/${tag.fieldValue}`,
            component: tagTemplate,
            context: {
              edges: slicePosts(tag.edges, postsPerPage, currentPage).map(
                ({ node }) => node
              ),
              currentPage,
              totalPagesInBlog: Math.ceil(tag.totalCount / postsPerPage),
              paginationPathPrefix: `/blog/tags/${tag.fieldValue}`,
              prevPath: null,
              nextPath: `/blog/tags/${tag.fieldValue}/${paginationName}2`,
              totalCount: tag.totalCount,
              tag: tag.fieldValue,
              // necessary for react-intl
              locale: enLocale,
            },
          });
        } else {
          createPage({
            path: `${localeUrlPrefix}blog/tags/${
              tag.fieldValue
            }/${paginationName + currentPage}`,
            component: tagTemplate,
            context: {
              edges: slicePosts(tag.edges, postsPerPage, currentPage).map(
                ({ node }) => node
              ),
              currentPage,
              totalPagesInBlog: Math.ceil(tag.totalCount / postsPerPage),
              paginationPathPrefix: `/blog/tags/${tag.fieldValue}`,
              // current index in loop minus 1
              // for index = 2, /page/1
              // only if its > 1 (not resulting in /page/0)
              prevPath:
                currentPage - 1 > 1
                  ? `/blog/tags/${
                      tag.fieldValue
                    }/${paginationName}${currentPage - 1}`
                  : `/blog/tags/${tag.fieldValue}`,
              // current index in loop plus 1
              // index = 3 > /page/3
              // nextPath = null
              // only if its <= totalPages (not resulting in more pages than there are)
              nextPath:
                currentPage + 1 <= Math.ceil(tag.totalCount / postsPerPage)
                  ? `/blog/tags/${
                      tag.fieldValue
                    }/${paginationName}${currentPage + 1}`
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

    edgesBlog.forEach((edge) => {
      createPage({
        path: edge.node.fields.slug,
        component: postTemplate,
        context: {
          slug: edge.node.fields.slug,
          twinPost: _.kebabCase(edge.node.frontmatter.twinPost),
          nextTitle: edge.node.fields.nextTitle,
          nextSlug: edge.node.fields.nextSlug,
          prevSlug: edge.node.fields.prevSlug,
          prevTitle: edge.node.fields.prevTitle,
          // necessary for react-intl
          locale: enLocale,
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

    for (let currentPage = 1; currentPage <= totalPagesInWork; currentPage++) {
      if (currentPage === 1) {
        createPage({
          path: localeUrlPrefix + localeUrlWorkPrefix,
          component: workTemplate,
          context: {
            edgesWork: slicePosts(edgesWork, postsPerPage, currentPage).map(
              ({ node }) => node
            ),
            currentPage,
            totalPagesInWork,
            paginationPathPrefix: `/${localeUrlWorkPrefix}`,
            prevPath: null,
            nextPath: `/${localeUrlWorkPrefix}/${paginationName}2`,
            totalCountWork,
            // necessary for react-intl
            locale: enLocale,
          },
        });
      } else {
        createPage({
          path: `${localeUrlPrefix +
            localeUrlWorkPrefix}/${paginationName}${currentPage}`,
          component: workTemplate,
          context: {
            edgesWork: slicePosts(edgesWork, postsPerPage, currentPage).map(
              ({ node }) => node
            ),
            currentPage,
            totalPagesInWork,
            paginationPathPrefix: `/${localeUrlWorkPrefix}`,
            // current index in loop minus 1
            // for index = 2, /page/1
            // only if its > 1 (not resulting in /page/0)
            prevPath:
              currentPage - 1 > 1
                ? `/${localeUrlWorkPrefix}/${paginationName}${currentPage - 1}`
                : `/${localeUrlWorkPrefix}`,
            // current index in loop plus 1
            // index = 3 > /page/3
            // nextPath = null
            // only if its <= totalPages (not resulting in more pages than there are)
            nextPath:
              currentPage + 1 <= totalPagesInWork
                ? `/${localeUrlWorkPrefix}/${paginationName}${currentPage + 1}`
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

    edgesWork.forEach((edge) => {
      createPage({
        path: edge.node.fields.slug,
        component: caseStudyTemplate,
        context: {
          slug: edge.node.fields.slug,
          twinPost: _.kebabCase(edge.node.frontmatter.twinPost),
          nextTitle: edge.node.fields.nextTitle,
          nextSlug: edge.node.fields.nextSlug,
          prevSlug: edge.node.fields.prevSlug,
          prevTitle: edge.node.fields.prevTitle,
          // necessary for react-intl
          locale: enLocale,
        },
      });
    });
  });

  // Create spanish pages
  await graphql(`{ ${gatsbyNodeQuery(esLocale)} }`).then((result) => {
    if (result.errors) {
      console.log(result.errors);
    }

    const localeUrlPrefix = "/es/";
    const localeUrlWorkPrefix = "trabajos";
    const paginationName = "pagina/";

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

    for (let currentPage = 1; currentPage <= totalPagesInBlog; currentPage++) {
      if (currentPage === 1) {
        createPage({
          path: `${localeUrlPrefix}blog`,
          component: blogTemplate,
          context: {
            edges: slicePosts(edgesBlog, postsPerPage, currentPage).map(
              ({ node }) => node
            ),
            currentPage,
            totalPagesInBlog,
            paginationPathPrefix: `/blog`,
            prevPath: null,
            nextPath: `/blog/${paginationName}2`,
            totalCountBlog,
            // necessary for react-intl
            locale: esLocale,
          },
        });
      } else {
        createPage({
          path: `${localeUrlPrefix}blog/${paginationName + currentPage}`,
          component: blogTemplate,
          context: {
            edges: slicePosts(edgesBlog, postsPerPage, currentPage).map(
              ({ node }) => node
            ),
            currentPage,
            totalPagesInBlog,
            paginationPathPrefix: `/blog`,
            // current index in loop minus 1
            // for index = 2, /page/1
            // only if its > 1 (not resulting in /page/0)
            prevPath:
              currentPage - 1 > 1
                ? `/blog/${paginationName}${currentPage - 1}`
                : `/blog`,
            // current index in loop plus 1
            // index = 3 > /page/3
            // nextPath = null
            // only if its <= totalPages (not resulting in more pages than there are)
            nextPath:
              currentPage + 1 <= totalPagesInBlog
                ? `/blog/${paginationName}${currentPage + 1}`
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
        currentPage++
      ) {
        if (currentPage === 1) {
          createPage({
            path: `${localeUrlPrefix}blog/tags/${tag.fieldValue}`,
            component: tagTemplate,
            context: {
              edges: slicePosts(tag.edges, postsPerPage, currentPage).map(
                ({ node }) => node
              ),
              currentPage,
              totalPagesInBlog: Math.ceil(tag.totalCount / postsPerPage),
              paginationPathPrefix: `/blog/tags/${tag.fieldValue}`,
              prevPath: null,
              nextPath: `/blog/tags/${tag.fieldValue}/${paginationName}2`,
              totalCount: tag.totalCount,
              tag: tag.fieldValue,
              // necessary for react-intl
              locale: esLocale,
            },
          });
        } else {
          createPage({
            path: `${localeUrlPrefix}blog/tags/${
              tag.fieldValue
            }/${paginationName + currentPage}`,
            component: tagTemplate,
            context: {
              edges: slicePosts(tag.edges, postsPerPage, currentPage).map(
                ({ node }) => node
              ),
              currentPage,
              totalPagesInBlog: Math.ceil(tag.totalCount / postsPerPage),
              paginationPathPrefix: `/blog/tags/${tag.fieldValue}`,
              // current index in loop minus 1
              // for index = 2, /page/1
              // only if its > 1 (not resulting in /page/0)
              prevPath:
                currentPage - 1 > 1
                  ? `/blog/tags/${
                      tag.fieldValue
                    }/${paginationName}${currentPage - 1}`
                  : `/blog/tags/${tag.fieldValue}`,
              // current index in loop plus 1
              // index = 3 > /page/3
              // nextPath = null
              // only if its <= totalPages (not resulting in more pages than there are)
              nextPath:
                currentPage + 1 <= Math.ceil(tag.totalCount / postsPerPage)
                  ? `/blog/tags/${
                      tag.fieldValue
                    }/${paginationName}${currentPage + 1}`
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

    edgesBlog.forEach((edge) => {
      createPage({
        path: `/es${edge.node.fields.slug}`,
        component: postTemplate,
        context: {
          slug: edge.node.fields.slug,
          // necessary for react-intl
          twinPost: _.kebabCase(edge.node.frontmatter.twinPost),
          nextTitle: edge.node.fields.nextTitle,
          nextSlug: edge.node.fields.nextSlug,
          prevSlug: edge.node.fields.prevSlug,
          prevTitle: edge.node.fields.prevTitle,
          locale: esLocale,
        },
      });
    });

    /*******************************************************
     * Legal Pages Creation
     */

    edgesLegal.forEach((edge) => {
      createPage({
        path: `/es${edge.node.fields.slug}`,
        component: legalTemplate,
        context: {
          slug: edge.node.fields.slug,
          // necessary for react-intl
          twinPost: _.kebabCase(edge.node.frontmatter.twinPost),
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

    for (let currentPage = 1; currentPage <= totalPagesInWork; currentPage++) {
      if (currentPage === 1) {
        createPage({
          path: localeUrlPrefix + localeUrlWorkPrefix,
          component: workTemplate,
          context: {
            edgesWork: slicePosts(edgesWork, postsPerPage, currentPage).map(
              ({ node }) => node
            ),
            currentPage,
            totalPagesInWork,
            paginationPathPrefix: `/${localeUrlWorkPrefix}`,
            prevPath: null,
            nextPath: `/${localeUrlWorkPrefix}/${paginationName}2`,
            totalCountWork,
            // necessary for react-intl
            locale: esLocale,
          },
        });
      } else {
        createPage({
          path: `${localeUrlPrefix +
            localeUrlWorkPrefix}/${paginationName}${currentPage}`,
          component: workTemplate,
          context: {
            edgesWork: slicePosts(edgesWork, postsPerPage, currentPage).map(
              ({ node }) => node
            ),
            currentPage,
            totalPagesInWork,
            paginationPathPrefix: `/${localeUrlWorkPrefix}`,
            // current index in loop minus 1
            // for index = 2, /page/1
            // only if its > 1 (not resulting in /page/0)
            prevPath:
              currentPage - 1 > 1
                ? `/${localeUrlWorkPrefix}/${paginationName}${currentPage - 1}`
                : `/${localeUrlWorkPrefix}`,
            // current index in loop plus 1
            // index = 3 > /page/3
            // nextPath = null
            // only if its <= totalPages (not resulting in more pages than there are)
            nextPath:
              currentPage + 1 <= totalPagesInWork
                ? `/${localeUrlWorkPrefix}/${paginationName}${currentPage + 1}`
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

    edgesWork.forEach((edge) => {
      createPage({
        path: `/es${edge.node.fields.slug}`,
        component: caseStudyTemplate,
        context: {
          slug: edge.node.fields.slug,
          twinPost: _.kebabCase(edge.node.frontmatter.twinPost),
          nextTitle: edge.node.fields.nextTitle,
          nextSlug: edge.node.fields.nextSlug,
          prevSlug: edge.node.fields.prevSlug,
          prevTitle: edge.node.fields.prevTitle,
          // necessary for react-intl
          locale: esLocale,
        },
      });
    });
  });
};

/*******************************************************
 * Split into chunks of 5 posts per paginated page
 * and pass them to the blog, tag or work template pages
 */

function slicePosts(array, postsPerPage, currentPage) {
  return array
    .slice(0)
    .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);
}
