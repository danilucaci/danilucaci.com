import styled from "styled-components";
import { theme, rem } from "../../theme/theme";

export const StyledSiteHeaderWrapper = styled.header`
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
