import localePaths from "../i18n/localePaths";

export const TEST_GATSBY_NODE_EDGES = {
  en: [
    {
      node: {
        fields: { slug: `${localePaths["en"].work}/case-study-1` },
        frontmatter: {
          title: "case study 1 title",
          date: "2020-01-20",
          category: "work",
          tags: ["react"],
          posted: true,
          snippet: "case study 1 snippet",
          twinPost: `${localePaths["es"].work}/trabajo-1`,
          locale: "en",
          cardImage: {
            childImageSharp: {
              gatsbyImageData: {
                layout: "constrained",
                backgroundColor: "#f8f8f8",
                images: {
                  fallback: {
                    src: "/static/468c3ef63672df22d054342fca5f1604/ad6de/todos_app_card_presentation.png",
                    srcSet:
                      "/static/468c3ef63672df22d054342fca5f1604/88fa3/todos_app_card_presentation.png 186w,\n/static/468c3ef63672df22d054342fca5f1604/43daa/todos_app_card_presentation.png 372w,\n/static/468c3ef63672df22d054342fca5f1604/ad6de/todos_app_card_presentation.png 744w,\n/static/468c3ef63672df22d054342fca5f1604/88dab/todos_app_card_presentation.png 1488w",
                    sizes: "(min-width: 744px) 744px, 100vw",
                  },
                  sources: [
                    {
                      srcSet:
                        "/static/468c3ef63672df22d054342fca5f1604/1a362/todos_app_card_presentation.webp 186w,\n/static/468c3ef63672df22d054342fca5f1604/bd276/todos_app_card_presentation.webp 372w,\n/static/468c3ef63672df22d054342fca5f1604/a5b0e/todos_app_card_presentation.webp 744w,\n/static/468c3ef63672df22d054342fca5f1604/d52b8/todos_app_card_presentation.webp 1488w",
                      type: "image/webp",
                      sizes: "(min-width: 744px) 744px, 100vw",
                    },
                  ],
                },
                width: 744,
                height: 558,
              },
            },
          },
        },
      },
    },
  ],
  es: [
    {
      node: {
        fields: { slug: `${localePaths["es"].work}/trabajo-1` },
        frontmatter: {
          title: "título del trabajo 1",
          date: "2020-01-20",
          category: "work",
          tags: ["react"],
          posted: true,
          snippet: "trabajo 1 snippet",
          twinPost: `${localePaths["en"].work}/case-study-1`,
          locale: "es",
          cardImage: {
            childImageSharp: {
              gatsbyImageData: {
                layout: "constrained",
                backgroundColor: "#f8f8f8",
                images: {
                  fallback: {
                    src: "/static/468c3ef63672df22d054342fca5f1604/ad6de/todos_app_card_presentation.png",
                    srcSet:
                      "/static/468c3ef63672df22d054342fca5f1604/88fa3/todos_app_card_presentation.png 186w,\n/static/468c3ef63672df22d054342fca5f1604/43daa/todos_app_card_presentation.png 372w,\n/static/468c3ef63672df22d054342fca5f1604/ad6de/todos_app_card_presentation.png 744w,\n/static/468c3ef63672df22d054342fca5f1604/88dab/todos_app_card_presentation.png 1488w",
                    sizes: "(min-width: 744px) 744px, 100vw",
                  },
                  sources: [
                    {
                      srcSet:
                        "/static/468c3ef63672df22d054342fca5f1604/1a362/todos_app_card_presentation.webp 186w,\n/static/468c3ef63672df22d054342fca5f1604/bd276/todos_app_card_presentation.webp 372w,\n/static/468c3ef63672df22d054342fca5f1604/a5b0e/todos_app_card_presentation.webp 744w,\n/static/468c3ef63672df22d054342fca5f1604/d52b8/todos_app_card_presentation.webp 1488w",
                      type: "image/webp",
                      sizes: "(min-width: 744px) 744px, 100vw",
                    },
                  ],
                },
                width: 744,
                height: 558,
              },
            },
          },
        },
      },
    },
  ],
};

export function getLocationData() {
  return {
    hash: "test-hash",
    host: "test-host",
    hostname: "test-hostname",
    href: "test-href",
    key: "test-key",
    origin: "test-origin",
    pathname: "test-pathname",
    port: "test-port",
    protocol: "test-protocol",
    search: "test-search",
    state: {},
  };
}

export function getStaticQueryData(testSlug, testTitle, testLocale) {
  return {
    allMdx: {
      edges: [
        {
          node: {
            fields: {
              slug: testSlug,
            },
            frontmatter: {
              title: testTitle,
              locale: testLocale,
            },
          },
        },
      ],
    },
  };
}
