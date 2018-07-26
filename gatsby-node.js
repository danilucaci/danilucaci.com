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
    const postPage = path.resolve("src/templates/post.js");
    const tagPage = path.resolve("src/templates/tag.js");
    const categoryPage = path.resolve("src/templates/category.js");
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    tags
                    category
                  }
                  fields {
                    slug
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

        const tagSet = new Set();
        const categorySet = new Set();

        result.data.allMarkdownRemark.edges.forEach((edge) => {
          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach((tag) => {
              tagSet.add(tag);
            });
          }

          if (edge.node.frontmatter.category) {
            categorySet.add(edge.node.frontmatter.category);
          }

          createPage({
            path: edge.node.fields.slug,
            component: postPage,
            context: {
              slug: edge.node.fields.slug,
            },
          });
        });

        const tagList = Array.from(tagSet);
        tagList.forEach((tag) => {
          createPage({
            path: `/tags/${tag}/`,
            component: tagPage,
            context: {
              tag,
            },
          });
        });

        const categoryList = Array.from(categorySet);
        categoryList.forEach((category) => {
          createPage({
            path: `/categories/${category}/`,
            component: categoryPage,
            context: {
              category,
            },
          });
        });
      })
    );
  });
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
                  frontmatter {
                    title
                    date
                    posted
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

        const totalPosts = result.data.allMarkdownRemark.totalCount;

        const blogTemplate = path.resolve("src/pages/blog.js");

        const postsPerPage = 5;
        const totalPages = Math.ceil(totalPosts / postsPerPage);

        for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
          if (currentPage === 1) {
            createPage({
              path: `/blog`,
              component: blogTemplate,
              context: {
                currentPage,
                totalPages,
                prevPath: null,
                nextPath: `/blog/page/2`,
              },
            });
          } else {
            createPage({
              path: `/blog/page/${currentPage}`,
              component: blogTemplate,
              context: {
                currentPage,
                totalPages,
                prevPath:
                  currentPage - 1 > 1
                    ? `/blog/page/${currentPage - 1}`
                    : "/blog/",
                nextPath:
                  currentPage + 1 <= totalPages
                    ? `/blog/page/${currentPage + 1}`
                    : null,
              },
            });
          }
        }
      })
    );
  });
};
