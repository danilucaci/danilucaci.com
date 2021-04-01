import styled from "styled-components";

import { theme, rem } from "../../theme";

export const StyledSkipToMainContent = styled.a`
  left: -999px;
  position: absolute;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -999;

  &:focus,
  &:active {
    color: ${theme.color.text.light.white};
    background-color: ${theme.color.background.section.dark};
    left: auto;
    top: auto;
    width: auto;
    height: auto;
    overflow: auto;
    padding: ${rem(12)} ${rem(16)};
    text-align: center;
    font-size: ${rem(20)};
    line-height: ${rem(32)};
    z-index: 999;
  }
`;
