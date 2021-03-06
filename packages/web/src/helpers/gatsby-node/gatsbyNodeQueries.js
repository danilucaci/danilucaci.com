const GATSBY_NODE_QUERY = `
  query data($locale: String!) {
    blog: allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          posted: { eq: true }
          category: { eq: "blog" }
          locale: { eq: $locale }
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
            date(formatString: "YYYY-MM-DD")
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
              date(formatString: "YYYY-MM-DD")
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
    work: allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          posted: { eq: true }
          category: { eq: "work" }
          locale: { eq: $locale }
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
            date(formatString: "YYYY-MM-DD")
            category
            tags
            posted
            snippet
            twinPost
            locale
            cardImage {
              childImageSharp {
                fluid(maxWidth: 744) {
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  aspectRatio
                  sizes
                  base64
                }
              }
            }
          }
        }
      }
    }
    legal: allMdx(
      limit: 100
      filter: {
        frontmatter: {
          posted: { eq: true }
          category: { eq: "legal" }
          locale: { eq: $locale }
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
            date(formatString: "YYYY-MM-DD")
            category
            posted
            twinPost
            locale
          }
        }
      }
    }
  }
`;

module.exports = GATSBY_NODE_QUERY;
