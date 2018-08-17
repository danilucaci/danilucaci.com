import React, { Component } from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

import { ScrollConsumer } from "../ScrollProvider/ScrollProvider";

import SiteNav from "../SiteNav/SiteNav";

const StyledSiteHeader = styled.header`
  background-color: ${theme.colors.gray100};
  ${theme.shadow.header};
  width: 100%;
  display: block;
  height: ${rem(64)};
  padding: ${rem(8)} ${rem(16)};

  ${(props) =>
    props.hide &&
    css`
      ${mediaMin.s`
        position: absolute;
        top: -110%;
      `};
    `};

  ${mediaMin.s`
    width: 100%;
    height: ${rem(56)};
    padding-top: 0;
    padding-right: ${rem(8)};
    padding-left: ${rem(24)};
    padding-bottom: 0;
  `};

  ${mediaMin.m`
    position: fixed;
    top: 0;
    background-color: ${theme.colors.transparent};
    height: ${rem(48)};
    padding: 0;
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
      <ScrollConsumer>
        {(context) => {
          const showReadingNav = context.showReadingNav;

          return showReadingNav ? (
            <StyledSiteHeader hide={showReadingNav} role="banner">
              <SiteNav onClick={this.openNav} showNav={this.state.showNav} />
            </StyledSiteHeader>
          ) : (
            <StyledSiteHeader role="banner">
              <SiteNav onClick={this.openNav} showNav={this.state.showNav} />
            </StyledSiteHeader>
          );
        }}
      </ScrollConsumer>
    );
  }
}

export default SiteHeader;
