import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

export const Main = styled.main`
  margin-top: calc(${theme.navBarHeight} + ${theme.spacing.main.top.s});

  ${mediaMin.m`
  /* Add in extra space for the fixed page navbar */
    margin-top: calc(${theme.navBarHeight} + ${theme.spacing.main.top.m});
  `};

  ${mediaMin.xl`
  /* Add in extra space for the fixed page navbar */
    margin-top: calc(${theme.navBarHeight} + ${theme.spacing.main.top.xl});
  `};
`;
