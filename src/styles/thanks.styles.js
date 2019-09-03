import styled from "styled-components";
import { theme, mediaMin, rem } from "../theme/theme";
import { Copy } from "../components/Copy/Copy";
import { HR } from "../components/HR/HR";
import { Row } from "../components/Grid/Grid";

export const ThanksPageRow = styled(Row)`
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

export const ThanksCopy = styled(Copy)`
  margin-bottom: ${rem(32)};
`;

export const ThanksAgainCopy = styled(Copy)`
  margin-top: ${rem(32)};
  margin-bottom: ${rem(32)};
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

export const StyledHR = styled(HR)`
  display: block;
  width: 100%;
  margin-bottom: ${rem(16)};
`;
