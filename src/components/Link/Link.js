import styled from "styled-components";
import { Link } from "gatsby";

import { theme } from "../../theme/theme";

export const DefaultLink = styled(Link)`
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

export const BoldLink = styled(DefaultLink)`
  font-weight: 700;

  .fonts-loaded & {
    font-family: ${theme.font.family.body.bold};
  }
`;

export const GreyLink = styled(Link)`
  color: ${theme.color.text.link.grey.enabled};
  text-decoration: underline;
  font-style: normal;
  font-weight: 400;

  .fonts-loaded & {
    font-family: ${theme.font.family.body.regular};
  }

  &:visited,
  &:link {
    color: ${theme.color.text.link.grey.enabled};
  }

  &:hover {
    background-color: ${theme.color.background.link.grey};
    color: ${theme.color.text.link.grey.hover};
    cursor: pointer;
  }

  &:active {
    background-color: ${theme.color.background.link.grey};
    color: ${theme.color.text.link.grey.active};
    cursor: pointer;
  }
`;
