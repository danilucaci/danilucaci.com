import React from "react";
import Link from "gatsby-link";

const SiteNavMenuItem = (props) => {
  return (
    <Link
      to={props.to}
      className="link link--menu a-site-nav__item"
      activeClassName="a-site-nav__item--active"
    >
      <li className="a-list__item">{props.label}</li>
    </Link>
  );
};

export default SiteNavMenuItem;
