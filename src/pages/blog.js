import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

import styled from "styled-components";
import { theme, mediaMin, rem } from "../theme/globalStyles";

import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import { H4 } from "../components/Headings/Headings";
import { Copy } from "../components/Copy/Copy";
import Tags from "../components/Tags/Tags";

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
      height: 36%;
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
      height: 36%;
      transform: skewY(-11deg);
      z-index: -1;
    }
  `};

  @media screen and (min-width: 130em) {
    &:before {
      top: -7%;
      height: 38%;
      transform: skewY(-10deg);
    }

    &:after {
      top: -8%;
      height: 38%;
      transform: skewY(-10deg);
    }
  }

  @media screen and (min-width: 170em) {
    &:before {
      top: -10%;
      height: 48%;
      transform: skewY(-12deg);
    }

    &:after {
      top: -10%;
      height: 40%;
      transform: skewY(-12deg);
    }
  }
`;

const BlogHeader = styled.header`
  max-width: ${theme.contain.blog};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${rem(56)};
  color: ${theme.colors.dark900};

  ${mediaMin.s`
    margin-bottom: ${rem(88)};
  `};

  z-index: 5;
`;

const Box = styled.div`
  background-color: ${theme.colors.gray100};
  ${theme.shadow.default};
  display: inline-block;
  vertical-align: top;

  padding: ${rem(14)} ${rem(16)};
  position: relative;

  width: 100%;
  height: 100%;
  margin-bottom: ${rem(24)};

  ${mediaMin.s`
    background-color: ${theme.colors.gray300};
    box-shadow: none;
  `};

  @media screen and (min-width: ${theme.breakpoints.m}) {
    width: calc(50% - ${theme.gutters.m});
    margin-right: ${theme.gutters.m};

    &:nth-of-type(2) {
      margin-right: 0;
    }
  }
`;

const BoxLarge = styled.div`
  background-color: ${theme.colors.gray100};
  ${theme.shadow.default};
  display: inline-block;
  vertical-align: top;

  padding: ${rem(14)} ${rem(16)};
  position: relative;

  width: 100%;
  height: 100%;
  margin-bottom: ${rem(24)};

  ${mediaMin.s`
    background-color: ${theme.colors.gray300};
    box-shadow: none;
  `};
`;

const Label = styled(H4.withComponent("label"))`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;

  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.m};

  ${"" /* Used to extend the click area of the label without having to add padding */} &:after {
    content: "";
    position: absolute;
    top: -16px;
    bottom: -16px;
    left: -16px;
    right: -16px;
  }
`;

const FirstInput = styled.input`
  display: none;

  &:checked + #box1 {
    visibility: visible;
    opacity: 1;
    transform: scaleY(1);
    position: static;
    pointer-events: auto;
  }
`;

const SecondInput = styled.input`
  display: none;

  &:checked + #box2 {
    visibility: visible;
    opacity: 1;
    transform: scaleY(1);
    position: static;
    pointer-events: auto;
  }
`;

const ThirdInput = styled.input`
  display: none;

  &:checked + #box3 {
    visibility: visible;
    opacity: 1;
    transform: scaleY(1);
    position: static;
    pointer-events: auto;
  }
`;

const BoxContent = styled.div`
  visibility: hidden;
  opacity: 0;
  transform: scaleY(0);
  transition: all 0.1s ease-out;
  will-change: transform, opacity, position;
  transform-origin: 0% 0%;
  overflow: hidden;
  position: absolute;
  pointer-events: none;
  padding-top: ${rem(16)};

  ${mediaMin.s`
    display: block;
    visibility: visible;
    opacity: 1;
    transform: none;
    position: static;
    pointer-events: auto;
  `};
`;

const Arrow = styled.span`
  position: absolute;
  right: 24px;
  top: 24px;
  width: 12px;
  height: 12px;
  border-bottom: 4px solid black;
  border-right: 4px solid black;
  transform: rotate(45deg);
  transition: all 0.2s ease;

  &:hover {
    transform: rotate(-135deg);
  }

  ${mediaMin.s`
    display: none;
  `};
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
            <Box>
              <Arrow />
              <Label htmlFor="inputOne">What I write about</Label>
              <FirstInput type="checkbox" id="inputOne" />
              <BoxContent id="box1">
                <Copy>
                  How i built this in Hugo and optimized for 100% Speed Index
                  with Google.
                </Copy>
              </BoxContent>
            </Box>
            <Box>
              <Arrow />
              <Label htmlFor="inputTwo">What I write about</Label>
              <SecondInput type="checkbox" id="inputTwo" />
              <BoxContent id="box2">
                <Copy>
                  How i built this in Hugo and optimized for 100% Speed Index
                  with Google.
                </Copy>
              </BoxContent>
            </Box>
            <BoxLarge>
              <Arrow />
              <Label htmlFor="inputThree">Explore by tags</Label>
              <ThirdInput type="checkbox" id="inputThree" />
              <BoxContent id="box3">
                <Tags tagsInPost={allTags} />
              </BoxContent>
            </BoxLarge>
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
