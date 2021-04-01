import styled from "styled-components";
import Img from "gatsby-image";

import { theme, rem, mediaMin } from "../../theme";
import { Copy } from "../Copy";
import HR from "../HR";

export const AuthorCardWrapper = styled.footer`
  width: 100%;
  max-width: ${theme.layout.col10.wrapper};
  margin-left: auto;
  margin-right: auto;

  margin-bottom: ${theme.spacing.row.s};

  ${mediaMin.s`
    margin-bottom: ${theme.spacing.row.m};
  `};

  ${mediaMin.m`
    margin-bottom: ${theme.spacing.row.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(
      280,
    )}) and (max-height: ${rem(560)}) and (orientation: landscape) {
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

  margin-right: ${theme.layout.gutter.s};
  margin-left: ${theme.layout.gutter.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      margin-left: max(${theme.layout.gutter.s}, env(safe-area-inset-left));
      margin-right: max(${theme.layout.gutter.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.s`
    margin-right: ${theme.layout.gutter.m};
    margin-left: ${theme.layout.gutter.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
    & {
      margin-left: max(${theme.layout.gutter.m}, env(safe-area-inset-left));
      margin-right: max(${theme.layout.gutter.m}, env(safe-area-inset-right));
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
  font-size: ${theme.font.size.body.m};
  line-height: ${theme.font.lineHeight.body.m};
  margin-bottom: ${rem(8)};
`;

export const StyledHR = styled(HR)`
  margin-right: ${theme.layout.gutter.s};
  margin-left: ${theme.layout.gutter.s};

  margin-bottom: ${theme.spacing.row.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      margin-left: max(${theme.layout.gutter.s}, env(safe-area-inset-left));
      margin-right: max(${theme.layout.gutter.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.s`
    margin-right: ${theme.layout.gutter.m};
    margin-left: ${theme.layout.gutter.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        margin-left: max(${theme.layout.gutter.m}, env(safe-area-inset-left));
        margin-right: max(${theme.layout.gutter.m}, env(safe-area-inset-right));
      }
    }

    margin-bottom: ${theme.spacing.row.m};
  `};

  ${mediaMin.m`
    margin-bottom: ${theme.spacing.row.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(
      280,
    )}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    margin-bottom: ${rem(64)};
  }
`;
