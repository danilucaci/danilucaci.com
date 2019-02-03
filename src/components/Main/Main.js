import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

export const Main = styled.main`
  margin-top: calc(${theme.navBarHeight} + ${theme.mainMargins.top.s});
  margin-bottom: ${theme.mainMargins.bottom.s};

  ${mediaMin.m`
  /* Add in extra space for the fixed page navbar */
    margin-top: calc(${theme.navBarHeight} + ${theme.mainMargins.top.m});
    margin-bottom: ${theme.mainMargins.bottom.m};
  `};

  ${mediaMin.xl`
  /* Add in extra space for the fixed page navbar */
    margin-top: calc(${theme.navBarHeight} + ${theme.mainMargins.top.xl});
    margin-bottom: ${theme.mainMargins.bottom.xl};
  `};
`;
