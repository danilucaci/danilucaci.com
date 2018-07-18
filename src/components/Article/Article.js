import React from "react";
import { Link } from "gatsby";

import Tags from "../Tags/Tags";
import ArticleInfo from "./ArticleInfo/ArticleInfo";

const Article = (props) => {
  return (
    <article className="l-col l-col__1-1 o-article">
      <h3 className="a-article__header u-mt-0 u-mb-8">{props.title}</h3>
      <Tags tags={props.tags} />
      <ArticleInfo date={props.date} readTime={props.readTime} />
      <p className="copy">{props.snippet}</p>
      <Link to={props.slug} className="link link--b a-article__continue">
        Continue Reading→
      </Link>
    </article>
  );
};

export default Article;
