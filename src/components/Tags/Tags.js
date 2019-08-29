import React from "react";
import { arrayOf, string } from "prop-types";

import Tag from "./Tag/Tag";
import { TagsWrapper } from "./styles";

const Tags = ({ tags }) => {
  return (
    <TagsWrapper>
      {tags &&
        tags.map((tag) => (
          <Tag key={tag} link={`/blog/tags/${tag}`} label={tag} />
        ))}
    </TagsWrapper>
  );
};

Tags.propTypes = {
  tags: arrayOf(string).isRequired,
};

export default Tags;
