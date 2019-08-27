import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import CaseStudyCard from "../CaseStudyCard/CaseStudyCard";
import { GridCol } from "../Grid/Grid";
import { Row, Title } from "./styles";

const CaseStudies = ({ edges }) => {
  let caseStudies = edges.map((edge) => ({
    slug: edge.node.fields.slug,
    tagsInCaseStudy: edge.node.frontmatter.tags,
    title: edge.node.frontmatter.title,
    date: edge.node.frontmatter.date,
    snippet: edge.node.frontmatter.snippet,
    cardimage: edge.node.frontmatter.images[1].childImageSharp.fluid,
  }));

  return (
    <Row>
      <GridCol>
        <FormattedMessage id="case.studies.header">
          {(txt) => <Title>{txt}</Title>}
        </FormattedMessage>
      </GridCol>
      <GridCol>
        {caseStudies.map((caseStudyCard) => (
          <CaseStudyCard
            key={caseStudyCard.title}
            slug={caseStudyCard.slug}
            tagsInCaseStudy={caseStudyCard.tagsInCaseStudy}
            title={caseStudyCard.title}
            date={caseStudyCard.date}
            snippet={caseStudyCard.snippet}
            cardimage={caseStudyCard.cardimage}
          />
        ))}
      </GridCol>
    </Row>
  );
};

CaseStudies.propTypes = {
  edges: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CaseStudies;
