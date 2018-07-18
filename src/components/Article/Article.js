import React from "react";
import { Link } from "gatsby";

import Tags from "../Tags/Tags";
import ArticleInfo from "./ArticleInfo/ArticleInfo";

const Article = (props) => {
  // console.log(props.tags);
  console.log(props);

  return (
    <article className="l-col l-col__1-1 o-article">
      <h3 className="a-article__header u-mt-0 u-mb-8">{props.title}</h3>
      <Tags tags={props.tagsInPost} />
      <ArticleInfo date={props.date} timeToRead={props.timeToRead} />
      <p className="copy">{props.snippet}</p>
      <Link to={"/categories/" + props.category} className="link">
        {props.category}
      </Link>
      <Link to={props.slug} className="link link--b a-article__continue">
        Continue Reading→
      </Link>
    </article>
  );
};

export default Article;
