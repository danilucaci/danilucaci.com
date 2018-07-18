import React from "react";

import Article from "../Article/Article";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach((postEdge) => {
      postList.push({
        slug: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
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
            tags={post.tags}
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
