import React from "react";
import { string } from "prop-types";
import { FormattedMessage } from "react-intl";
import { HR } from "../HR/HR";
import { GridCol } from "../Grid/Grid";

import {
  SiblingPostsRow,
  SiblingPostsContents,
  PreviousItemsContainer,
  PrevSectionHeader,
  PrevArticleLink,
  NextItemsContainer,
  NextSectionHeader,
  NextArticleLink,
} from "./styles";

const SiblingPosts = ({ prevSlug, prevTitle, nextSlug, nextTitle }) => (
  <SiblingPostsRow bottomPad>
    <GridCol>
      <HR />
      <SiblingPostsContents>
        {prevSlug && (
          <PreviousItemsContainer>
            <FormattedMessage id="article.prev">
              {(txt) => <PrevSectionHeader>{txt}</PrevSectionHeader>}
            </FormattedMessage>
            <PrevArticleLink to={prevSlug}>{prevTitle}</PrevArticleLink>
          </PreviousItemsContainer>
        )}
        {nextSlug && (
          <NextItemsContainer>
            <FormattedMessage id="article.next">
              {(txt) => <NextSectionHeader>{txt}</NextSectionHeader>}
            </FormattedMessage>
            <NextArticleLink to={nextSlug}>{nextTitle}</NextArticleLink>
          </NextItemsContainer>
        )}
      </SiblingPostsContents>
      <HR />
    </GridCol>
  </SiblingPostsRow>
);

SiblingPosts.propTypes = {
  nextTitle: string,
  nextSlug: string,
  prevSlug: string,
  prevTitle: string,
};

SiblingPosts.defaultProps = {
  nextTitle: null,
  nextSlug: null,
  prevSlug: null,
  prevTitle: null,
};

export default SiblingPosts;
