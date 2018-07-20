import React, { Component } from "react";

import Logo from "../Logo/Logo";
import MenuButton from "../MenuButton/MenuButton";
import SiteNav from "../SiteNav/SiteNav";
import { Button, ButtonMain } from "../Button/Button";

import styled from "styled-components";

const StyledSiteHeader = styled.header`
  background-color: ${(props) => props.theme.colorMain200};
  height: 64px;
  padding: 0;
  position: relative;
  z-index: 10;
`;

class SiteHeader extends Component {
  state = {};
  render() {
    return (
      <StyledSiteHeader>
        <Logo />
        <MenuButton />
        <Button>Hola tio</Button>
        <Button primary>Hola tio</Button>
        <ButtonMain>Hola tio</ButtonMain>
        <SiteNav />
      </StyledSiteHeader>
    );
  }
}

export default SiteHeader;
