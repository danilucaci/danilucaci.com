import React from "react";
import { number, string } from "prop-types";
import { useIntl } from "react-intl";

import { ArticleDate, ArticleReadtime, Dot } from "./styles";

const ArticleInfo = ({ date, timeToRead }) => {
  const fullDate = new Date(date).toLocaleDateString();
  const intl = useIntl();

  return (
    <>
      <ArticleDate as="time" dateTime={fullDate} small>
        {intl.formatDate(date, {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })}
      </ArticleDate>
      <Dot small aria-hidden="true">
        •
      </Dot>
      <ArticleReadtime as="span" small>
        {timeToRead +
          " " +
          intl.formatMessage({
            id: "article.read.time",
          })}
      </ArticleReadtime>
    </>
  );
};

ArticleInfo.propTypes = {
  date: string.isRequired,
  timeToRead: number.isRequired,
};

export default ArticleInfo;
