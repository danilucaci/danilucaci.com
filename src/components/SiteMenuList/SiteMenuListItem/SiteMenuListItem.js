import React from "react";
import { NavLink } from "react-router-dom";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin, mediaMax } from "../../../theme/globalStyles";

const StyledSiteMenuListItem = styled.li`
  color: ${theme.colors.main600};
  text-decoration: none;
  list-style-type: none;
  text-align: center;
  width: 100%;

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

const StyledNavLink = styled(NavLink)`
  color: ${theme.colors.dark800};
  display: block;
  font-family: ${theme.fonts.bodyBold};
  font-weight: 700;
  font-size: ${rem(32)};
  line-height: ${rem(40)};
  text-decoration: none;
  width: 100%;
  padding: ${rem(16)} ${rem(16)};

  ${mediaMin.xxs`
    padding: ${rem(24)} ${rem(16)};
  `};

  &:active,
  &:focus {
    outline: 2px dashed ${theme.colors.main600};
  }

  &:visited,
  &:link {
    color: ${theme.colors.dark800};
  }

  &:hover {
    color: ${theme.colors.main600};
    cursor: pointer;
  }

  ${mediaMin.s`
    background-color: transparent;
    font-family: ${theme.fonts.bodyRegular};
    font-weight: 700;
    font-size: ${theme.fontSizes.s};
    line-height: ${theme.lineHeights.s};
    padding: ${rem(8)} ${rem(16)} ${rem(12)};
    margin: ${rem(2)};
  `};

  &.current-nav-item {
    background-color: ${theme.colors.main600};

    &:hover {
      color: ${theme.colors.main100};
    }

    color: ${theme.colors.main100};

    ${mediaMin.s`
      background-color: transparent;
      color: ${theme.colors.dark800};
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

const SiteMenuListItem = (props) => {
  return (
    <StyledSiteMenuListItem
      role="menuitem"
      tabindex="-1"
      showNav={props.showNav}
    >
      <StyledNavLink
        to={props.to}
        activeClassName="current-nav-item"
        ariaCurrent="page"
      >
        {props.label}
      </StyledNavLink>
    </StyledSiteMenuListItem>
  );
};

export default SiteMenuListItem;
