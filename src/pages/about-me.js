import React from "react";
import { shape, object, string } from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { FormattedMessage } from "react-intl";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import Main from "../components/Main/Main";
import SocialNav from "../components/SocialNav/SocialNav";
import ContactCard from "../components/ContactCard/ContactCard";
import { Col, Row } from "../components/Grid/Grid";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { localePaths } from "../i18n/i18n";

import {
  HeaderRow,
  HeaderInfoCol,
  ResumeWrapper,
  AboutMeTitle,
  AboutCopy,
  StyledCopy,
  AltRowBackground,
  DoingNowTitle,
  DoingNowProjectsRow,
  DoingNowSubTitle,
} from "../styles/about-me.styles";

const AboutPage = ({ pageContext, location, data }) => {
  let locale = pageContext.locale;
  let twinPostURL = "";

  if (locale === "en") {
    twinPostURL = localePaths["es"].about;
  } else if (locale === "es") {
    twinPostURL = localePaths["en"].about;
  }

  return (
    <ErrorBoundary>
      <Layout
        location={location}
        locale={locale}
        twinPostURL={twinPostURL}
        expandHeaderAndFooter
      >
        <SEO
          locale={locale}
          twinPostURL={twinPostURL}
          currentPage="about"
          currentPath={location.pathname}
        />

        <Main>
          <HeaderRow as="header" col12 mb>
            <Col s={4}>
              <FormattedMessage id="about.the.blog.image.title">
                {(txt) => (
                  <Img
                    alt={txt}
                    fluid={data.aboutImage.childImageSharp.fluid}
                  />
                )}
              </FormattedMessage>
              <ResumeWrapper>
                <SocialNav />
              </ResumeWrapper>
            </Col>
            <HeaderInfoCol s={8}>
              <FormattedMessage id="about.me.title">
                {(txt) => <AboutMeTitle>{txt}</AboutMeTitle>}
              </FormattedMessage>
              <FormattedMessage id="about.me.copy.1">
                {(txt) => <AboutCopy>{txt}</AboutCopy>}
              </FormattedMessage>
              <FormattedMessage id="about.me.copy.2">
                {(txt) => <AboutCopy>{txt}</AboutCopy>}
              </FormattedMessage>
              <FormattedMessage id="about.me.copy.3">
                {(txt) => <AboutCopy>{txt}</AboutCopy>}
              </FormattedMessage>
            </HeaderInfoCol>
          </HeaderRow>
          <AltRowBackground padded>
            <Row col12 as="div">
              <Col xxl={6}>
                <FormattedMessage id="about.me.what.now.title">
                  {(txt) => <DoingNowTitle>{txt}</DoingNowTitle>}
                </FormattedMessage>
                <FormattedMessage id="about.me.what.now.copy.1">
                  {(txt) => <StyledCopy>{txt}</StyledCopy>}
                </FormattedMessage>
                <FormattedMessage id="about.me.what.now.copy.2">
                  {(txt) => <StyledCopy>{txt}</StyledCopy>}
                </FormattedMessage>
              </Col>
            </Row>
            <DoingNowProjectsRow col12 as="div">
              <Col l={6} xl={4}>
                <FormattedMessage id="about.me.what.now.skills">
                  {(txt) => <DoingNowSubTitle>{txt}</DoingNowSubTitle>}
                </FormattedMessage>
                <ul>
                  <FormattedMessage id="about.me.what.now.skills.1">
                    {(txt) => <li>{txt}</li>}
                  </FormattedMessage>
                  <FormattedMessage id="about.me.what.now.skills.2">
                    {(txt) => <li>{txt}</li>}
                  </FormattedMessage>
                  <FormattedMessage id="about.me.what.now.skills.3">
                    {(txt) => <li>{txt}</li>}
                  </FormattedMessage>
                </ul>
              </Col>
              <Col l={6} xl={4}>
                <FormattedMessage id="about.me.what.now.projects">
                  {(txt) => <DoingNowSubTitle>{txt}</DoingNowSubTitle>}
                </FormattedMessage>
                <ul>
                  <FormattedMessage id="about.me.what.now.projects.1">
                    {(txt) => <li>{txt}</li>}
                  </FormattedMessage>
                </ul>
              </Col>
              <Col l={6} xl={4}>
                <FormattedMessage id="about.me.what.now.books">
                  {(txt) => <DoingNowSubTitle>{txt}</DoingNowSubTitle>}
                </FormattedMessage>
                <ul>
                  <FormattedMessage id="about.me.what.now.books.1">
                    {(txt) => <li>{txt}</li>}
                  </FormattedMessage>
                  <FormattedMessage id="about.me.what.now.books.2">
                    {(txt) => <li>{txt}</li>}
                  </FormattedMessage>
                </ul>
              </Col>
            </DoingNowProjectsRow>
          </AltRowBackground>
        </Main>
        <ContactCard locale={locale} />
      </Layout>
      <ScrollToTop />
    </ErrorBoundary>
  );
};

AboutPage.propTypes = {
  pageContext: shape({
    locale: string.isRequired,
  }).isRequired,
  data: shape({
    aboutImage: object.isRequired,
  }).isRequired,
  location: shape({
    pathname: string.isRequired,
    href: string.isRequired,
  }).isRequired,
};

export default AboutPage;

export const query = graphql`
  query ABOUT_ME_IMAGE_QUERY {
    aboutImage: file(relativePath: { regex: "/danilucaci_profile_image/" }) {
      childImageSharp {
        fluid(maxWidth: 560, maxHeight: 640, cropFocus: NORTH, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
