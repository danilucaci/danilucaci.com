import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import LocaleLink from "../../LocaleLink/LocaleLink";
import { theme, rem, mediaMin, mediaMax } from "../../../theme/globalStyles";

const StyledSiteNavListItem = styled.li`
  text-decoration: none;
  list-style-type: none;
  text-align: center;

  .fonts-loaded & {
    font-family: ${theme.fonts.headerRegular};
  }

  font-weight: 400;
  width: 100%;

  margin: ${rem(16)} 0;

  ${mediaMin.s`
    margin: 0;
    display: inline-block;
    width: auto;
    font-size: ${theme.fontSizes.m};
    line-height: ${theme.fontSizes.m};
  `};

  & > a {
    color: ${theme.colors.dark700};
    display: block;

    font-family: ${theme.fonts.headerRegular};

    font-weight: 400;
    font-size: ${rem(24)};
    line-height: ${rem(32)};
    text-decoration: none;
    width: 100%;
    padding: ${rem(16)} 0;

    &:visited,
    &:link {
      color: ${theme.colors.dark700};
    }

    &:hover {
      background-color: transparent;
      color: ${theme.colors.main600};
      cursor: pointer;
    }

    ${mediaMin.s`
      background-color: transparent;
      font-size: ${theme.fontSizes.s};
      line-height: ${theme.lineHeights.s};
      padding: ${rem(16)} ${rem(12)};
  `};

    ${mediaMin.l`
      padding: ${rem(16)};
  `};

    &.current-nav-item {
      background-color: ${theme.colors.gray300};
      color: ${theme.colors.dark900};
      font-weight: 700;

      .fonts-loaded & {
        font-family: ${theme.fonts.header};
      }

      &:hover {
        background-color: transparent;
        color: ${theme.colors.main600};
      }

      ${mediaMin.s`
        background-color: transparent;
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
    <StyledSiteNavListItem role="menuitem" tabIndex="-1">
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
  to: PropTypes.string.isRequired,
};

export default SiteNavListItem;
