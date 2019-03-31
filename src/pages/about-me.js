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

import { localePaths } from "../i18n/i18n";

import {
  AboutMeWrapper,
  HeaderInfo,
  ResumeWrapper,
  StyledSocialNav,
  ResumeButton,
  LeftHeaderWrapper,
  ImageWrapper,
  InfoWrapper,
  AboutMeTitle,
  AboutCopy,
  StyledCopy,
  DoingNowTitle,
  Col1,
  Col2,
  MoreAboutMeWrapper,
  MoreAboutMeInner,
  AboutMeItem,
  ContactWrapper,
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
        <AboutMeWrapper>
          <HeaderInfo>
            <LeftHeaderWrapper>
              <ImageWrapper>
                <FormattedMessage id="aboutTheBlogImageTitle">
                  {(txt) => <Img alt={txt} fluid={props.data.aboutImage.childImageSharp.fluid} />}
                </FormattedMessage>
              </ImageWrapper>
              <ResumeWrapper>
                <StyledSocialNav>
                  <SocialNav />
                </StyledSocialNav>
                <FormattedMessage id="resumeButton">
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
            </LeftHeaderWrapper>

            <InfoWrapper>
              <FormattedMessage id="aboutMeTitle">
                {(txt) => <AboutMeTitle>{txt}</AboutMeTitle>}
              </FormattedMessage>
              <FormattedMessage id="aboutMeCopy1">
                {(txt) => <AboutCopy>{txt}</AboutCopy>}
              </FormattedMessage>
              <FormattedMessage id="aboutMeCopy2">
                {(txt) => <AboutCopy>{txt}</AboutCopy>}
              </FormattedMessage>
              <FormattedMessage id="aboutMeCopy3">
                {(txt) => <AboutCopy>{txt}</AboutCopy>}
              </FormattedMessage>
            </InfoWrapper>
          </HeaderInfo>
          <MoreAboutMeWrapper>
            <MoreAboutMeInner>
              <FormattedMessage id="aboutMeWhatNowTitle">
                {(txt) => <DoingNowTitle>{txt}</DoingNowTitle>}
              </FormattedMessage>
              <Col1>
                <FormattedMessage id="aboutMeWhatNowCopy1">
                  {(txt) => <StyledCopy>{txt}</StyledCopy>}
                </FormattedMessage>
                <FormattedMessage id="aboutMeWhatNowCopy2">
                  {(txt) => <StyledCopy>{txt}</StyledCopy>}
                </FormattedMessage>
              </Col1>
              <Col2>
                <AboutMeItem>
                  <FormattedMessage id="aboutMeWhatNowSkills">
                    {(txt) => <h4>{txt}</h4>}
                  </FormattedMessage>
                  <ul>
                    <FormattedMessage id="aboutMeWhatNowSkills1">
                      {(txt) => <li>{txt}</li>}
                    </FormattedMessage>
                    <FormattedMessage id="aboutMeWhatNowSkills2">
                      {(txt) => <li>{txt}</li>}
                    </FormattedMessage>
                    <FormattedMessage id="aboutMeWhatNowSkills3">
                      {(txt) => <li>{txt}</li>}
                    </FormattedMessage>
                  </ul>
                </AboutMeItem>
                <AboutMeItem>
                  <FormattedMessage id="aboutMeWhatNowProjects">
                    {(txt) => <h4>{txt}</h4>}
                  </FormattedMessage>
                  <ul>
                    <FormattedMessage id="aboutMeWhatNowProjects1">
                      {(txt) => <li>{txt}</li>}
                    </FormattedMessage>
                  </ul>
                </AboutMeItem>
                <AboutMeItem>
                  <FormattedMessage id="aboutMeWhatNowBooks">
                    {(txt) => <h4>{txt}</h4>}
                  </FormattedMessage>
                  <ul>
                    <FormattedMessage id="aboutMeWhatNowBooks1">
                      {(txt) => <li>{txt}</li>}
                    </FormattedMessage>
                    <FormattedMessage id="aboutMeWhatNowBooks2">
                      {(txt) => <li>{txt}</li>}
                    </FormattedMessage>
                  </ul>
                </AboutMeItem>
              </Col2>
            </MoreAboutMeInner>
          </MoreAboutMeWrapper>
        </AboutMeWrapper>
      </Main>
      <ContactWrapper>
        <ContactCard locale={locale} />
      </ContactWrapper>
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
