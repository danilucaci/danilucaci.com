import React, { Component } from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin, mediaMax } from "../../theme/globalStyles";

import SiteNav from "../SiteNav/SiteNav";

const StyledSiteHeaderWrapper = styled.div`
  width: 100%;
  display: block;
  will-change: transform;

  ${mediaMin.m`
    position: fixed;
    top: 0;
    z-index: 10;
  `};
`;

const StyledSiteHeader = styled.header`
  background-color: ${theme.colors.gray100};
  ${theme.shadow.navbar};
  width: 100%;
  display: block;
`;

const ScrollContainer = styled.div`
  height: ${rem(4)};
  background-color: transparent;
  width: 100%;

  ${mediaMax.s`
    display: none;
  `};
`;

const ScrollLine = styled.div`
  height: ${rem(4)};
  background-color: ${theme.colors.main400};
  will-change: width;
  width: 0%;
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
    let shouldRenderScroll = this.props.showScrollIndicator;

    return (
      <StyledSiteHeaderWrapper>
        <StyledSiteHeader role="banner">
          <SiteNav onClick={this.openNav} showNav={this.state.showNav} />
        </StyledSiteHeader>
        {shouldRenderScroll && (
          <ScrollContainer showScrollIndicator={this.props.showScrollIndicator}>
            <ScrollLine className="js-scrollLine" />
          </ScrollContainer>
        )}
      </StyledSiteHeaderWrapper>
    );
  }
}

export default SiteHeader;
