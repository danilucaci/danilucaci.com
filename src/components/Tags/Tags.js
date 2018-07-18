import React, { Component } from "react";
import _ from "lodash";

import Tag from "./Tag/Tag";

const Tags = (props) => {
  let tagsInPost = props.tagsInPost;
  let tagCount = props.tagCount;

  return (
    <div className="m-article__tags">
      {tagsInPost &&
        tagsInPost.map((tag) => (
          <Tag
            key={tag}
            link={`/tags/${_.kebabCase(tag)}`}
            label={tag}
            tagCount={tagCount[tag]}
          />
        ))}
    </div>
  );
};

export default Tags;
