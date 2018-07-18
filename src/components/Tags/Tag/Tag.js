import React from "react";

import { Link } from "gatsby";

const Tag = (props) => {
  return (
    <Link to={props.link} className="a-tag">
      {props.label}
      {/* <span className="a-tag__count">({props.tagCount})</span> */}
    </Link>
  );
};

export default Tag;
