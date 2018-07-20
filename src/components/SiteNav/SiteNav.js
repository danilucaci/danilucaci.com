import React from "react";

import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

import SiteNavItem from "./SiteNavItem/SiteNavItem";

const StyledSiteNav = styled.ul`
  background-color: ${theme.colors.gray100};
  display: block;
  outline: 1px solid red;
  text-align: center;

  padding-top: ${rem(40)};
  padding-left: ${rem(16)};
  padding-right: ${rem(16)};
  padding-bottom: ${rem(16)};

  height: 100vh;
  width: 100%;

  transform: translateX(0%) scale(0);
  transform-origin: 90% 0;
  transition: all ease-out 0.15s;

  opacity: 0;
  z-index: 100;

  ${(props) =>
    props.showNav &&
    css`
      display: block;
      opacity: 1;
      transform: scale(1);
      transition: ease-in-out 0.2s;
      z-index: 10; // sit over the go to top fixed button
    `};

  ${mediaMin.m`
    display: block;
    opacity: 1;

    padding: 0;
    margin-bottom: 0;
    margin-right: ${rem(24)};
    max-width: inherit;
    max-width: initial;

    height: auto;

    transform: none;
    transition: none;
  `};
`;

const SiteNav = (props) => {
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
