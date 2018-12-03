import React from "react";

import styled, { css } from "styled-components";

import Tag from "./Tag/Tag";
import { rem, mediaMin } from "../../theme/globalStyles";

const TagsWrapper = styled.div`
  ${(props) =>
    props.spaced &&
    css`
      margin-bottom: ${rem(16)};
    `};

  display: ${(props) => (props.inline ? "inline-block" : "block")};
`;

const Tags = (props) => {
  let tagsInPost = props.tagsInPost;

  return (
    <TagsWrapper spaced={props.spaced} inline={props.inline}>
      {tagsInPost &&
        tagsInPost.map((tag) => (
          <Tag key={tag} link={`/blog/tags/${tag}`} label={tag} />
        ))}
    </TagsWrapper>
  );
};

export default Tags;
