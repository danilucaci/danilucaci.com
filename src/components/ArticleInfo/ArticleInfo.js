import React from "react";
import { number, string } from "prop-types";
import { FormattedMessage, FormattedDate } from "react-intl";

import { ArticleDate, ArticleReadtime, Dot } from "./styles";

const ArticleInfo = ({ date, timeToRead }) => {
  const fullDate = new Date(date).toLocaleDateString();

  return (
    <>
      <FormattedDate value={date} year="numeric" month="short" day="2-digit">
        {(txt) => (
          <ArticleDate as="time" dateTime={fullDate} small>
            {txt}
          </ArticleDate>
        )}
      </FormattedDate>
      <Dot small aria-hidden="true">
        •
      </Dot>
      <FormattedMessage id="article.read.time">
        {(txt) => (
          <ArticleReadtime as="span" small>
            {timeToRead} {txt}
          </ArticleReadtime>
        )}
      </FormattedMessage>
    </>
  );
};

ArticleInfo.propTypes = {
  date: string.isRequired,
  timeToRead: number.isRequired,
};

export default ArticleInfo;
