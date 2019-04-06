import styled from "styled-components";

import { theme, mediaMin, rem } from "../../theme/globalStyles";
import { BoldLink } from "../Link/Link";
import { HR } from "../HR/HR";

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
  padding: 0 ${rem(16)} ${rem(16)} ${rem(16)};

  ${mediaMin.s`  
    padding: 0 ${rem(32)} ${rem(32)} ${rem(32)};
  `};

  ${mediaMin.xl`
    max-width: 40%;
    padding: ${rem(48)} 0 ${rem(48)} ${rem(40)};
    flex: 1 1 40%;
    display: flex;
    flex-direction: column;
    order: 1;
  `};
`;

export const HRTop = styled(HR)`
  margin-bottom: ${rem(16)};

  ${mediaMin.s`
    margin-bottom: ${rem(24)};
  `};

  ${mediaMin.xl`
      display: none;
  `};
`;

export const StyledH3 = styled.h3`
  margin-bottom: ${rem(16)};
`;

export const ContinueLink = styled(BoldLink)`
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
