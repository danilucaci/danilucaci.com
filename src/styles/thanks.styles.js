import styled from "styled-components";

import { theme, mediaMin, rem } from "../theme/globalStyles";
import { Copy } from "../../src/components/Copy/Copy";
import { HR } from "../../src/components/HR/HR";
import { GridRow } from "../../src/components/Grid/Grid";

export const StyledThanksPage = styled(GridRow)`
  max-width: ${theme.contain.wrapper.col8};
  padding-top: ${rem(24)};
  padding-bottom: ${rem(24)};

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
