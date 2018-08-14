import React from "react";

import ReadTime from "../ReadTime/ReadTime";
import ArticleDate from "../ArticleDate/ArticleDate";

import styled from "styled-components";
import { rem, mediaMax } from "../../theme/globalStyles";

const Wrapper = styled.div`
  margin-bottom: ${rem(16)};
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
