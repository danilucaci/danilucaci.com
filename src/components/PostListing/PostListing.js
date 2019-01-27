import React, { Component } from "react";
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

  ${mediaMin.s`
    margin-bottom: ${rem(24)};
  `};
`;

class PostListing extends Component {
  getPostList() {
    let postList = [];

    this.props.edges.forEach((edge) => {
      postList.push({
        slug: edge.fields.slug,
        tagsInPost: edge.frontmatter.tags,
        category: edge.frontmatter.category,
        title: edge.frontmatter.title,
        date: edge.frontmatter.date,
        snippet: edge.frontmatter.snippet,
        timeToRead: edge.timeToRead,
      });
    });

    return postList;
  }

  render() {
    const postList = this.getPostList();

    return (
      <Wrapper>
        <FormattedMessage id="blogArticleList">
          {(txt) => <StyledH2>{txt}</StyledH2>}
        </FormattedMessage>
        {postList.map((post) => (
          <Article
            key={post.title}
            slug={post.slug}
            tagsInPost={post.tagsInPost}
            category={post.category}
            title={post.title}
            date={post.date}
            snippet={post.snippet}
            timeToRead={post.timeToRead}
          />
        ))}
      </Wrapper>
    );
  }
}

export default PostListing;
