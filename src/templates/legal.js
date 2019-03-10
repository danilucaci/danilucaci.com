import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";
import { FormattedDate, FormattedMessage } from "react-intl";

import { theme, rem, mediaMin } from "../theme/globalStyles";
import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import { Copy } from "../components/Copy/Copy";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { calculateScroll, textPassiveEventSupport } from "../helpers/helpers";

const PageWrapper = styled.section`
  max-width: ${theme.contain.inner.col8};
  margin-left: auto;
  margin-right: auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
`};

  p {
    font-feature-settings: "onum";
  }
`;

const PostH1 = styled.h1`
  margin-top: ${rem(16)};
  margin-bottom: ${rem(16)};
`;

const PostContent = styled.div`
  display: block;
  max-width: ${theme.contain.inner.col8};
  margin-left: auto;
  margin-right: auto;

  margin-top: ${rem(16)};
  margin-bottom: ${theme.spacing.components.s};

  ${mediaMin.m`
    margin-top: ${rem(32)};
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.xl`
    margin-bottom: ${theme.spacing.components.xl};
  `};

  h2 {
    display: block;

    margin-top: ${rem(64)};
    margin-bottom: ${rem(32)};

    & + h3 {
      margin-top: ${rem(32)};
    }
  }

  h3 {
    display: block;

    margin-top: ${rem(64)};
    margin-bottom: ${rem(32)};
  }

  h4 {
    display: block;

    margin-top: ${rem(64)};
    margin-bottom: ${rem(32)};
  }

  p,
  ul,
  ol {
    margin-bottom: ${rem(32)};
  }
`;

const Time = styled(Copy)`
  display: inline-block;
`;

class LegalDoc extends Component {
  componentDidMount() {
    // Test via a getter in the options object to see if the passive property is accessed
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
    var supportsPassive = textPassiveEventSupport();
    // Use our detect's results. passive applied if supported, capture will be false either way.
    window.addEventListener(
      "scroll",
      this.handlePageScroll,
      supportsPassive ? { passive: true } : false
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
    const slug = this.props.data.markdownRemark.fields.slug;
    const postNode = this.props.data.markdownRemark;
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
            <PostH1>{postInfo.title}</PostH1>
            <FormattedMessage id="legalUpdated">
              {(txt) => (
                <Copy>
                  {txt}&nbsp;
                  <FormattedDate
                    value={lastUpdated}
                    year="numeric"
                    month="long"
                    day="numeric"
                  >
                    {(txt) => (
                      <Time as="time" dateTime={txt}>
                        {txt}
                      </Time>
                    )}
                  </FormattedDate>
                </Copy>
              )}
            </FormattedMessage>
            <PostContent dangerouslySetInnerHTML={{ __html: postNode.html }} />
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
  }),
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
      html: PropTypes.string.isRequired,
    }),
  }),
};

export default LegalDoc;

export const legalPageQuery = graphql`
  query LegalEntryBySlug($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
    }
  }
`;
