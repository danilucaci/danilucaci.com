import React from "react";

const ArticleDate = (props) => {
  return (
    <div className="a-article__updated">
      <img src="../../../static/icons/clock.svg" alt="" />
      <span className="copy--s">Last Updated:</span>
      <time dateTime={props.date} className="copy--s copy--b">
        {props.date}
      </time>
    </div>
  );
};

export default ArticleDate;
