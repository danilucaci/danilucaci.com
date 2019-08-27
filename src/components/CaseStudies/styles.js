import styled from "styled-components";

import { theme, mediaMin, rem } from "../../theme/theme";
import { GridRow } from "../../../src/components/Grid/Grid";
import { Copy } from "../../src/../components/Copy/Copy";

export const Row = styled(GridRow)`
  max-width: ${theme.layout.col10.wrapper};

  & h1,
  & h2 {
    margin-bottom: ${rem(8)};
  }
`;

export const Subhead = styled(Copy)`
  color: ${theme.colors.grey800};
  font-size: ${theme.font.size.body.subhead};
  line-height: ${theme.font.lineHeight.body.subhead};

  margin-bottom: ${rem(16)};

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
