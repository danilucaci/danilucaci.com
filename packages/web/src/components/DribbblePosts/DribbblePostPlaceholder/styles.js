import styled, { keyframes } from "styled-components";

import { theme } from "../../../theme";

export const StyledPlaceholder = styled.div`
  display: inline-block;
  vertical-align: middle;

  position: relative;
  overflow: hidden;
  height: auto;
  width: 100%;
`;

export const placeholderAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
 `;

export const StyledPlaceholderInner = styled.span`
  display: block;
  width: 100%;
  padding-bottom: 75%;
  background: linear-gradient(
    90deg,
    ${theme.colors.grey100},
    ${theme.colors.grey400},
    ${theme.colors.grey100}
  );

  background-size: 200% 200%;

  animation: ${placeholderAnimation} 3s ease infinite;

  @media (prefers-reduced-motion: reduce) {
    background: none !important;
    background-color: ${theme.color.background.section.light} !important;
  }
`;
