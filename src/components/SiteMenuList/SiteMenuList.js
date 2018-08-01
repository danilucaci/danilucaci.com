import React from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";
import SiteMenuListItem from "./SiteMenuListItem/SiteMenuListItem";

const StyledSiteMenuList = styled.ul`
  background-color: ${theme.colors.gray100};
  display: block;
  text-align: center;
  overflow: hidden;

  transition: opacity linear 0.2s;
  will-change: max-height, opacity;

  ${(props) =>
    props.showNav
      ? css`
          max-height: 100em;
          pointer-events: auto;
          z-index: 10;
          opacity: 1;
        `
      : css`
          max-height: 0em;
          pointer-events: none;
          opacity: 0;
        `};

  height: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  right: 0;

  ${mediaMin.s`
    float: right;
    background-color: transparent;
    padding-right: ${rem(2)};
    margin: 0 0 0 auto;
    width: auto;
    position: static;
    max-height: 100em;
    pointer-events: auto;
    opacity: 1;
    transform: none;
    transition: none;
    z-index: 10;
  `};
`;

const SiteMenuList = (props) => {
  return (
    <StyledSiteMenuList showNav={props.showNav} role="menu">
      <SiteMenuListItem
        showNav={props.showNav}
        to="/services"
        label="Services"
      />
      <SiteMenuListItem showNav={props.showNav} to="/blog" label="Blog" />
      <SiteMenuListItem
        showNav={props.showNav}
        to="/about-me"
        label="About Me"
      />
      <SiteMenuListItem showNav={props.showNav} to="/contact" label="Contact" />
    </StyledSiteMenuList>
  );
};

export default SiteMenuList;
