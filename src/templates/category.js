import React, { Component } from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import styled, { css } from "styled-components";
import { theme, mediaMin, rem } from "../theme/globalStyles";

import Layout from "../components/Layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import { H1 } from "../components/Headings/Headings";
import Tags from "../components/Tags/Tags";
import Pagination from "../components/Pagination/Pagination";

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

const StyledCategoryBackground = styled.div`
  ${mediaMin.s`
    &:before {
      content: "";
      background-color: ${theme.colors.gray300};
      display: block;
      position: absolute;
      top: -5em;
      left: 0;
      width: 50%;
      height: 47em;
      
      transform: skewY(-12deg);
      z-index: -1;
    }

    &:after {
      content: "";
      background-color: ${theme.colors.gray300};
      display: block;
      position: absolute;
      top: -5em;
      right: 0;
      width: 50%;
      height: 50em;
      transform: skewY(-13deg);
      z-index: -1;
    }
  `};

  @media screen and (min-width: 130em) {
    &:before {
      height: 52em;
      transform: skewY(-12deg);
    }

    &:after {
      height: 48em;
      transform: skewY(-13deg);
    }
  }

  @media screen and (min-width: 170em) {
    &:before {
      top: -10em;
      height: 55em;
      transform: skewY(-12deg);
    }

    &:after {
      top: -10em;
      height: 51em;
      transform: skewY(-13deg);
    }
  }
`;

const CategoryHeader = styled.header`
  max-width: ${theme.contain.Category};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${rem(56)};
  color: ${theme.colors.dark900};

  ${mediaMin.s`
    margin-bottom: ${rem(88)};
  `};

  z-index: 5;
`;

class CategoryPage extends Component {
  render() {
    const {
      currentPage,
      totalPagesInBlog,
      paginationPathPrefix,
      prevPath,
      nextPath,
      edges,
    } = this.props.pageContext;

    return (
      <Layout location={this.props.location}>
        <StyledCategoryBackground />
        <Wrapper>
          <Helmet title={config.siteTitle} />
          <SEO />
          <CategoryHeader>
            <H1>Blog posts in</H1>
          </CategoryHeader>
          <PostListing edges={edges} />
          {totalPagesInBlog > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPagesInBlog={totalPagesInBlog}
              paginationPathPrefix={paginationPathPrefix}
              prevPath={prevPath}
              nextPath={nextPath}
            />
          )}
        </Wrapper>
      </Layout>
    );
  }
}

export default CategoryPage;

CategoryPage.propTypes = {
  pageContext: PropTypes.object,
  data: PropTypes.object,
};
