import styled from "styled-components";
import { theme, mediaMin, rem } from "../theme/globalStyles";
import { HR } from "../../src/components/HR/HR";
import { Copy } from "../../src/components/Copy/Copy";
import { GridRow } from "../../src/components/Grid/Grid";

export const Row = styled(GridRow)`
  max-width: ${theme.contain.wrapper.col10};

  & h1 {
    margin-bottom: ${rem(8)};
  }
`;

export const Subhead = styled(Copy)`
  color: ${theme.colors.grey800};
  font-size: ${theme.font.size.body.subhead};
  line-height: ${theme.font.lineHeight.body.subhead};

  font-family: ${theme.font.family.display.fallback};
  font-weight: 300;

  .fonts-loaded & {
    font-family: ${theme.font.family.display.boldLight};
  }

  ${mediaMin.s`
    font-size: ${theme.font.size.body.subhead};
    line-height: ${theme.font.lineHeight.body.subhead};
  `};
`;

export const StyledHR = styled(HR)`
  max-width: ${theme.contain.inner.col10};
  margin-left: auto;
  margin-right: auto;

  margin-bottom: ${rem(32)};

  ${mediaMin.m`
    margin-bottom: ${rem(64)};
  `};
`;
