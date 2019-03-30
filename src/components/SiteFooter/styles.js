import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { LightSecondaryLink } from "../Link/Link";
import { Copy, CopyBold } from "../Copy/Copy";

export const StyledFooter = styled.footer`
  display: block;
  text-align: center;
  background-color: ${theme.colors.pageDark500};
  width: 100%;
  padding: ${rem(64)} ${rem(16)} ${rem(40)};

  ${mediaMin.s`
    padding: ${rem(80)} ${rem(24)} ${rem(56)};
  `};
`;

export const StyledCopyright = styled(CopyBold)`
  color: ${theme.colors.light100};
  margin-bottom: ${rem(8)};
  white-space: nowrap;
`;

export const StyledCopy = styled(Copy)`
  color: ${theme.colors.light100};
  margin-bottom: ${rem(16)};
`;

export const LegalDocsContainer = styled.nav`
  margin-top: ${rem(56)};
  ${mediaMin.s`
      margin-top: ${rem(24)};
  `};
`;

export const LegalDoc = styled(LightSecondaryLink)`
  display: inline-block;
  margin-right: ${rem(16)};
  white-space: nowrap;
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  margin-top: ${rem(12)};

  ${mediaMin.l`
      margin-top: 0;
  `};
`;
