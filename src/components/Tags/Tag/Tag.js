import React from "react";

import Link from "gatsby";

const Tag = (props) => {
  console.log(props.label);

  return (
    <Link to={props.link} className="a-tag">
      {props.label}
      <span className="a-tag__count">({props.count})</span>
    </Link>
  );
};

export default Tag;
