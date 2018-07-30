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
  margin: ${rem(24)} 0;

  @media screen and (max-height: 32em) {
    margin: ${rem(8)} 0;
  }

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
  font-family: ${theme.fonts.header};
  font-weight: 700;
  font-size: ${rem(32)};
  line-height: ${rem(32)};
  text-decoration: none;
  width: 100%;
  padding: ${rem(20)} ${rem(16)};

  ${mediaMax.xxs`
    padding: ${rem(16)} ${rem(16)};
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
    font-family: ${theme.fonts.bodyBold};
    font-weight: 700;
    font-size: ${theme.fontSizes.s};
    line-height: ${theme.lineHeights.s};
    padding: ${rem(12)} ${rem(16)} ${rem(12)} ${rem(16)};
    margin-right: ${rem(2)};
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
      border-bottom: 8px solid ${theme.colors.main600};
      padding-bottom: ${rem(8)};

      &:hover {
        color: ${theme.colors.main600};
      }
    `};

    ${mediaMin.m`
      padding-bottom: ${rem(4)};
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
        aria-current="page"
      >
        {props.label}
      </StyledNavLink>
    </StyledSiteMenuListItem>
  );
};

export default SiteMenuListItem;
