import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import { theme, rem, mediaMin } from "../../../theme/globalStyles";

const StyledSiteNavItem = styled.li`
  color: ${theme.colors.main600};
  text-decoration: none;
  list-style-type: none;
  text-align: center;
  width: 100%;

  ${mediaMin.s`
    display: inline-block;
    width: auto;
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
  height: 100%;
  padding: ${rem(16)};

  &:hover {
    color: ${theme.colors.main600};
  }

  &.current-nav-item {
    background-color: ${theme.colors.main600};
    color: ${theme.colors.main100};

    ${mediaMin.s`
      background-color: ${theme.colors.gray100};
      color: ${theme.colors.dark800};
      border-bottom: 8px solid ${theme.colors.main600};
      padding-bottom: ${rem(8)};
    `};

    ${mediaMin.m`
      padding-bottom: ${rem(4)};
    `};
  }

  ${mediaMin.s`
    font-family: ${theme.fonts.bodyBold};
    font-weight: 700;
    font-size: ${theme.fontSizes.s};
    line-height: ${theme.lineHeights.s};
    padding: ${rem(12)} ${rem(16)} ${rem(12)} ${rem(16)};
    width: auto;
    height: auto;
  `};
`;

const SiteNavItem = (props) => {
  return (
    <StyledSiteNavItem>
      <StyledNavLink
        exact={true}
        to={props.to}
        activeClassName="current-nav-item"
      >
        {props.label}
      </StyledNavLink>
    </StyledSiteNavItem>
  );
};

export default SiteNavItem;
