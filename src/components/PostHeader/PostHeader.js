import React from "react";
import styled, { css } from "styled-components";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import Tags from "../Tags/Tags";
import ArticleInfo from "../ArticleInfo/ArticleInfo";
import { H1, H2, H3, H4 } from "../Headings/Headings";
import { Copy } from "../Copy/Copy";
import SocialShare from "../SocialShare/SocialShare";

const StyledPostHeader = styled.header``;

const PostH1 = styled(H1)`
  margin-bottom: ${rem(28)};

  ${(props) =>
    props.readingMode &&
    css`
      position: fixed;
      top: 16px;
      font-size: 1rem !important;
      line-height: 1.2rem !important;
      z-index: 10;
    `};
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
  console.log(props.showReadingNav);
  return (
    <StyledPostHeader>
      <PostH1 readingMode={props.showReadingNav}>{props.title}</PostH1>
      <PostInfo>
        <ArticleInfo date={props.date} timeToRead={props.timeToRead} />
        <Tags tagsInPost={props.tagsInPost} spaced />
        <SocialShare
          slug={props.slug}
          title={props.title}
          snippet={props.snippet}
          onClick={props.onClick}
          tooltipMessage={props.tooltipMessage}
          tooltipOpen={props.tooltipOpen}
        />
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
