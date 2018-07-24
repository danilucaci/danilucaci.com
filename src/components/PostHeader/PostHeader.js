import React from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";
import Tags from "../Tags/Tags";
import ArticleInfo from "../ArticleInfo/ArticleInfo";
import { H1, H2, H3, H4 } from "../Headings/Headings";

const StyledPostHeader = styled.header``;

const PostH1 = styled(H1)``;

const PostInfo = styled.aside``;

const PostHeader = (props) => {
  return (
    <StyledPostHeader>
      <PostH1>{props.title}</PostH1>
      <PostInfo>
        <ArticleInfo date={props.date} timeToRead={props.timeToRead} />
        <Tags tagsInPost={props.tagsInPost} />
      </PostInfo>
      {props.intro}
    </StyledPostHeader>
  );
};

export default PostHeader;
