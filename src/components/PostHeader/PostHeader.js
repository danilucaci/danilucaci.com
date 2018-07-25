import React from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";
import Tags from "../Tags/Tags";
import ArticleInfo from "../ArticleInfo/ArticleInfo";
import { H1, H2, H3, H4 } from "../Headings/Headings";
import { Copy } from "../Copy/Copy";

const StyledPostHeader = styled.header``;

const PostH1 = styled(H1)`
  margin-bottom: ${rem(28)};
`;

const StyledIntro = styled.div`
  ${mediaMin.m`
    display: inline-block;
    vertical-align: top;
    width: calc(60% - ${rem(24)});
    margin-right: ${rem(24)};
`};
`;

const StyledCopy = styled(Copy)`
  margin-bottom: ${rem(28)};
`;

const PostInfo = styled.aside`
  ${mediaMin.m`
    float: right;
    display: inline-block;
    vertical-align: top;
    width: 40%;
    background-color: ${theme.colors.gray100};
    padding: ${rem(16)} ${rem(24)};
  `};
`;

const PostHeader = (props) => {
  let introCopy = props.intro.split("|");

  return (
    <StyledPostHeader>
      <PostH1>{props.title}</PostH1>
      <PostInfo>
        <ArticleInfo date={props.date} timeToRead={props.timeToRead} />
        <Tags tagsInPost={props.tagsInPost} />
      </PostInfo>
      <StyledIntro>
        {introCopy.map((paragraph) => (
          <StyledCopy key={paragraph}>{paragraph}</StyledCopy>
        ))}
      </StyledIntro>
    </StyledPostHeader>
  );
};

export default PostHeader;
