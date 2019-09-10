import React from "react";
import { object, shape, arrayOf, string } from "prop-types";
import { graphql, Link } from "gatsby";
import { FormattedMessage } from "react-intl";

import Layout from "../components/Layout";
import Main from "../components/Main/Main";
import SEO from "../components/SEO/SEO";
import ContactCard from "../components/ContactCard/ContactCard";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import DribbblePosts from "../components/DribbblePosts/DribbblePosts";
import { localePaths } from "../i18n/i18n";
import { Col } from "../components/Grid/Grid";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

import {
  IndexHeader,
  IndexTitle,
  Subtitle,
  Name,
  FindOutMore,
  ServicesRow,
  ServicesRowBackground,
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

const Index = ({ data, pageContext, location }) => {
  const edges = data.work.edges;
  const locale = pageContext.locale;
  const twinPostURL =
    locale === "en" ? localePaths["es"].index : localePaths["en"].index;

  return (
    <ErrorBoundary>
      <Layout location={location} locale={locale} twinPostURL={twinPostURL}>
        <SEO
          locale={locale}
          currentPath={location.pathname}
          twinPostURL={twinPostURL}
        />
        <Main>
          <IndexHeader as="header" col10 pb>
            <Col>
              <FormattedMessage id="index.name">
                {(txt) => <Name>{txt}</Name>}
              </FormattedMessage>
              <FormattedMessage id="index.h1">
                {(txt) => (
                  <IndexTitle
                    as="h1"
                    locale={locale}
                    data-testid="Index__Hero__Title"
                  >
                    {txt}
                  </IndexTitle>
                )}
              </FormattedMessage>
              <FormattedMessage id="index.subtitle">
                {(txt) => (
                  <Subtitle data-testid="Index__Hero__Subtitle">{txt}</Subtitle>
                )}
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
            </Col>
          </IndexHeader>
          <ServicesRowBackground mb as="section">
            <ServicesRow col10 padded as="div">
              <Col>
                <FormattedMessage id="index.services.heading">
                  {(txt) => <ServicesTitle>{txt}</ServicesTitle>}
                </FormattedMessage>

                <ServicesEntry>
                  <ServiceImage>
                    <FormattedMessage id="index.services.1.svg.alt">
                      {(txt) => (
                        <img
                          src={illustrationUX}
                          alt={txt}
                          data-testid="Homepage__SVG__01"
                        />
                      )}
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
                      {(txt) => (
                        <img
                          src={illustrationUI}
                          alt={txt}
                          data-testid="Homepage__SVG__02"
                        />
                      )}
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
                      {(txt) => (
                        <img
                          src={illustrationInteraction}
                          alt={txt}
                          data-testid="Homepage__SVG__03"
                        />
                      )}
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
                      {(txt) => (
                        <img
                          src={illustrationCode}
                          alt={txt}
                          data-testid="Homepage__SVG__04"
                        />
                      )}
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
              </Col>
            </ServicesRow>
          </ServicesRowBackground>

          <CaseStudies edges={edges} header="h2" spaced />

          <DribbblePosts locale={locale} />
          <ContactCard locale={locale} />
        </Main>
      </Layout>
    </ErrorBoundary>
  );
};

Index.propTypes = {
  pageContext: shape({
    locale: string.isRequired,
  }).isRequired,
  data: shape({
    work: shape({
      edges: arrayOf(object).isRequired,
    }),
  }).isRequired,
  location: shape({
    pathname: string.isRequired,
    href: string.isRequired,
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
            cardImage {
              childImageSharp {
                fluid(maxWidth: 744, quality: 50) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
