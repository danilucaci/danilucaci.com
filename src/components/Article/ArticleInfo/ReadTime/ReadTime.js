import React from "react";

// import IconClock from "../../../../../static/icons/clock.svg";

const ReadTime = (props) => {
  return (
    <div className="a-article__read-time">
      {/* <IconClock className="icon icon--up" /> */}
      <span className="copy--s copy--b">{props.readTime}</span>
    </div>
  );
};

export default ReadTime;
