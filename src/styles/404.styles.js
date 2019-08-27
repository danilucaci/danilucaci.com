import styled from "styled-components";

import { Copy } from "../../src/components/Copy/Copy";
import { theme, mediaMin, rem } from "../theme/globalStyles";
import { HR } from "../../src/components/HR/HR";
import { GridRow } from "../../src/components/Grid/Grid";

export const StyledNotFound = styled(GridRow)`
  max-width: ${theme.layout.col8.wrapper};
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

export const Subhead = styled.p`
  font-size: ${theme.font.size.body.subhead};
  line-height: ${theme.font.lineHeight.body.subheadsubheadSCompact};
  margin-bottom: ${rem(32)};

  ${mediaMin.s`
    font-size: ${theme.font.size.body.m};
    line-height: ${theme.font.lineHeight.body.subhead};
    max-width: 90%;
  `};
`;

export const StyledCopy = styled(Copy)`
  margin-bottom: ${rem(16)};
`;

export const StyledHR = styled(HR)`
  display: block;
  width: 100%;
  margin-bottom: ${rem(16)};
`;
