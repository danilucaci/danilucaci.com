import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
// import UserInfo from "../components/UserInfo/UserInfo";
// import Disqus from "../components/Disqus/Disqus";
import Tags from "../components/Tags/Tags";
import ArticleInfo from "../components/ArticleInfo/ArticleInfo";
import SEO from "../components/SEO/SEO";

import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";

class Post extends Component {
  render() {
    // I added String to convert the url to a string
    // Otherwise it causes the blog post build to break
    // ****************************************
    // TODO
    // Investigate why
    const slug = String(this.props.pageContext);
    const postNode = this.props.data.markdownRemark;
    const postInfo = postNode.frontmatter;

    if (!postInfo.id) {
      postInfo.id = slug;
    }
    if (!postInfo.category_id) {
      postInfo.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet>
            <title>{`${postInfo.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div>
            <h1>{postInfo.title}</h1>
            <ArticleInfo
              date={postNode.date}
              timeToRead={postNode.timeToRead}
            />
            <Tags tagsInPost={postInfo.tags} />
            Intro: {postInfo.intro}
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            {/* <UserInfo config={config} /> */}
            {/* <Disqus postNode={postNode} /> */}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Post;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date
        snippet
        intro
        category
        tags
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date
      }
    }
  }
`;
