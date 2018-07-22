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

  &:hover {
    color: ${theme.colors.main600};
    background-color: ${theme.colors.main100};
  }
`;
