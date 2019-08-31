import React from "react";
import { string, bool } from "prop-types";

import SiteNavList from "../SiteNavList/SiteNavList";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { Logo } from "../Logo/Logo";

import { SiteHeaderRow, StyledSiteNav } from "./styles";

function SiteHeader({ locale, twinPostURL, currentPath, expand }) {
  return (
    <SiteHeaderRow role="banner" as="header" col10 expand={expand}>
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
  );
}

SiteHeader.propTypes = {
  locale: string.isRequired,
  twinPostURL: string.isRequired,
  currentPath: string.isRequired,
  expand: bool,
};

SiteHeader.defaultProps = {
  expand: false,
};

export default SiteHeader;
