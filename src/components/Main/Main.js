import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

export const Main = styled.main`
  margin-top: ${theme.mainMargins.top.s};
  margin-bottom: ${theme.mainMargins.bottom.s};

  ${mediaMin.m`
    margin-top: ${theme.mainMargins.top.m};
    margin-bottom: ${theme.mainMargins.bottom.m};
  `};

  ${mediaMin.xl`
    margin-top: ${theme.mainMargins.top.xl};
    margin-bottom: ${theme.mainMargins.bottom.xl};
  `};
`;
