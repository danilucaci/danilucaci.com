import React from "react";
import PropTypes from "prop-types";

import Img from "gatsby-image";
import styled from "styled-components";
import { theme, mediaMin, rem, mediaMax } from "../../theme/globalStyles";
import { FormattedMessage } from "react-intl";

import { Copy } from "../Copy/Copy";
import { BoldLink } from "../Link/Link";
import { HR } from "../HR/HR";

const StyledCaseStudyCard = styled.article`
  background-color: ${theme.colors.gray100};
  margin-bottom: ${rem(32)};

  ${mediaMin.s`
    margin-bottom: ${rem(40)};
  `};

  ${mediaMin.xxl`
    margin-bottom: ${rem(64)};
    display: flex;
  `};

  &:hover {
    ${theme.shadow.hover};
  }
`;

const CaseStudyImgWrapper = styled.div`
  ${mediaMin.xxl`
    max-width: ${rem(552)};
    margin-left: ${rem(24)};
    flex: 1 1 60%;
    float: right;
    order: 2;
  `};
`;

const CaseStudyCardContents = styled.div`
  padding: ${rem(8)} ${rem(16)} ${rem(24)} ${rem(16)};

  ${mediaMin.s`
    padding: ${rem(16)} ${rem(32)} ${rem(32)};
  `};

  ${mediaMin.xxl`
    padding-top: 0;
    padding-right: 0;
    max-width: ${rem(360)};
    flex: 1 1 40%;
    display: flex;
    flex-direction: column;
    order: 1;
  `};
`;

const TagsWrapper = styled.div`
  margin: ${rem(8)} 0;

  ${mediaMin.xxl`
    margin: ${rem(16)} 0;
  `};
`;

const Tag = styled(Copy)`
  background-color: ${theme.colors.gray300};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.dark800};
  display: inline-block;

  text-decoration: none;
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyRegular};
  }

  margin-right: ${rem(16)};
  margin-top: ${rem(8)};
  margin-bottom: ${rem(8)};
  padding: ${rem(6)} ${rem(8)};

  ${mediaMin.xxl`
    margin-right: ${rem(16)};
    margin-bottom: ${rem(16)};
  `};
`;

const HRTop = styled(HR)`
  border: 1px solid ${theme.colors.sectionBackground};

  ${mediaMin.xxl`
    display: none;
  `};
`;

const HRBottom = styled(HR)`
  border: 1px solid ${theme.colors.sectionBackground};
`;

const StyledH3 = styled.h3`
  margin-top: ${rem(12)};
  margin-bottom: ${rem(16)};
`;

const ContinueLink = styled(BoldLink)`
  display: inline-block;
  margin-top: ${rem(32)};

  ${mediaMin.xxl`
    margin-top: auto;
    margin-bottom: 0;
  `};

  &:hover {
    background-color: transparent;
  }
`;

const CaseStudyCard = (props) => {
  return (
    <StyledCaseStudyCard>
      <CaseStudyImgWrapper>
        <Img title={props.title} alt={props.description} fluid={props.image} />
      </CaseStudyImgWrapper>
      <CaseStudyCardContents>
        <TagsWrapper>
          <HRTop />
          {props.tagsInCaseStudy &&
            props.tagsInCaseStudy.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          <HRBottom />
        </TagsWrapper>
        <StyledH3>{props.title}</StyledH3>
        <Copy small>{props.description}</Copy>
        <FormattedMessage id="articleLinkContinue">
          {(txt) => <ContinueLink to={props.slug}>{txt}</ContinueLink>}
        </FormattedMessage>
      </CaseStudyCardContents>
    </StyledCaseStudyCard>
  );
};

CaseStudyCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  tagsInCaseStudy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CaseStudyCard;
