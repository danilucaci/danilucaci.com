import styled from "styled-components";
import { theme, rem } from "../../theme/globalStyles";

export const StyledSiteHeaderWrapper = styled.header`
  width: 100%;
  display: block;
  z-index: 100;
  position: fixed;
  top: 0;

  & ul {
    margin-left: 0 !important;
  }
`;

export const StyledSiteHeader = styled.div`
  background-color: ${theme.colors.grey00};
  border-bottom: 2px solid ${theme.colors.grey300};
  width: 100%;
  display: block;
`;

export const ScrollContainer = styled.div`
  height: ${rem(4)};
  background-color: transparent;
  will-change: width;
  width: 100%;
`;

export const ScrollLine = styled.div`
  height: ${rem(4)};
  background-color: ${theme.colors.primary600};
  will-change: width;
  width: 0%;
`;
