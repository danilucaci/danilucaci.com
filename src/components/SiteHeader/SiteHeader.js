import React, { Component } from "react";

import Logo from "../Logo/Logo";
import MenuButton from "../MenuButton/MenuButton";
import SiteNav from "../SiteNav/SiteNav";

class SiteHeader extends Component {
  state = {};
  render() {
    return (
      <header className="l-row o-site__header">
        <div className="l-row--contain l-row--center">
          <Logo />
          <MenuButton />
          <SiteNav />
        </div>
      </header>
    );
  }
}

export default SiteHeader;
