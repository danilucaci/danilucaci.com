import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import Tags from "../Tags/Tags";
import ArticleInfo from "../ArticleInfo/ArticleInfo";

import { StyledArticle, ContinueLink, ArticleCopy, StyledH3 } from "./styles";

const Article = (props) => (
  <StyledArticle>
    <header>
      <Tags tags={props.tags} />
      <StyledH3>{props.title}</StyledH3>
      <ArticleInfo date={props.date} timeToRead={props.timeToRead} />
    </header>
    <ArticleCopy>{props.snippet}</ArticleCopy>
    <FormattedMessage id="article.link.continue">
      {(txt) => <ContinueLink to={props.slug}>{txt}</ContinueLink>}
    </FormattedMessage>
  </StyledArticle>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  timeToRead: PropTypes.number.isRequired,
};

export default Article;
