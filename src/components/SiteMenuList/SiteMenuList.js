import React from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";
import SiteMenuListItem from "./SiteMenuListItem/SiteMenuListItem";

const StyledSiteMenuList = styled.ul`
  background-color: ${theme.colors.gray100};
  display: block;
  text-align: center;
  overflow: hidden;

  transition: transform ease-in-out 0.3s;
  will-change: transform, visibility, opacity, width;

  ${(props) =>
    props.showNav
      ? css`
          transform: translate3d(0, 0, 0) scaleX(1);
          visibility: visible;
          opacity: 1;
          max-width: 1000em;
        `
      : css`
          transform: translate3d(110%, 0, 0) scaleX(0);
          visibility: hidden;
          opacity: 0;
          max-width: 0;
        `};

  height: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  right: 0;

  z-index: 10;

  ${mediaMin.s`
    float: right;
    background-color: ${theme.colors.transparent};
    padding-right: ${rem(2)};
    margin-top: 0;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: 0;
    width: auto;
    height: auto;

    position: static;
    visibility: visible;
    max-width: 2000em;
    opacity: 1;
    transform: none;
    transition: none;
  `};
`;

const SiteMenuList = (props) => {
  return (
    <StyledSiteMenuList showNav={props.showNav} role="menu">
      <SiteMenuListItem to="/services" label="Services" />
      <SiteMenuListItem to="/blog" label="Blog" />
      <SiteMenuListItem to="/about-me" label="About Me" />
      <SiteMenuListItem to="/contact" label="Contact" />
    </StyledSiteMenuList>
  );
};

export default SiteMenuList;
