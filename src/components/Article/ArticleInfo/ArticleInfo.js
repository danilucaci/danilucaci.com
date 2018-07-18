import React from "react";

import ReadTime from "./ReadTime/ReadTime";
import ArticleDate from "./ArticleDate/ArticleDate";

const ArticleInfo = (props) => {
  return (
    <div className="m-article__info">
      <ArticleDate date={props.date} />
      <ReadTime readTime={props.readTime} />
    </div>
  );
};

export default ArticleInfo;
