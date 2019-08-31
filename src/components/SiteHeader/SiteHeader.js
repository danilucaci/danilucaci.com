import React from "react";
import { string, bool } from "prop-types";

import SiteNavList from "../SiteNavList/SiteNavList";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { Logo } from "../Logo/Logo";

import { SiteHeaderBackground, SiteHeaderRow, StyledSiteNav } from "./styles";

function SiteHeader({ locale, twinPostURL, currentPath, expand, colorHeader }) {
  return (
    <SiteHeaderBackground role="banner" colorHeader={colorHeader}>
      <SiteHeaderRow as="div" col10 expand={expand}>
        <StyledSiteNav aria-label="Page Menu" role="navigation" as="nav">
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
      </SiteHeaderRow>
    </SiteHeaderBackground>
  );
}

SiteHeader.propTypes = {
  locale: string.isRequired,
  twinPostURL: string.isRequired,
  currentPath: string.isRequired,
  expand: bool,
  colorHeader: bool,
};

SiteHeader.defaultProps = {
  expand: false,
  colorHeader: false,
};

export default SiteHeader;
