import React from "react";
import { Link } from "gatsby";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin, mediaMax } from "../../../theme/globalStyles";

const StyledSiteNavListItem = styled.li`
  text-decoration: none;
  list-style-type: none;
  text-align: center;
  width: 100%;
  margin: ${rem(24)} 0;
  transition-delay: 0.4s;
  transition: max-height, transform ease-out 0.2s;
  will-change: max-height;

  ${(props) =>
    props.showNav
      ? css`
          max-height: 100em;
          opacity: 1;
          transform: translateY(0);
        `
      : css`
          max-height: 0em;
          opacity: 0;
          transform: translateY(-40%);
        `};

  &:last-of-type {
    margin: 0;
  }

  ${mediaMin.s`
    margin: 0 ${rem(2)};
    display: inline-block;
    width: auto;
    max-height: 100em;
    opacity: 1;
    transform: none;
    font-size: ${theme.fontSizes.m};
    line-height: ${theme.fontSizes.m};
  `};
`;

const StyledSiteNavLink = styled(Link)`
  color: ${theme.colors.dark900};
  display: block;

  .fonts-loaded & {
    font-family: ${theme.fonts.header};
  }

  font-weight: 700;
  font-size: ${rem(24)};
  line-height: ${rem(32)};
  text-decoration: none;
  width: 100%;
  padding: ${rem(12)} ${rem(16)};

  ${mediaMin.m`
    padding: ${rem(24)} ${rem(16)};
  `};

  &:visited,
  &:link {
    color: ${theme.colors.dark900};
  }

  &:hover {
    color: ${theme.colors.main600};
    cursor: pointer;
  }

  ${mediaMin.s`
    background-color: transparent;
    font-weight: 700;
    font-size: ${theme.fontSizes.s};
    line-height: ${theme.lineHeights.s};
    padding: ${rem(12)} ${rem(16)} ${rem(8)};
    margin: ${rem(2)};
  `};

  &.current-nav-item {
    background-color: ${theme.colors.main600};

    &:hover {
      color: ${theme.colors.gray100};
    }

    color: ${theme.colors.gray100};

    ${mediaMin.s`
      background-color: transparent;
      color: ${theme.colors.dark900};
      position: relative;
      
      &:hover {
        color: ${theme.colors.main600};
      }

      &:after {
        content: '';
        display: block;
        background-color: ${theme.colors.main600};
        width: 100%;
        position: absolute;
        bottom: -6px;
        left: 0;
        right: 0;
        height: ${rem(4)};
        z-index: 10;

        ${mediaMin.m`
          bottom: -2px;
        `};
      };
    `};
  }
`;

const SiteNavListItem = (props) => {
  return (
    <StyledSiteNavListItem
      role="menuitem"
      tabIndex="-1"
      showNav={props.showNav}
    >
      <StyledSiteNavLink
        to={props.to}
        activeClassName="current-nav-item"
        aria-current="page"
      >
        {props.label}
      </StyledSiteNavLink>
    </StyledSiteNavListItem>
  );
};

export default SiteNavListItem;
