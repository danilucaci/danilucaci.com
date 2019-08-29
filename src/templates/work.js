import React from "react";
import PropTypes from "prop-types";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import Pagination from "../components/Pagination/Pagination";
import ContactCard from "../components/ContactCard/ContactCard";
import DribbblePosts from "../components/DribbblePosts/DribbblePosts";
import { localePaths } from "../i18n/i18n";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

function WorkPage(props) {
  const {
    currentPage,
    totalPagesInWork,
    paginationPathPrefix,
    prevPath,
    nextPath,
    edgesWork,
    locale,
  } = props.pageContext;

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
      <Layout location={props.location} locale={locale}>
        <SEO
          locale={locale}
          twinPostURL={twinPostURL}
          currentPage="work"
          currentPath={props.location.pathname}
          prevPath={prevPath}
          nextPath={nextPath}
        />
        <SiteHeader
          locale={locale}
          twinPostURL={twinPostURL}
          currentPath={props.location.pathname}
          expand
        />
        <Main role="main">
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

          <ContactCard locale={locale} />
        </Main>
        <SiteFooter
          locale={locale}
          twinPostURL={twinPostURL}
          currentPath={props.location.pathname}
        />
      </Layout>
    </ErrorBoundary>
  );
}

WorkPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
    nextPath: PropTypes.string,
    prevPath: PropTypes.string,
    currentPage: PropTypes.number.isRequired,
    totalCountWork: PropTypes.number.isRequired,
    totalPagesInWork: PropTypes.number.isRequired,
    paginationPathPrefix: PropTypes.string.isRequired,
    edgesWork: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorkPage;
