import styled from "styled-components";
import { Link } from "gatsby";
// import LocaleLink from "../LocaleLink/LocaleLink";

import { theme } from "../../theme/globalStyles";

// export const DefaultLink = styled(LocaleLink)`
export const DefaultLink = styled(Link)`
  color: ${theme.colors.main600};
  text-decoration: underline;
  font-style: normal;
  font-weight: 400;

  &:visited,
  &:link {
    color: ${theme.colors.main600};
  }

  &:hover {
    background-color: ${theme.colors.grey300};
    cursor: pointer;
  }
`;

export const BoldLink = styled(DefaultLink)`
  font-weight: 700;

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyBold};
  }
`;

export const GreyLink = styled(DefaultLink)`
  color: ${theme.colors.dark800};
`;

export const LightSecondaryLink = styled(DefaultLink)`
  color: ${theme.colors.light300};

  &:visited,
  &:link {
    color: ${theme.colors.light300};
  }

  &:hover {
    background-color: transparent;
  }
`;
