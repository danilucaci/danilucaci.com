import styled from "styled-components";

import { Copy } from "../components/Copy/Copy";
import { mediaMin, rem } from "../theme/theme";
import { HR } from "../components/HR/HR";
import { Row } from "../components/Grid/Grid";

export const NotFoundRow = styled(Row)`
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

export const StyledCopy = styled(Copy)`
  margin-bottom: ${rem(16)};
`;

export const StyledHR = styled(HR)`
  display: block;
  width: 100%;
  margin-bottom: ${rem(16)};
`;
