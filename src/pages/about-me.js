import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { FormattedMessage } from "react-intl";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import SocialNav from "../components/SocialNav/SocialNav";
import ContactCard from "../components/ContactCard/ContactCard";
import enResume from "../../src/resume/marian_daniel_lucaci_resume.pdf";
import esResume from "../../src/resume/marian_daniel_lucaci_curriculum.pdf";
import { GridCol } from "../../src/components/Grid/Grid";

import { localePaths } from "../i18n/i18n";

import {
  Header,
  Row,
  ResumeWrapper,
  StyledSocialNav,
  ResumeButton,
  HeaderImageWrapper,
  ImageWrapper,
  HeaderInfoWrapper,
  AboutMeTitle,
  AboutCopy,
  StyledCopy,
  DoingNowRow,
  DoingNowItem,
} from "../styles/about-me.styles";

const AboutPage = (props) => {
  let locale = props.pageContext.locale;
  let twinPostURL = "";

  if (locale === "en") {
    twinPostURL = localePaths["es"].about;
  } else if (locale === "es") {
    twinPostURL = localePaths["en"].about;
  }

  return (
    <Layout location={props.location} locale={locale}>
      <SEO
        locale={locale}
        twinPostURL={twinPostURL}
        currentPage="about"
        currentPath={props.location.pathname}
      />
      <SiteHeader twinPostURL={twinPostURL} locale={locale} currentPath={props.location.pathname} />
      <Main role="main" id="main">
        <Header>
          <HeaderInfoWrapper col="7">
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
          <HeaderImageWrapper col="5">
            <ImageWrapper>
              <FormattedMessage id="about.the.blog.image.title">
                {(txt) => <Img alt={txt} fluid={props.data.aboutImage.childImageSharp.fluid} />}
              </FormattedMessage>
            </ImageWrapper>
            <ResumeWrapper>
              <StyledSocialNav>
                <SocialNav />
              </StyledSocialNav>
              <FormattedMessage id="resume.button">
                {(txt) => (
                  <ResumeButton
                    href={locale === "en" ? enResume : esResume}
                    alt="Open Dani Lucaci’s Resume"
                    target="_blank"
                  >
                    {txt}
                  </ResumeButton>
                )}
              </FormattedMessage>
            </ResumeWrapper>
          </HeaderImageWrapper>
        </Header>
        <DoingNowRow spaced>
          <GridCol>
            <FormattedMessage id="about.me.what.now.title">
              {(txt) => <h2>{txt}</h2>}
            </FormattedMessage>
          </GridCol>
          <GridCol col="5">
            <FormattedMessage id="about.me.what.now.copy.1">
              {(txt) => <StyledCopy>{txt}</StyledCopy>}
            </FormattedMessage>
            <FormattedMessage id="about.me.what.now.copy.2">
              {(txt) => <StyledCopy>{txt}</StyledCopy>}
            </FormattedMessage>
          </GridCol>
          <GridCol col="7">
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
          </GridCol>
        </DoingNowRow>
        <ContactCard locale={locale} />
      </Main>
      <SiteFooter locale={locale} />
    </Layout>
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
        fluid(maxWidth: 480, maxHeight: 560, cropFocus: NORTH, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
