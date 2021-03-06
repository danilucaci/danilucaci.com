import React from "react";
import { string, bool } from "prop-types";

import SiteNavList from "../SiteNavList";
import LanguageSelector from "../LanguageSelector";
import Logo from "../Logo";

import { SiteHeaderBackground, SiteHeaderRow, StyledSiteNav } from "./styles";

function SiteHeader({ twinPostURL, currentPath, expand, colorHeader }) {
  return (
    <SiteHeaderBackground role="banner" colorHeader={colorHeader}>
      <SiteHeaderRow as="div" col10 expand={expand}>
        <StyledSiteNav aria-label="Page Menu" role="navigation" as="nav">
          <Logo />
          <SiteNavList twinPostURL={twinPostURL} currentPath={currentPath} />
          <LanguageSelector
            currentPath={currentPath}
            twinPostURL={twinPostURL}
          />
        </StyledSiteNav>
      </SiteHeaderRow>
    </SiteHeaderBackground>
  );
}

SiteHeader.propTypes = {
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
