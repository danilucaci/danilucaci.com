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
    const tagsTotalCount = this.props.data.allMarkdownRemark.group;

    return (
      <Layout location={this.props.location}>
        <div className="index-container">
          <h1>Blog Page</h1>
          <Helmet title={config.siteTitle} />
          <SEO />
          <PostListing postEdges={postEdges} tagsTotalCount={tagsTotalCount} />
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
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
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
          }
        }
      }
    }
  }
`;
