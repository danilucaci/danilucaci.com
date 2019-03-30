import React, { Component } from "react";
import PropTypes from "prop-types";

import SiteNav from "../SiteNav/SiteNav";

import { StyledSiteHeaderWrapper, StyledSiteHeader, ScrollContainer, ScrollLine } from "./styles";

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
  showScrollIndicator: PropTypes.bool,
};

export default SiteHeader;
