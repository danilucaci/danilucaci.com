import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CaseStudyCard from "../CaseStudyCard/CaseStudyCard";

const CaseStudyListingWrapper = styled.div``;

const CaseStudyListing = (props) => {
  let caseStudyList = props.edges.map((edge) => ({
    slug: edge.fields.slug,
    tagsInCaseStudy: edge.frontmatter.tags,
    title: edge.frontmatter.title,
    date: edge.frontmatter.date,
    description: edge.frontmatter.description,
    image: edge.frontmatter.image.childImageSharp.fluid,
  }));

  return (
    <CaseStudyListingWrapper>
      {caseStudyList.map((caseStudyCard) => (
        <CaseStudyCard
          key={caseStudyCard.title}
          slug={caseStudyCard.slug}
          tagsInCaseStudy={caseStudyCard.tagsInCaseStudy}
          title={caseStudyCard.title}
          date={caseStudyCard.date}
          description={caseStudyCard.description}
          image={caseStudyCard.image}
        />
      ))}
    </CaseStudyListingWrapper>
  );
};

CaseStudyListing.propTypes = {
  edges: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CaseStudyListing;
