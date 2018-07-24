import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

class CategoryTemplate extends Component {
  render() {
    const { category } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const tagsTotalCount = this.props.data.allMarkdownRemark.group;

    return (
      <Layout location={this.props.location}>
        <div className="">
          <Helmet
            title={`Posts in category "${category}" | ${config.siteTitle}`}
          />
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

export default CategoryTemplate;

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
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
            date
          }
        }
      }
    }
  }
`;
