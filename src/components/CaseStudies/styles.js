import styled from "styled-components";

import { theme, mediaMin, rem } from "../../theme/globalStyles";
import { GridRow } from "../../../src/components/Grid/Grid";
import { Copy } from "../../src/../components/Copy/Copy";

export const Row = styled(GridRow)`
  max-width: ${theme.contain.wrapper.col10};

  & h1,
  & h2 {
    margin-bottom: ${rem(8)};
  }
`;

export const Subhead = styled(Copy)`
  color: ${theme.colors.dark800};
  font-size: ${theme.fontSizes.subheadS};
  line-height: ${theme.lineHeights.subheadS};

  margin-bottom: ${rem(16)};

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
