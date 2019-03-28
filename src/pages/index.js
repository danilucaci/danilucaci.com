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
  padding-top: ${rem(16)};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};

  ${mediaMin.xs`
    padding-top: ${rem(32)};
  `};
`;

const IndexTitle = styled.h2`
  margin-bottom: ${rem(8)};
  margin-bottom: ${rem(8)};

  font-size: ${theme.fontSizes.h2s};
  line-height: ${theme.lineHeights.h2s};

  ${mediaMin.m`
    font-size: ${theme.fontSizes.h2};
    line-height: ${theme.lineHeights.h2};
  `};
`;

const Subhead = styled(Copy)`
  color: ${theme.colors.dark700};
  font-size: ${theme.fontSizes.subheadS};
  line-height: ${theme.lineHeights.subheadS};

  ${mediaMin.s`
    font-size: ${theme.fontSizes.subheadCompact};
    line-height: ${theme.lineHeights.subheadCompact};
  `};
`;

const Name = styled(Copy)`
  color: ${theme.colors.dark700};
  text-transform: uppercase;
  font-size: ${rem(18)};
  line-height: ${rem(18)};
  letter-spacing: ${theme.letterSpacing.sectionHeaderS};
  font-weight: 700;

  margin-bottom: ${rem(8)};

  .fonts-loaded & {
    font-family: ${theme.fonts.header};
  }

  ${mediaMin.s`
    line-height: ${theme.lineHeights.sectionHeaderXL};
    letter-spacing: ${theme.letterSpacing.sectionHeaderXL};
  `};
`;

const Row = styled.section`
  margin: ${theme.spacing.row.s} 0;

  ${mediaMin.s`
    margin: ${theme.spacing.row.m} 0;
  `};

  ${mediaMin.xl`
    margin: ${theme.spacing.row.xl} 0;
  `};
`;

const AltRow = styled.section`
  background-color: ${theme.colors.gray100};

  padding-top: ${theme.spacing.row.s};
  padding-bottom: ${theme.spacing.row.s};

  ${mediaMin.s`
    padding-top: ${theme.spacing.row.m};
    padding-bottom: ${theme.spacing.row.m};
  `};

  ${mediaMin.xl`
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
    margin-bottom: ${rem(64)};
  `};
`;

const ServicesTitle = styled.h3`
  font-size: ${theme.fontSizes.h3s};
  line-height: ${theme.lineHeights.h3s};

  ${mediaMin.m`
    margin-bottom: ${rem(24)};
    font-size: ${theme.fontSizes.h3};
    line-height: ${theme.lineHeights.h3};
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
  margin-top: ${rem(32)};

  ${mediaMin.xs`  
    width: calc(50% - ${theme.gutters.m});
    margin-right: ${theme.gutters.m};
  `};

  ${mediaMin.l`
    width: calc(33% - ${theme.gutters.m});
    margin-right: ${theme.gutters.m};
  `};
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
              {(txt) => <ServicesTitle as="h2">{txt}</ServicesTitle>}
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
