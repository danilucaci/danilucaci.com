import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { FormattedMessage } from "react-intl";

import {
  StyledCaseStudyCard,
  CaseStudyImgWrapper,
  CaseStudyCardContents,
  HRTop,
  StyledH3,
  ContinueLink,
} from "./styles";

import { Copy } from "../Copy/Copy";

const CaseStudyCard = (props) => (
  <StyledCaseStudyCard>
    <CaseStudyImgWrapper>
      <Img title={props.title} alt={props.snippet} fluid={props.image} />
    </CaseStudyImgWrapper>
    <CaseStudyCardContents>
      <HRTop />
      <StyledH3>{props.title}</StyledH3>
      <Copy small>{props.snippet}</Copy>
      <FormattedMessage id="articleLinkContinue">
        {(txt) => <ContinueLink to={props.slug}>{txt}</ContinueLink>}
      </FormattedMessage>
    </CaseStudyCardContents>
  </StyledCaseStudyCard>
);

CaseStudyCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  tagsInCaseStudy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CaseStudyCard;
