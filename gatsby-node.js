const path = require("path");
const _ = require("lodash");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const postNodes = [];

function addSiblingNodes(createNodeField) {
  postNodes.sort(
    ({ frontmatter: { date: date1 } }, { frontmatter: { date: date2 } }) => {
      const dateA = moment(date1, siteConfig.dateFromFormat);
      const dateB = moment(date2, siteConfig.dateFromFormat);

      if (dateA.isBefore(dateB)) return 1;

      if (dateB.isBefore(dateA)) return -1;

      return 0;
    }
  );

  for (let i = 0; i < postNodes.length; i += 1) {
    const nextID = i + 1 < postNodes.length ? i + 1 : 0;
    const prevID = i - 1 > 0 ? i - 1 : postNodes.length - 1;
    const currNode = postNodes[i];
    const nextNode = postNodes[nextID];
    const prevNode = postNodes[prevID];

    createNodeField({
      node: currNode,
      name: "nextTitle",
      value: nextNode.frontmatter.title,
    });
    createNodeField({
      node: currNode,
      name: "nextSlug",
      value: nextNode.fields.slug,
    });
    createNodeField({
      node: currNode,
      name: "prevTitle",
      value: prevNode.frontmatter.title,
    });
    createNodeField({
      node: currNode,
      name: "prevSlug",
      value: prevNode.fields.slug,
    });
  }
}

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
      // console.log("node :", node.frontmatter.category);
      if (node.frontmatter.category === "work") {
        slug = `/work/${_.kebabCase(node.frontmatter.title)}`;
      }
      if (node.frontmatter.category === "blog") {
        slug = `/blog/${_.kebabCase(node.frontmatter.title)}`;
      }
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug"))
        slug = `/${_.kebabCase(node.frontmatter.slug)}`;
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
        const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
        if (!date.isValid)
          console.warn(`WARNING: Invalid date.`, node.frontmatter);

        createNodeField({
          node,
          name: "date",
          value: date.toISOString(),
        });
      }
    }
    createNodeField({ node, name: "slug", value: slug });
    postNodes.push(node);
  }
};

exports.setFieldsOnGraphQLNodeType = ({ type, actions }) => {
  const { name } = type;
  const { createNodeField } = actions;
  if (name === "MarkdownRemark") {
    addSiblingNodes(createNodeField);
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            blog: allMarkdownRemark(
              limit: 2000
              sort: { fields: [frontmatter___date], order: DESC }
              filter: {
                frontmatter: { posted: { eq: true }, category: { ne: "work" } }
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
                    snippet
                    tags
                    category
                    date(formatString: "DD MMMM YYYY")
                    posted
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
                      snippet
                      tags
                      category
                      date(formatString: "DD MMMM YYYY")
                      posted
                    }
                  }
                }
              }
            }
            work: allMarkdownRemark(
              limit: 2000
              sort: { fields: [frontmatter___date], order: DESC }
              filter: {
                frontmatter: { posted: { eq: true }, category: { eq: "work" } }
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
                      tags
                      posted
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
            }
          }
        `
      ).then((result) => {
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

        // Data Sources
        const { totalCount, edges, categories, tags } = result.data.blog;

        const totalCountWork = result.data.work.totalCount;
        const edgesWork = result.data.work.edges;
        const categoriesWork = result.data.work.categories;
        const tagsWork = result.data.work.tags;

        // Controls
        // Limit of posts to show per paginated page
        const postsPerPage = 5;

        // Total amount of paginated pages with 5 posts each
        // amount of pages in the blog / 5
        const totalPagesInBlog = Math.ceil(totalCount / postsPerPage);
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
              path: `/blog`,
              component: blogTemplate,
              // Data passed to context is available
              // in page queries as GraphQL variables.
              context: {
                // ↓ end
                edges: slicePosts(edges, postsPerPage, currentPage).map(
                  ({ node }) => node
                ),
                currentPage,
                totalPagesInBlog,
                paginationPathPrefix: `/blog`,
                prevPath: null,
                nextPath: `/blog/page/2`,
                totalCount,
                categories,
                tags,
              },
            });
          } else {
            createPage({
              path: `/blog/page/${currentPage}`,
              component: blogTemplate,
              // Data passed to context is available
              // in page queries as GraphQL variables.
              context: {
                edges: slicePosts(edges, postsPerPage, currentPage).map(
                  ({ node }) => node
                ),
                currentPage,
                totalPagesInBlog,
                paginationPathPrefix: `/blog`,
                prevPath:
                  // current index in loop minus 1
                  // for index = 2, /page/1
                  // only if its > 1 (not resulting in /page/0)
                  currentPage - 1 > 1
                    ? `/blog/page/${currentPage - 1}`
                    : "/blog",
                nextPath:
                  // dont make more pages than needed
                  // if I have 13 posts with 5 posts per slice
                  // I only need 3 paginated pages
                  // /page/3 max, /page ... /page/3
                  currentPage + 1 <= totalPagesInBlog
                    ? `/blog/page/${currentPage + 1}`
                    : null,
                totalCount,
                categories,
                tags,
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

        tags.forEach((tag) => {
          for (
            let currentPage = 1;
            currentPage <= Math.ceil(tag.totalCount / postsPerPage);
            currentPage++
          ) {
            if (currentPage === 1) {
              createPage({
                path: `/blog/tags/${tag.fieldValue}`,
                component: tagTemplate,
                // Data passed to context is available
                // in page queries as GraphQL variables.
                context: {
                  edges: slicePosts(tag.edges, postsPerPage, currentPage).map(
                    ({ node }) => node
                  ),
                  currentPage,
                  totalPagesInBlog: Math.ceil(tag.totalCount / postsPerPage),
                  paginationPathPrefix: `/blog/tags/${tag.fieldValue}`,
                  prevPath: null,
                  nextPath: `/blog/tags/${tag.fieldValue}/page/2`,
                  totalCount: tag.totalCount,
                  tag: tag.fieldValue,
                },
              });
            } else {
              createPage({
                path: `/blog/tags/${tag.fieldValue}/page/${currentPage}`,
                component: tagTemplate,
                context: {
                  edges: slicePosts(tag.edges, postsPerPage, currentPage).map(
                    ({ node }) => node
                  ),
                  currentPage,
                  totalPagesInBlog: Math.ceil(tag.totalCount / postsPerPage),
                  paginationPathPrefix: `/blog/tags/${tag.fieldValue}`,
                  prevPath:
                    // current index in loop minus 1
                    // for index = 2, /page/1
                    // only if its > 1 (not resulting in /page/0)
                    currentPage - 1 > 1
                      ? `/blog/tags/${tag.fieldValue}/page/${currentPage - 1}`
                      : `/blog/tags/${tag.fieldValue}`,
                  nextPath:
                    // dont make more pages than needed
                    // if I have 13 posts with 5 posts per slice
                    // I only need 3 paginated pages
                    // /page/3 max, /page ... /page/3
                    currentPage + 1 <= Math.ceil(tag.totalCount / postsPerPage)
                      ? `/blog/tags/${tag.fieldValue}/page/${currentPage + 1}`
                      : null,
                  totalCount: tag.totalCount,
                  tag: tag.fieldValue,
                },
              });
            }
          }
        });

        /*******************************************************
         * Posts Page Creation
         */

        edges.forEach((edge) => {
          createPage({
            path: edge.node.fields.slug,
            component: postTemplate,
            // Data passed to context is available
            // in page queries as GraphQL variables.
            context: {
              slug: edge.node.fields.slug,
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
              path: `/work`,
              component: workTemplate,
              // Data passed to context is available
              // in page queries as GraphQL variables.
              context: {
                // ↓ end
                edgesWork: slicePosts(edgesWork, postsPerPage, currentPage).map(
                  ({ node }) => node
                ),
                currentPage,
                totalPagesInWork,
                paginationPathPrefix: `/work`,
                prevPath: null,
                nextPath: `/work/page/2`,
                totalCountWork,
                categoriesWork,
                tagsWork,
              },
            });
          } else {
            createPage({
              path: `/work/page/${currentPage}`,
              component: workTemplate,
              // Data passed to context is available
              // in page queries as GraphQL variables.
              context: {
                edgesWork: slicePosts(edgesWork, postsPerPage, currentPage).map(
                  ({ node }) => node
                ),
                currentPage,
                totalPagesInWork,
                paginationPathPrefix: `/work`,
                prevPath:
                  // current index in loop minus 1
                  // for index = 2, /page/1
                  // only if its > 1 (not resulting in /page/0)
                  currentPage - 1 > 1
                    ? `/work/page/${currentPage - 1}`
                    : "/work",
                nextPath:
                  // dont make more pages than needed
                  // if I have 13 posts with 5 posts per slice
                  // I only need 3 paginated pages
                  // /page/3 max, /page ... /page/3
                  currentPage + 1 <= totalPagesInWork
                    ? `/work/page/${currentPage + 1}`
                    : null,
                totalCountWork,
                categoriesWork,
                tagsWork,
              },
            });
          }
        }

        /*******************************************************
         * Work Case Studies Creation
         */

        edgesWork.forEach((edgeWork) => {
          createPage({
            path: edgeWork.node.fields.slug,
            component: caseStudyTemplate,
            // Data passed to context is available
            // in page queries as GraphQL variables.
            context: {
              slug: edgeWork.node.fields.slug,
            },
          });
        });
      })
    );
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
