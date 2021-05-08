import React from "react";
import { string } from "prop-types";
import { useIntl } from "react-intl";
import HR from "../HR";
import { Col, Row } from "../Grid/Grid";

import {
  SiblingProjectsContents,
  PreviousItemsContainer,
  PrevSectionHeader,
  PrevArticleLink,
  NextItemsContainer,
  NextSectionHeader,
  NextArticleLink,
} from "./styles";

function SiblingProjects({ prevSlug, prevTitle, nextSlug, nextTitle }) {
  const intl = useIntl();

  return (
    <Row pb col12>
      <Col>
        <HR />
        <SiblingProjectsContents>
          {prevSlug && (
            <PreviousItemsContainer>
              <PrevSectionHeader>
                {intl.formatMessage({ id: "projects.prev" })}
              </PrevSectionHeader>
              <PrevArticleLink to={prevSlug}>{prevTitle}</PrevArticleLink>
            </PreviousItemsContainer>
          )}
          {nextSlug && (
            <NextItemsContainer>
              <NextSectionHeader>
                {intl.formatMessage({ id: "projects.next" })}
              </NextSectionHeader>
              <NextArticleLink to={nextSlug}>{nextTitle}</NextArticleLink>
            </NextItemsContainer>
          )}
        </SiblingProjectsContents>
        <HR />
      </Col>
    </Row>
  );
}

SiblingProjects.propTypes = {
  nextTitle: string,
  nextSlug: string,
  prevSlug: string,
  prevTitle: string,
};

SiblingProjects.defaultProps = {
  nextTitle: null,
  nextSlug: null,
  prevSlug: null,
  prevTitle: null,
};

export default SiblingProjects;
