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
      category,
    } = this.props.pageContext;

    return (
      <Layout location={this.props.location}>
        <Wrapper>
          <Helmet title={`Categories || ${config.siteTitle}`} />
          <SEO />
          <CategoryHeader>
            <H1>Blog posts in: {category}</H1>
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
