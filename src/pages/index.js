import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { FormattedMessage } from "react-intl";

import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import SEO from "../components/SEO/SEO";
import ContactCard from "../components/ContactCard/ContactCard";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import DribbblePosts from "../components/DribbblePosts/DribbblePosts";
import { localePaths } from "../i18n/i18n";
import { GridCol } from "../components/Grid/Grid";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

import {
  IndexHeader,
  IndexTitle,
  Subhead,
  Name,
  FindOutMore,
  ServicesSection,
  ServicesRow,
  ServicesTitle,
  ServiceTitle,
  ServiceCopy,
  ServicesEntry,
  ServiceContent,
  ServiceImage,
} from "../styles/index.styles";

import illustrationCode from "../images/illustrations/danilucaci_services_code.svg";
import illustrationUX from "../images/illustrations/danilucaci_services_ux.svg";
import illustrationUI from "../images/illustrations/danilucaci_services_ui.svg";
import illustrationInteraction from "../images/illustrations/danilucaci_services_interaction.svg";

const Index = (props) => {
  const edges = props.data.work.edges;
  const locale = props.pageContext.locale;
  const twinPostURL =
    locale === "en" ? localePaths["es"].index : localePaths["en"].index;

  return (
    <ErrorBoundary>
      <Layout location={props.location} locale={locale}>
        <SEO
          locale={locale}
          currentPath={props.location.pathname}
          twinPostURL={twinPostURL}
        />
        <SiteHeader
          locale={locale}
          twinPostURL={twinPostURL}
          currentPath={props.location.pathname}
        />
        <Main role="main">
          <IndexHeader as="header">
            <GridCol>
              <FormattedMessage id="index.name">
                {(txt) => <Name>{txt}</Name>}
              </FormattedMessage>
              <FormattedMessage id="index.h1">
                {(txt) => <IndexTitle as="h1">{txt}</IndexTitle>}
              </FormattedMessage>
              <FormattedMessage id="index.subhead">
                {(txt) => <Subhead>{txt}</Subhead>}
              </FormattedMessage>
              <FindOutMore>
                <FormattedMessage id="index.findOut.1">
                  {(txt) => <>{txt}</>}
                </FormattedMessage>
                <FormattedMessage id="index.findOut.2">
                  {(txt) => <Link to={localePaths[locale].work}>{txt}</Link>}
                </FormattedMessage>
                <FormattedMessage id="index.findOut.3">
                  {(txt) => <>{txt}</>}
                </FormattedMessage>
                <FormattedMessage id="index.findOut.4">
                  {(txt) => <Link to={localePaths[locale].contact}>{txt}</Link>}
                </FormattedMessage>
                .
              </FindOutMore>
            </GridCol>
          </IndexHeader>
          <ServicesSection>
            <ServicesRow as="div">
              <GridCol>
                <FormattedMessage id="index.services.heading">
                  {(txt) => <ServicesTitle>{txt}</ServicesTitle>}
                </FormattedMessage>

                <ServicesEntry>
                  <ServiceImage>
                    <FormattedMessage id="index.services.1.svg.alt">
                      {(txt) => <img src={illustrationUX} alt={txt} />}
                    </FormattedMessage>
                  </ServiceImage>
                  <ServiceContent>
                    <FormattedMessage id="index.services.1.title">
                      {(txt) => <ServiceTitle>{txt}</ServiceTitle>}
                    </FormattedMessage>
                    <FormattedMessage id="index.services.1.copy">
                      {(txt) => <ServiceCopy>{txt}</ServiceCopy>}
                    </FormattedMessage>
                    <ul>
                      <li>User Interviews</li>
                      <li>Personas</li>
                      <li>Wireframes</li>
                      <li>User Flows</li>
                      <li>Heuristic Evaluation</li>
                    </ul>
                  </ServiceContent>
                </ServicesEntry>

                <ServicesEntry>
                  <ServiceImage>
                    <FormattedMessage id="index.services.2.svg.alt">
                      {(txt) => <img src={illustrationUI} alt={txt} />}
                    </FormattedMessage>
                  </ServiceImage>
                  <ServiceContent>
                    <FormattedMessage id="index.services.2.title">
                      {(txt) => <ServiceTitle>{txt}</ServiceTitle>}
                    </FormattedMessage>
                    <FormattedMessage id="index.services.2.copy">
                      {(txt) => <ServiceCopy>{txt}</ServiceCopy>}
                    </FormattedMessage>
                    <ul>
                      <li>Design Systems</li>
                      <li>Website design</li>
                      <li>iOS App Design</li>
                      <li>Android App Design</li>
                    </ul>
                  </ServiceContent>
                </ServicesEntry>

                <ServicesEntry>
                  <ServiceImage>
                    <FormattedMessage id="index.services.3.svg.alt">
                      {(txt) => <img src={illustrationInteraction} alt={txt} />}
                    </FormattedMessage>
                  </ServiceImage>
                  <ServiceContent>
                    <FormattedMessage id="index.services.3.title">
                      {(txt) => <ServiceTitle>{txt}</ServiceTitle>}
                    </FormattedMessage>
                    <FormattedMessage id="index.services.3.copy">
                      {(txt) => <ServiceCopy>{txt}</ServiceCopy>}
                    </FormattedMessage>
                    <ul>
                      <li>InVision</li>
                      <li>Principle</li>
                      <li>Figma</li>
                    </ul>
                  </ServiceContent>
                </ServicesEntry>

                <ServicesEntry>
                  <ServiceImage>
                    <FormattedMessage id="index.services.4.svg.alt">
                      {(txt) => <img src={illustrationCode} alt={txt} />}
                    </FormattedMessage>
                  </ServiceImage>
                  <ServiceContent>
                    <FormattedMessage id="index.services.4.title">
                      {(txt) => <ServiceTitle>{txt}</ServiceTitle>}
                    </FormattedMessage>
                    <FormattedMessage id="index.services.4.copy">
                      {(txt) => <ServiceCopy>{txt}</ServiceCopy>}
                    </FormattedMessage>
                    <ul>
                      <li>Styled-Components</li>
                      <li>Sass</li>
                      <li>React.js</li>
                      <li>Gatsby.js</li>
                      <li>GraphQL</li>
                    </ul>
                  </ServiceContent>
                </ServicesEntry>
              </GridCol>
            </ServicesRow>
          </ServicesSection>

          <CaseStudies edges={edges} header="h2" />

          <DribbblePosts locale={locale} />

          <ContactCard locale={locale} />
        </Main>
        <SiteFooter locale={locale} />
      </Layout>
    </ErrorBoundary>
  );
};

Index.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    work: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object).isRequired,
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default Index;

export const pageQuery = graphql`
  query WorkEntryByLocale($locale: String!) {
    work: allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          posted: { eq: true }
          category: { eq: "work" }
          locale: { eq: $locale }
        }
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            snippet
            date(formatString: "YYYY-MM-DD")
            category
            tags
            posted
            images {
              childImageSharp {
                fluid(maxWidth: 744) {
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  aspectRatio
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
