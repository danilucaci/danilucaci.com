import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import LocaleLink from "../../LocaleLink/LocaleLink";
import { theme, rem, mediaMin, mediaMax } from "../../../theme/globalStyles";

const StyledSiteNavListItem = styled.li`
  text-decoration: none;
  list-style-type: none;
  text-align: center;
  font-family: ${theme.fonts.headerRegular};
  font-weight: 400;
  width: 100%;
  transition-delay: 0.4s;
  transition: max-height, transform ease-out 0.2s;
  will-change: max-height;
  position: relative;

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

  ${mediaMax.xs`
    margin: ${rem(24)} 0;
  `};

  ${mediaMin.s`
    display: inline-block;
    width: auto;
    max-height: 100em;
    opacity: 1;
    transform: none;
    font-size: ${theme.fontSizes.m};
    line-height: ${theme.fontSizes.m};
  `};

  & > a {
    color: ${theme.colors.dark700};
    display: block;

    .fonts-loaded & {
      font-family: ${theme.fonts.headerRegular};
    }

    font-weight: 400;
    font-size: ${rem(24)};
    line-height: ${rem(32)};
    text-decoration: none;
    width: 100%;
    padding: ${rem(16)} ${rem(16)};

    &:visited,
    &:link {
      color: ${theme.colors.dark700};
    }

    &:hover {
      color: ${theme.colors.main600};
      cursor: pointer;
    }

    ${mediaMin.s`
      background-color: transparent;
      font-size: ${theme.fontSizes.s};
      line-height: ${theme.lineHeights.s};
  `};

    &.current-nav-item {
      background-color: ${theme.colors.main600};
      color: ${theme.colors.gray100};
      font-weight: 700;
      font-family: ${theme.fonts.header};

      &:hover {
        color: ${theme.colors.gray100};
      }

      ${mediaMin.s`
        background-color: transparent;
        color: ${theme.colors.dark900};
        
        &:hover {
          color: ${theme.colors.main600};
        }

        /* &:after {
          content: '';
          display: block;
          background-color: ${theme.colors.main600};
          width: 100%;
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: ${rem(4)};
          z-index: 10;
        }; */
    `};
    }
  }
`;

/**
 * https://reach.tech/router/api/Link
 * this link will be active when itself or deeper routes
 * are current
 */
const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: "current-nav-item" } : null;
};

const SiteNavListItem = (props) => {
  return (
    <StyledSiteNavListItem
      role="menuitem"
      tabIndex="-1"
      showNav={props.showNav}
    >
      <LocaleLink
        to={props.to}
        getProps={isPartiallyActive}
        aria-current="page"
      >
        {props.children}
      </LocaleLink>
    </StyledSiteNavListItem>
  );
};

SiteNavListItem.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SiteNavListItem;
