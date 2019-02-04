import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { FormattedMessage } from "react-intl";

import { theme, rem, mediaMin, mediaMax } from "../../theme/globalStyles";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import SiteNavListItem from "./SiteNavListItem/SiteNavListItem";

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

  padding-top: ${rem(24)};
  padding-left: ${rem(16)};
  padding-right: ${rem(16)};

  transition: transform ease 0.25s;
  will-change: transform;

  ${(props) =>
    props.showNav
      ? css`
          transform: translateX(0);
          visibility: visible;
          opacity: 1;
        `
      : css`
          transform: translateX(100%);
          visibility: hidden;
          opacity: 0;
        `};

  ${mediaMin.s`
    position: static;
    height: auto;
    width: auto;
    padding-top: 0;
    padding-left: 0;
    visibility: visible;
    opacity: 1;
    padding-right: 0;
    background-color: transparent;
    transform: none;
  `};
`;

const SiteNavList = (props) => {
  const aboutMeLocaleLabels = {
    en: "/about-me",
    es: "/sobre-mi",
  };

  const workLocaleLabels = {
    en: "/work",
    es: "/trabajos",
  };

  const contactLocaleLabels = {
    en: "/contact",
    es: "/contacto",
  };

  return (
    <StyledSiteNavList showNav={props.showNav} role="menu">
      <FormattedMessage id="siteNavWork">
        {(txt) => (
          <SiteNavListItem to={workLocaleLabels[`${props.locale}`]}>
            {txt}
          </SiteNavListItem>
        )}
      </FormattedMessage>
      <FormattedMessage id="siteNavBlog">
        {(txt) => <SiteNavListItem to="/blog">{txt}</SiteNavListItem>}
      </FormattedMessage>
      <FormattedMessage id="siteNavAbout">
        {(txt) => (
          <SiteNavListItem to={aboutMeLocaleLabels[`${props.locale}`]}>
            {txt}
          </SiteNavListItem>
        )}
      </FormattedMessage>
      <FormattedMessage id="siteNavContact">
        {(txt) => (
          <SiteNavListItem to={contactLocaleLabels[`${props.locale}`]}>
            {txt}
          </SiteNavListItem>
        )}
      </FormattedMessage>
      <LanguageSelector
        currentPath={props.currentPath}
        locale={props.locale}
        twinPostURL={props.twinPostURL}
      />
    </StyledSiteNavList>
  );
};

SiteNavList.propTypes = {
  locale: PropTypes.string.isRequired,
  twinPostURL: PropTypes.string.isRequired,
  currentPath: PropTypes.string.isRequired,
  showNav: PropTypes.bool.isRequired,
};

export default SiteNavList;
