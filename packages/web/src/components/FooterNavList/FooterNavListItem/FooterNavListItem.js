import React from "react";
import { node, string } from "prop-types";
import { Link } from "gatsby";

import { StyledFooterListItem } from "./styles";

/**
 * https://reach.tech/router/api/Link
 * this link will be active when itself or deeper routes
 * are current
 */
const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { className: "current-nav-item" } : null;

function FooterNavListItem(props) {
  return (
    <StyledFooterListItem>
      <Link to={props.to} getProps={isPartiallyActive} aria-current="page">
        {props.children}
      </Link>
    </StyledFooterListItem>
  );
}

FooterNavListItem.propTypes = {
  children: node.isRequired,
  to: string.isRequired,
};

export default FooterNavListItem;
