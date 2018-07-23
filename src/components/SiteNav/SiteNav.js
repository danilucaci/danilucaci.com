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
  max-width: ${theme.contain.content};
  margin-left: auto;
  margin-right: auto;
`;

const SiteNav = (props) => {
  return (
    <StyledNav aria-label="Main Page Menu" role="navigation">
      <StyledLogoLink to="/">
        <Logo />
      </StyledLogoLink>
      <MenuButton onClick={props.onClick} />
      <SiteMenuList showNav={props.showNav} />
    </StyledNav>
  );
};

export default SiteNav;
