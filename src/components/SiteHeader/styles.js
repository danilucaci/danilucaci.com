import styled from "styled-components";
import { theme, mediaMin, rem } from "../../theme/theme";
import { GridRow, GridCol } from "../Grid/Grid";

export const SiteHeaderRow = styled(GridRow)`
  ${({ expand }) =>
    expand &&
    `
      max-width: ${theme.layout.col12.wrapper};
    `}
`;

export const StyledSiteNav = styled(GridCol)`
  position: relative;

  padding: ${rem(12)} 0;

  ${mediaMin.s`
    padding: ${rem(16)} 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `};
`;
