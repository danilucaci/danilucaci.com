import React, { Component } from "react";

import Logo from "../Logo/Logo";
import MenuButton from "../MenuButton/MenuButton";
import SiteNav from "../SiteNav/SiteNav";

import styled from "styled-components";

const Header = styled.header`
  background-color: ${(props) => props.theme.colorMain200};
  height: 64px;
  padding: 0;
  font-size: ${(props) => props.theme.fontSizes.h1};
  position: relative;
  z-index: 10;

  @media screen and (min-width: $size-bp-l) {
    height: 48px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
`;

class SiteHeader extends Component {
  state = {};
  render() {
    return (
      <Header>
        <div className="l-row--contain l-row--center">
          <Logo />
          <MenuButton />
          <SiteNav />
        </div>
      </Header>
    );
  }
}

export default SiteHeader;
