import React, { Component } from "react";

import styled from "styled-components";
import { theme, mediaMin, rem } from "../../theme/globalStyles";

import { Copy } from "../Copy/Copy";

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
