import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { FormattedDate, FormattedMessage } from "react-intl";
import { MDXRenderer } from "gatsby-mdx";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import { Copy } from "../components/Copy/Copy";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { calculateScroll, textPassiveEventSupport } from "../helpers/helpers";
import { GridCol } from "../components/Grid/Grid";

import { PageWrapper, PostH1, PostWrapper, Time } from "../styles/legal.styles";

class LegalDoc extends Component {
  componentDidMount() {
    // Test via a getter in the options object to see if the passive property is accessed
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
    let supportsPassive = textPassiveEventSupport();
    // Use our detect's results. passive applied if supported, capture will be false either way.
    window.addEventListener(
      "scroll",
      this.handlePageScroll,
      supportsPassive ? { passive: true } : false,
    );

    this.handlePageScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handlePageScroll);
  }

  handlePageScroll = () => {
    this.handleScrollLine();
  };

  handleScrollLine = () => {
    let scrollLine = document.querySelector(".js-scrollLine");
    let scrolled = calculateScroll();
    scrollLine.style.width = scrolled + "%";
  };

  render() {
    // const slug = this.props.data.mdx.fields.slug;
    const postNode = this.props.data.mdx;
    const postInfo = postNode.frontmatter;
    const locale = this.props.pageContext.locale;
    const twinPost = this.props.pageContext.twinPost;
    const lastUpdated = postInfo.date;

    let twinPostURL = "";

    if (locale === "en") {
      twinPostURL = "/es/" + twinPost;
    } else if (locale === "es") {
      twinPostURL = "/" + twinPost;
    }

    return (
      <Layout location={this.props.location} locale={locale}>
        <SEO
          locale={locale}
          twinPostURL={twinPostURL}
          postNode={postNode}
          legalDocs
          currentPath={this.props.location.pathname}
        />
        <SiteHeader
          showScrollIndicator
          locale={locale}
          twinPostURL={twinPostURL}
          currentPath={this.props.location.pathname}
        />
        <Main role="main" id="main">
          <PageWrapper>
            <GridCol>
              <PostH1>{postInfo.title}</PostH1>
              <FormattedMessage id="legal.updated">
                {(txt) => (
                  <Copy>
                    {txt}&nbsp;
                    <FormattedDate value={lastUpdated} year="numeric" month="long" day="numeric">
                      {(txt2) => (
                        <Time as="time" dateTime={txt2}>
                          {txt2}
                        </Time>
                      )}
                    </FormattedDate>
                  </Copy>
                )}
              </FormattedMessage>
              <PostWrapper>
                <MDXRenderer>{postNode.code.body}</MDXRenderer>
              </PostWrapper>
            </GridCol>
          </PageWrapper>
        </Main>
        <ScrollToTop />
        <SiteFooter locale={locale} />
      </Layout>
    );
  }
}

LegalDoc.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    twinPost: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
      code: PropTypes.shape({
        body: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default LegalDoc;

export const legalPageQuery = graphql`
  query LEGAL_ENTRY_BY_SLUG($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
      code {
        body
      }
    }
  }
`;
