import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { theme, rem, mediaMin, mediaMax } from "../../theme/globalStyles";

import SiteNav from "../SiteNav/SiteNav";

const StyledSiteHeaderWrapper = styled.div`
  width: 100%;
  display: block;
  will-change: transform;
  z-index: 100;

  ${mediaMin.m`
    position: fixed;
    top: 0;
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
  will-change: width;
  width: 100%;

  ${mediaMax.s`
    display: none;
  `};
`;

const ScrollLine = styled.div`
  height: ${rem(4)};
  background-color: ${theme.colors.main600};
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
          <SiteNav
            onClick={this.openNav}
            showNav={this.state.showNav}
            locale={this.props.locale}
          />
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

SiteHeader.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default SiteHeader;
