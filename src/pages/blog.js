import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

import styled from "styled-components";
import { theme, mediaMin, rem } from "../theme/globalStyles";

import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import { H1, H2, H3, H4 } from "../components/Headings/Headings";
import { Copy } from "../components/Copy/Copy";
import Tags from "../components/Tags/Tags";
import { BlogBackground } from "../components/Illustrations/Illustrations";

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

const StyledBlogBackground = styled.div`
  ${mediaMin.s`
    &:before {
      content: "";
      background-color: ${theme.colors.gray300};
      display: block;
      position: absolute;
      top: -5%;
      left: 0;
      width: 50%;
      height: 33%;
      transform: skewY(-11deg);
      z-index: -1;
    }

    &:after {
      content: "";
      background-color: ${theme.colors.gray300};
      display: block;
      position: absolute;
      top: -5%;
      right: 0;
      width: 50%;
      height: 35%;
      transform: skewY(-11deg);
      z-index: -1;
    }
  `};
`;

const BlogHeader = styled.header`
  max-width: ${theme.contain.blog};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${rem(56)};

  ${mediaMin.s`
    margin-bottom: ${rem(88)};
  `};

  z-index: 5;
`;

const ColTwo = styled.div`
  display: inline-block;
  vertical-align: top;

  width: 100%;
  height: 100%;
  margin-bottom: ${rem(24)};

  @media screen and (min-width: ${theme.breakpoints.m}) {
    width: calc(50% - ${theme.gutters.m});
    margin-right: ${theme.gutters.m};

    &:nth-of-type(2) {
      margin-right: 0;
    }
  }
`;

const ColOne = styled.div`
  display: inline-block;
  vertical-align: top;

  width: 100%;
  height: 100%;
  margin-bottom: ${rem(24)};
`;

class BlogPage extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    // const tagsTotalCount = this.props.data.allMarkdownRemark.group;
    let tagsList = [];
    let allTags = [];

    postEdges.forEach((postEdge) => {
      tagsList.push(...postEdge.node.frontmatter.tags);
    });

    allTags = Array.from(new Set(tagsList));

    return (
      <Layout location={this.props.location}>
        <StyledBlogBackground />
        <Wrapper>
          <Helmet title={config.siteTitle} />
          <SEO />
          <BlogHeader>
            <ColTwo>
              <H3>What I write about</H3>
              <Copy>
                How i built this in Hugo and optimized for 100% Speed Index with
                Google.
              </Copy>
            </ColTwo>
            <ColTwo>
              <H3>What else</H3>
              <Copy>
                How i built this in Hugo and optimized for 100% Speed Index with
                Google.
              </Copy>
            </ColTwo>
            <ColOne>
              <H3>Explore by tags</H3>
              <Tags tagsInPost={allTags} />
            </ColOne>
          </BlogHeader>
          <PostListing postEdges={postEdges} />
          {/* <PostListing postEdges={postEdges} tagsTotalCount={tagsTotalCount} /> */}
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
