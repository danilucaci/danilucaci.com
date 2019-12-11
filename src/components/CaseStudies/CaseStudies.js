import React from "react";
import { bool, string, arrayOf, object } from "prop-types";
import { FormattedMessage } from "react-intl";

import CaseStudyCard from "../CaseStudyCard/CaseStudyCard";
import { Col, Row } from "../Grid/Grid";
import { Title } from "./styles";

const CaseStudies = ({ edges, spaced, header, cardHeadingLevel }) => {
  let caseStudies = edges.map((edge) => ({
    slug: edge.node.fields.slug,
    tagsInCaseStudy: edge.node.frontmatter.tags,
    title: edge.node.frontmatter.title,
    date: edge.node.frontmatter.date,
    snippet: edge.node.frontmatter.snippet,
    cardImage: edge.node.frontmatter.cardImage.childImageSharp.fluid,
  }));

  return (
    <Row
      col12
      spaced={spaced}
      data-testid="Casestudies__Wrapper"
      aria-labelledby="case-studies-title"
    >
      <Col>
        <FormattedMessage id="case.studies.header">
          {(txt) => (
            <Title id="case-studies-title" as={header}>
              {txt}
            </Title>
          )}
        </FormattedMessage>
      </Col>
      <Col>
        {caseStudies.map((caseStudyCard) => (
          <CaseStudyCard
            key={caseStudyCard.title}
            slug={caseStudyCard.slug}
            tagsInCaseStudy={caseStudyCard.tagsInCaseStudy}
            title={caseStudyCard.title}
            date={caseStudyCard.date}
            snippet={caseStudyCard.snippet}
            cardImage={caseStudyCard.cardImage}
            cardHeadingLevel={cardHeadingLevel}
          />
        ))}
      </Col>
    </Row>
  );
};

CaseStudies.propTypes = {
  edges: arrayOf(object).isRequired,
  spaced: bool,
  header: string,
  cardHeadingLevel: string,
};

CaseStudies.defaultProps = {
  spaced: false,
  header: "h1",
  cardHeadingLevel: undefined,
};

export default CaseStudies;
