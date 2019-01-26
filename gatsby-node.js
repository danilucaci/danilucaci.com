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

    Object.keys(locales).map((lang) => {
      // const localizedPath = locales[lang].default
      //   ? page.path
      //   : locales[lang].path + page.path;
      let localizedPath = "";
      // Translate page urls
      if (locales[lang].default) {
        localizedPath = page.path;
      } else {
        if (page.path.includes("/about-me/")) {
          localizedPath = locales[lang].path + "/sobre-mi/";
        } else if (page.path.includes("/contact/")) {
          localizedPath = locales[lang].path + "/contacto/";
        } else {
          localizedPath = locales[lang].path + page.path;
        }
      }

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang,
        },
      });
    });

    resolve();
  });
};

// Add next and previous posts links based on posted date
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
      if (node.frontmatter.category === "work") {
        if (node.frontmatter.lang === "en") {
          slug = `/work/${_.kebabCase(node.frontmatter.title)}`;
        }

        if (node.frontmatter.lang === "es") {
          slug = `/trabajos/${_.kebabCase(node.frontmatter.title)}`;
        }
      }
      if (node.frontmatter.category === "blog") {
        if (node.frontmatter.lang === "en") {
          slug = `/blog/${_.kebabCase(node.frontmatter.title)}`;
        }
        if (node.frontmatter.lang === "es") {
          slug = `/es/blog/${_.kebabCase(node.frontmatter.title)}`;
        }
      }
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      if (node.frontmatter.lang === "en") {
        slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
      }

      if (node.frontmatter.lang === "es") {
        slug = `/es/${parsedFilePath.dir}/${parsedFilePath.name}/`;
      }
    } else if (parsedFilePath.dir === "") {
      if (node.frontmatter.lang === "en") {
        slug = `${parsedFilePath.name}/`;
      }

      if (node.frontmatter.lang === "es") {
        slug = `/es/${parsedFilePath.dir}/`;
      }
    } else {
      if (node.frontmatter.lang === "en") {
        slug = `${parsedFilePath.name}/`;
      }

      if (node.frontmatter.lang === "es") {
        slug = `/es/${parsedFilePath.dir}/`;
      }
    }

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
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

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });

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

  Object.keys(locales).map((lang) => {
    let langUrlPrefix = "";
    let langUrlWorkPrefix = "";
    let paginationPagePrefix = "";

    if (lang === "en") {
      langUrlPrefix = "/";
      langUrlWorkPrefix = "work";
      paginationPagePrefix = "page";
    }

    if (lang === "es") {
      langUrlPrefix = "/es/";
      langUrlWorkPrefix = "trabajos";
      paginationPagePrefix = "pagina";
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
                  posted: { eq: true }, 
                  category: { ne: "work" }, 
                  lang: { eq: "${lang}" }
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
                    snippet
                    tags
                    date(formatString: "DD MMMM YYYY")
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
                      date(formatString: "DD MMMM YYYY")
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
                  posted: { eq: true }, 
                  category: { eq: "work" },
                  lang: { eq: "${lang}" }
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
                    tags
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
                      tags
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

          // Data Sources
          // Blog
          const totalCountBlog = result.data.blog.totalCount;
          const edgesBlog = result.data.blog.edges;
          const tagsBlog = result.data.blog.tags;

          // Work / case studies
          const totalCountWork = result.data.work.totalCount;
          const edgesWork = result.data.work.edges;
          const tagsWork = result.data.work.tags;

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
                path: `${langUrlPrefix}blog`,
                component: blogTemplate,
                // Data passed to context is available in page queries as GraphQL variables.
                context: {
                  // ↓ end
                  edges: slicePosts(edgesBlog, postsPerPage, currentPage).map(
                    ({ node }) => node
                  ),
                  currentPage,
                  totalPagesInBlog,
                  paginationPathPrefix: `${langUrlPrefix}blog`,
                  prevPath: null,
                  nextPath: `${langUrlPrefix}blog/${paginationPagePrefix}/2`,
                  totalCountBlog,
                  tagsBlog,
                  lang,
                },
              });
            } else {
              createPage({
                path: `${langUrlPrefix}blog/${paginationPagePrefix}/${currentPage}`,
                component: blogTemplate,
                // Data passed to context is available in page queries as GraphQL variables.
                context: {
                  edges: slicePosts(edgesBlog, postsPerPage, currentPage).map(
                    ({ node }) => node
                  ),
                  currentPage,
                  totalPagesInBlog,
                  paginationPathPrefix: `${langUrlPrefix}blog`,
                  // current index in loop minus 1
                  // for index = 2, /page/1
                  // only if its > 1 (not resulting in /page/0)
                  prevPath:
                    currentPage - 1 > 1
                      ? `${langUrlPrefix}blog/${paginationPagePrefix}/${currentPage -
                          1}`
                      : `${langUrlPrefix}blog`,
                  // don't make more pages than needed
                  // if I have 13 posts with 5 posts per slice
                  // I only need 3 paginated pages
                  // /page/3 max, /page ... /page/3
                  nextPath:
                    currentPage + 1 <= totalPagesInBlog
                      ? `${langUrlPrefix}blog/${paginationPagePrefix}/${currentPage +
                          1}`
                      : null,
                  totalCountBlog,
                  tagsBlog,
                  lang,
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
                  path: `${langUrlPrefix}blog/tags/${tag.fieldValue}`,
                  component: tagTemplate,
                  // Data passed to context is available in page queries as GraphQL variables.
                  context: {
                    edges: slicePosts(tag.edges, postsPerPage, currentPage).map(
                      ({ node }) => node
                    ),
                    currentPage,
                    totalPagesInBlog: Math.ceil(tag.totalCount / postsPerPage),
                    paginationPathPrefix: `${langUrlPrefix}blog/tags/${
                      tag.fieldValue
                    }`,
                    prevPath: null,
                    nextPath: `${langUrlPrefix}blog/tags/${
                      tag.fieldValue
                    }/${paginationPagePrefix}/2`,
                    totalCount: tag.totalCount,
                    tag: tag.fieldValue,
                    lang,
                  },
                });
              } else {
                createPage({
                  path: `${langUrlPrefix}blog/tags/${
                    tag.fieldValue
                  }/${paginationPagePrefix}/${currentPage}`,
                  component: tagTemplate,
                  context: {
                    edges: slicePosts(tag.edges, postsPerPage, currentPage).map(
                      ({ node }) => node
                    ),
                    currentPage,
                    totalPagesInBlog: Math.ceil(tag.totalCount / postsPerPage),
                    paginationPathPrefix: `${langUrlPrefix}blog/tags/${
                      tag.fieldValue
                    }`,
                    // current index in loop minus 1
                    // for index = 2, /page/1
                    // only if its > 1 (not resulting in /page/0)
                    prevPath:
                      currentPage - 1 > 1
                        ? `${langUrlPrefix}blog/tags/${
                            tag.fieldValue
                          }/${paginationPagePrefix}/${currentPage - 1}`
                        : `${langUrlPrefix}blog/tags/${tag.fieldValue}`,
                    // don't make more pages than needed
                    // if I have 13 posts with 5 posts per slice
                    // I only need 3 paginated pages
                    // /page/3 max, /page ... /page/3
                    nextPath:
                      currentPage + 1 <=
                      Math.ceil(tag.totalCount / postsPerPage)
                        ? `${langUrlPrefix}blog/tags/${
                            tag.fieldValue
                          }/${paginationPagePrefix}/${currentPage + 1}`
                        : null,
                    totalCount: tag.totalCount,
                    tag: tag.fieldValue,
                    lang,
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
              // Data passed to context is available in page queries as GraphQL variables.
              context: {
                slug: edge.node.fields.slug,
                lang,
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
                path: langUrlPrefix + langUrlWorkPrefix,
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
                  paginationPathPrefix: langUrlPrefix + langUrlWorkPrefix,
                  prevPath: null,
                  nextPath:
                    langUrlPrefix +
                    langUrlWorkPrefix +
                    paginationPagePrefix +
                    "/2",
                  totalCountWork,
                  tagsWork,
                  lang,
                },
              });
            } else {
              createPage({
                path:
                  langUrlPrefix +
                  langUrlWorkPrefix +
                  "/" +
                  paginationPagePrefix +
                  currentPage,
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
                  paginationPathPrefix: langUrlPrefix + langUrlWorkPrefix,
                  // current index in loop minus 1
                  // for index = 2, /page/1
                  // only if its > 1 (not resulting in /page/0)
                  prevPath:
                    currentPage - 1 > 1
                      ? langUrlPrefix +
                        langUrlWorkPrefix +
                        "/" +
                        paginationPagePrefix +
                        currentPage -
                        1
                      : langUrlPrefix + langUrlWorkPrefix,
                  // don't make more pages than needed
                  // if I have 13 posts with 5 posts per slice
                  // I only need 3 paginated pages
                  // /page/3 max, /page ... /page/3
                  nextPath:
                    currentPage + 1 <= totalPagesInWork
                      ? langUrlPrefix +
                        langUrlWorkPrefix +
                        "/" +
                        paginationPagePrefix +
                        currentPage +
                        1
                      : null,
                  totalCountWork,
                  tagsWork,
                  lang,
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
              // Data passed to context is available in page queries as GraphQL variables.
              context: {
                slug: edgeWork.node.fields.slug,
                lang,
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
