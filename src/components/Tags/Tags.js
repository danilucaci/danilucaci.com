import React from "react";
import PropTypes from "prop-types";

import Tag from "./Tag/Tag";
import { TagsWrapper } from "./styles";

const Tags = (props) => {
  let tags = props.tags;
  return (
    <TagsWrapper>
      {tags && tags.map((tag) => <Tag key={tag} link={`/blog/tags/${tag}`} label={tag} />)}
    </TagsWrapper>
  );
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
