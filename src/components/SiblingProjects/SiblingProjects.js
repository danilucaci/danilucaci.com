import React from "react";
import { string } from "prop-types";
import { FormattedMessage } from "react-intl";
import { HR } from "../HR/HR";
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

const SiblingProjects = ({ prevSlug, prevTitle, nextSlug, nextTitle }) => (
  <Row pb col12>
    <Col>
      <HR />
      <SiblingProjectsContents>
        {prevSlug && (
          <PreviousItemsContainer>
            <FormattedMessage id="projects.prev">
              {(txt) => <PrevSectionHeader>{txt}</PrevSectionHeader>}
            </FormattedMessage>
            <PrevArticleLink to={prevSlug}>{prevTitle}</PrevArticleLink>
          </PreviousItemsContainer>
        )}
        {nextSlug && (
          <NextItemsContainer>
            <FormattedMessage id="projects.next">
              {(txt) => <NextSectionHeader>{txt}</NextSectionHeader>}
            </FormattedMessage>
            <NextArticleLink to={nextSlug}>{nextTitle}</NextArticleLink>
          </NextItemsContainer>
        )}
      </SiblingProjectsContents>
      <HR />
    </Col>
  </Row>
);

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
