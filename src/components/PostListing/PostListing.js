import React, { Component } from "react";

import styled from "styled-components";
import { theme, mediaMin, rem } from "../../theme/globalStyles";

import Article from "../Article/Article";
import { H2 } from "../Headings/Headings";

const Wrapper = styled.section`
  max-width: ${theme.contain.blog};
  margin-left: auto;
  margin-right: auto;
`;

const StyledH2 = styled(H2)`
  margin-bottom: ${rem(16)};

  ${mediaMin.s`
    margin-bottom: ${rem(24)};
  `};
`;

class PostListing extends Component {
  getPostList() {
    let postList = [];
    // let tagCount = [];

    // this.props.tagsTotalCount.forEach((tag) => {
    //   tagCount[tag.fieldValue] = tag.totalCount;
    // });

    this.props.edges.forEach((edge) => {
      postList.push({
        slug: edge.fields.slug,
        // tagCount: tagCount,
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
        <StyledH2>Latest Articles</StyledH2>
        {postList.map((post) => (
          <Article
            key={post.title}
            slug={post.slug}
            // tagCount={post.tagCount}
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
