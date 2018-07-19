import React from "react";

import SiteNavMenuItem from "./SiteNavMenuItem/SiteNavMenuItem";

const SiteNavMenu = () => {
  return (
    <ul className="m-site-nav__menu">
      <SiteNavMenuItem to="/services" label="Services" />
      <SiteNavMenuItem to="/blog" label="Blog" />
      <SiteNavMenuItem to="/about-me" label="About Me" />
      <SiteNavMenuItem to="/contact" label="Contact" />
    </ul>
  );
};

export default SiteNavMenu;
