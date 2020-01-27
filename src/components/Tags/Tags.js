import React from "react";
import { arrayOf, string } from "prop-types";
import { useIntl } from "react-intl";

import Tag from "./Tag/Tag";
import { TagsWrapper } from "./styles";

const Tags = ({ tags, tagsFor = "blog" }) => {
  const intl = useIntl();

  let str = tagsFor.toLowerCase();

  const ariaLabel = intl.formatMessage({
    id: `tags.aria.label.${str}`,
  });

  return (
    <TagsWrapper aria-label={ariaLabel}>
      {tags &&
        tags.map((tag) => (
          <Tag key={tag} link={`/blog/tags/${tag}`} label={tag} />
        ))}
    </TagsWrapper>
  );
};

Tags.propTypes = {
  tags: arrayOf(string).isRequired,
  tagsFor: string.isRequired,
};

export default Tags;
