import React from "react";
import { bool, string, arrayOf, number, shape } from "prop-types";
import { useIntl } from "react-intl";

import CaseStudyCard from "../CaseStudyCard";
import { Col, Row } from "../Grid";
import { Title } from "./styles";

const CaseStudies = ({ edges, spaced, header, cardHeadingLevel }) => {
  const intl = useIntl();

  const caseStudies = edges.map((edge) => ({
    slug: edge.node.fields.slug,
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
        <Title id="case-studies-title" as={header}>
          {intl.formatMessage({ id: "case.studies.header" })}
        </Title>
      </Col>
      <Col>
        {caseStudies.map((caseStudyCard) => (
          <CaseStudyCard
            key={caseStudyCard.title}
            slug={caseStudyCard.slug}
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
          locale: string.isRequired,
          posted: bool.isRequired,
          snippet: string.isRequired,
          tags: arrayOf(string).isRequired,
          title: string.isRequired,
          twinPost: string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
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
