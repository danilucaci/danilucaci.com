import styled from "styled-components";
import LocaleLink from "../LocaleLink/LocaleLink";
import { theme, rem } from "../../theme/globalStyles";

export const StyledLogo = styled(LocaleLink)`
  color: ${theme.colors.grey900};
  display: inline-block;

  font-family: ${theme.font.family.display.fallback};

  .fonts-loaded & {
    font-family: ${theme.font.family.display.bold};
  }

  font-weight: 700;
  font-size: ${theme.font.size.body.m};
  line-height: ${theme.font.lineHeight.body.m};
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
