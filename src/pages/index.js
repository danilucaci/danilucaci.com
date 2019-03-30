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

import {
  IndexHeader,
  IndexTitle,
  Subhead,
  Name,
  Row,
  RowContents,
  StyledHR,
  ServicesTitle,
  ServicesH4,
  ServicesEntry,
  CaseStudiesTitle,
  CaseStudiesCopy,
  DribbblePostsTitle,
  DribbbleSubhead,
} from "./styles/index";

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
        <IndexHeader>
          <FormattedMessage id="indexName">{(txt) => <Name>{txt}</Name>}</FormattedMessage>
          <FormattedMessage id="indexH1">
            {(txt) => <IndexTitle as="h1">{txt}</IndexTitle>}
          </FormattedMessage>
          <FormattedMessage id="indexSubhead">{(txt) => <Subhead>{txt}</Subhead>}</FormattedMessage>
          <Subhead />
        </IndexHeader>
        <Row>
          <RowContents>
            <FormattedMessage id="indexServicesHeading">
              {(txt) => <ServicesTitle>{txt}</ServicesTitle>}
            </FormattedMessage>
            <ServicesEntry>
              <FormattedMessage id="indexServices1Title">
                {(txt) => <ServicesH4>{txt}</ServicesH4>}
              </FormattedMessage>
              <ul>
                <FormattedMessage id="indexServices1Item1">
                  {(txt) => <li>{txt}</li>}
                </FormattedMessage>
                <FormattedMessage id="indexServices1Item2">
                  {(txt) => <li>{txt}</li>}
                </FormattedMessage>
                <FormattedMessage id="indexServices1Item3">
                  {(txt) => <li>{txt}</li>}
                </FormattedMessage>
                <FormattedMessage id="indexServices1Item4">
                  {(txt) => <li>{txt}</li>}
                </FormattedMessage>
              </ul>
            </ServicesEntry>
            <ServicesEntry>
              <FormattedMessage id="indexServices2Title">
                {(txt) => <ServicesH4>{txt}</ServicesH4>}
              </FormattedMessage>
              <ul>
                <FormattedMessage id="indexServices2Item1">
                  {(txt) => <li>{txt}</li>}
                </FormattedMessage>
                <FormattedMessage id="indexServices2Item2">
                  {(txt) => <li>{txt}</li>}
                </FormattedMessage>
                <FormattedMessage id="indexServices2Item3">
                  {(txt) => <li>{txt}</li>}
                </FormattedMessage>
                <FormattedMessage id="indexServices2Item4">
                  {(txt) => <li>{txt}</li>}
                </FormattedMessage>
              </ul>
            </ServicesEntry>
            <ServicesEntry>
              <FormattedMessage id="indexServices3Title">
                {(txt) => <ServicesH4>{txt}</ServicesH4>}
              </FormattedMessage>
              <ul>
                <FormattedMessage id="indexServices3Item1">
                  {(txt) => <li>{txt}</li>}
                </FormattedMessage>
                <FormattedMessage id="indexServices3Item2">
                  {(txt) => <li>{txt}</li>}
                </FormattedMessage>
                <FormattedMessage id="indexServices3Item3">
                  {(txt) => <li>{txt}</li>}
                </FormattedMessage>
                <FormattedMessage id="indexServices3Item4">
                  {(txt) => <li>{txt}</li>}
                </FormattedMessage>
              </ul>
            </ServicesEntry>
            <ServicesEntry>
              <FormattedMessage id="indexServices4Title">
                {(txt) => <ServicesH4>{txt}</ServicesH4>}
              </FormattedMessage>
              <ul>
                <FormattedMessage id="indexServices4Item1">
                  {(txt) => <li>{txt}</li>}
                </FormattedMessage>
                <FormattedMessage id="indexServices4Item2">
                  {(txt) => <li>{txt}</li>}
                </FormattedMessage>
              </ul>
            </ServicesEntry>
            <ServicesEntry>
              <FormattedMessage id="indexServices5Title">
                {(txt) => <ServicesH4>{txt}</ServicesH4>}
              </FormattedMessage>
              <ul>
                <FormattedMessage id="indexServices5Item1">
                  {(txt) => <li>{txt}</li>}
                </FormattedMessage>
                <FormattedMessage id="indexServices5Item2">
                  {(txt) => <li>{txt}</li>}
                </FormattedMessage>
                <FormattedMessage id="indexServices5Item3">
                  {(txt) => <li>{txt}</li>}
                </FormattedMessage>
                <FormattedMessage id="indexServices5Item4">
                  {(txt) => <li>{txt}</li>}
                </FormattedMessage>
              </ul>
            </ServicesEntry>
          </RowContents>
        </Row>

        <Row>
          <RowContents>
            <StyledHR />
            <FormattedMessage id="caseStudiesHeader">
              {(txt) => <CaseStudiesTitle>{txt}</CaseStudiesTitle>}
            </FormattedMessage>
            <FormattedMessage id="caseStudiesDescription">
              {(txt) => <CaseStudiesCopy>{txt}</CaseStudiesCopy>}
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
          </RowContents>
        </Row>

        <Row>
          <RowContents>
            <StyledHR />
            <FormattedMessage id="dribbbleHeader">
              {(txt) => <DribbblePostsTitle>{txt}</DribbblePostsTitle>}
            </FormattedMessage>
            <FormattedMessage id="dribbbleSubhead">
              {(txt) => <DribbbleSubhead>{txt}</DribbbleSubhead>}
            </FormattedMessage>
            <DribbblePosts locale={locale} />
          </RowContents>
        </Row>
        <Row>
          <RowContents>
            <StyledHR />
            <ContactCard locale={locale} />
          </RowContents>
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
