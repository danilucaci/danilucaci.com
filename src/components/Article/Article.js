import React from "react";

import styled from "styled-components";
import { theme, mediaMin, rem } from "../../theme/globalStyles";

import { Copy } from "../Copy/Copy";

import Tags from "../Tags/Tags";
import ArticleInfo from "../ArticleInfo/ArticleInfo";

import { DefaultLink } from "../Link/Link";

const StyledArticle = styled.article`
  background-color: ${theme.colors.gray100};
  ${theme.shadow.default};
  padding: ${rem(20)} ${rem(16)} ${rem(16)} ${rem(16)};
  margin-bottom: ${theme.gutters.m};

  ${mediaMin.s`
    padding: ${rem(24)} ${rem(24)} ${rem(16)};
  `};

  position: relative;

  &:hover {
    ${theme.shadow.hover};
  }

  &:hover {
    & h3 {
      color: ${theme.colors.main600};
    }
  }
`;

const StyledLink = styled(DefaultLink)`
  display: block;

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyBold};
  }

  text-decoration: underline;
`;

const ContinueLink = styled(DefaultLink)`
  display: inline-block;

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyBold};
  }

  text-decoration: underline;
  padding-top: ${rem(16)};
  padding-bottom: ${rem(16)};
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.m};

  &:hover {
    background-color: transparent;
  }
`;

const StyledH3 = styled.h3`
  margin-bottom: ${rem(8)};
`;

const Article = (props) => {
  return (
    <StyledArticle>
      <header>
        <StyledH3>{props.title}</StyledH3>
        <ArticleInfo date={props.date} timeToRead={props.timeToRead} />
      </header>
      <Tags tagsInPost={props.tagsInPost} spaced />
      <Copy className="copy">{props.snippet}</Copy>
      <ContinueLink to={props.slug}>Continue Reading →</ContinueLink>
    </StyledArticle>
  );
};

export default Article;
