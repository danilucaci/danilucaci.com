import React from "react";
import { string, node } from "prop-types";

import { Link } from "gatsby";

import { StyledSiteNavListItem } from "./styles";

/**
 * https://reach.tech/router/api/Link
 * this link will be active when itself or deeper routes
 * are current
 */
const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: "current-nav-item" } : null;
};

const SiteNavListItem = (props) => (
  <StyledSiteNavListItem>
    <Link to={props.to} getProps={isPartiallyActive} aria-current="page">
      {props.children}
    </Link>
  </StyledSiteNavListItem>
);

SiteNavListItem.propTypes = {
  children: node.isRequired,
  to: string.isRequired,
};

export default SiteNavListItem;
