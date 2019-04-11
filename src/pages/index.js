import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { FormattedMessage } from "react-intl";

import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import SEO from "../components/SEO/SEO";
import ContactCard from "../components/ContactCard/ContactCard";
import CaseStudyCard from "../components/CaseStudyCard/CaseStudyCard";
import DribbblePosts from "../components/DribbblePosts/DribbblePosts";
import { localePaths } from "../i18n/i18n";
import { GridCol } from "../components/Grid/Grid";

import {
  IndexHeader,
  IndexTitle,
  Subhead,
  Name,
  Row,
  StyledHR,
  ServicesWrapper,
  ServicesTitle,
  ServiceTitle,
  ServiceCopy,
  ServicesEntry,
  ServiceContent,
  ServiceImage,
  CaseStudiesTitle,
  CaseStudiesSubhead,
  DribbblePostsTitle,
  DribbbleSubhead,
} from "../styles/index.styles";

import illustrationCode from "../images/illustrations/danilucaci_services_code.svg";
import illustrationUX from "../images/illustrations/danilucaci_services_ux.svg";
import illustrationUI from "../images/illustrations/danilucaci_services_ui.svg";
import illustrationInteraction from "../images/illustrations/danilucaci_services_interaction.svg";

const Index = (props) => {
  let caseStudyList = props.data.work.edges.map((edge) => ({
    slug: edge.node.fields.slug,
    tagsInCaseStudy: edge.node.frontmatter.tags,
    title: edge.node.frontmatter.title,
    date: edge.node.frontmatter.date,
    snippet: edge.node.frontmatter.snippet,
    image: edge.node.frontmatter.image.childImageSharp.fluid,
  }));

  let locale = props.pageContext.locale;
  let twinPostURL = locale === "en" ? localePaths["es"].index : localePaths["en"].index;

  return (
    <Layout location={props.location} locale={locale}>
      <SEO locale={locale} currentPath={props.location.pathname} twinPostURL={twinPostURL} />
      <SiteHeader locale={locale} twinPostURL={twinPostURL} currentPath={props.location.pathname} />
      <Main role="main" id="main">
        <IndexHeader as="header">
          <GridCol>
            <FormattedMessage id="indexName">{(txt) => <Name>{txt}</Name>}</FormattedMessage>
            <FormattedMessage id="indexH1">
              {(txt) => <IndexTitle as="h1">{txt}</IndexTitle>}
            </FormattedMessage>
            <FormattedMessage id="indexSubhead">
              {(txt) => <Subhead>{txt}</Subhead>}
            </FormattedMessage>
          </GridCol>
        </IndexHeader>
        <ServicesWrapper>
          <Row padded as="div">
            <GridCol>
              <FormattedMessage id="indexServicesHeading">
                {(txt) => <ServicesTitle>{txt}</ServicesTitle>}
              </FormattedMessage>

              <ServicesEntry>
                <ServiceImage>
                  <img src={illustrationUX} alt="illustration" />
                </ServiceImage>
                <ServiceContent>
                  <FormattedMessage id="indexServices1Title">
                    {(txt) => <ServiceTitle>{txt}</ServiceTitle>}
                  </FormattedMessage>
                  <FormattedMessage id="indexServices1Copy">
                    {(txt) => <ServiceCopy>{txt}</ServiceCopy>}
                  </FormattedMessage>
                  <ul>
                    <li>User Interviews</li>
                    <li>Personas</li>
                    <li>Wireframes</li>
                    <li>User Flows</li>
                    <li>User Journey Maps</li>
                    <li>Usability Testing</li>
                    <li>Competitive Analysis</li>
                  </ul>
                </ServiceContent>
              </ServicesEntry>

              <ServicesEntry>
                <ServiceImage>
                  <img src={illustrationUI} alt="illustration" />
                </ServiceImage>
                <ServiceContent>
                  <FormattedMessage id="indexServices2Title">
                    {(txt) => <ServiceTitle>{txt}</ServiceTitle>}
                  </FormattedMessage>
                  <FormattedMessage id="indexServices2Copy">
                    {(txt) => <ServiceCopy>{txt}</ServiceCopy>}
                  </FormattedMessage>
                  <ul>
                    <li>Design Systems</li>
                    <li>Sketch</li>
                    <li>Figma</li>
                    <li>Abstract</li>
                    <li>Zeplin</li>
                  </ul>
                </ServiceContent>
              </ServicesEntry>

              <ServicesEntry>
                <ServiceImage>
                  <img src={illustrationInteraction} alt="illustration" />
                </ServiceImage>
                <ServiceContent>
                  <FormattedMessage id="indexServices3Title">
                    {(txt) => <ServiceTitle>{txt}</ServiceTitle>}
                  </FormattedMessage>
                  <FormattedMessage id="indexServices3Copy">
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
                  <img src={illustrationCode} alt="illustration" />
                </ServiceImage>
                <ServiceContent>
                  <FormattedMessage id="indexServices4Title">
                    {(txt) => <ServiceTitle>{txt}</ServiceTitle>}
                  </FormattedMessage>
                  <FormattedMessage id="indexServices4Copy">
                    {(txt) => <ServiceCopy>{txt}</ServiceCopy>}
                  </FormattedMessage>
                  <ul>
                    <li>HTML & CSS</li>
                    <li>React.js</li>
                    <li>Gatsby.js</li>
                  </ul>
                </ServiceContent>
              </ServicesEntry>
            </GridCol>
          </Row>
        </ServicesWrapper>

        <Row spaced>
          <GridCol>
            <FormattedMessage id="caseStudiesHeader">
              {(txt) => <CaseStudiesTitle>{txt}</CaseStudiesTitle>}
            </FormattedMessage>
            <FormattedMessage id="caseStudiesDescription">
              {(txt) => <CaseStudiesSubhead>{txt}</CaseStudiesSubhead>}
            </FormattedMessage>
            {caseStudyList.map((caseStudyCard) => (
              <CaseStudyCard
                key={caseStudyCard.title}
                slug={caseStudyCard.slug}
                tagsInCaseStudy={caseStudyCard.tagsInCaseStudy}
                title={caseStudyCard.title}
                date={caseStudyCard.date}
                snippet={caseStudyCard.snippet}
                image={caseStudyCard.image}
              />
            ))}
          </GridCol>
        </Row>

        <Row spaced>
          <GridCol>
            <StyledHR />
            <FormattedMessage id="dribbbleHeader">
              {(txt) => <DribbblePostsTitle>{txt}</DribbblePostsTitle>}
            </FormattedMessage>
            <FormattedMessage id="dribbbleSubhead">
              {(txt) => <DribbbleSubhead>{txt}</DribbbleSubhead>}
            </FormattedMessage>
            <DribbblePosts locale={locale} />
          </GridCol>
        </Row>

        <Row spaced>
          <GridCol>
            <ContactCard locale={locale} />
          </GridCol>
        </Row>
      </Main>
      <SiteFooter locale={locale} />
    </Layout>
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
    work: allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { posted: { eq: true }, category: { eq: "work" }, locale: { eq: $locale } }
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
            image {
              childImageSharp {
                fluid(maxWidth: 744) {
                  src
                  srcSet
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
