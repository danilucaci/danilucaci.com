import styled from "styled-components";
import { Copy } from "../../components/Copy/Copy";
import { theme, mediaMin, rem } from "../../theme/globalStyles";
import { HR } from "../../components/HR/HR";

export const StyledThanksPage = styled.section`
  max-width: ${theme.contain.wrapper.col8};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${rem(24)};
  margin-bottom: ${rem(64)};

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.m`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
    margin-top: ${rem(64)};
    margin-bottom: ${rem(80)};
  `};

  ${mediaMin.xl`
    margin-top: ${rem(80)};
    margin-bottom: ${rem(144)};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(280)}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    margin-top: ${rem(24)};
    margin-bottom: ${rem(64)};
  }

  & a {
    display: inline;
    white-space: nowrap;
  }
`;

export const StyledH1 = styled.h1`
  display: block;

  width: 100%;
  margin-bottom: ${rem(16)};
`;

export const ThanksCopy = styled(Copy)`
  margin-bottom: ${rem(32)};

  ${mediaMin.m`
      max-width: 84%;
  `};
`;

export const ThanksAgainCopy = styled(Copy)`
  margin-top: ${rem(32)};
  margin-bottom: ${rem(32)};
`;

export const Subhead = styled.p`
  font-size: ${theme.fontSizes.subheads};
  line-height: ${theme.lineHeights.subheads};
  margin-bottom: ${rem(32)};

  ${mediaMin.s`
    font-size: ${theme.fontSizes.subhead};
    line-height: ${theme.lineHeights.subhead};
  `};
`;

export const StyledHR = styled(HR)`
  display: block;
  width: 100%;
  margin-bottom: ${rem(16)};

  ${mediaMin.m`
      max-width: 84%;
  `};
`;
