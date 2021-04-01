import styled from "styled-components";

import { theme } from "../../theme";

export const StyledExternalGreyLink = styled.a`
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
