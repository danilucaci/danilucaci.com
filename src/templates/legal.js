import React from "react";
import { shape, string } from "prop-types";
import { graphql } from "gatsby";
import { FormattedDate, FormattedMessage } from "react-intl";
import { MDXRenderer } from "gatsby-plugin-mdx";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import { Copy } from "../components/Copy/Copy";
import Main from "../components/Main/Main";
import { Col } from "../components/Grid/Grid";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

import {
  LegalPageRow,
  PostH1,
  PostWrapper,
  Time,
} from "../styles/legal.styles";

function LegalDoc({ data, pageContext, location }) {
  const postNode = data.mdx;
  const postInfo = postNode.frontmatter;
  const locale = pageContext.locale;
  const twinPost = pageContext.twinPost;
  const lastUpdated = postInfo.date;

  let twinPostURL = "";

  if (locale === "en") {
    twinPostURL = "/es/" + twinPost;
  } else if (locale === "es") {
    twinPostURL = "/" + twinPost;
  }

  return (
    <ErrorBoundary>
      <Layout location={location} locale={locale} twinPostURL={twinPostURL}>
        <SEO
          locale={locale}
          twinPostURL={twinPostURL}
          postNode={postNode}
          legalDocs
          currentPath={location.pathname}
        />
        <Main>
          <LegalPageRow bottomSpaced col8>
            <Col>
              <PostH1>{postInfo.title}</PostH1>
              <FormattedMessage id="legal.updated">
                {(txt) => (
                  <Copy>
                    {txt}&nbsp;
                    <FormattedDate
                      value={lastUpdated}
                      year="numeric"
                      month="long"
                      day="numeric"
                    >
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
                <MDXRenderer>{postNode.body}</MDXRenderer>
              </PostWrapper>
            </Col>
          </LegalPageRow>
        </Main>
      </Layout>
    </ErrorBoundary>
  );
}

LegalDoc.propTypes = {
  pageContext: shape({
    locale: string.isRequired,
    twinPost: string.isRequired,
  }).isRequired,
  data: shape({
    mdx: shape({
      frontmatter: shape({
        title: string.isRequired,
        date: string.isRequired,
      }),
      body: string.isRequired,
    }),
  }).isRequired,
  location: shape({
    pathname: string.isRequired,
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
      body
    }
  }
`;
