const path = require("path");
const _ = require("lodash");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// Create pages with translated url for locales
const locales = require("./src/locales/locales");

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  return new Promise((resolve) => {
    // First delete the one made by gatsby
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

// Add next and previous posts links based on posted date
//
// this has be adjusted for translated links
// I don't really need it
//
// one way to do it is looping over en/posts and then es/posts
//
// const postNodes = [];
// function addSiblingNodes(createNodeField) {
//   postNodes.sort(
//     ({ frontmatter: { date: date1 } }, { frontmatter: { date: date2 } }) => {
//       const dateA = moment(date1, siteConfig.dateFromFormat);
//       const dateB = moment(date2, siteConfig.dateFromFormat);

//       if (dateA.isBefore(dateB)) return 1;
//       if (dateB.isBefore(dateA)) return -1;
//       return 0;
//     }
//   );

//   for (let i = 0; i < postNodes.length; i += 1) {
//     const nextID = i + 1 < postNodes.length ? i + 1 : 0;
//     const prevID = i - 1 > 0 ? i - 1 : postNodes.length - 1;
//     const currNode = postNodes[i];
//     const nextNode = postNodes[nextID];
//     const prevNode = postNodes[prevID];

//     createNodeField({
//       node: currNode,
//       name: "nextTitle",
//       value: nextNode.frontmatter.title,
//     });
//     createNodeField({
//       node: currNode,
//       name: "nextSlug",
//       value: nextNode.fields.slug,
//     });
//     createNodeField({
//       node: currNode,
//       name: "prevTitle",
//       value: prevNode.frontmatter.title,
//     });
//     createNodeField({
//       node: currNode,
//       name: "prevSlug",
//       value: prevNode.fields.slug,
//     });
//   }
// }

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;

  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);

    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      if (node.frontmatter.category === "work") {
        if (node.frontmatter.locale === "en") {
          slug = `/work/${_.kebabCase(node.frontmatter.title)}`;
        }

        if (node.frontmatter.locale === "es") {
          slug = `/trabajos/${_.kebabCase(node.frontmatter.title)}`;
        }
      } else if (node.frontmatter.category === "blog") {
        slug = `/blog/${_.kebabCase(node.frontmatter.title)}`;
      } else if (node.frontmatter.category === "legal") {
        slug = `/${_.kebabCase(node.frontmatter.title)}`;
      }
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `${parsedFilePath.name}/`;
    } else {
      slug = `${parsedFilePath.name}/`;
    }

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
        const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
        if (!date.isValid) console.warn(`Invalid date.`, node.frontmatter);

        createNodeField({
          node,
          name: "date",
          value: date.toISOString(),
        });
      }
    }

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });

    // postNodes.push(node);
  }
};

// exports.setFieldsOnGraphQLNodeType = ({ type, actions }) => {
//   const { name } = type;
//   const { createNodeField } = actions;
//   if (name === "MarkdownRemark") {
//     addSiblingNodes(createNodeField);
//   }
// };

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  Object.keys(locales).map((locale) => {
    let localeUrlPrefix = "/";
    let localeUrlWorkPrefix = "work";
    let paginationName = "page/";

    if (locale === "es") {
      localeUrlPrefix = "/es/";
      localeUrlWorkPrefix = "trabajos";
      paginationName = "pagina/";
    }

    return new Promise((resolve, reject) => {
      resolve(
        graphql(`
          {
            blog: allMarkdownRemark(
              limit: 2000
              sort: { fields: [frontmatter___date], order: DESC }
              filter: {
                frontmatter: {
                  posted: { eq: true }
                  category: { eq: "blog" }
                  locale: { eq: "${locale}" }
                }
              }
            ) {
              totalCount
              edges {
                node {
                  fields {
                    slug
                  }
                  timeToRead
                  frontmatter {
                    title
                    description
                    date(formatString: "DD MMMM YYYY")
                    category
                    snippet
                    tags
                    posted
                    locale
                    twinPost
                  }
                }
              }
              tags: group(field: frontmatter___tags) {
                fieldValue
                totalCount
                edges {
                  node {
                    fields {
                      slug
                    }
                    timeToRead
                    frontmatter {
                      title
                      description
                      date(formatString: "DD MMMM YYYY")
                      category
                      snippet
                      tags
                      posted
                      locale
                      twinPost
                    }
                  }
                }
              }
            }
            work: allMarkdownRemark(
              limit: 2000
              sort: { fields: [frontmatter___date], order: DESC }
              filter: {
                frontmatter: {
                  posted: { eq: true }
                  category: { eq: "work" }
                  locale: { eq: "${locale}" }
                }
              }
            ) {
              totalCount
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    description
                    date(formatString: "DD MMMM YYYY")
                    category
                    tags
                    posted
                    twinPost
                    locale
                    image {
                      childImageSharp {
                        fluid(maxWidth: 744) {
                          src
                          srcSet
                          aspectRatio
                          sizes
                        }
                      }
                    }
                  }
                }
              }
            }
            legal: allMarkdownRemark(
              limit: 100
              filter: {
                frontmatter: {
                  posted: { eq: true }
                  category: { eq: "legal" }
                  locale: { eq: "${locale}" }
                }
              }
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date(formatString: "DD MMMM YYYY")
                    category
                    posted
                    twinPost
                    locale
                  }
                }
              }
            }
          }
        `).then((result) => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }

          // Template Pages Path
          const blogTemplate = path.resolve("src/templates/blog.js");
          const postTemplate = path.resolve("src/templates/post.js");
          const tagTemplate = path.resolve("src/templates/tag.js");
          const workTemplate = path.resolve("src/templates/work.js");
          const caseStudyTemplate = path.resolve("src/templates/caseStudy.js");
          const legalTemplate = path.resolve("src/templates/legal.js");

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

          // Controls
          // Limit of posts to show per paginated page
          const postsPerPage = 5;

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

          for (
            let currentPage = 1;
            currentPage <= totalPagesInBlog;
            currentPage++
          ) {
            if (currentPage === 1) {
              createPage({
                path: `${localeUrlPrefix}blog`,
                component: blogTemplate,
                // Data passed to context is available in page queries as GraphQL variables.
                context: {
                  // ↓ end
                  edges: slicePosts(edgesBlog, postsPerPage, currentPage).map(
                    ({ node }) => node
                  ),
                  currentPage,
                  totalPagesInBlog,
                  paginationPathPrefix: `/blog`,
                  prevPath: null,
                  nextPath: `/blog/${paginationName}2`,
                  totalCountBlog,
                  // need it for react-intl
                  locale,
                },
              });
            } else {
              createPage({
                path: `${localeUrlPrefix}blog/${paginationName + currentPage}`,
                component: blogTemplate,
                // Data passed to context is available in page queries as GraphQL variables.
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
                  // need it for react-intl
                  locale,
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
                  // Data passed to context is available in page queries as GraphQL variables.
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
                    // need it for react-intl
                    locale,
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
                      currentPage + 1 <=
                      Math.ceil(tag.totalCount / postsPerPage)
                        ? `/blog/tags/${
                            tag.fieldValue
                          }/${paginationName}${currentPage + 1}`
                        : null,
                    totalCount: tag.totalCount,
                    tag: tag.fieldValue,
                    // need it for react-intl
                    locale,
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
              path:
                locale === "en"
                  ? edge.node.fields.slug
                  : `/es${edge.node.fields.slug}`,
              component: postTemplate,
              // Data passed to context is available in page queries as GraphQL variables.
              context: {
                slug: edge.node.fields.slug,
                // need it for react-intl
                locale,
                twinPost: _.kebabCase(edge.node.frontmatter.twinPost),
              },
            });
          });

          /*******************************************************
           * Legal Pages Creation
           */

          edgesLegal.forEach((edge) => {
            createPage({
              path:
                locale === "en"
                  ? edge.node.fields.slug
                  : `/es${edge.node.fields.slug}`,
              component: legalTemplate,
              // Data passed to context is available in page queries as GraphQL variables.
              context: {
                slug: edge.node.fields.slug,
                // need it for react-intl
                locale,
                twinPost: _.kebabCase(edge.node.frontmatter.twinPost),
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

          for (
            let currentPage = 1;
            currentPage <= totalPagesInWork;
            currentPage++
          ) {
            if (currentPage === 1) {
              createPage({
                path: localeUrlPrefix + localeUrlWorkPrefix,
                component: workTemplate,
                // Data passed to context is available in page queries as GraphQL variables.
                context: {
                  // ↓ end
                  edgesWork: slicePosts(
                    edgesWork,
                    postsPerPage,
                    currentPage
                  ).map(({ node }) => node),
                  currentPage,
                  totalPagesInWork,
                  paginationPathPrefix: `/${localeUrlWorkPrefix}`,
                  prevPath: null,
                  nextPath: `/${localeUrlWorkPrefix}/${paginationName}2`,
                  totalCountWork,
                  // need it for react-intl
                  locale,
                },
              });
            } else {
              createPage({
                path: `${localeUrlPrefix +
                  localeUrlWorkPrefix}/${paginationName}${currentPage}`,
                component: workTemplate,
                // Data passed to context is available in page queries as GraphQL variables.
                context: {
                  edgesWork: slicePosts(
                    edgesWork,
                    postsPerPage,
                    currentPage
                  ).map(({ node }) => node),
                  currentPage,
                  totalPagesInWork,
                  paginationPathPrefix: `/${localeUrlWorkPrefix}`,
                  // current index in loop minus 1
                  // for index = 2, /page/1
                  // only if its > 1 (not resulting in /page/0)
                  prevPath:
                    currentPage - 1 > 1
                      ? `/${localeUrlWorkPrefix}/${paginationName}${currentPage -
                          1}`
                      : `/${localeUrlWorkPrefix}`,
                  // current index in loop plus 1
                  // index = 3 > /page/3
                  // nextPath = null
                  // only if its <= totalPages (not resulting in more pages than there are)
                  nextPath:
                    currentPage + 1 <= totalPagesInWork
                      ? `/${localeUrlWorkPrefix}/${paginationName}${currentPage +
                          1}`
                      : null,
                  totalCountWork,
                  // need it for react-intl
                  locale,
                },
              });
            }
          }

          /*******************************************************
           * Work Case Studies Creation
           */

          edgesWork.forEach((edge) => {
            createPage({
              path:
                locale === "en"
                  ? edge.node.fields.slug
                  : `/es${edge.node.fields.slug}`,
              component: caseStudyTemplate,
              // Data passed to context is available in page queries as GraphQL variables.
              context: {
                slug: edge.node.fields.slug,
                // need it for react-intl
                locale,
                twinPost: _.kebabCase(edge.node.frontmatter.twinPost),
              },
            });
          });
        })
      );
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
