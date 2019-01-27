import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { FormattedMessage } from "react-intl";

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
    padding-left: ${rem(16)};
    padding-right: ${rem(16)};
  `};

  ${mediaMin.s`
    background-color: transparent;
    float: right;
    pointer-events: auto;
    opacity: 1;
    z-index: 10;
    /* transform: none; */
  `};

  transform: translateY(0);
  transition: transform ease 0.15s;
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
          <SiteNavListItem
            showNav={props.showNav}
            to={workLocaleLabels[`${props.locale}`]}
          >
            {txt}
          </SiteNavListItem>
        )}
      </FormattedMessage>
      <FormattedMessage id="siteNavBlog">
        {(txt) => (
          <SiteNavListItem showNav={props.showNav} to="/blog">
            {txt}
          </SiteNavListItem>
        )}
      </FormattedMessage>
      <FormattedMessage id="siteNavAbout">
        {(txt) => (
          <SiteNavListItem
            showNav={props.showNav}
            to={aboutMeLocaleLabels[`${props.locale}`]}
          >
            {txt}
          </SiteNavListItem>
        )}
      </FormattedMessage>
      <FormattedMessage id="siteNavContact">
        {(txt) => (
          <SiteNavListItem
            showNav={props.showNav}
            to={contactLocaleLabels[`${props.locale}`]}
          >
            {txt}
          </SiteNavListItem>
        )}
      </FormattedMessage>
    </StyledSiteNavList>
  );
};

SiteNavList.propTypes = {
  locale: PropTypes.string.isRequired,
  showNav: PropTypes.bool.isRequired,
};

export default SiteNavList;
