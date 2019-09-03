import React from "react";
import PropTypes from "prop-types";
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
  ResumeWrapper,
  HeaderImageWrapper,
  ImageWrapper,
  HeaderInfoWrapper,
  AboutMeTitle,
  AboutCopy,
  StyledCopy,
  DoingNowItem,
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
      <Layout location={location} locale={locale} twinPostURL={twinPostURL}>
        <SEO
          locale={locale}
          twinPostURL={twinPostURL}
          currentPage="about"
          currentPath={location.pathname}
        />

        <Main>
          <Row as="header" col10>
            <HeaderInfoWrapper s="7">
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
            </HeaderInfoWrapper>
            <HeaderImageWrapper s="5">
              <ImageWrapper>
                <FormattedMessage id="about.the.blog.image.title">
                  {(txt) => (
                    <Img
                      alt={txt}
                      fluid={data.aboutImage.childImageSharp.fluid}
                    />
                  )}
                </FormattedMessage>
              </ImageWrapper>
              <ResumeWrapper>
                <SocialNav />
              </ResumeWrapper>
            </HeaderImageWrapper>
          </Row>
          <Row spaced col10>
            <Col>
              <FormattedMessage id="about.me.what.now.title">
                {(txt) => <h2>{txt}</h2>}
              </FormattedMessage>
            </Col>
            <Col s="5">
              <FormattedMessage id="about.me.what.now.copy.1">
                {(txt) => <StyledCopy>{txt}</StyledCopy>}
              </FormattedMessage>
              <FormattedMessage id="about.me.what.now.copy.2">
                {(txt) => <StyledCopy>{txt}</StyledCopy>}
              </FormattedMessage>
            </Col>
            <Col s="7">
              <DoingNowItem>
                <FormattedMessage id="about.me.what.now.skills">
                  {(txt) => <h4>{txt}</h4>}
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
              </DoingNowItem>
              <DoingNowItem>
                <FormattedMessage id="about.me.what.now.projects">
                  {(txt) => <h4>{txt}</h4>}
                </FormattedMessage>
                <ul>
                  <FormattedMessage id="about.me.what.now.projects.1">
                    {(txt) => <li>{txt}</li>}
                  </FormattedMessage>
                </ul>
              </DoingNowItem>
              <DoingNowItem>
                <FormattedMessage id="about.me.what.now.books">
                  {(txt) => <h4>{txt}</h4>}
                </FormattedMessage>
                <ul>
                  <FormattedMessage id="about.me.what.now.books.1">
                    {(txt) => <li>{txt}</li>}
                  </FormattedMessage>
                  <FormattedMessage id="about.me.what.now.books.2">
                    {(txt) => <li>{txt}</li>}
                  </FormattedMessage>
                </ul>
              </DoingNowItem>
            </Col>
          </Row>
          <ContactCard locale={locale} />
        </Main>
      </Layout>
      <ScrollToTop />
    </ErrorBoundary>
  );
};

AboutPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    aboutImage: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
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
