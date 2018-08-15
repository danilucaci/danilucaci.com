import React from "react";

import styled, { css } from "styled-components";

import Tag from "./Tag/Tag";
import { rem } from "../../theme/globalStyles";

const Wrapper = styled.div`
  ${(props) =>
    props.spaced &&
    css`
      margin-bottom: ${rem(16)};
    `};
`;

const Tags = (props) => {
  let tagsInPost = props.tagsInPost;

  return (
    <Wrapper spaced={props.spaced}>
      {tagsInPost &&
        tagsInPost.map((tag) => (
          <Tag key={tag} link={`/tags/${tag}`} label={tag} />
        ))}
    </Wrapper>
  );
};

export default Tags;
