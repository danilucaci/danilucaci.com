import styled from "styled-components";
import { theme, mediaMin, rem } from "../theme/theme";
import { HR } from "../components/HR/HR";
import { Copy } from "../components/Copy/Copy";
import { GridRow } from "../components/Grid/Grid";

export const Row = styled(GridRow)`
  max-width: ${theme.layout.col10.wrapper};

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
  max-width: ${theme.layout.col10.inner};
  margin-left: auto;
  margin-right: auto;

  margin-bottom: ${rem(32)};

  ${mediaMin.m`
    margin-bottom: ${rem(64)};
  `};
`;
