import styled from "styled-components";

import { mediaMin, rem } from "../theme";
import { Copy } from "../components/Copy";
import HR from "../components/HR";
import { Row } from "../components/Grid";

export const ThanksPageRow = styled(Row)`
  & a {
    display: inline;
    white-space: nowrap;
  }

  ${mediaMin.m`
     margin-top: ${({ theme }) => theme.spacing.row.m}; 
  `};

  ${mediaMin.xl`
     margin-top: ${({ theme }) => theme.spacing.row.xl}; 
  `};
`;

export const StyledH1 = styled.h1`
  display: block;
  width: 100%;
  margin-bottom: ${rem(24)};

  font-size: ${({ theme }) => theme.font.size.display.mobile.h2};
  line-height: ${({ theme }) => theme.font.lineHeight.display.mobile.h2};

  ${mediaMin.m`
    font-size: ${({ theme }) => theme.font.size.display.desktop.h1};
    line-height: ${({ theme }) => theme.font.lineHeight.display.desktop.h1};
  `}
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

  font-size: ${({ theme }) => theme.font.size.display.mobile.subtitle};
  line-height: ${({ theme }) => theme.font.lineHeight.display.mobile.subtitle};

  ${mediaMin.s`
    font-size: ${({ theme }) => theme.font.size.display.desktop.subtitle};
    line-height: ${({ theme }) =>
      theme.font.lineHeight.display.desktop.subtitle};
  `};
`;

export const StyledHR = styled(HR)`
  display: block;
  width: 100%;
  margin-bottom: ${rem(16)};
`;
