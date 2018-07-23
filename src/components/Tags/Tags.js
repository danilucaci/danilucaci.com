import React, { Component } from "react";

import styled from "styled-components";

import Tag from "./Tag/Tag";

const Wrapper = styled.div``;

const Tags = (props) => {
  let tagsInPost = props.tagsInPost;
  // let tagCount = props.tagCount;

  return (
    <Wrapper>
      {tagsInPost &&
        tagsInPost.map((tag) => (
          <Tag
            key={tag}
            link={`/tags/${tag}`}
            label={tag}
            // tagCount={tagCount[tag]}
          />
        ))}
    </Wrapper>
  );
};

export default Tags;
