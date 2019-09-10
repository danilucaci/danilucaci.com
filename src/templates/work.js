import React from "react";
import { arrayOf, number, string, object, shape } from "prop-types";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import Main from "../components/Main/Main";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import Pagination from "../components/Pagination/Pagination";
import ContactCard from "../components/ContactCard/ContactCard";
import DribbblePosts from "../components/DribbblePosts/DribbblePosts";
import { localePaths } from "../i18n/i18n";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

function WorkPage({ pageContext, location }) {
  const {
    currentPage,
    totalPagesInWork,
    paginationPathPrefix,
    prevPath,
    nextPath,
    edgesWork,
    locale,
  } = pageContext;

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
        locale={locale}
        twinPostURL={twinPostURL}
        expandHeaderAndFooter
      >
        <SEO
          locale={locale}
          twinPostURL={twinPostURL}
          currentPage="work"
          currentPath={location.pathname}
          prevPath={prevPath}
          nextPath={nextPath}
        />

        <Main>
          <CaseStudies edges={edgesWork} />

          {totalPagesInWork > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPagesInWork}
              paginationPathPrefix={paginationPathPrefix}
              prevPath={prevPath}
              nextPath={nextPath}
              locale={locale}
            />
          )}

          <DribbblePosts locale={locale} />
        </Main>
        <ContactCard locale={locale} />
      </Layout>
    </ErrorBoundary>
  );
}

WorkPage.propTypes = {
  pageContext: shape({
    locale: string.isRequired,
    nextPath: string,
    prevPath: string,
    currentPage: number.isRequired,
    totalCountWork: number.isRequired,
    totalPagesInWork: number.isRequired,
    paginationPathPrefix: string.isRequired,
    edgesWork: arrayOf(object).isRequired,
  }).isRequired,
  location: shape({
    pathname: string.isRequired,
    href: string.isRequired,
  }).isRequired,
};

export default WorkPage;
