import React from "react";

import styled from "styled-components";
import { theme, mediaMin, rem } from "../../theme/globalStyles";

import { H1, H2, H3, H4 } from "../Headings/Headings";
import { Copy } from "../Copy/Copy";

import Tags from "../Tags/Tags";
import ArticleInfo from "../ArticleInfo/ArticleInfo";

import { DefaultLink } from "../Link/Link";

const StyledArticle = styled.article`
  background-color: ${theme.colors.gray100};
  ${theme.shadow.default};
  padding: ${rem(16)} ${rem(16)} ${rem(8)};
  margin-bottom: ${theme.gutters.m};

  ${mediaMin.s`
    padding: ${rem(20)} ${rem(24)} ${rem(8)};
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
  font-family: ${theme.fonts.bodyBold};
  text-decoration: underline;
`;

const ContinueLink = styled(DefaultLink)`
  background-color: ${theme.colors.gray100} !important;
  display: block;
  font-family: ${theme.fonts.bodyBold};
  text-decoration: underline;
  padding-top: ${rem(16)};
  padding-bottom: ${rem(16)};

  ${mediaMin.s`
    padding-bottom: ${rem(24)};
  `};
`;

const CategoryLink = StyledLink.extend`
  background-color: ${theme.colors.main600};
  color: ${theme.colors.gray100};
  display: block;
  margin-bottom: ${rem(16)};
  text-transform: capitalize;
  z-index: 5;
  margin-top: -${rem(20)};
  margin-right: -${rem(24)};
  margin-left: -${rem(24)};
`;

const CategoryLinkLabel = styled.span`
  display: inline-block;

  color: ${theme.colors.gray100};
  font-family: ${theme.fonts.bodyRegular};
  font-weight: 400;
  text-decoration: none !important;
  margin-right: ${rem(8)};
  margin-left: ${rem(24)};
`;

const Article = (props) => {
  let category;

  if (props.category) {
    category = (
      <CategoryLink to={"/categories/" + props.category}>
        <CategoryLinkLabel>Part of:</CategoryLinkLabel>
        {props.category}
      </CategoryLink>
    );
  }

  return (
    <StyledArticle>
      {category}
      <Tags tagsInPost={props.tagsInPost} />
      <H3>{props.title}</H3>
      {/* <Tags tagsInPost={props.tagsInPost} tagCount={props.tagCount} /> */}
      <ArticleInfo date={props.date} timeToRead={props.timeToRead} />
      <Copy className="copy">{props.snippet}</Copy>
      <ContinueLink to={props.slug}>Continue Reading →</ContinueLink>
    </StyledArticle>
  );
};

export default Article;
