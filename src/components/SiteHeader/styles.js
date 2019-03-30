import styled from "styled-components";
import { theme, rem } from "../../theme/globalStyles";

export const StyledSiteHeaderWrapper = styled.header`
  width: 100%;
  display: block;
  will-change: transform;
  z-index: 100;
  position: fixed;
  top: 0;

  & ul {
    margin-left: 0 !important;
  }
`;

export const StyledSiteHeader = styled.div`
  background-color: ${theme.colors.gray100};
  ${theme.shadow.navbar};
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
  background-color: ${theme.colors.main600};
  will-change: width;
  width: 0%;
`;
