import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
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
import intlMessages from "../i18n/i18n";

const PageWrapper = styled.section`
  max-width: ${theme.contain.post};
  margin-left: auto;
  margin-right: auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
`};
`;

const PostH1 = styled.h1`
  margin-top: ${rem(8)};
  margin-bottom: ${rem(8)};

  ${mediaMin.m`
    margin-top: ${rem(16)};
    margin-bottom: ${rem(16)};
  `};
`;

const PostContent = styled.section`
  display: block;

  max-width: ${theme.contain.post};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${rem(16)};

  ${mediaMin.s`
    margin-top: ${rem(32)};
    margin-bottom: ${rem(56)};
  `};

  h2 {
    display: block;
    margin-top: ${rem(32)};
    margin-bottom: ${rem(16)};

    &:first-of-type {
      margin-top: 0;
    }

    ${mediaMin.xs`
      margin-top: ${rem(64)};
      margin-bottom: ${rem(32)};
    `};
  }

  h3 {
    display: block;
    margin-top: ${rem(32)};
    margin-bottom: ${rem(16)};

    ${mediaMin.xs`
      margin-top: ${rem(64)};
      margin-bottom: ${rem(32)};
    `};
  }

  h4 {
    display: block;
    margin-top: ${rem(32)};
    margin-bottom: ${rem(16)};
  }

  h5 {
    display: block;
    margin-top: ${rem(32)};
    margin-bottom: ${rem(16)};
  }

  p {
    margin-bottom: ${rem(32)};
  }

  p + ul {
    margin-top: -${rem(16)};
  }

  ul + p {
    margin-top: ${rem(32)};
  }

  ul {
    list-style-type: disc;
    list-style-position: outside;
  }

  li {
    margin-left: ${rem(24)};
  }

  strong {
    color: ${theme.colors.dark800};

    .fonts-loaded & {
      font-family: ${theme.fonts.bodyBold};
    }

    font-weight: 700;
    font-style: normal;

    font-size: ${theme.fontSizes.m};
    line-height: ${theme.lineHeights.m};
  }
`;

const Time = styled(Copy)`
  display: inline-block;
  font-variant: small-caps;
  text-transform: lowercase;
  letter-spacing: ${rem(0.5)};
  font-feature-settings: "smcp", "c2sc", "onum";
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
        <Helmet
          title={`${postInfo.title} || ${intlMessages[locale].meta.siteTitle}`}
        />
        <SEO postPath={slug} postNode={postNode} postSEO />
        <SiteHeader
          showScrollIndicator
          twinPostURL={twinPostURL}
          locale={locale}
        />
        <Main role="main" id="main">
          <PageWrapper>
            <PostH1>{postInfo.title}</PostH1>
            <FormattedMessage id="legalUpdated">
              {(txt) => (
                <Copy small>
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
