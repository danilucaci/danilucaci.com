import React, { Component } from "react";

import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

import SiteNav from "../SiteNav/SiteNav";

const StyledSiteHeader = styled.header`
  background-color: ${theme.colors.gray100};
  ${theme.shadow.default};
  width: 100%;
  display: block;
  height: ${rem(64)};
  padding: ${rem(8)} ${rem(16)};

  ${mediaMin.s`
    width: 100%;
    height: ${rem(56)};
    padding-top: ${rem(4)};
    padding-right: ${rem(8)};
    padding-left: ${rem(24)};
    padding-bottom: ${rem(4)};
  `};

  ${mediaMin.m`
    background-color: ${theme.colors.transparent};
    height: ${rem(48)};
    padding-top: 0;
    padding-bottom: 0;
    position: fixed;
    z-index: 10;
  `};
`;

class SiteHeader extends Component {
  state = {
    showNav: false,
  };

  openNav = () => {
    this.setState((prevState) => ({
      showNav: !prevState.showNav,
    }));
  };

  render() {
    return (
      <StyledSiteHeader role="banner">
        <SiteNav onClick={this.openNav} showNav={this.state.showNav} />
      </StyledSiteHeader>
    );
  }
}

export default SiteHeader;
