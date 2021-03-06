import styled from "styled-components";
import { theme } from "../../theme/theme";

export const StyledExternalLink = styled.a`
  color: ${theme.color.text.link.primary.enabled};
  text-decoration: underline;
  font-style: normal;
  font-weight: 400;

  .fonts-loaded & {
    font-family: ${theme.font.family.body.regular};
  }

  &:visited,
  &:link {
    color: ${theme.color.text.link.primary.enabled};
  }

  &:hover {
    background-color: ${theme.color.background.link.primary};
    color: ${theme.color.text.link.primary.hover};
    cursor: pointer;
  }

  &:active {
    background-color: ${theme.color.background.link.primary};
    color: ${theme.color.text.link.primary.active};
    cursor: pointer;
  }
`;
