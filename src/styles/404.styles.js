import styled from "styled-components";

import { Copy } from "../components/Copy/Copy";
import { theme, mediaMin, rem } from "../theme/theme";
import { HR } from "../components/HR/HR";
import { GridRow } from "../components/Grid/Grid";

export const StyledNotFound = styled(GridRow)`
  max-width: ${theme.layout.col8.wrapper};

  & a {
    display: inline;
    white-space: nowrap;
  }
`;

export const StyledH1 = styled.h1`
  display: block;
  width: 100%;
  margin-bottom: ${rem(24)};
`;

export const Subtitle = styled.p`
  margin-bottom: ${rem(32)};

  font-size: ${theme.font.size.display.mobile.subtitle};
  line-height: ${theme.font.lineHeight.display.mobile.subtitle};

  ${mediaMin.s`
    font-size: ${theme.font.size.display.desktop.subtitle};
    line-height: ${theme.font.lineHeight.display.desktop.subtitle};
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
