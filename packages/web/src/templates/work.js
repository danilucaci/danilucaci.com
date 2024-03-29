import React, { useContext } from "react";
import { arrayOf, number, string, bool, shape, object } from "prop-types";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Main from "../components/Main";
import CaseStudies from "../components/CaseStudies";
import Pagination from "../components/Pagination";
import ContactCard from "../components/ContactCard";
import DribbblePosts from "../components/DribbblePosts";
import { localePaths } from "../i18n";
import ErrorBoundary from "../components/ErrorBoundary";
import LocaleContext from "../i18n/LocaleContext";

function WorkPage({ pageContext, location }) {
  const {
    currentPage,
    totalPagesInWork,
    paginationPathPrefix,
    prevPath,
    nextPath,
    edgesWork,
  } = pageContext;

  const { locale } = useContext(LocaleContext);

  let twinPostURL = "";

  if (locale === "en" && currentPage > 1) {
    twinPostURL =
      localePaths["es"].work + localePaths["es"].paginationName + currentPage;
  } else if (locale === "en" && currentPage === 1) {
    twinPostURL = localePaths["es"].work;
  }

  if (locale === "es" && currentPage > 1) {
    twinPostURL =
      localePaths["en"].work + localePaths["en"].paginationName + currentPage;
  } else if (locale === "es" && currentPage === 1) {
    twinPostURL = localePaths["en"].work;
  }

  return (
    <ErrorBoundary>
      <Layout
        location={location}
        twinPostURL={twinPostURL}
        expandHeaderAndFooter
      >
        <SEO
          twinPostURL={twinPostURL}
          currentPage="work"
          currentPath={location.pathname}
          prevPath={prevPath}
          nextPath={nextPath}
        />

        <Main>
          <CaseStudies cardHeadingLevel="h2" edges={edgesWork} />

          {totalPagesInWork > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPagesInWork}
              paginationPathPrefix={paginationPathPrefix}
              prevPath={prevPath}
              nextPath={nextPath}
            />
          )}

          <DribbblePosts />
        </Main>
        <ContactCard />
      </Layout>
    </ErrorBoundary>
  );
}

WorkPage.propTypes = {
  pageContext: shape({
    nextPath: string,
    prevPath: string,
    currentPage: number.isRequired,
    totalCountWork: number.isRequired,
    totalPagesInWork: number.isRequired,
    paginationPathPrefix: string.isRequired,
    edgesWork: arrayOf(
      shape({
        node: shape({
          fields: shape({
            slug: string.isRequired,
          }),
          frontmatter: shape({
            cardImage: shape({
              childImageSharp: object.isRequired,
            }).isRequired,
            category: string.isRequired,
            date: string.isRequired,
            locale: string.isRequired,
            posted: bool.isRequired,
            snippet: string.isRequired,
            tags: arrayOf(string).isRequired,
            title: string.isRequired,
            twinPost: string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    ).isRequired,
  }),
  location: shape({
    pathname: string.isRequired,
    href: string.isRequired,
  }).isRequired,
};

WorkPage.defaultProps = {
  pageContext: {
    nextPath: null,
    prevPath: null,
  },
};

export default WorkPage;
