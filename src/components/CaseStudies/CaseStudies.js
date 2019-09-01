import React from "react";
import { bool, arrayOf, object } from "prop-types";
import { FormattedMessage } from "react-intl";

import CaseStudyCard from "../CaseStudyCard/CaseStudyCard";
import { GridCol, GridRow } from "../Grid/Grid";
import { Title } from "./styles";

const CaseStudies = ({ edges, spaced }) => {
  let caseStudies = edges.map((edge) => ({
    slug: edge.node.fields.slug,
    tagsInCaseStudy: edge.node.frontmatter.tags,
    title: edge.node.frontmatter.title,
    date: edge.node.frontmatter.date,
    snippet: edge.node.frontmatter.snippet,
    cardimage: edge.node.frontmatter.images[1].childImageSharp.fluid,
  }));

  return (
    <GridRow col12 spaced={spaced}>
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
    </GridRow>
  );
};

CaseStudies.propTypes = {
  edges: arrayOf(object).isRequired,
  spaced: bool,
};

CaseStudies.defaultProps = {
  spaced: false,
};

export default CaseStudies;
