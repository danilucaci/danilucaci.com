import React from "react";
import { string, bool } from "prop-types";

import SiteNav from "../SiteNav/SiteNav";

import { StyledSiteHeaderWrapper, ScrollContainer, ScrollLine } from "./styles";

function SiteHeader({
  showScrollIndicator,
  locale,
  twinPostURL,
  currentPath,
  expand,
}) {
  let shouldRenderScroll = showScrollIndicator;
  return (
    <StyledSiteHeaderWrapper role="banner">
      <SiteNav
        locale={locale}
        twinPostURL={twinPostURL}
        currentPath={currentPath}
        expand={expand}
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
  expand: bool,
};

SiteHeader.defaultProps = {
  showScrollIndicator: false,
  expand: false,
};

export default SiteHeader;
