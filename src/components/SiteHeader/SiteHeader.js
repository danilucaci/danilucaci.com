import React, { Component } from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

import SiteNav from "../SiteNav/SiteNav";

const StyledSiteHeader = styled.header`
  background-color: ${theme.colors.gray100};
  ${theme.shadow.navbar};
  width: 100%;
  display: block;
  will-change: transform;

  ${mediaMin.m`
    background-color: ${theme.colors.gray100};
    position: fixed;
    top: 0;
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
