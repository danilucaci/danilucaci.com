import React from "react";

import styled, { css } from "styled-components";

import Tag from "./Tag/Tag";
import { rem } from "../../theme/globalStyles";

const TagsWrapper = styled.div`
  ${(props) =>
    props.spaced &&
    css`
      margin-bottom: ${rem(16)};
    `};
`;

const Tags = (props) => {
  let tagsInPost = props.tagsInPost;
  console.log(tagsInPost);
  return (
    <TagsWrapper spaced={props.spaced}>
      {tagsInPost &&
        tagsInPost.map((tag) => (
          <Tag key={tag} link={`/tags/${tag}`} label={tag} />
        ))}
    </TagsWrapper>
  );
};

export default Tags;
