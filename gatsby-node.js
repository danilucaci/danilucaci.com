const path = require("path");
const _ = require("lodash");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");

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
      slug = `/blog/${_.kebabCase(node.frontmatter.title)}`;
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
            allMarkdownRemark(
              limit: 2000
              sort: { fields: [fields___date], order: DESC }
              filter: { frontmatter: { posted: { eq: true } } }
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
                    date
                    posted
                  }
                }
              }
              categories: group(field: frontmatter___category) {
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
                      date
                      posted
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
                      snippet
                      tags
                      category
                      date
                      posted
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

        //  Template Pages
        const blogTemplate = path.resolve("src/pages/blog.js");
        const postPage = path.resolve("src/templates/post.js");
        const categoryPage = path.resolve("src/templates/category.js");
        const tagPage = path.resolve("src/templates/tag.js");

        // Data Sources
        const {
          totalCount,
          edges,
          categories,
          tags,
        } = result.data.allMarkdownRemark;

        // Controls
        const postsPerPage = 5;
        const totalPagesInBlog = Math.ceil(totalCount / postsPerPage);

        /********************************************************
         * Blog pagination
         *
         * First page in pagination is: /blog/
         * Next pages will be: /blog/page/1...n
         *
         * For the first page return a path of /blog
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
              context: {
                edges: slicePosts(edges, postsPerPage, currentPage).map(
                  ({ node }) => node
                ),
                currentPage,
                totalPagesInBlog,
                totalCount,
                prevPath: null,
                nextPath: `/blog/page/2`,
              },
            });
          } else {
            createPage({
              path: `/blog/page/${currentPage}`,
              component: blogTemplate,
              context: {
                edges: slicePosts(edges, postsPerPage, currentPage).map(
                  ({ node }) => node
                ),
                currentPage,
                totalPagesInBlog,
                totalCount,
                prevPath:
                  currentPage - 1 > 1
                    ? `/blog/page/${currentPage - 1}`
                    : "/blog/",
                nextPath:
                  currentPage + 1 <= totalPagesInBlog
                    ? `/blog/page/${currentPage + 1}`
                    : null,
              },
            });
          }
        }

        /*******************************************************
         * Posts Page Creation
         */

        edges.forEach((edge) => {
          createPage({
            path: edge.node.fields.slug,
            component: postPage,
            context: {
              slug: edge.node.fields.slug,
            },
          });
        });

        /*******************************************************
         * Category Page Creation
         */

        // const tagList = Array.from(tagSet);
        // tagList.forEach((tag) => {
        //   createPage({
        //     path: `/tags/${tag}/`,
        //     component: tagPage,
        //     context: {
        //       tag,
        //     },
        //   });
        // });

        // const categoryList = Array.from(categorySet);
        // categoryList.forEach((category) => {
        //   createPage({
        //     path: `/categories/${category}/`,
        //     component: categoryPage,
        //     context: {
        //       category,
        //     },
        //   });
        // });

        /**
         * Split into chunks of 5 posts per paginated page and pass them
         * into the blog template page
         */
        function slicePosts(array, postsPerPage, currentPage) {
          return array
            .slice(0)
            .slice(
              (currentPage - 1) * postsPerPage,
              currentPage * postsPerPage
            );
        }
      })
    );
  });
};
