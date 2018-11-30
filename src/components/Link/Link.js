import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { theme } from "../../theme/globalStyles";

export const DefaultLink = styled(Link)`
  color: ${theme.colors.main600};
  text-decoration: underline;
  font-style: normal;
  font-weight: 400;

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyRegular};
  }

  &:visited,
  &:link {
    color: ${theme.colors.main600};
  }

  &:hover {
    background-color: ${theme.colors.gray300};
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
  color: ${theme.colors.dark900};
`;
