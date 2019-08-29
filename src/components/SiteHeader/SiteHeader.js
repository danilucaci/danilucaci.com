import React from "react";
import { string, bool } from "prop-types";

import SiteNav from "../SiteNav/SiteNav";

import { StyledSiteHeaderWrapper } from "./styles";

function SiteHeader({ locale, twinPostURL, currentPath, expand }) {
  return (
    <StyledSiteHeaderWrapper role="banner">
      <SiteNav
        locale={locale}
        twinPostURL={twinPostURL}
        currentPath={currentPath}
        expand={expand}
      />
    </StyledSiteHeaderWrapper>
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
