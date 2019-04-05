import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

export const StyledSiteNavList = styled.ul`
  background-color: ${theme.colors.grey100};
  display: inline-block;
  text-align: center;

  position: absolute;
  z-index: 10;

  height: 100%;
  height: 100vh;
  width: 100%;
  left: 0;
  top: calc(${theme.navBarHeight} - ${rem(8)});

  padding-left: ${rem(16)};
  padding-right: ${rem(16)};

  transition: transform ease 0.25s;
  will-change: transform;

  ${(props) =>
    (props.showNav
      ? css`
          transform: translateX(0);
          visibility: visible;
          opacity: 1;
          pointer-events: auto;
        `
      : css`
          transform: translateX(100%);
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
        `)};

  ${mediaMin.s`
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
    height: auto;
    width: auto;
    position: static;
    transform: none;
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  `};
`;
