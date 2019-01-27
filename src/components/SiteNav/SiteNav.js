import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import SiteNavList from "../SiteNavList/SiteNavList";
import MenuButton from "../MenuButton/MenuButton";
import { Logo } from "../Logo/Logo";

const StyledSiteNav = styled.nav`
  display: block;
  max-width: ${theme.contain.content};
  margin-left: auto;
  margin-right: auto;
  padding-right: ${theme.gutters.s};
  padding-left: ${theme.gutters.s};

  ${mediaMin.s`
    padding-right: ${theme.gutters.m};
    padding-left: ${theme.gutters.m};
  `};
`;

const SiteNav = (props) => {
  return (
    <StyledSiteNav aria-label="Page Menu" role="navigation">
      <Logo locale={props.locale} />
      <MenuButton showNav={props.showNav} onClick={props.onClick} />
      <SiteNavList showNav={props.showNav} locale={props.locale} />
    </StyledSiteNav>
  );
};

SiteNav.propTypes = {
  locale: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  showNav: PropTypes.bool.isRequired,
};

export default SiteNav;
