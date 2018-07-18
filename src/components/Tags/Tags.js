import React from "react";

import Tag from "./Tag/Tag";

const Tags = (props) => {
  let tagList = props.tags;
  let tagToShow = null;

  // tagList.map((currentTag) => {
  //   tagToShow = <Tag label={currentTag} link="empty" />;
  // });

  return <div className="m-article__tags">{tagToShow}</div>;
};

export default Tags;
