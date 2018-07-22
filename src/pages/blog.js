import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

import styled from "styled-components";
import { theme, mediaMin, rem } from "../theme/globalStyles";

import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

const Wrapper = styled.div`
  max-width: ${theme.contain.content};
  margin: 0 auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};
`;

class BlogPage extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    // const tagsTotalCount = this.props.data.allMarkdownRemark.group;

    return (
      <Layout location={this.props.location}>
        <Wrapper>
          <h1>Blog Page</h1>
          <Helmet title={config.siteTitle} />
          <SEO />
          <PostListing postEdges={postEdges} />
          {/* <PostListing postEdges={postEdges} tagsTotalCount={tagsTotalCount} /> */}
          Hola
        </Wrapper>
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
