import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import { theme, rem } from "../../theme/globalStyles";

export const DefaultLink = styled(Link)`
  color: ${theme.colors.main600};

  text-decoration: underline;

  font-family: ${theme.fonts.bodyRegular};
  font-style: normal;
  font-weight: 400;
  line-height: inherit;

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: ${theme.colors.main600};
  }

  &:hover {
    cursor: pointer;
  }
`;
