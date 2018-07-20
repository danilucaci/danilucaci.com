import React, { Component } from "react";

import Logo from "../Logo/Logo";
import MenuButton from "../MenuButton/MenuButton";
import SiteNav from "../SiteNav/SiteNav";
import { Stack } from "../Stack/Stack";

import styled from "styled-components";
import { theme, rem } from "../../theme/globalStyles";

const StyledSiteHeader = styled.header`
  background-color: ${theme.colors.gray100};
  box-shadow: 0px 2px 8px 0px ${theme.colors.shadowDefault};
  height: ${rem(64)};
  padding-top: ${rem(8)};
  padding-bottom: ${rem(8)};
  width: 100%;
`;

class SiteHeader extends Component {
  state = {
    showNav: false,
  };

  openNav = (e) => {
    e.preventDefault();
    const openNav = this.state.showNav;
    this.setState.showNav = !openNav;
  };

  render() {
    return (
      <StyledSiteHeader>
        <Stack centered>
          <Logo />
          <MenuButton onClick={this.openNav} />
        </Stack>
        <SiteNav showNav={this.state.showNav} />
      </StyledSiteHeader>
    );
  }
}

export default SiteHeader;
