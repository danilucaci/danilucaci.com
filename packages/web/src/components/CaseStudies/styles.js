import styled from "styled-components";

import { theme, mediaMin, rem } from "../../theme/theme";

export const Title = styled.h1`
  font-size: ${theme.font.size.display.mobile.h1};
  line-height: ${theme.font.lineHeight.display.mobile.h1};

  margin-bottom: ${rem(8)};

  ${mediaMin.s`
    margin-top: ${rem(24)};
    margin-bottom: ${rem(16)};
    font-size: ${theme.font.size.display.desktop.h2};
    line-height: ${theme.font.lineHeight.display.desktop.h2};
  `};
`;
