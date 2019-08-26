import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

export const StyledSiteNavList = styled.ul`
  background-color: ${theme.colors.grey00};
  text-align: center;
  display: block;
  padding-left: ${rem(16)};
  padding-right: ${rem(16)};
  padding-bottom: ${rem(104)};

  position: fixed;
  z-index: 100;

  left: 0;
  right: 0;
  bottom: 0;
  top: calc(${theme.navBarHeight} - ${rem(8)});

  will-change: transform;

  transform: translateX(120%);
  transition: transform ease 0.3s;

  overflow-y: auto;

  ${({ showNav }) =>
    showNav &&
    css`
      transform: translateX(0);
    `};

  ${mediaMin.nav`
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
    display: inline-block;
    overflow: visible;
    height: auto;
    width: auto;
    position: static;
    transform: none;
  `};
`;
