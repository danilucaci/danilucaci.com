import React, { useContext } from "react";
import { number, bool, shape, arrayOf, string } from "prop-types";
import { graphql, Link } from "gatsby";
import { useIntl } from "react-intl";

import Layout from "../components/Layout";
import Main from "../components/Main";
import SEO from "../components/SEO";
import ContactCard from "../components/ContactCard";
import IndexCaseStudies from "../components/IndexCaseStudies";
import DribbblePosts from "../components/DribbblePosts";
import { localePaths } from "../i18n";
import { Col } from "../components/Grid";
import ErrorBoundary from "../components/ErrorBoundary";
import LocaleContext from "../i18n/LocaleContext";

import {
  IndexHeader,
  IndexTitle,
  Subtitle,
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

const Index = ({ data, location }) => {
  const edges = data.work.edges;
  const { locale } = useContext(LocaleContext);
  const intl = useIntl();

  const twinPostURL =
    locale === "en" ? localePaths["es"].index : localePaths["en"].index;

  return (
    <ErrorBoundary>
      <Layout
        location={location}
        twinPostURL={twinPostURL}
        expandHeaderAndFooter
      >
        <SEO currentPath={location.pathname} twinPostURL={twinPostURL} />
        <Main>
          <IndexHeader as="header" col12>
            <Col xxl={8}>
              <IndexTitle as="h1" data-testid="Index__Hero__Title">
                {intl.formatMessage({ id: "index.h1" })}
              </IndexTitle>

              <Subtitle data-testid="Index__Hero__Subtitle">
                {intl.formatMessage({ id: "index.subtitle" })}
              </Subtitle>

              <FindOutMore>
                {intl.formatMessage({ id: "index.findOut.1" })}
                <Link to={localePaths[locale].work}>
                  {intl.formatMessage({ id: "index.findOut.2" })}
                </Link>
                {intl.formatMessage({ id: "index.findOut.3" })}
                <Link to={localePaths[locale].contact}>
                  {intl.formatMessage({ id: "index.findOut.4" })}
                </Link>
                .
              </FindOutMore>
            </Col>
          </IndexHeader>

          <IndexCaseStudies edges={edges} spaced />

          <ServicesRowBackground
            mb
            as="section"
            aria-labelledby="services-title"
          >
            <ServicesRow col10 padded as="div">
              <Col>
                <ServicesTitle id="services-title">
                  {intl.formatMessage({ id: "index.services.heading" })}
                </ServicesTitle>

                <ServicesEntry>
                  <ServiceImage>
                    <img
                      src={illustrationCode}
                      alt={intl.formatMessage({
                        id: "index.services.4.svg.alt",
                      })}
                      data-testid="Homepage__SVG__04"
                    />
                  </ServiceImage>
                  <ServiceContent>
                    <ServiceTitle>
                      {intl.formatMessage({ id: "index.services.4.title" })}
                    </ServiceTitle>
                    <ServiceCopy>
                      {intl.formatMessage({ id: "index.services.4.copy" })}
                    </ServiceCopy>
                    <ul>
                      <li>Styled-Components</li>
                      <li>Sass</li>
                      <li>React.js</li>
                      <li>Gatsby.js</li>
                      <li>GraphQL</li>
                    </ul>
                  </ServiceContent>
                </ServicesEntry>

                <ServicesEntry>
                  <ServiceImage>
                    <img
                      src={illustrationUI}
                      alt={intl.formatMessage({
                        id: "index.services.2.svg.alt",
                      })}
                      data-testid="Homepage__SVG__02"
                    />
                  </ServiceImage>
                  <ServiceContent>
                    <ServiceTitle>
                      {intl.formatMessage({ id: "index.services.2.title" })}
                    </ServiceTitle>
                    <ServiceCopy>
                      {intl.formatMessage({ id: "index.services.2.copy" })}
                    </ServiceCopy>
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
                    <img
                      src={illustrationUX}
                      alt={intl.formatMessage({
                        id: "index.services.1.svg.alt",
                      })}
                      data-testid="Homepage__SVG__01"
                    />
                  </ServiceImage>
                  <ServiceContent>
                    <ServiceTitle>
                      {intl.formatMessage({ id: "index.services.1.title" })}
                    </ServiceTitle>
                    <ServiceCopy>
                      {intl.formatMessage({ id: "index.services.1.copy" })}
                    </ServiceCopy>
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
                    <img
                      src={illustrationInteraction}
                      alt={intl.formatMessage({
                        id: "index.services.3.svg.alt",
                      })}
                      data-testid="Homepage__SVG__03"
                    />
                  </ServiceImage>
                  <ServiceContent>
                    <ServiceTitle>
                      {intl.formatMessage({ id: "index.services.3.title" })}
                    </ServiceTitle>
                    <ServiceCopy>
                      {intl.formatMessage({ id: "index.services.3.copy" })}
                    </ServiceCopy>
                    <ul>
                      <li>InVision</li>
                      <li>Principle</li>
                      <li>Figma</li>
                    </ul>
                  </ServiceContent>
                </ServicesEntry>
              </Col>
            </ServicesRow>
          </ServicesRowBackground>

          <DribbblePosts />
        </Main>
        <ContactCard />
      </Layout>
    </ErrorBoundary>
  );
};

Index.propTypes = {
  data: shape({
    work: shape({
      edges: arrayOf(
        shape({
          node: shape({
            fields: shape({
              slug: string.isRequired,
            }),
            frontmatter: shape({
              cardImage: shape({
                childImageSharp: shape({
                  fluid: shape({
                    aspectRatio: number.isRequired,
                    base64: string.isRequired,
                    sizes: string.isRequired,
                    src: string.isRequired,
                    srcSet: string.isRequired,
                    srcSetWebp: string.isRequired,
                    srcWebp: string.isRequired,
                  }).isRequired,
                }).isRequired,
              }).isRequired,
              category: string.isRequired,
              date: string.isRequired,
              posted: bool.isRequired,
              snippet: string.isRequired,
              tags: arrayOf(string).isRequired,
              title: string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
      totalCount: number.isRequired,
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
