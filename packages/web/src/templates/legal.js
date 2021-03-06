import React, { useContext } from "react";
import { shape, string } from "prop-types";
import { graphql } from "gatsby";
import { FormattedDate, useIntl } from "react-intl";
import { MDXRenderer } from "gatsby-plugin-mdx";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import { Copy } from "../components/Copy";
import Main from "../components/Main";
import { Col } from "../components/Grid";
import ErrorBoundary from "../components/ErrorBoundary";

import {
  LegalPageRow,
  PostH1,
  PostWrapper,
  Time,
} from "../styles/legal.styles";
import LocaleContext from "../i18n/LocaleContext";

function LegalDoc({ data, pageContext, location }) {
  const postNode = data.mdx;
  const postInfo = postNode.frontmatter;
  const twinPost = pageContext.twinPost;
  const lastUpdated = postInfo.date;

  const intl = useIntl();

  const { locale } = useContext(LocaleContext);

  let twinPostURL = "";

  if (locale === "en") {
    twinPostURL = "/es/" + twinPost;
  } else if (locale === "es") {
    twinPostURL = "/" + twinPost;
  }

  return (
    <ErrorBoundary>
      <Layout location={location} twinPostURL={twinPostURL}>
        <SEO
          twinPostURL={twinPostURL}
          postNode={postNode}
          legalDocs
          currentPath={location.pathname}
        />
        <Main>
          <LegalPageRow mb col8>
            <Col>
              <PostH1>{postInfo.title}</PostH1>

              <Copy>
                {intl.formatMessage({ id: "legal.updated" })}&nbsp;
                <FormattedDate
                  value={lastUpdated}
                  year="numeric"
                  month="long"
                  day="numeric"
                >
                  {(date) => (
                    <Time as="time" dateTime={date}>
                      {date}
                    </Time>
                  )}
                </FormattedDate>
              </Copy>
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
