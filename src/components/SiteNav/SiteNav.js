import React from "react";
import { string } from "prop-types";

import SiteNavList from "../SiteNavList/SiteNavList";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { Logo } from "../Logo/Logo";

import { StyledSiteNav } from "./styles";

const SiteNav = ({ locale, currentPath, twinPostURL }) => (
  <StyledSiteNav aria-label="Page Menu" role="navigation">
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
};

export default SiteNav;
