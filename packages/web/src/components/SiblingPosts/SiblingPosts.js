import React from "react";
import { string } from "prop-types";
import { useIntl } from "react-intl";

import HR from "../HR";
import { Col, Row } from "../Grid";

import {
  SiblingPostsContents,
  PreviousItemsContainer,
  PrevSectionHeader,
  PrevArticleLink,
  NextItemsContainer,
  NextSectionHeader,
  NextArticleLink,
} from "./styles";

function SiblingPosts({ prevSlug, prevTitle, nextSlug, nextTitle }) {
  const intl = useIntl();

  return (
    <Row pb col10>
      <Col>
        <HR />
        <SiblingPostsContents>
          {prevSlug && (
            <PreviousItemsContainer>
              <PrevSectionHeader>
                {intl.formatMessage({ id: "article.prev" })}
              </PrevSectionHeader>
              <PrevArticleLink to={prevSlug}>{prevTitle}</PrevArticleLink>
            </PreviousItemsContainer>
          )}
          {nextSlug && (
            <NextItemsContainer>
              <NextSectionHeader>
                {intl.formatMessage({ id: "article.next" })}
              </NextSectionHeader>
              <NextArticleLink to={nextSlug}>{nextTitle}</NextArticleLink>
            </NextItemsContainer>
          )}
        </SiblingPostsContents>
        <HR />
      </Col>
    </Row>
  );
}

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
