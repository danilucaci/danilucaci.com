import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import { theme, mediaMin, rem } from "../../theme/globalStyles";
import Article from "../Article/Article";

const Wrapper = styled.section`
  max-width: ${theme.contain.blog};
  margin-left: auto;
  margin-right: auto;
`;

const StyledH2 = styled.h2`
  margin-bottom: ${rem(16)};

  ${mediaMin.m`
    margin-bottom: ${rem(24)};
  `};
`;

const PostListing = (props) => {
  let postList = props.edges.map((edge) => ({
    slug: edge.fields.slug,
    tags: edge.frontmatter.tags,
    category: edge.frontmatter.category,
    title: edge.frontmatter.title,
    date: edge.frontmatter.date,
    snippet: edge.frontmatter.snippet,
    timeToRead: edge.timeToRead,
  }));

  return (
    <Wrapper>
      <FormattedMessage id="blogArticleList">
        {(txt) => <StyledH2>{txt}</StyledH2>}
      </FormattedMessage>
      {postList.map((post) => (
        <Article
          key={post.title}
          slug={post.slug}
          tags={post.tags}
          category={post.category}
          title={post.title}
          date={post.date}
          snippet={post.snippet}
          timeToRead={post.timeToRead}
        />
      ))}
    </Wrapper>
  );
};

PostListing.propTypes = {
  edges: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostListing;
