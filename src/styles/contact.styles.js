import styled from "styled-components";
import { theme, mediaMin, rem } from "../theme/theme";
import { Copy } from "../components/Copy/Copy";
import { HR } from "../components/HR/HR";
import { GridRow } from "../components/Grid/Grid";
import ExternalLink from "../components/ExternalLink/ExternalLink";

export const ContactPageWrapper = styled(GridRow)`
  max-width: ${theme.layout.col6.wrapper};

  margin-bottom: ${theme.spacing.row.s};

  ${mediaMin.s`
    margin-bottom: ${theme.spacing.row.m};
  `};

  ${mediaMin.xl`
    margin-bottom: ${theme.spacing.row.xl};
    max-width: ${theme.layout.col12.wrapper};
    margin-top: ${rem(24)};
  `};
`;

export const H1 = styled.h1`
  display: block;
  margin-bottom: ${rem(16)};

  font-size: ${theme.font.size.display.mobile.h2};
  line-height: ${theme.font.lineHeight.display.mobile.h2};

  ${mediaMin.xs`
    font-size: ${theme.font.size.display.desktop.h2};
  `}

  ${mediaMin.xs`
    line-height: ${theme.font.lineHeight.display.desktop.h2};
  `}
`;

export const Info = styled(Copy)`
  margin-bottom: ${rem(16)};

  ${mediaMin.xl`
    margin-bottom: ${rem(32)};
  `};
`;

export const FormHr = styled(HR)`
  margin-top: ${rem(16)};
  margin-bottom: ${rem(24)};

  ${mediaMin.xl`
      display: none;
  `};
`;

export const SayHiWrapper = styled.div`
  margin-top: ${rem(24)};

  ${mediaMin.xl`  
    margin-top: ${rem(40)};
  `};
`;

export const SayHiTitle = styled.h4`
  margin-top: ${rem(24)};
  margin-bottom: ${rem(16)};

  ${mediaMin.l`  
    margin-top: ${rem(16)};
  `};
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
