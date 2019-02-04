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
  ${theme.shadow.default};

  margin-bottom: ${rem(32)};

  ${mediaMin.xl`
    margin-bottom: ${rem(64)};
    display: flex;
  `};

  &:hover {
    ${theme.shadow.hover};
  }
`;

const CaseStudyImgWrapper = styled.div`
  ${mediaMin.xl`
    margin-left: ${rem(12)};
    max-width: ${rem(552)};
    flex: 1 1 60%;
    float: right;
    order: 2;
  `};
`;

const CaseStudyCardContents = styled.div`
  padding: ${rem(8)} ${rem(16)} ${rem(24)} ${rem(16)};

  ${mediaMin.s`
    padding: ${rem(8)} ${rem(32)} ${rem(24)};
  `};

  ${mediaMin.xl`
    margin-right: ${rem(12)};
    max-width: ${rem(360)};
    flex: 1 1 40%;
    display: flex;
    flex-direction: column;
    order: 1;
  `};
`;

const TagsWrapper = styled.div`
  margin: ${rem(8)} 0;

  ${mediaMin.s`
    margin: ${rem(12)} 0;
  `};
`;

const Tag = styled(Copy)`
  background-color: ${theme.colors.gray300};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.dark800};
  display: inline-block;

  text-decoration: none;

  font-size: ${theme.fontSizes.s};
  line-height: ${theme.fontSizes.s};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyRegular};
  }

  margin-right: ${rem(16)};
  margin-top: ${rem(16)};
  padding: ${rem(6)} ${rem(8)};
`;

const HRTop = styled(HR)`
  border: 1px solid ${theme.colors.sectionBackground};

  ${mediaMin.xl`
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

  ${mediaMin.xl`
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
        <HRTop />
        <TagsWrapper>
          {props.tagsInCaseStudy &&
            props.tagsInCaseStudy.map((tag) => (
              <Tag key={tag} small>
                {tag}
              </Tag>
            ))}
        </TagsWrapper>
        <HRBottom />
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
