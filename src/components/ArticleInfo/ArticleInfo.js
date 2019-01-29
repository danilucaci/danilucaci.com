import React from "react";
import PropTypes from "prop-types";

import ReadTime from "../ReadTime/ReadTime";
import ArticleDate from "../ArticleDate/ArticleDate";

import styled from "styled-components";
import { rem, mediaMin } from "../../theme/globalStyles";

const Wrapper = styled.div`
  margin-top: ${rem(12)};
  margin-bottom: ${rem(16)};

  ${mediaMin.m`
    margin-top: ${rem(8)};
  `};
`;

const ArticleInfo = (props) => {
  return (
    <Wrapper>
      <ArticleDate date={props.date} />
      <ReadTime timeToRead={props.timeToRead} />
    </Wrapper>
  );
};

ArticleInfo.propTypes = {
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
};

export default ArticleInfo;
