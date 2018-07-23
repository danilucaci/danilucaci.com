import React from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";
import SiteMenuListItem from "./SiteMenuListItem/SiteMenuListItem";

const StyledSiteMenuList = styled.ul`
  background-color: ${theme.colors.gray100};
  display: block;
  text-align: center;

  padding-top: ${rem(40)};

  transition: all ease-out 0.15s;
  transform: ${(props) =>
    props.showNav ? css`translateX(0%)` : css`translateX(-200%)`};
  pointer-events: ${(props) => (props.showNav ? css`auto` : css`none`)};
  opacity: ${(props) => (props.showNav ? css`1` : css`0`)};
  visibility: ${(props) => (props.showNav ? css`visible` : css`hidden`)};

  height: 100%;
  height: 100vh;
  position: absolute;
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

const SiteMenuList = (props) => {
  console.log("SiteMenuList: " + props.showNav);

  return (
    <StyledSiteMenuList role="menu">
      <SiteMenuListItem to="/services" label="Services" />
      <SiteMenuListItem to="/blog" label="Blog" />
      <SiteMenuListItem to="/about-me" label="About Me" />
      <SiteMenuListItem to="/contact" label="Contact" />
    </StyledSiteMenuList>
  );
};

export default SiteMenuList;
