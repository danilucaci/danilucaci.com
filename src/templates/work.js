import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import { theme, mediaMin, rem } from "../theme/globalStyles";
import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import { Copy } from "../components/Copy/Copy";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import CaseStudyListing from "../components/CaseStudyListing/CaseStudyListing";
import Pagination from "../components/Pagination/Pagination";
import ContactCard from "../components/ContactCard/ContactCard";
import { HR } from "../components/HR/HR";
import { localePaths } from "../i18n/i18n";

const OuterWrapper = styled.section`
  margin-bottom: ${theme.spacing.components.s};

  ${mediaMin.s`
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.m`
      margin-bottom: ${theme.spacing.components.xl};
  `};
`;

const InnerWrapper = styled.div`
  max-width: ${theme.contain.wrapper.col10};
  margin: 0 auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};
`;

const ContactWrapper = styled.div`
  margin-bottom: ${theme.spacing.components.s};
  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.m`
    margin-bottom: ${theme.spacing.components.xl};
  `};
`;

const StyledHR = styled(HR)`
  margin-bottom: ${rem(32)};
  max-width: ${theme.contain.inner.col10};
  margin-left: auto;
  margin-right: auto;

  ${mediaMin.m`
    margin-bottom: ${rem(56)};
  `};
`;

const WorkHeader = styled.header`
  color: ${theme.colors.dark900};

  margin-bottom: ${theme.spacing.components.s};

  ${mediaMin.m`
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.l`
    margin-bottom: ${theme.spacing.components.xl};
  `};
`;

const WorkPage = (props) => {
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
      />
      <Main role="main" id="main">
        <WorkHeader>
          <InnerWrapper>
            <FormattedMessage id="caseStudiesHeader">
              {(txt) => <h1>{txt}</h1>}
            </FormattedMessage>
            <FormattedMessage id="caseStudiesDescription">
              {(txt) => <Copy>{txt}</Copy>}
            </FormattedMessage>
          </InnerWrapper>
        </WorkHeader>
        <OuterWrapper>
          <InnerWrapper>
            <CaseStudyListing edges={edgesWork} />
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
          </InnerWrapper>
        </OuterWrapper>
        <ContactWrapper>
          <StyledHR />
          <ContactCard locale={locale} />
        </ContactWrapper>
      </Main>
      <SiteFooter locale={locale} />
    </Layout>
  );
};

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
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      tags: PropTypes.arrayOf(PropTypes.object).isRequired,
    }),
  }),
};

export default WorkPage;
