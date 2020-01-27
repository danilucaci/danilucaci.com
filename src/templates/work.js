import React, { useContext } from "react";
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
    edgesWork: arrayOf(object).isRequired,
  }).isRequired,
  location: shape({
    pathname: string.isRequired,
    href: string.isRequired,
  }).isRequired,
};

export default WorkPage;
