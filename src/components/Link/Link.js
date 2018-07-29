import React from "react";
import { Link } from "gatsby";

import styled, { css } from "styled-components";
import { theme } from "../../theme/globalStyles";

export const DefaultLink = styled(Link)`
  color: ${theme.colors.main600};

  text-decoration: underline;

  font-family: ${theme.fonts.bodyRegular};
  line-height: ${theme.lineHeights.m};
  font-style: normal;
  font-weight: 400;

  ${(props) =>
    props.bold &&
    css`
      font-family: ${theme.fonts.bodyBold};
      font-style: normal;
      font-weight: 700;
    `};

  a,
  &:active,
  &:focus {
    outline: 2px dashed ${theme.colors.main600};
  }

  a,
  &:visited,
  &:link {
    color: ${theme.colors.main600};
  }

  a,
  &:hover {
    color: ${theme.colors.main600};
    background-color: ${theme.colors.main100};
    cursor: pointer;
  }
`;

export const GrayLink = styled(Link)`
  color: ${theme.colors.dark800};

  text-decoration: underline;

  font-family: ${theme.fonts.bodyRegular};
  font-style: normal;
  font-weight: 400;

  ${(props) =>
    props.bold &&
    css`
      font-family: ${theme.fonts.bodyBold};
      line-height: ${theme.lineHeights.m};
      font-style: normal;
      font-weight: 700;
    `};

  a,
  &:active,
  &:focus {
    outline: 2px dashed ${theme.colors.main600};
  }

  a,
  &:visited,
  &:link {
    color: ${theme.colors.dark800};
  }

  a,
  &:hover {
    color: ${theme.colors.dark800};
    background-color: ${theme.colors.gray200};
    cursor: pointer;
  }
`;
