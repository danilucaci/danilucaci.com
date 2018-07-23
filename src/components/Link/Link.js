import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import { theme } from "../../theme/globalStyles";

export const DefaultLink = styled(Link)`
  color: ${theme.colors.main600};

  text-decoration: underline;

  font-family: ${theme.fonts.bodyRegular};
  font-style: normal;
  font-weight: 400;
  line-height: inherit;

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
