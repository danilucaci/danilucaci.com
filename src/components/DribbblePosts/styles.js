import styled from "styled-components";

import { theme, mediaMin, rem } from "../../theme/globalStyles";
import { LoadComments } from "../Button/Button";
import { GridRow } from "../../../src/components/Grid/Grid";
import { Copy } from "../../src/../components/Copy/Copy";
import { HR } from "../../../src/components/HR/HR";

export const Row = styled(GridRow)`
  max-width: ${theme.contain.wrapper.col10};
  margin-top: ${theme.spacing.row.s};

  ${mediaMin.s`
    margin-top: ${theme.spacing.row.m};
  `};

  ${mediaMin.xl`
    margin-top: ${theme.spacing.row.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: 30em) and (min-height: 17em) and (max-height: 35em) and (orientation: landscape) {
    margin-top: ${rem(32)};
  }

  & h2 {
    margin-bottom: ${rem(8)};
  }
`;

export const Subhead = styled(Copy)`
  color: ${theme.colors.grey800};
  font-size: ${theme.fontSizes.subheadS};
  line-height: ${theme.lineHeights.subheadS};

  margin-bottom: ${rem(32)};

  font-family: ${theme.fonts.headerFallback};
  font-weight: 300;

  .fonts-loaded & {
    font-family: ${theme.fonts.headerLight};
  }

  ${mediaMin.s`
    font-size: ${theme.fontSizes.subhead};
    line-height: ${theme.lineHeights.subhead};
  `};
`;

export const StyledHR = styled(HR)`
  margin-bottom: ${rem(32)};

  ${mediaMin.m`
    margin-bottom: ${rem(88)};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(280)}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    margin-bottom: ${rem(32)};
  }
`;

export const ErrorMessageWrapper = styled.div`
  background-color: ${theme.colors.danger100};
  display: block;
  padding: ${rem(16)} ${rem(16)};
  border-left: ${rem(4)} solid ${theme.colors.danger600};
  margin-bottom: ${rem(32)};
`;

export const ErrorMessage = styled.p`
  color: ${theme.colors.danger600};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyRegular};
  }
`;

export const StyledLoadMore = styled(LoadComments)`
  margin-left: auto;
  margin-right: auto;
  display: block;

  ${mediaMin.s`
    margin-top: ${rem(32)};
  `};
`;

export const LoadMoreLabel = styled.span`
  display: inline-block;
`;
