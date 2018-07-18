import React, { Component } from "react";
import _ from "lodash";

import Tag from "./Tag/Tag";

class Tags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="m-article__tags">
        {tags &&
          tags.map((tag) => (
            <Tag key={tag} link={`/tags/${_.kebabCase(tag)}`} label={tag} />
          ))}
      </div>
    );
  }
}

export default Tags;
