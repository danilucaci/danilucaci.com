import React from "react";
import { string, number, arrayOf } from "prop-types";

import Tags from "../Tags/Tags";
import ArticleInfo from "../ArticleInfo/ArticleInfo";

import { StyledArticle, ArticleTitle, ArticleLink } from "./styles";

const Article = ({ title, tags, date, slug, timeToRead }) => {
  return (
    <StyledArticle>
      <header>
        <Tags tagsFor="post" tags={tags} />
        <ArticleTitle>
          <ArticleLink to={slug}>{title}</ArticleLink>
        </ArticleTitle>
        <ArticleInfo date={date} timeToRead={timeToRead} />
      </header>
    </StyledArticle>
  );
};

Article.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  slug: string.isRequired,
  tags: arrayOf(string).isRequired,
  timeToRead: number.isRequired,
};

export default Article;
