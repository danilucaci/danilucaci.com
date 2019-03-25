import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { FormattedMessage } from "react-intl";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import SiteNavListItem from "./SiteNavListItem/SiteNavListItem";
import { localePaths } from "../../i18n/i18n";

const StyledSiteNavList = styled.ul`
  background-color: ${theme.colors.gray100};
  display: inline-block;
  text-align: center;

  position: absolute;
  z-index: 10;

  height: 100%;
  height: 100vh;
  width: 100%;
  left: 0;
  top: calc(${theme.navBarHeight} - ${rem(8)});

  padding-left: ${rem(16)};
  padding-right: ${rem(16)};

  transition: transform ease 0.25s;
  will-change: transform;

  ${(props) =>
    (props.showNav
      ? css`
          transform: translateX(0);
          visibility: visible;
          opacity: 1;
          pointer-events: auto;
        `
      : css`
          transform: translateX(100%);
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
        `)};

  ${mediaMin.s`
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
    height: auto;
    width: auto;
    position: static;
    transform: none;
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  `};
`;

const SiteNavList = ({
  locale, currentPath, twinPostURL, showNav,
}) => (
  <StyledSiteNavList showNav={showNav} role="menu">
    <FormattedMessage id="siteNavWork">
      {(txt) => <SiteNavListItem to={localePaths[locale].work}>{txt}</SiteNavListItem>}
    </FormattedMessage>
    <FormattedMessage id="siteNavBlog">
      {(txt) => <SiteNavListItem to={localePaths[locale].blog}>{txt}</SiteNavListItem>}
    </FormattedMessage>
    <FormattedMessage id="siteNavAbout">
      {(txt) => <SiteNavListItem to={localePaths[locale].about}>{txt}</SiteNavListItem>}
    </FormattedMessage>
    <FormattedMessage id="siteNavContact">
      {(txt) => <SiteNavListItem to={localePaths[locale].contact}>{txt}</SiteNavListItem>}
    </FormattedMessage>
    <LanguageSelector currentPath={currentPath} locale={locale} twinPostURL={twinPostURL} />
  </StyledSiteNavList>
);

SiteNavList.propTypes = {
  locale: PropTypes.string.isRequired,
  twinPostURL: PropTypes.string.isRequired,
  currentPath: PropTypes.string.isRequired,
  showNav: PropTypes.bool.isRequired,
};

export default SiteNavList;
