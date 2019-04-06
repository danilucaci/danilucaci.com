import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import Article from "../Article/Article";
import { Wrapper, StyledH2 } from "./styles";

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
