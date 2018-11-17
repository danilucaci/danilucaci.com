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

  ${(props) =>
    props.bold &&
    css`
      .fonts-loaded & {
        font-family: ${theme.fonts.bodyBold};
      }
      font-style: normal;
      font-weight: 700;
    `};

  &:visited,
  &:link {
    color: ${theme.colors.main600};
  }

  &:hover {
    background-color: ${theme.colors.gray300};
    cursor: pointer;
  }
`;

export const GrayLink = styled(Link)`
  color: ${theme.colors.dark900};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyRegular};
  }

  font-style: normal;
  font-weight: 400;

  ${(props) =>
    props.bold &&
    css`
      .fonts-loaded & {
        font-family: ${theme.fonts.bodyBold};
      }
      font-style: normal;
      font-weight: 700;
    `};

  &:visited,
  &:link {
    color: ${theme.colors.dark900};
  }

  &:hover {
    background-color: ${theme.colors.gray300};
    cursor: pointer;
  }
`;
