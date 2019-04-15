import styled from "styled-components";
import { Link } from "gatsby";

import { theme, mediaMin, rem } from "../../theme/globalStyles";

export const StyledCaseStudyCard = styled.article`
  background-color: ${theme.colors.bgLight100};
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

export const CaseStudyImgWrapper = styled.div`
  padding-top: ${rem(16)};
  padding-bottom: ${rem(16)};

  ${mediaMin.m`
    padding: ${rem(16)} ${rem(32)};
  `};

  ${mediaMin.xl`
    max-width: calc(60% - ${rem(24)});
    margin-left: ${rem(24)};
    padding: ${rem(16)} 0;
    flex: 1 1 60%;
    float: right;
    order: 2;
  `};
`;

export const CaseStudyCardContents = styled.div`
  padding: 0 ${rem(16)} ${rem(32)} ${rem(16)};

  ${mediaMin.s`  
    padding: 0 ${rem(32)} ${rem(32)} ${rem(32)};
  `};

  ${mediaMin.xl`
    max-width: 40%;
    padding: ${rem(40)} 0 ${rem(40)} ${rem(40)};
    flex: 1 1 40%;
    display: flex;
    flex-direction: column;
    order: 1;
  `};
`;

export const Tag = styled.p`
  color: ${theme.colors.dark700};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  font-weight: 700;
  text-transform: uppercase;
  font-family: ${theme.fonts.headerFallback};
  letter-spacing: ${theme.letterSpacing.sectionHeaderS};

  .fonts-loaded & {
    font-family: ${theme.fonts.header};
  }

  ${mediaMin.s`  
    letter-spacing: ${theme.letterSpacing.sectionHeaderXL};
  `};

  display: inline-block;
  margin-right: ${rem(16)};
`;

export const TagsWrapper = styled.div`
  margin-top: ${rem(12)};
  margin-bottom: ${rem(16)};

  ${mediaMin.s`  
    margin-top: 0;
  `};
`;

export const StyledH3 = styled.h3`
  margin-bottom: ${rem(8)};
  font-size: ${rem(24)};
  line-height: ${rem(32)};
`;

export const ContinueLink = styled(Link)`
  color: ${theme.colors.main600};
  text-decoration: underline;
  font-style: normal;
  font-weight: 400;
  font-family: ${theme.fonts.headerFallback};
  display: inline-block;
  margin-top: ${rem(32)};

  .fonts-loaded & {
    font-family: ${theme.fonts.header};
  }

  ${mediaMin.xl`
    margin-top: auto;
    margin-bottom: 0;
  `};

  &:hover {
    background-color: transparent;
    cursor: pointer;
  }
`;
