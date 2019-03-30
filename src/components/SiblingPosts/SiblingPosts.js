import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import { HR } from "../HR/HR";

import {
  SiblingPostsWrapper,
  SiblingPostsContents,
  PreviousItemsContainer,
  PrevSectionHeader,
  PrevArticleLink,
  NextItemsContainer,
  NextSectionHeader,
  NextArticleLink,
} from "./styles";

const SiblingPosts = ({
  prevSlug, prevTitle, nextSlug, nextTitle,
}) => (
  <SiblingPostsWrapper>
    <HR />
    <SiblingPostsContents>
      {prevSlug && (
        <PreviousItemsContainer>
          <FormattedMessage id="articlePrev">
            {(txt) => <PrevSectionHeader>{txt}</PrevSectionHeader>}
          </FormattedMessage>
          <PrevArticleLink to={prevSlug}>{prevTitle}</PrevArticleLink>
        </PreviousItemsContainer>
      )}
      {nextSlug && (
        <NextItemsContainer>
          <FormattedMessage id="articleNext">
            {(txt) => <NextSectionHeader>{txt}</NextSectionHeader>}
          </FormattedMessage>
          <NextArticleLink to={nextSlug}>{nextTitle}</NextArticleLink>
        </NextItemsContainer>
      )}
    </SiblingPostsContents>
    <HR />
  </SiblingPostsWrapper>
);

SiblingPosts.propTypes = {
  nextTitle: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.object.isRequired]),
  nextSlug: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.object.isRequired]),
  prevSlug: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.object.isRequired]),
  prevTitle: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.object.isRequired]),
};

export default SiblingPosts;
