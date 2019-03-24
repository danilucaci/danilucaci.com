import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql } from "gatsby";
import { FormattedMessage } from "react-intl";

import { theme, mediaMin, rem } from "../theme/globalStyles";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import SEO from "../components/SEO/SEO";
import { Copy } from "../components/Copy/Copy";
import ContactCard from "../components/ContactCard/ContactCard";
import CaseStudyCard from "../components/CaseStudyCard/CaseStudyCard";
import DribbblePosts from "../components/DribbblePosts/DribbblePosts";
import { HR } from "../components/HR/HR";
import { localePaths } from "../i18n/i18n";

const IndexHeader = styled.header`
  max-width: ${theme.contain.wrapper.col10};
  margin: 0 auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};

  padding-bottom: ${rem(48)};

  ${mediaMin.xs`
    padding-top: ${rem(24)};
    padding-bottom: ${rem(64)};
  `};

  ${mediaMin.m`
    padding-top: ${rem(56)};
    padding-bottom: ${rem(144)};
  `};

  ${mediaMin.xl`
    padding-top: ${rem(48)};
  `};
`;

const StyledH1 = styled.h1`
  margin-bottom: ${rem(16)};

  ${mediaMin.m`
    max-width: ${rem(648)};
  `};
`;

const Subhead = styled(Copy)`
  font-size: ${theme.fontSizes.subheadS};
  line-height: ${theme.lineHeights.subheadS};

  ${mediaMin.l`
    font-size: ${theme.fontSizes.subhead};
    line-height: ${theme.lineHeights.subhead};
    max-width: ${rem(744)};
  `};
`;

const Row = styled.section`
  margin: ${theme.spacing.row.s} 0;

  ${mediaMin.s`
    margin: ${theme.spacing.row.m} 0;
  `};

  ${mediaMin.m`
    margin: ${theme.spacing.row.xl} 0;
  `};
`;

const AltRow = styled.section`
  background-color: ${theme.colors.sectionBackground};

  padding-top: ${theme.spacing.row.s};
  padding-bottom: ${theme.spacing.row.s};

  ${mediaMin.s`
    padding-top: ${theme.spacing.row.m};
    padding-bottom: ${theme.spacing.row.m};
  `};

  ${mediaMin.m`
    padding-top: ${theme.spacing.row.xl};
    padding-bottom: ${theme.spacing.row.xl};
  `};
`;

const RowContents = styled.div`
  max-width: ${theme.contain.wrapper.col10};
  margin: 0 auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};
`;

const StyledHR = styled(HR)`
  margin-bottom: ${rem(32)};

  ${mediaMin.m`
    margin-bottom: ${rem(56)};
  `};
`;

const ServicesH2 = styled.h2`
  margin-bottom: ${rem(16)};
  font-size: ${theme.fontSizes.h1s};
  line-height: ${theme.lineHeights.h1s};

  ${mediaMin.m`
    margin-bottom: ${rem(24)};
    font-size: ${theme.fontSizes.h2};
    line-height: ${theme.lineHeights.h2};
  `};

  ${mediaMin.l`
    margin-bottom: ${rem(32)};
  `};
`;

const ServicesH4 = styled.h4`
  ${mediaMin.s`
    margin-bottom: ${rem(8)};
  `};
`;

const ServicesEntry = styled.div`
  display: inline-block;
  vertical-align: top;

  width: 100%;
  height: 100%;
  margin-bottom: ${rem(56)};

  @media screen and (min-width: ${theme.breakpoints.xs}) {
    width: calc(50% - ${theme.gutters.m});
    margin-right: ${theme.gutters.m};

    &:last-of-type() {
      margin-right: 0;
    }
  }

  @media screen and (min-width: ${theme.breakpoints.l}) {
    width: calc(33% - ${theme.gutters.m});
    margin-right: ${theme.gutters.m};

    &:last-of-type() {
      margin-right: 0;
    }
  }
`;

const CaseStudiesH2 = styled.h2`
  margin-bottom: ${rem(16)};
  font-size: ${theme.fontSizes.h2s};
  line-height: ${theme.lineHeights.h2s};

  ${mediaMin.m`
    margin-bottom: 0;
    font-size: ${theme.fontSizes.h2};
    line-height: ${theme.lineHeights.h2};
  `};
`;

const CaseStudiesCopy = styled(Copy)`
  margin-bottom: ${rem(24)};

  ${mediaMin.m`
    margin-bottom: ${rem(32)};
  `};
`;

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
          <FormattedMessage id="indexH1">{(txt) => <StyledH1>{txt}</StyledH1>}</FormattedMessage>
          <FormattedMessage id="indexSubhead">{(txt) => <Subhead>{txt}</Subhead>}</FormattedMessage>
          <Subhead />
        </IndexHeader>
        <AltRow>
          <RowContents>
            <FormattedMessage id="indexServicesHeading">
              {(txt) => <ServicesH2>{txt}</ServicesH2>}
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
          </RowContents>
        </AltRow>
        <Row>
          <DribbblePosts locale={locale} />
        </Row>
        <Row>
          <RowContents>
            <StyledHR />
            <FormattedMessage id="caseStudiesHeader">
              {(txt) => <CaseStudiesH2>{txt}</CaseStudiesH2>}
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
