import React, { Component } from "react";

import styled from "styled-components";
import { theme, mediaMin, rem } from "../../theme/globalStyles";

import CaseStudyCard from "../CaseStudyCard/CaseStudyCard";

const Wrapper = styled.section``;

class CaseStudyListing extends Component {
  getCaseStudyList() {
    let caseStudyList = [];

    this.props.edges.forEach((edge) => {
      caseStudyList.push({
        slug: edge.fields.slug,
        tagsInCaseStudy: edge.frontmatter.tags,
        title: edge.frontmatter.title,
        date: edge.frontmatter.date,
        description: edge.frontmatter.description,
        image: edge.frontmatter.image.childImageSharp.fluid,
      });
    });

    return caseStudyList;
  }

  render() {
    const caseStudyList = this.getCaseStudyList();

    return (
      <Wrapper>
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
      </Wrapper>
    );
  }
}

export default CaseStudyListing;
