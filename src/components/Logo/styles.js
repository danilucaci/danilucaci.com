import styled from "styled-components";
import LocaleLink from "../LocaleLink/LocaleLink";
import { theme } from "../../theme/theme";

export const StyledLogo = styled(LocaleLink)`
  color: ${theme.color.text.default};
  display: inline-block;
  white-space: nowrap;

  font-weight: 700;
  font-size: ${theme.font.size.body.m};
  line-height: ${theme.font.lineHeight.body.m};
  text-decoration: none;
  font-family: ${theme.font.family.display.fallback};

  .fonts-loaded & {
    font-family: ${theme.font.family.display.bold};
  }

  &:visited,
  &:link {
    color: ${theme.color.text.default};
  }

  &:hover {
    background-color: transparent;
    color: ${theme.color.text.primary};
    cursor: pointer;
  }
`;
