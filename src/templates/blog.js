import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";

import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import { theme, mediaMin, mediaMax, rem } from "../theme/globalStyles";

import PostListing from "../components/PostListing/PostListing";
import Tags from "../components/Tags/Tags";
import Pagination from "../components/Pagination/Pagination";
// import { Icon } from "../components/Icon/Icon";

const BlogWrapper = styled.div`
  max-width: ${theme.contain.blog};
  margin-left: auto;
  margin-right: auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};
`;

const BlogHeader = styled.header`
  margin-bottom: ${rem(56)};
  color: ${theme.colors.dark900};

  ${mediaMin.s`
    margin-bottom: ${rem(88)};
  `};
`;

const BlogInfo = styled.div`
  ${mediaMin.l``};
`;

const TagsWrapper = styled.div`
  margin-top: ${rem(16)};
`;

const BlogTitle = styled.h2`
font-size: ${theme.fontSizes.h2s};

${mediaMin.xs`
  font-size: ${theme.fontSizes.h2};
`}

line-height: ${theme.lineHeights.h2s};

${mediaMin.xs`
  line-height: ${theme.lineHeights.h2};
`}`;

const TagsTitle = styled.h4``;

// const CollapsibleContainer = styled.div`
//   background-color: ${theme.colors.gray100};
//   ${theme.shadow.default};

//   padding: ${rem(14)} ${rem(16)};
//   position: relative;

//   &:focus {
//     outline: 1px solid red;
//   }

//   width: 100%;
//   height: 100%;

//   ${mediaMin.s`
//     padding: 0;
//     background-color: transparent;
//     box-shadow: none;
//   `};
// `;

// const CollapsibleContent = styled.div`
//   opacity: 0;
//   transform: scaleY(0);
//   transition: all 0.15s ease-out;
//   will-change: transform, opacity, position;
//   transform-origin: top center;
//   overflow: hidden;
//   position: absolute;
//   padding-top: ${rem(16)};

//   ${(props) =>
//     props.showContent &&
//     css`
//       opacity: 1;
//       transform: none;
//       position: static;
//       overflow: visible;
//     `};

//   ${mediaMin.s`
//     padding-top: ${rem(8)};
//     opacity: 1;
//     overflow: visible;
//     transform: none;
//     position: static;
//   `};
// `;

// const BlogExploreTagsContent = styled(CollapsibleContent)`
//   padding-top: 0;

//   ${mediaMin.s`
//     padding-top: 0;
//   `};
// `;

// const StyledIcon = styled(Icon)`
//   float: right;
//   margin-top: ${rem(4)};
//   transition: transform 0.2s ease;
//   transform-origin: 50% 50%;
//   transform: rotate(${(props) => (props.animate ? "0deg" : "180deg")});

//   ${mediaMin.s`
//     display: none;
//   `};
// `;

class BlogPage extends Component {
  state = {
    // blogWriteAboutOpen: false,
    // blogWhatElseOpen: false,
    // blogExploreTagsOpen: false,
  };

  // closeOthers = (from) => {
  //   const currState = this.state;
  //   let stateKeys = Object.keys(currState);
  //   let others = stateKeys.filter((key) => key !== `${from}`);

  //   others.forEach((other) => {
  //     if (currState[`${other}`]) {
  //       this.setState((prevState) => ({
  //         [`${other}`]: !prevState[`${other}`],
  //       }));
  //     }
  //   });
  // };

  // openBlogExploreTags = () => {
  //   this.setState((prevState) => ({
  //     blogExploreTagsOpen: !prevState.blogExploreTagsOpen,
  //   }));

  // this.closeOthers("blogExploreTagsOpen");
  // };

  render() {
    const {
      currentPage,
      totalPagesInBlog,
      paginationPathPrefix,
      prevPath,
      nextPath,
      edges,
    } = this.props.pageContext;

    const frontMatterTags = this.props.data.allMarkdownRemark;
    let allTags = [];

    frontMatterTags.tags.forEach((tag) => {
      allTags.push(tag.fieldValue);
    });

    return (
      <Layout location={this.props.location}>
        <SiteHeader />
        <Main role="main">
          <BlogWrapper>
            <Helmet
              title={`danilucaci.com Personal Blog - ${config.siteTitle}`}
            />
            <SEO />
            <BlogHeader>
              <BlogInfo>
                <BlogTitle as="h1">My thoughts on UX, UI and Code.</BlogTitle>
              </BlogInfo>
              <TagsWrapper>
                {/* <CollapsibleContainer
                  onClick={this.openBlogExploreTags}
                  contentVisible={this.state.blogExploreTagsOpen}
                >
                  <StyledIcon animate={this.state.blogExploreTagsOpen}>
                    <use xlinkHref="#down" />
                  </StyledIcon> */}
                <TagsTitle>Explore by tags</TagsTitle>
                {/* <BlogExploreTagsContent
                    showContent={this.state.blogExploreTagsOpen}
                  > */}
                <Tags tagsInPost={allTags} />
                {/* </BlogExploreTagsContent>
                </CollapsibleContainer> */}
              </TagsWrapper>
            </BlogHeader>
            <PostListing edges={edges} />
            {totalPagesInBlog > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPagesInBlog}
                paginationPathPrefix={paginationPathPrefix}
                prevPath={prevPath}
                nextPath={nextPath}
              />
            )}
          </BlogWrapper>
        </Main>
        <SiteFooter />
      </Layout>
    );
  }
}

export default BlogPage;

export const pageQuery = graphql`
  query allTagsInBlog {
    allMarkdownRemark(
      limit: 200
      sort: { fields: [fields___date], order: DESC }
      filter: {
        frontmatter: { posted: { eq: true }, category: { ne: "work" } }
      }
    ) {
      tags: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
