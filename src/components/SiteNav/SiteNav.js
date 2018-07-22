import React from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";
import SiteNavItem from "./SiteNavItem/SiteNavItem";

const StyledSiteNav = styled.ul`
  background-color: ${theme.colors.gray100};
  display: block;
  text-align: center;

  padding-top: ${rem(40)};

  transform: translateX(0%)
    ${(props) => (props.showNav ? css`scale(1)` : css`scale(1)`)};
  transform-origin: 90% 0;
  transition: all ease-out 0.15s;

  opacity: ${(props) => (props.showNav ? css`1` : css`1`)};
  visibility: ${(props) => (props.showNav ? css`visible` : css`visible`)};

  height: 100%;
  height: 100vh;
  ${"" /* width: 100%; */} position: absolute;
  left: 0;
  right: 0;

  z-index: 10;

  ${mediaMin.s`
    float: right;
    opacity: 1;
    visibility: visible;
    
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: 0;
    width: auto;
    height: auto;

    position: static;

    transform: none;
    transition: none;
  `};
`;

const SiteNav = (props) => {
  console.log(props.showNav);

  return (
    <StyledSiteNav>
      <SiteNavItem to="/services" label="Services" />
      <SiteNavItem to="/blog" label="Blog" />
      <SiteNavItem to="/about-me" label="About Me" />
      <SiteNavItem to="/contact" label="Contact" />
    </StyledSiteNav>
  );
};

export default SiteNav;
