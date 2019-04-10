import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

export const StyledSiteNavList = styled.ul`
  background-color: ${theme.colors.grey100};
  text-align: center;

  display: none;
  padding-left: ${rem(16)};
  padding-right: ${rem(16)};
  height: 100%;
  width: 100%;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;

  position: fixed;
  z-index: 1000;
  will-change: transform;

  left: 0;
  top: calc(${theme.navBarHeight} - ${rem(8)});
  transform: translateX(120%);
  pointer-events: none;
  transition: transform ease 0.3s;

  ${(props) =>
    props.showNav &&
    css`
      transform: translateX(0);
      display: block;
      pointer-events: auto;
    `};

  ${(props) =>
    props.isTransitioning &&
    `
      display: block !important;
    `};

  ${mediaMin.s`
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
    display: inline-block;
    overflow: visible;
    height: auto;
    width: auto;
    position: static;
    transform: none;
    visibility: visible;
    pointer-events: auto;
  `};
`;
