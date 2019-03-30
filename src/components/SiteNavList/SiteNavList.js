import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import LanguageSelector from "../LanguageSelector/LanguageSelector";
import SiteNavListItem from "./SiteNavListItem/SiteNavListItem";
import { localePaths } from "../../i18n/i18n";

import { StyledSiteNavList } from "./styles";

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
