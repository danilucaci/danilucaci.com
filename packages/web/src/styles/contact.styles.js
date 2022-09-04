import styled from "styled-components";

import { mediaMin, rem } from "../theme";
import { Copy } from "../components/Copy";
import { Row } from "../components/Grid";
import HR from "../components/HR";
import ExternalLink from "../components/ExternalLink";

export const ContactPageRow = styled(Row)`
  max-width: ${({ theme }) => theme.layout.col6.wrapper};
  margin-left: auto;
  margin-right: auto;

  ${mediaMin.m`
     margin-top: ${({ theme }) => theme.spacing.row.m}; 
  `};

  ${mediaMin.xl`
    max-width: ${({ theme }) => theme.layout.col12.wrapper};
    justify-content: center;
    margin-top: ${({ theme }) => theme.spacing.row.xl}; 
  `};
`;

export const H1 = styled.h1`
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

export const Info = styled(Copy)`
  margin-bottom: ${rem(16)};

  ${mediaMin.xl`
    margin-bottom: ${rem(32)};
  `};
`;

export const SayHiWrapper = styled.div`
  margin-top: ${rem(16)};
`;

export const SayHiDescription = styled(Copy)`
  display: inline;
`;

export const StyledLink = styled(ExternalLink)`
  display: inline;
  white-space: nowrap;
`;

export const SocialNavWrapper = styled.div`
  margin-top: ${rem(16)};
`;

export const StyledHR = styled(HR)`
  display: block;
  width: 100%;
  margin-top: ${rem(16)};
  margin-bottom: ${rem(16)};

  ${mediaMin.xl`
    margin-top: ${rem(24)};
    margin-bottom: ${rem(24)};
  `};
`;
