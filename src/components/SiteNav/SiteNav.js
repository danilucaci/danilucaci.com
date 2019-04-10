import React from "react";
import { bool, string, func } from "prop-types";

import SiteNavList from "../SiteNavList/SiteNavList";
import MenuButton from "../MenuButton/MenuButton";
import { Logo } from "../Logo/Logo";

import { StyledSiteNav } from "./styles";

const SiteNav = (props) => (
  <StyledSiteNav aria-label="Page Menu" role="navigation">
    <Logo locale={props.locale} />
    <MenuButton showNav={props.showNav} onClick={props.onClick} />
    <SiteNavList
      showNav={props.showNav}
      isTransitioning={props.isTransitioning}
      locale={props.locale}
      twinPostURL={props.twinPostURL}
      currentPath={props.currentPath}
    />
  </StyledSiteNav>
);

SiteNav.propTypes = {
  locale: string.isRequired,
  onClick: func.isRequired,
  twinPostURL: string.isRequired,
  currentPath: string.isRequired,
  showNav: bool.isRequired,
  isTransitioning: bool,
};

SiteNav.defaultProps = {
  isTransitioning: false,
};

export default SiteNav;
