import React from "react";
import PropTypes from "prop-types";

import { Link } from "gatsby";

import { StyledFooterListItem } from "./styles";

/**
 * https://reach.tech/router/api/Link
 * this link will be active when itself or deeper routes
 * are current
 */
const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { className: "current-nav-item" } : null;

const FooterNavListItem = (props) => (
  <StyledFooterListItem>
    <Link to={props.to} getProps={isPartiallyActive} aria-current="page">
      {props.children}
    </Link>
  </StyledFooterListItem>
);

FooterNavListItem.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default FooterNavListItem;
