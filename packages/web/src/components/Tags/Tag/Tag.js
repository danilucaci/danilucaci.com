import React from "react";
import { string } from "prop-types";

import { StyledTag } from "./styles";

function Tag({ link, label }) {
  return <StyledTag to={link}>{label}</StyledTag>;
}

Tag.propTypes = {
  link: string.isRequired,
  label: string.isRequired,
};

export default Tag;
