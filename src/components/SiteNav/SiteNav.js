import React from "react";
import PropTypes from "prop-types";

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
      locale={props.locale}
      twinPostURL={props.twinPostURL}
      currentPath={props.currentPath}
    />
  </StyledSiteNav>
);

SiteNav.propTypes = {
  locale: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  twinPostURL: PropTypes.string.isRequired,
  currentPath: PropTypes.string.isRequired,
  showNav: PropTypes.bool.isRequired,
};

export default SiteNav;
