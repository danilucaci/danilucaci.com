import React from "react";
import { bool, string, arrayOf, number, shape } from "prop-types";

import { FormattedMessage } from "react-intl";
import CaseStudyCard from "../CaseStudyCard/CaseStudyCard";
import { Col, Row } from "../Grid/Grid";
import AriaText from "../AriaText/AriaText";

const IndexCaseStudies = ({ edges, spaced }) => {
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
      <FormattedMessage id="case.studies.header">
        {(txt) => (
          <AriaText id="case-studies-title" as="h2">
            {txt}
          </AriaText>
        )}
      </FormattedMessage>
      <Col>
        {caseStudies.map((caseStudyCard) => (
          <CaseStudyCard
            key={caseStudyCard.title}
            slug={caseStudyCard.slug}
            title={caseStudyCard.title}
            date={caseStudyCard.date}
            snippet={caseStudyCard.snippet}
            cardImage={caseStudyCard.cardImage}
          />
        ))}
      </Col>
    </Row>
  );
};

IndexCaseStudies.propTypes = {
  edges: arrayOf(
    shape({
      node: shape({
        fields: shape({
          slug: string.isRequired,
        }),
        frontmatter: shape({
          cardImage: shape({
            childImageSharp: shape({
              fluid: shape({
                aspectRatio: number.isRequired,
                base64: string.isRequired,
                sizes: string.isRequired,
                src: string.isRequired,
                srcSet: string.isRequired,
                srcSetWebp: string.isRequired,
                srcWebp: string.isRequired,
              }).isRequired,
            }).isRequired,
          }).isRequired,
          category: string.isRequired,
          date: string.isRequired,
          posted: bool.isRequired,
          snippet: string.isRequired,
          tags: arrayOf(string).isRequired,
          title: string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
  spaced: bool,
};

IndexCaseStudies.defaultProps = {
  spaced: false,
};

export default IndexCaseStudies;
