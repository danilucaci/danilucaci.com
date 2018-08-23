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

const StyledH3 = styled(H3)`
  margin-bottom: ${rem(8)};
`;

const CategoryLink = styled(StyledLink)`
  background-color: ${theme.colors.main600};
  color: ${theme.colors.gray100} !important;
  display: block;
  margin-bottom: ${rem(16)};
  text-transform: capitalize;
  z-index: 5;
  margin-top: -${rem(16)};
  margin-right: -${rem(24)};
  margin-left: -${rem(24)};

  ${mediaMin.s`
    margin-top: -${rem(24)};
    margin-right: -${rem(40)};
    margin-left: -${rem(40)};
  `};

  &:hover {
    background-color: ${theme.colors.main600};
    color: ${theme.colors.gray100};
  }
`;

const CategoryLinkLabel = styled.span`
  display: inline-block;

  color: ${theme.colors.gray100};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyRegular};
  }

  font-weight: 400;
  text-decoration: none !important;
  margin-right: ${rem(16)};
  margin-left: ${rem(40)};

  &:hover {
    background-color: ${theme.colors.main600};
    color: ${theme.colors.gray100};
  }
`;

const Article = (props) => {
  // let category;

  // if (props.category && props.category !== "blog") {
  //   category = (
  //     <CategoryLink to={"/categories/" + props.category}>
  //       <CategoryLinkLabel>Part of:</CategoryLinkLabel>
  //       {props.category.split("-").join(" ")}
  //     </CategoryLink>
  //   );
  // }

  return (
    <StyledArticle>
      <header>
        {/* {category} */}
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
