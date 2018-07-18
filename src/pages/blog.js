import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class BlogPage extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout location={this.props.location}>
        <div className="index-container">
          <h1>Blog Page</h1>
          <Helmet title={config.siteTitle} />
          <SEO />
          <PostListing postEdges={postEdges} />
          Hola
        </div>
      </Layout>
    );
  }
}

export default BlogPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            description
            tags
            date
          }
        }
      }
    }
  }
`;
