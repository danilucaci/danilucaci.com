import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Tag from "./Tag/Tag";

const TagsWrapper = styled.div`
  display: ${(props) => (props.inline ? "inline-block" : "block")};
`;

const Tags = (props) => {
  let tags = props.tags;
  return (
    <TagsWrapper spaced={props.spaced} inline={props.inline}>
      {tags &&
        tags.map((tag) => (
          <Tag key={tag} link={`/blog/tags/${tag}`} label={tag} />
        ))}
    </TagsWrapper>
  );
};

Tags.propTypes = {
  optionalBool: PropTypes.bool,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
