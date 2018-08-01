import React from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

import { DefaultLink } from "../Link/Link";
import SiteMenuList from "../SiteMenuList/SiteMenuList";
import MenuButton from "../MenuButton/MenuButton";
import { Logo } from "../Logo/Logo";

const StyledLogoLink = styled(DefaultLink)`
  display: inline-block;
  width: ${theme.logoWidth};
  height: ${theme.logoHeight};
`;

const StyledNav = styled.nav`
  display: block;
  max-width: ${theme.contain.content};
  margin-left: auto;
  margin-right: auto;

  ${mediaMin.s`
    height: ${rem(56)};
    padding-top: ${rem(4)};
    padding-right: ${theme.gutters.m};
    padding-left: ${theme.gutters.m};
  `};

  ${mediaMin.m`
    padding-top: 0;
    height: ${rem(48)};
    padding-right: ${theme.gutters.m};
    padding-left: ${theme.gutters.m};
  `};
`;

const SiteNav = (props) => {
  return (
    <StyledNav aria-label="Page Menu" role="navigation">
      <StyledLogoLink to="/">
        <Logo />
      </StyledLogoLink>
      <MenuButton onClick={props.onClick} showNav={props.showNav} />
      <SiteMenuList showNav={props.showNav} />
    </StyledNav>
  );
};

export default SiteNav;
