import React, { Component } from "react";
import { string, bool } from "prop-types";

import SiteNav from "../SiteNav/SiteNav";

import { StyledSiteHeaderWrapper, StyledSiteHeader, ScrollContainer, ScrollLine } from "./styles";

class SiteHeader extends Component {
  state = {
    showNav: false,
    isTransitioning: false,
  };

  componentDidMount = () => {
    // breakpoint where nav bar hides away and menu button shows up
    let mql = window.matchMedia("(min-width: 38em)");
    mql.addListener(this.screenTest);
  };

  componentWillUnmount = () => {
    // Restore overflow to visible when navigating to a screen from the top nav menu
    // If not, it will land on the new page with overflow set to hidden, not good.
    document.body.style.overflow = "visible";
    let mql = window.matchMedia("(min-width: 38em)");
    mql.removeListener(this.screenTest);
  };

  screenTest = (e) => {
    if (e.matches) {
      if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = "visible";
      }
    }
  };

  handleTransitionState = () => {
    this.setState((prevState) => ({
      isTransitioning: !prevState.isTransitioning,
    }));

    let timeOut = setTimeout(() => {
      this.setState((prevState) => ({
        isTransitioning: !prevState.isTransitioning,
      }));

      clearTimeout(timeOut);
    }, 300);
  };

  openNav = () => {
    this.handleTransitionState();

    this.setState((prevState) => ({
      showNav: !prevState.showNav,
    }));

    if (this.state.showNav === true) {
      document.body.style.overflow = "visible";
    } else if (this.state.showNav === false) {
      document.body.style.overflow = "hidden";
    }
  };

  render() {
    let shouldRenderScroll = this.props.showScrollIndicator;
    return (
      <StyledSiteHeaderWrapper role="banner">
        <StyledSiteHeader>
          <SiteNav
            onClick={this.openNav}
            showNav={this.state.showNav}
            isTransitioning={this.state.isTransitioning}
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
  locale: string.isRequired,
  twinPostURL: string.isRequired,
  currentPath: string.isRequired,
  showScrollIndicator: bool,
};

SiteHeader.defaultProps = {
  showScrollIndicator: false,
};

export default SiteHeader;
