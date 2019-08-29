import React from "react";
import PropTypes from "prop-types";

import Tags from "../Tags/Tags";
import ArticleInfo from "../ArticleInfo/ArticleInfo";

import { StyledArticle, ArticleTitle, ArticleLink } from "./styles";

const Article = (props) => (
  <StyledArticle>
    <header>
      <Tags tags={props.tags} />
      <ArticleTitle>
        <ArticleLink to={props.slug}>{props.title}</ArticleLink>
      </ArticleTitle>
      <ArticleInfo date={props.date} timeToRead={props.timeToRead} />
    </header>
  </StyledArticle>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  timeToRead: PropTypes.number.isRequired,
};

export default Article;
