import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { graphql } from "gatsby";
import { FormattedMessage } from "react-intl";

import { theme, mediaMin, rem } from "../theme/globalStyles";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import SEO from "../components/SEO/SEO";
import { BulletList, BulletListItem, Copy } from "../components/Copy/Copy";
import ContactCard from "../components/ContactCard/ContactCard";
import CaseStudyCard from "../components/CaseStudyCard/CaseStudyCard";

const IndexHeader = styled.header`
  max-width: ${theme.contain.content};
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
    margin-bottom: ${rem(32)};
  `};
`;

const Subhead = styled(Copy)`
  font-size: ${theme.fontSizes.subheadS};
  line-height: ${theme.lineHeights.subheadS};
  letter-spacing: normal;

  ${mediaMin.l`
    font-size: ${theme.fontSizes.subhead};
    line-height: ${theme.lineHeights.subhead};

    max-width: ${rem(744)};
  `};
`;

const Stack = styled.section`
  margin-bottom: ${rem(48)};

  ${mediaMin.s`
    margin-bottom: ${rem(80)};
  `};

  ${mediaMin.m`
    margin-bottom: ${rem(144)};
  `};
`;

const AltStack = styled(Stack)`
  background-color: ${theme.colors.gray100};
  padding-top: ${rem(112)};
  padding-bottom: ${rem(72)};
`;

const StackContents = styled.div`
  max-width: ${theme.contain.content};
  margin: 0 auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
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

const ServicesItem = styled.section`
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

class Index extends Component {
  getCaseStudyList() {
    let caseStudyList = [];

    this.props.data.work.edges.forEach((edge) => {
      caseStudyList.push({
        slug: edge.node.fields.slug,
        tagsInCaseStudy: edge.node.frontmatter.tags,
        title: edge.node.frontmatter.title,
        date: edge.node.frontmatter.date,
        description: edge.node.frontmatter.description,
        image: edge.node.frontmatter.image.childImageSharp.fluid,
      });
    });

    return caseStudyList;
  }

  render() {
    const caseStudyList = this.getCaseStudyList();

    let locale = this.props.pageContext.locale;
    let changeLanguage = "";

    if (locale === "en") {
      changeLanguage = "/es";
    } else if (locale === "es") {
      changeLanguage = "/";
    }

    return (
      <Layout location={this.props.location} locale={locale}>
        <SEO />
        <SiteHeader locale={locale} />
        <Main role="main">
          <SEO />
          <IndexHeader>
            <FormattedMessage id="indexH1">
              {(txt) => <StyledH1>{txt}</StyledH1>}
            </FormattedMessage>
            <FormattedMessage id="indexSubhead">
              {(txt) => <Subhead>{txt}</Subhead>}
            </FormattedMessage>
            <Subhead />
          </IndexHeader>
          <AltStack>
            <StackContents>
              <FormattedMessage id="indexServicesHeading">
                {(txt) => <ServicesH2>{txt}</ServicesH2>}
              </FormattedMessage>
              <ServicesItem>
                <FormattedMessage id="indexServices1">
                  {(txt) => <ServicesH4>{txt}</ServicesH4>}
                </FormattedMessage>
                <BulletList>
                  <FormattedMessage id="indexServicesList01">
                    {(txt) => <BulletListItem>{txt}</BulletListItem>}
                  </FormattedMessage>
                  <FormattedMessage id="indexServicesList02">
                    {(txt) => <BulletListItem>{txt}</BulletListItem>}
                  </FormattedMessage>
                  <FormattedMessage id="indexServicesList03">
                    {(txt) => <BulletListItem>{txt}</BulletListItem>}
                  </FormattedMessage>
                  <FormattedMessage id="indexServicesList04">
                    {(txt) => <BulletListItem>{txt}</BulletListItem>}
                  </FormattedMessage>
                </BulletList>
              </ServicesItem>
              <ServicesItem>
                <ServicesH4>UI Design</ServicesH4>
                <BulletList>
                  <BulletListItem>Competitor Research</BulletListItem>
                  <BulletListItem>Wireframing</BulletListItem>
                  <BulletListItem>Lo–Fi Prototypes</BulletListItem>
                  <BulletListItem>Hi–Fi Prototypes</BulletListItem>
                </BulletList>
              </ServicesItem>
              <ServicesItem>
                <ServicesH4>Front&ndash;End Development</ServicesH4>
                <BulletList>
                  <BulletListItem>Competitor Research</BulletListItem>
                  <BulletListItem>Wireframing</BulletListItem>
                  <BulletListItem>Lo–Fi Prototypes</BulletListItem>
                  <BulletListItem>Hi–Fi Prototypes</BulletListItem>
                </BulletList>
              </ServicesItem>
            </StackContents>
          </AltStack>
          <Stack>
            <StackContents>
              <CaseStudiesH2>Case Studies</CaseStudiesH2>
              <CaseStudiesCopy>
                Case studies showcasing my discovery, research, prototyping and
                designing iterative process.
              </CaseStudiesCopy>
              {caseStudyList.map((caseStudyCard) => (
                <CaseStudyCard
                  key={caseStudyCard.title}
                  slug={caseStudyCard.slug}
                  tagsInCaseStudy={caseStudyCard.tagsInCaseStudy}
                  title={caseStudyCard.title}
                  date={caseStudyCard.date}
                  description={caseStudyCard.description}
                  image={caseStudyCard.image}
                />
              ))}
            </StackContents>
          </Stack>
        </Main>
        <Stack>
          <ContactCard />
        </Stack>
        <SiteFooter gray changeLanguage={changeLanguage} locale={locale} />
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query WorkEntryByLocale($locale: String!) {
    work: allMarkdownRemark(
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
            description
            date(formatString: "DD MMMM YYYY")
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
