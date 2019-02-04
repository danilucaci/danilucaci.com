import React from "react";
import PropTypes from "prop-types";

import ReadTime from "../ReadTime/ReadTime";
import ArticleDate from "../ArticleDate/ArticleDate";

const ArticleInfo = (props) => {
  return (
    <div>
      <ArticleDate date={props.date} />
      <ReadTime timeToRead={props.timeToRead} />
    </div>
  );
};

ArticleInfo.propTypes = {
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
};

export default ArticleInfo;
