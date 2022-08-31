import React from "react";
import { bool, string, arrayOf, object, shape } from "prop-types";
import { useIntl } from "react-intl";

import CaseStudyCard from "../CaseStudyCard";
import { Col, Row } from "../Grid";
import AriaText from "../AriaText";

function makeCaseStudies(edges) {
  return edges.map((edge) => ({
    slug: edge.node.fields.slug,
    tagsInCaseStudy: edge.node.frontmatter.tags,
    title: edge.node.frontmatter.title,
    date: edge.node.frontmatter.date,
    snippet: edge.node.frontmatter.snippet,
    cardImage: edge.node.frontmatter.cardImage.childImageSharp.gatsbyImageData,
  }));
}

function IndexCaseStudies({ edges, spaced }) {
  const intl = useIntl();

  const caseStudies = makeCaseStudies(edges);

  return (
    <Row
      col12
      spaced={spaced}
      data-testid="Casestudies__Wrapper"
      aria-labelledby="case-studies-title"
    >
      <AriaText id="case-studies-title" as="h2">
        {intl.formatMessage({ id: "case.studies.header" })}
      </AriaText>
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
}

IndexCaseStudies.propTypes = {
  edges: arrayOf(
    shape({
      node: shape({
        fields: shape({
          slug: string.isRequired,
        }),
        frontmatter: shape({
          cardImage: shape({
            childImageSharp: object.isRequired,
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
