import React, { Component } from "react";
import { Link } from "gatsby";

import { Logo } from "../Logo/Logo";
import MenuButton from "../MenuButton/MenuButton";
import SiteNav from "../SiteNav/SiteNav";
import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

const StyledLogoLink = styled(Link)`
  display: inline-block;
  width: ${theme.logoWidth};
  height: ${theme.logoHeight};
`;

const FullWidthBackground = styled.div`
  background-color: ${theme.colors.gray100};
  box-shadow: 0px 2px 8px 0px ${theme.colors.shadowDefault};
  width: 100%;
`;

const StyledSiteHeader = styled.header`
  display: block;
  height: ${rem(64)};
  padding: ${rem(8)} ${rem(16)};

  ${mediaMin.s`
    width: 100%;
    max-width: ${theme.contain.content};
    margin-left: auto;
    margin-right: auto;
    height: ${rem(56)};
    padding-top: ${rem(4)};
    padding-right: ${rem(8)};
    padding-left: ${rem(24)};
    padding-bottom: ${rem(4)};
  `};

  ${mediaMin.m`
    height: ${rem(48)};
    padding-top: 0;
    padding-bottom: 0;
  `};
`;

class SiteHeader extends Component {
  state = {
    showNav: false,
  };

  openNav = (e) => {
    e.preventDefault();

    this.setState((prevState) => ({
      showNav: !prevState.showNav,
    }));
  };

  render() {
    return (
      <FullWidthBackground>
        <StyledSiteHeader>
          <StyledLogoLink to="/">
            <Logo />
          </StyledLogoLink>
          <MenuButton onClick={this.openNav} />
          <SiteNav showNav={this.state.showNav} />
        </StyledSiteHeader>
      </FullWidthBackground>
    );
  }
}

export default SiteHeader;
