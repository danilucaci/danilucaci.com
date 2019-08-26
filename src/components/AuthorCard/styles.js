import styled from "styled-components";
import Img from "gatsby-image";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import { HR } from "../HR/HR";

export const AuthorCardWrapper = styled.footer`
  width: 100%;
  max-width: ${theme.contain.wrapper.col10};
  margin-left: auto;
  margin-right: auto;

  margin-bottom: ${theme.spacing.components.s};

  ${mediaMin.s`
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.m`
    margin-bottom: ${theme.spacing.components.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(280)}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    margin-bottom: ${rem(64)};
  }
`;

export const AuthorCardInner = styled.div`
  background-color: ${theme.colors.grey50};

  padding: ${rem(40)};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  margin-right: ${theme.gutters.s};
  margin-left: ${theme.gutters.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      margin-left: max(${theme.gutters.s}, env(safe-area-inset-left));
      margin-right: max(${theme.gutters.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.s`
    margin-right: ${theme.gutters.m};
    margin-left: ${theme.gutters.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
    & {
      margin-left: max(${theme.gutters.m}, env(safe-area-inset-left));
      margin-right: max(${theme.gutters.m}, env(safe-area-inset-right));
      }
    }
  `};

  ${mediaMin.l`
    text-align: left;
    flex-direction: row;
    padding: ${rem(64)} ${rem(48)};
  `};
`;

export const AuthorImage = styled(Img)`
  display: block;
  border-radius: 50%;
  width: ${rem(128)};
  height: ${rem(128)};
  margin-bottom: ${rem(16)};

  ${mediaMin.l`
    margin-left: auto;
    margin-right: ${rem(24)};
    margin-bottom: 0;
  `};
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaMin.l`
    padding-right: ${rem(40)};
    margin-right: auto;
  `};

  ${mediaMin.xl`
    padding-right: ${rem(80)};
  `};
`;

export const AuthorDescription = styled(Copy)`
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.m};
  margin-bottom: ${rem(8)};
`;

export const StyledHR = styled(HR)`
  margin-right: ${theme.gutters.s};
  margin-left: ${theme.gutters.s};

  margin-bottom: ${theme.spacing.components.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      margin-left: max(${theme.gutters.s}, env(safe-area-inset-left));
      margin-right: max(${theme.gutters.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.s`
    margin-right: ${theme.gutters.m};
    margin-left: ${theme.gutters.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        margin-left: max(${theme.gutters.m}, env(safe-area-inset-left));
        margin-right: max(${theme.gutters.m}, env(safe-area-inset-right));
      }
    }

    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.m`
    margin-bottom: ${theme.spacing.components.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(280)}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    margin-bottom: ${rem(64)};
  }
`;
