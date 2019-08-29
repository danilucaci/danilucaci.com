import React from "react";
import { string, bool } from "prop-types";

import SiteNavList from "../SiteNavList/SiteNavList";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { Logo } from "../Logo/Logo";

import { StyledSiteNav } from "./styles";

const SiteNav = ({ locale, currentPath, twinPostURL, expand }) => (
  <StyledSiteNav aria-label="Page Menu" role="navigation" expand={expand}>
    <Logo locale={locale} />
    <SiteNavList
      locale={locale}
      twinPostURL={twinPostURL}
      currentPath={currentPath}
    />
    <LanguageSelector
      currentPath={currentPath}
      locale={locale}
      twinPostURL={twinPostURL}
    />
  </StyledSiteNav>
);

SiteNav.propTypes = {
  locale: string.isRequired,
  twinPostURL: string.isRequired,
  currentPath: string.isRequired,
  expand: bool,
};

SiteNav.defaultProps = {
  expand: false,
};

export default SiteNav;
