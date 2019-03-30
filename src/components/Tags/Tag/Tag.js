import React from "react";
import PropTypes from "prop-types";

import { StyledTag } from "./styles";

const Tag = (props) => <StyledTag to={props.link}>{props.label}</StyledTag>;

Tag.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Tag;
