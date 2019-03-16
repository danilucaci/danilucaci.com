import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { theme, rem, mediaMin, mediaMax } from "../../theme/globalStyles";
import SiteNav from "../SiteNav/SiteNav";

const StyledSiteHeaderWrapper = styled.header`
  width: 100%;
  display: block;
  will-change: transform;
  z-index: 100;
  position: fixed;
  top: 0;

  & ul {
    margin-left: 0 !important;
  }
`;

const StyledSiteHeader = styled.div`
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
      <StyledSiteHeaderWrapper role="banner">
        <StyledSiteHeader>
          <SiteNav
            onClick={this.openNav}
            showNav={this.state.showNav}
            locale={this.props.locale}
            twinPostURL={this.props.twinPostURL}
            currentPath={this.props.currentPath}
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
  twinPostURL: PropTypes.string.isRequired,
  currentPath: PropTypes.string.isRequired,
  optionalBool: PropTypes.bool,
};

export default SiteHeader;
