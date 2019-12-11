import React from "react";
import { arrayOf, string } from "prop-types";
import { injectIntl } from "react-intl";

import Tag from "./Tag/Tag";
import { TagsWrapper } from "./styles";

const Tags = ({ intl, tags, tagsFor = "blog" }) => {
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
  locale: string.isRequired,
};

export default injectIntl(Tags);
