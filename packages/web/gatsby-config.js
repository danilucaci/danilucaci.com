require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// const urljoin = require("url-join");
const config = require("./data/SiteConfig");

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    siteUrl: `${config.siteUrl}`,
    // rssMetadata: {
    //   site_url: `${config.siteUrl}`,
    //   feed_url: urljoin(config.siteUrl, config.siteRss),
    //   title: config.siteTitle,
    //   description: config.siteDescription,
    //   image_url: `${config.siteUrl}/logos/logo-512.png`,
    //   copyright: config.copyright,
    // },
  },
  // https://www.gatsbyjs.com/docs/api-proxy/
  proxy: {
    prefix: "/api",
    url: process.env.GATSBY_CONTACT_BASE_URL,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-lodash",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        fileName: false,
        displayName: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/posts/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "work",
        path: `${__dirname}/work/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "legal",
        path: `${__dirname}/legal/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        options: {
          timeToRead: (wordCount) => wordCount / 42,
        },
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1128,
              linkImagesToOriginal: false,
              withWebp: true,
              backgroundColor: "transparent",
              // showCaptions wraps the image in a figure
              showCaptions: true,
            },
          },
          "gatsby-remark-copy-linked-files",
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer",
            },
          },
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              offsetY: "0",
              icon:
                '<svg aria-hidden="true" height="24" width="24" version="1.1" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>',
              className: "headings-anchor",
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
            },
          },
          // TODO: Replace with "mdx-component-autolink-headers"
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap.xml",
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page`
        // and all routes beginning with `category`
        // exclude: ["/es/404"],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        // This path is relative to the root of the site.
        icon: "src/images/android-chrome-512x512.png",
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: "use-credentials",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        appendScript: require.resolve(
          `./src/helpers/workboxSafariVideoCachePlugins.js`,
        ),
      },
    },
  ],
};
