import React, { Component } from "react";

import Article from "../Article/Article";

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
      <section className="">
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
      </section>
    );
  }
}

export default PostListing;
