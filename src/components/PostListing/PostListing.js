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

    this.props.postEdges.forEach((postEdge) => {
      postList.push({
        slug: postEdge.fields.slug,
        // tagCount: tagCount,
        tagsInPost: postEdge.frontmatter.tags,
        category: postEdge.frontmatter.category,
        title: postEdge.frontmatter.title,
        date: postEdge.frontmatter.date,
        snippet: postEdge.frontmatter.snippet,
        timeToRead: postEdge.timeToRead,
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
