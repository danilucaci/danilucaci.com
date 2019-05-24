import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import CaseStudyCard from "../CaseStudyCard/CaseStudyCard";
import { GridCol } from "../../../src/components/Grid/Grid";
import { Row, Subhead } from "./styles";

const CaseStudies = (props) => {
  let caseStudies = props.edges.map((edge) => ({
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
        {props.header === "h2" ? (
          <FormattedMessage id="case.studies.header">{(txt) => <h2>{txt}</h2>}</FormattedMessage>
        ) : (
          <FormattedMessage id="case.studies.header">{(txt) => <h1>{txt}</h1>}</FormattedMessage>
        )}

        <FormattedMessage id="case.studies.description">
          {(txt) => <Subhead>{txt}</Subhead>}
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
  header: PropTypes.string,
};

CaseStudies.defaultProps = {
  header: "h1",
};

export default CaseStudies;
