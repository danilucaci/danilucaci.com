import React from "react";

import IconUp from "../../../../../static/icons/up.svg";

const ArticleDate = (props) => {
  return (
    <div className="a-article__updated">
      <IconUp className="icon icon--up" />
      <span className="copy--s">Last Updated:</span>
      <time dateTime={props.date} className="copy--s copy--b">
        {props.date}
      </time>
    </div>
  );
};

export default ArticleDate;
