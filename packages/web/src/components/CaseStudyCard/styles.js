import styled from "styled-components";
import { Link } from "gatsby";

import { theme, mediaMin, rem } from "../../theme";

export const StyledCaseStudyCard = styled.article`
  margin-bottom: ${rem(40)};

  ${mediaMin.s`
    background-color: ${theme.color.background.caseStudyCard};
    margin-bottom: ${rem(40)};

    &:hover {
      box-shadow: ${theme.shadow.dropdown};
    }
  `};

  ${mediaMin.xl`
    margin-bottom: ${rem(64)};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const CaseStudyImgWrapper = styled.div`
  margin-bottom: ${rem(16)};
  ${mediaMin.xl`
    max-width: calc(60% - ${rem(32)});
    margin-bottom: ${rem(0)};
    margin-left: ${rem(32)};
    padding: ${rem(24)} 0;
    flex: 1 1 60%;
    float: right;
    order: 2;
  `};
`;

export const CaseStudyCardContents = styled.div`
  ${mediaMin.s`  
    padding: 0 ${rem(32)} ${rem(32)} ${rem(32)};
  `};

  ${mediaMin.xl`
    max-width: 40%;
    padding: ${rem(24)} 0 ${rem(24)} ${rem(24)};
    flex: 1 1 40%;
    display: flex;
    flex-direction: column;
    order: 1;
  `};

  ${mediaMin.xxl`
    padding: ${rem(40)} ${rem(32)} ${rem(40)} ${rem(40)};
  `};
`;

export const StyledH3 = styled.h3`
  margin-bottom: ${rem(8)};

  ${mediaMin.xxl`
    font-size: ${theme.font.size.display.desktop.h2};
    line-height: ${theme.font.lineHeight.display.desktop.h2};
    margin-bottom: ${rem(16)};
  `};
`;

export const ContinueLink = styled(Link)`
  color: ${theme.color.text.primary};
  text-decoration: none;
  font-style: normal;
  font-weight: 700;
  font-family: ${theme.font.family.display.fallback};
  display: inline-block;
  margin-top: ${rem(16)};

  font-size: ${rem(18)};
  line-height: ${rem(32)};

  .fonts-loaded & {
    font-family: ${theme.font.family.display.bold};
  }

  ${mediaMin.xl`
    margin-bottom: 0;
  `};

  &:hover {
    background-color: transparent;
    cursor: pointer;
  }
`;
