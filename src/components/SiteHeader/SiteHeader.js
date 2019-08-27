import React from "react";
import { string, bool } from "prop-types";

import SiteNav from "../SiteNav/SiteNav";

import { StyledSiteHeaderWrapper, ScrollContainer, ScrollLine } from "./styles";

function SiteHeader({ showScrollIndicator, locale, twinPostURL, currentPath }) {
  let shouldRenderScroll = showScrollIndicator;
  return (
    <StyledSiteHeaderWrapper role="banner">
      <SiteNav
        locale={locale}
        twinPostURL={twinPostURL}
        currentPath={currentPath}
      />
      {shouldRenderScroll && (
        <ScrollContainer showScrollIndicator={showScrollIndicator}>
          <ScrollLine className="js-scrollLine" />
        </ScrollContainer>
      )}
    </StyledSiteHeaderWrapper>
  );
}

SiteHeader.propTypes = {
  locale: string.isRequired,
  twinPostURL: string.isRequired,
  currentPath: string.isRequired,
  showScrollIndicator: bool,
};

SiteHeader.defaultProps = {
  showScrollIndicator: false,
};

export default SiteHeader;
