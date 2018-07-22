import React from "react";

import ReadTime from "../ReadTime/ReadTime";
import ArticleDate from "../ArticleDate/ArticleDate";

import styled from "styled-components";
import { theme, mediaMin, rem } from "../../theme/globalStyles";

const Wrapper = styled.div`
  margin-top: ${rem(8)};
  margin-bottom: ${rem(16)};

  white-space: nowrap;

  ${mediaMin.s`
    margin-top: ${rem(16)};
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

export default ArticleInfo;
