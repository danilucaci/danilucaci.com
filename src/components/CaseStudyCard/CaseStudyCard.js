import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import { theme, mediaMin, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import { BoldLink } from "../Link/Link";
import { HR } from "../HR/HR";

const StyledCaseStudyCard = styled.article`
  background-color: ${theme.colors.gray100};
  margin-bottom: ${rem(32)};

  ${mediaMin.s`
    margin-bottom: ${rem(40)};
  `};

  ${mediaMin.xl`
    margin-bottom: ${rem(64)};
    display: flex;
  `};

  &:hover {
    ${theme.shadow.hover};
  }
`;

const CaseStudyImgWrapper = styled.div`
  padding: ${rem(24)} 0;

  ${mediaMin.xl`
    max-width: calc(60% - ${rem(24)});
    margin-left: ${rem(24)};
    flex: 1 1 60%;
    float: right;
    order: 2;
  `};
`;

const CaseStudyCardContents = styled.div`
  padding: ${rem(24)};

  ${mediaMin.xl`
    max-width: 40%;
    padding: ${rem(40)} 0 ${rem(40)} ${rem(40)};
    flex: 1 1 40%;
    display: flex;
    flex-direction: column;
    order: 1;
  `};
`;

const HRTop = styled(HR)`
  margin-bottom: ${rem(16)};

  ${mediaMin.xl`
      display: none;
  `};
`;

const HRBottom = styled(HR)`
  margin-bottom: ${rem(16)};
`;

const StyledH3 = styled.h3`
  margin-bottom: ${rem(16)};
`;

const ContinueLink = styled(BoldLink)`
  display: inline-block;
  margin-top: ${rem(32)};

  ${mediaMin.xl`
    margin-top: auto;
    margin-bottom: 0;
  `};

  &:hover {
    background-color: transparent;
  }
`;

const CaseStudyCard = (props) => (
  <StyledCaseStudyCard>
    <CaseStudyImgWrapper>
      <Img title={props.title} alt={props.snippet} fluid={props.image} />
    </CaseStudyImgWrapper>
    <CaseStudyCardContents>
      <HRTop />
      <StyledH3>{props.title}</StyledH3>
      <HRBottom />
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
