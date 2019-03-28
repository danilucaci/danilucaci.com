import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import SiteNavList from "../SiteNavList/SiteNavList";
import MenuButton from "../MenuButton/MenuButton";
import { Logo } from "../Logo/Logo";

const StyledSiteNav = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: ${theme.contain.wrapper.col10};
  margin-left: auto;
  margin-right: auto;

  padding-right: ${theme.gutters.s};
  padding-left: ${theme.gutters.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(${theme.gutters.s}, env(safe-area-inset-left));
      padding-right: max(${theme.gutters.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.s`
    padding-right: ${theme.gutters.m};
    padding-left: ${theme.gutters.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.gutters.m}, env(safe-area-inset-left));
        padding-right: max(${theme.gutters.m}, env(safe-area-inset-right));
      }
    }
  `};
`;

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
