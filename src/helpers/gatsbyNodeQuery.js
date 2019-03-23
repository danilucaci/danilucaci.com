const gatsbyNodeQuery = (locale) =>
  `blog: allMarkdownRemark(
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
          date(formatString: "YYYY-MM-DD")
          category
          tags
          posted
          snippet
          twinPost
          locale
          image {
            childImageSharp {
              fluid(maxWidth: 1128) {
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
          date(formatString: "YYYY-MM-DD")
          category
          posted
          twinPost
          locale
        }
      }
    }
  }`;

module.exports = gatsbyNodeQuery;
