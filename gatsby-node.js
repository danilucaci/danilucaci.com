const path = require("path");
const { kebabCase } = require("lodash");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const GATSBY_NODE_QUERY = require("./src/helpers/gatsby-node/gatsbyNodeQueries");
const {
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
} = require("./src/helpers/gatsby-node/createPages");
const slicePosts = require("./src/helpers/gatsby-node/slicePosts");

// Create pages with translated url for localePaths
const localePaths = require("./src/i18n/localePaths");

// Controls
// Limit of posts to show per paginated page
const POSTS_PER_PAGE = 5;

// Template Pages Path
const blogTemplate = path.resolve("src/templates/blog.js");
const postTemplate = path.resolve("src/templates/post.js");
const tagTemplate = path.resolve("src/templates/tag.js");
const workTemplate = path.resolve("src/templates/work.js");
const caseStudyTemplate = path.resolve("src/templates/caseStudy.js");
const legalTemplate = path.resolve("src/templates/legal.js");

// For importing jsx components in mdx
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};

exports.onCreatePage = ({ page, actions, reporter }) => {
  const { createPage, deletePage } = actions;

  return new Promise((resolve) => {
    // First delete the page made by gatsby
    deletePage(page);

    Object.keys(localePaths).map((locale) => {
      let localizedPath = "";

      // Remove trailing slash from page path
      let hasTrailingSlash = page.path.endsWith("/") && page.path.length > 2;

      // Create default english urls
      if (localePaths[locale].default) {
        localizedPath = hasTrailingSlash ? page.path.slice(0, -1) : page.path;
      }

      // Translate urls to spanish
      if (!localePaths[locale].default) {
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
            localizedPath =
              localePaths[locale].siteLocalePrefix + page.path.slice(0, -1);
          }
        }
      }

      if (!localizedPath) {
        reporter.panic("onCreatePage: Failed to convert the localizedPath");
        return;
      }

      createPage({
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

exports.onCreateNode = ({ node, actions, getNode, reporter }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    let slug = "";

    if (node.frontmatter && node.frontmatter.slug) {
      if (node.frontmatter.category === "work") {
        if (node.frontmatter.locale === "en") {
          slug = `${localePaths["en"].work}/${kebabCase(
            node.frontmatter.slug,
          )}`;
        }

        if (node.frontmatter.locale === "es") {
          slug = `${localePaths["es"].work}/${kebabCase(
            node.frontmatter.slug,
          )}`;
        }
      } else if (node.frontmatter.category === "blog") {
        if (node.frontmatter.locale === "en") {
          slug = `${localePaths["en"].blog}/${kebabCase(
            node.frontmatter.slug,
          )}`;
        }

        if (node.frontmatter.locale === "es") {
          slug = `${localePaths["es"].blog}/${kebabCase(
            node.frontmatter.slug,
          )}`;
        }
      } else if (node.frontmatter.category === "legal") {
        if (node.frontmatter.locale === "en") {
          slug = `/${kebabCase(node.frontmatter.slug)}`;
        } else if (node.frontmatter.locale === "es") {
          slug = `/es/${kebabCase(node.frontmatter.slug)}`;
        }
      }
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `${parsedFilePath.name}/`;
    } else {
      slug = `${parsedFilePath.name}/`;
    }

    if (!slug) {
      reporter.panic("onCreateNode: Failed to create the slug");
      return;
    }

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  return Promise.all(
    Object.entries(localePaths).map(async ([locale, paths]) => {
      const {
        work: workPath,
        paginationName: paginationName,
        blog: blogPath,
        tags: tagsPath,
      } = paths;

      try {
        const { data = null, error = null } = await graphql(GATSBY_NODE_QUERY, {
          locale: locale,
        });

        if (error) {
          // eslint-disable-next-line no-console
          console.log(error);
          reporter.panic("Failed to get the GATSBY_NODE_QUERY data");
          return;
        }

        if (!data.blog.edges || !data.work.edges || !data.legal.edges) {
          reporter.panic("createPages: Missing edges fields");
          return;
        }

        // Blog Edges
        const totalCountBlog = data.blog.totalCount;
        const edgesBlog = data.blog.edges;
        const tagsBlog = data.blog.tags;

        // Legal Docs
        const edgesLegal = data.legal.edges;

        // Work / Case Studies
        const totalCountWork = data.work.totalCount;
        const edgesWork = data.work.edges;

        // Total amount of paginated pages with 5 posts each
        // amount of pages in the blog / 5
        const totalPagesInBlog = Math.ceil(totalCountBlog / POSTS_PER_PAGE);
        const totalPagesInWork = Math.ceil(totalCountWork / POSTS_PER_PAGE);

        // Create blog posts pages
        createPagesWithTwinPost({
          createPage: createPage,
          edges: edgesBlog,
          template: postTemplate,
          locale: locale,
        });

        // Create work / case studies pages
        createPagesWithTwinPost({
          createPage: createPage,
          edges: edgesWork,
          template: caseStudyTemplate,
          locale: locale,
        });

        // Create legal pages
        createLegalPages({
          createPage: createPage,
          edges: edgesLegal,
          template: legalTemplate,
          locale: locale,
        });

        /*******************************************************
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
          currentPage += 1
        ) {
          const isFirstPage = currentPage === 1;

          createPage({
            path: getBlogPaginationCurrentPath({
              isFirstPage: isFirstPage,
              currentPage: currentPage,
              blogPath: blogPath,
              paginationName: paginationName,
            }),
            component: blogTemplate,
            context: {
              currentPage: currentPage,
              totalPagesInBlog: totalPagesInBlog,
              paginationPathPrefix: blogPath,
              totalCountBlog: totalCountBlog,
              locale: locale,
              edges: slicePosts({
                array: edgesBlog,
                currentPage: currentPage,
                postsPerPage: POSTS_PER_PAGE,
              }).map(({ node }) => node),
              prevPath: getBlogPaginationPrevPath({
                isFirstPage: isFirstPage,
                currentPage: currentPage,
                blogPath: blogPath,
                paginationName: paginationName,
              }),
              nextPath: getBlogPaginationNextPath({
                isFirstPage: isFirstPage,
                currentPage: currentPage,
                blogPath: blogPath,
                paginationName: paginationName,
                totalPagesInBlog: totalPagesInBlog,
              }),
            },
          });
        }

        /*******************************************************
         * Tags pagination
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
            currentPage <= Math.ceil(tag.totalCount / POSTS_PER_PAGE);
            currentPage += 1
          ) {
            const isFirstPage = currentPage === 1;

            createPage({
              path: getBlogTagsPaginationCurrentPath({
                isFirstPage: isFirstPage,
                currentPage: currentPage,
                blogPath: blogPath,
                paginationName: paginationName,
                tagsPath: tagsPath,
                tagName: tag.fieldValue,
              }),
              component: tagTemplate,
              context: {
                currentPage: currentPage,
                totalPagesInBlog: Math.ceil(tag.totalCount / POSTS_PER_PAGE),
                paginationPathPrefix: blogPath + "/tags/" + tag.fieldValue,
                tag: tag.fieldValue,
                totalCount: tag.totalCount,
                locale: locale,
                edges: slicePosts({
                  array: tag.edges,
                  currentPage: currentPage,
                  postsPerPage: POSTS_PER_PAGE,
                }).map(({ node }) => node),
                prevPath: getBlogTagsPaginationPrevPath({
                  isFirstPage: isFirstPage,
                  currentPage: currentPage,
                  blogPath: blogPath,
                  paginationName: paginationName,
                  tagsPath: tagsPath,
                  tagName: tag.fieldValue,
                }),
                nextPath: getBlogTagsPaginationNextPath({
                  isFirstPage: isFirstPage,
                  currentPage: currentPage,
                  blogPath: blogPath,
                  paginationName: paginationName,
                  tagsPath: tagsPath,
                  tagName: tag.fieldValue,
                  totalCount: tag.totalCount,
                  postsPerPage: POSTS_PER_PAGE,
                }),
              },
            });
          }
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
          currentPage += 1
        ) {
          const isFirstPage = currentPage === 1;

          createPage({
            path: getWorkPaginationCurrentPath({
              isFirstPage: isFirstPage,
              currentPage: currentPage,
              workPath: workPath,
              paginationName: paginationName,
            }),
            component: workTemplate,
            context: {
              currentPage: currentPage,
              totalPagesInWork: totalPagesInWork,
              paginationPathPrefix: workPath,
              totalCountWork: totalCountWork,
              locale: locale,
              edgesWork: slicePosts({
                array: edgesWork,
                currentPage: currentPage,
                postsPerPage: POSTS_PER_PAGE,
              }).map((edge) => edge),
              prevPath: getWorkPaginationPrevPath({
                isFirstPage: isFirstPage,
                currentPage: currentPage,
                workPath: workPath,
                paginationName: paginationName,
              }),
              nextPath: getWorkPaginationNextPath({
                isFirstPage: isFirstPage,
                currentPage: currentPage,
                workPath: workPath,
                paginationName: paginationName,
                totalPagesInWork: totalPagesInWork,
              }),
            },
          });
        }
      } catch (error) {
        reporter.panic(error.message);
      }
    }),
  );
};
