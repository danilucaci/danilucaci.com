import React, { Component } from "react";

import styled from "styled-components";
import { theme, mediaMin, rem } from "../../theme/globalStyles";

import Article from "../Article/Article";
import { H1, H2, H3, H4 } from "../Headings/Headings";
import { Copy } from "../Copy/Copy";

const Wrapper = styled.section`
  max-width: ${theme.contain.blog};
  margin-left: auto;
  margin-right: auto;
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
        slug: postEdge.node.fields.slug,
        // tagCount: tagCount,
        tagsInPost: postEdge.node.frontmatter.tags,
        category: postEdge.node.frontmatter.category,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        snippet: postEdge.node.frontmatter.snippet,
        timeToRead: postEdge.node.timeToRead,
      });
    });

    return postList;
  }

  render() {
    const postList = this.getPostList();

    return (
      <Wrapper>
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
