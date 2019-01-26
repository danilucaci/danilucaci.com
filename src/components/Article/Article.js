import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import { theme, mediaMin, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import Tags from "../Tags/Tags";
import ArticleInfo from "../ArticleInfo/ArticleInfo";
import { BoldLink } from "../Link/Link";

const StyledArticle = styled.article`
  background-color: ${theme.colors.gray100};
  ${theme.shadow.default};

  padding: ${rem(12)} ${rem(16)} ${rem(16)} ${rem(16)};
  margin-bottom: ${theme.gutters.m};

  ${mediaMin.s`
    padding: ${rem(16)} ${rem(24)} ${rem(16)};
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

const ContinueLink = styled(BoldLink)`
  display: block;

  padding-top: ${rem(16)};
  padding-bottom: ${rem(16)};

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
        <Tags tagsInPost={props.tagsInPost} spaced />
        <StyledH3>{props.title}</StyledH3>
        <ArticleInfo date={props.date} timeToRead={props.timeToRead} />
      </header>
      <Copy className="copy">{props.snippet}</Copy>
      <FormattedMessage id="article_link_continue">
        {(txt) => <ContinueLink to={props.slug}>{txt}</ContinueLink>}
      </FormattedMessage>
    </StyledArticle>
  );
};

export default Article;
