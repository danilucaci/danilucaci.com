import styled from "styled-components";
import LocaleLink from "../LocaleLink/LocaleLink";
import { theme, rem } from "../../theme/globalStyles";

export const StyledLogo = styled(LocaleLink)`
  color: ${theme.colors.grey900};
  display: inline-block;

  font-family: ${theme.fonts.headerFallback};

  .fonts-loaded & {
    font-family: ${theme.fonts.header};
  }

  font-weight: 700;
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.m};
  text-decoration: none;
  padding: ${rem(12)} 0;

  &:visited,
  &:link {
    color: ${theme.colors.grey900};
  }

  &:hover {
    background-color: transparent;
    color: ${theme.colors.primary600};
    cursor: pointer;
  }
`;
