import React from "react";

import { Link } from "gatsby";

const Logo = () => {
  return (
    <Link to="/" alt="danilucaci.com" className="a-site-nav__logo">
      <img src="./logo.svg" alt="" />
    </Link>
  );
};

export default Logo;
