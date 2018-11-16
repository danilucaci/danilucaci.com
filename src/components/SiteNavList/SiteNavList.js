import React from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin, mediaMax } from "../../theme/globalStyles";
import SiteNavListItem from "./SiteNavListItem/SiteNavListItem";

const StyledSiteNavList = styled.ul`
  background-color: ${theme.colors.gray100};
  display: block;
  text-align: center;

  transition: transform, opacity linear 0.2s;
  will-change: transform, opacity;

  ${(props) =>
    props.showNav
      ? css`
          transform: scaleY(1);
          pointer-events: auto;
          z-index: 10;
          opacity: 1;
        `
      : css`
          transform: scaleY(0);
          pointer-events: none;
          opacity: 0;
        `};

  ${mediaMax.s`
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    height: 100vh;
    padding: 0 ${rem(16)};
  `};

  ${mediaMin.s`
    background-color: transparent;
    float: right;
    padding-right: ${rem(2)};
    pointer-events: auto;
    opacity: 1;
    z-index: 10;
    transform: none;
  `};
`;

const SiteNavList = (props) => {
  return (
    <StyledSiteNavList showNav={props.showNav} role="menu">
      <SiteNavListItem showNav={props.showNav} to="/work" label="Work" />
      <SiteNavListItem showNav={props.showNav} to="/blog" label="Blog" />
      <SiteNavListItem
        showNav={props.showNav}
        to="/about-me"
        label="About Me"
      />
      <SiteNavListItem showNav={props.showNav} to="/contact" label="Contact" />
    </StyledSiteNavList>
  );
};

export default SiteNavList;
