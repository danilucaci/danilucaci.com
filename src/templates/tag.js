import React, { Component } from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import { theme, mediaMin, mediaMax, rem } from "../theme/globalStyles";
import config from "../../data/SiteConfig";

import PostListing from "../components/PostListing/PostListing";
import Tags from "../components/Tags/Tags";
import Pagination from "../components/Pagination/Pagination";
// import { Icon } from "../components/Icon/Icon";
import { SectionHeader } from "../components/Headings/Headings";

const TagWrapper = styled.div`
  max-width: ${theme.contain.blog};
  margin: 0 auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};
`;

const StyledSectionHeader = styled(SectionHeader)``;

const PostsFor = styled.span`
  color: ${theme.colors.dark700};
  font-size: ${theme.fontSizes.sectionHeader};
  line-height: ${theme.lineHeights.sectionHeader};
  letter-spacing: ${theme.letterSpacing.sectionHeader};
  text-transform: uppercase;

  display: block;
`;

const TagHeader = styled.header`
  margin-bottom: ${rem(56)};
  color: ${theme.colors.dark900};

  ${mediaMin.s`
    margin-bottom: ${rem(88)};
  `};

  ${mediaMin.l`
    margin-bottom: ${rem(128)};
  `};
`;

const TagTitleWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 100%;

  ${mediaMin.l`
    margin-right: ${rem(12)};
    width: calc(50% - ${rem(12)});
  `};
`;

const TagTitle = styled.span`
  color: ${theme.colors.dark900};
  display: block;

  font-weight: 700;
  font-style: normal;
  letter-spacing: ${theme.letterSpacing.h2};

  .fonts-loaded & {
    font-family: ${theme.fonts.header};
  }

  font-size: ${theme.fontSizes.h2s};

  ${mediaMin.xs`
    font-size: ${theme.fontSizes.h2};
  `}

  line-height: ${theme.lineHeights.h2s};

  ${mediaMin.xs`
    line-height: ${theme.lineHeights.h2};
  `}
`;

const OtherTagsWrapper = styled.div`
  ${mediaMin.l`
    display: inline-block;
    vertical-align: top;
    margin-left: ${rem(12)};
    width: calc(50% - ${rem(12)});
  `};
`;

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
//   transition: all 0.1s ease-out;
//   will-change: transform, opacity, position;
//   transform-origin: 0% 0%;
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

// const ExploreTagsContent = styled(CollapsibleContent)`
//   padding-top: 0;

//   ${mediaMin.s`
//     padding-top: 0;
//   `};
// `;

// const StyledIcon = styled(Icon)`
//   float: right;
//   transition: transform 0.2s ease;
//   transform: rotate(0deg);

//   ${(props) =>
//     props.animate &&
//     css`
//       transform-origin: 50% 50%;
//       transform: rotate(180deg);
//     `};

//   ${mediaMin.s`
//     display: none;
//   `};
// `;

class TagPage extends Component {
  state = {
    // exploreTagsOpen: false,
  };

  // openExploreTags = () => {
  //   this.setState((prevState) => ({
  //     exploreTagsOpen: !prevState.exploreTagsOpen,
  //   }));
  // };

  render() {
    const {
      currentPage,
      totalPagesInBlog,
      paginationPathPrefix,
      prevPath,
      nextPath,
      edges,
      tag,
    } = this.props.pageContext;

    const frontMatterTags = this.props.data.allMarkdownRemark;
    let allTags = [];

    frontMatterTags.tags.forEach((tag) => {
      allTags.push(tag.fieldValue);
    });

    return (
      <Layout location={this.props.location}>
        <Helmet title={config.siteTitle} />
        <SEO />
        <SiteHeader />
        <Main role="main">
          <TagWrapper>
            <TagHeader>
              <TagTitleWrapper>
                <h1>
                  <PostsFor>Blog posts found for:</PostsFor>
                  <TagTitle>#{tag}</TagTitle>
                </h1>
              </TagTitleWrapper>
              <OtherTagsWrapper>
                {/* <CollapsibleContainer
                  onClick={this.openExploreTags}
                  contentVisible={this.state.exploreTagsOpen}
                >
                  <StyledIcon animate={this.state.exploreTagsOpen}>
                    <use xlinkHref="#down" />
                  </StyledIcon> */}
                <StyledSectionHeader>Other blog tags</StyledSectionHeader>
                {/* <ExploreTagsContent showContent={this.state.exploreTagsOpen}> */}
                <Tags tagsInPost={allTags} />
                {/* </ExploreTagsContent> */}
                {/* </CollapsibleContainer> */}
              </OtherTagsWrapper>
            </TagHeader>
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
          </TagWrapper>
        </Main>
        <SiteFooter />
      </Layout>
    );
  }
}

export default TagPage;

export const pageQuery = graphql`
  query allTags {
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
