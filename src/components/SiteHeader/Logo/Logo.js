import React from "react";

import Link from "gatsby-link";
// import Logo from "../../../../static/logo/logo.svg";

const Logo = () => {
  return (
    <Link to="/" alt="danilucaci.com" className="a-site-nav__logo">
      {/* <Logo /> */}
      <img src="../../../../static/logo/logo.svg" alt="" />
    </Link>
  );
};

export default Logo;
