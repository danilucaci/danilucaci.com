import React from "react";

// import IconClock from "../../../../../static/icons/clock.svg";

const ReadTime = (props) => {
  return (
    <div className="a-article__read-time">
      {/* <IconClock className="icon icon--up" /> */}
      <img src="../../../../../static/icons/clock.svg" alt="" />
      <span className="copy--s copy--b">{props.timeToRead}</span>
    </div>
  );
};

export default ReadTime;
