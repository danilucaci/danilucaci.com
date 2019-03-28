import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import SEO from "../components/SEO/SEO";
import { theme, mediaMin, rem } from "../theme/globalStyles";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import SocialNav from "../components/SocialNav/SocialNav";
import ContactCard from "../components/ContactCard/ContactCard";
import { Copy } from "../components/Copy/Copy";

import { localePaths } from "../i18n/i18n";

const AboutMeWrapper = styled.section``;

const HeaderInfo = styled.header`
  display: block;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${theme.contain.wrapper.col10};

  padding-right: ${theme.gutters.s};
  padding-left: ${theme.gutters.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(${theme.gutters.s}, env(safe-area-inset-left));
      padding-right: max(${theme.gutters.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.s`
    padding-right: ${theme.gutters.m};
    padding-left: ${theme.gutters.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.gutters.m}, env(safe-area-inset-left));
        padding-right: max(${theme.gutters.m}, env(safe-area-inset-right));
      }
    }
  `};

  margin-left: auto;
  margin-right: auto;

  ${mediaMin.m`
    flex-direction: row; 
    justify-content: space-between;
    margin-top: ${rem(24)};
  `};

  /* Mobile in ladscape */
  @media screen and (min-device-width: ${rem(280)}) and (min-device-height: ${rem(480)}) and (orientation: landscape) {
    margin-top: 0;
  }
`;

const StyledSocialNav = styled.div``;

const ImageWrapper = styled.div`
  background: ${theme.colors.sectionBackground};
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  margin-top: ${theme.gutters.s};
  order: 2;

  ${mediaMin.m`
    order: 1;
    height: 100%;
    width: calc(((100% / 10) * 4) - ${rem(16)});
    border-radius: 50%;
  `};
`;

const InfoWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  order: 1;

  ${mediaMin.m`
    order: 2;
    display: inline-flex;
    flex-direction: column;
    margin-left: ${rem(16)};
    width: calc(((100% / 10) * 6) - ${rem(16)});
  `};
`;

const AboutMeTitle = styled.h1`
  color: ${theme.colors.dark900};
  font-weight: 700;
  font-style: normal;
  font-family: ${theme.fonts.header};
  font-size: ${theme.fontSizes.h1s} !important;

  ${mediaMin.xs`
    font-size: ${theme.fontSizes.h2} !important;
  `}

  line-height: ${theme.lineHeights.h1s} !important;
  margin-bottom: ${rem(16)};

  ${mediaMin.xs`
    line-height: ${theme.lineHeights.h2} !important;
  `}

  ${mediaMin.s`
    margin-top: ${rem(24)};
  `}
`;

const AboutCopy = styled(Copy)`
  margin-bottom: ${rem(16)};
`;

const StyledCopy = styled(Copy)`
  margin-bottom: ${rem(32)};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const DoingNowTitle = styled.h2`
  margin-bottom: ${rem(32)};
`;

const Col1 = styled.div`
  margin-bottom: ${rem(48)};

  ${mediaMin.l`
    display: inline-block;
    vertical-align: top;
    margin-bottom: 0;
    margin-right: ${rem(32)};
    width: calc(((100% / 10) * 4) - ${rem(32)});
  `};
`;

const Col2 = styled.div`
  ${mediaMin.l`
    display: inline-block;
    vertical-align: top;
    margin-left: ${rem(12)};
    width: calc(((100% / 10) * 6) - ${rem(12)});
  `};
`;

const MoreAboutMeWrapper = styled.section`
  padding-top: ${theme.spacing.components.s};
  padding-bottom: ${theme.spacing.components.s};

  ${mediaMin.s`
    padding-top: ${theme.spacing.components.m};
    padding-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.m`
    padding-top: ${theme.spacing.components.xl};
    padding-bottom: ${theme.spacing.components.xl};
  `};
  /* Mobile in ladscape */
  @media screen and (min-device-width: ${rem(280)}) and (min-device-height: ${rem(480)}) and (orientation: landscape) {
    padding-top: ${rem(64)};
    padding-bottom: ${rem(64)};
  }
`;

const MoreAboutMeInner = styled.div`
  max-width: ${theme.contain.wrapper.col10};
  margin: 0 auto;

  padding-right: ${theme.gutters.s};
  padding-left: ${theme.gutters.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(${theme.gutters.s}, env(safe-area-inset-left));
      padding-right: max(${theme.gutters.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.s`
    padding-right: ${theme.gutters.m};
    padding-left: ${theme.gutters.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.gutters.m}, env(safe-area-inset-left));
        padding-right: max(${theme.gutters.m}, env(safe-area-inset-right));
      }
    }
  `};
`;

const AboutMeItem = styled.div`
  display: inline-block;

  ${mediaMin.s`  
    width: calc(50% - ${rem(24)});
    vertical-align: top;
  `};

  margin-right: ${rem(24)};
  margin-bottom: ${rem(32)};

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
  }

  & h4 {
    margin-bottom: ${rem(8)};
  }
`;

const ContactWrapper = styled.div`
  margin-top: ${theme.spacing.components.s};
  margin-bottom: ${theme.spacing.components.s};

  padding-right: ${theme.gutters.s};
  padding-left: ${theme.gutters.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(${theme.gutters.s}, env(safe-area-inset-left));
      padding-right: max(${theme.gutters.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.s`
    margin-top: ${theme.spacing.components.m};
    margin-bottom: ${theme.spacing.components.m};
    padding-right: ${theme.gutters.m};
    padding-left: ${theme.gutters.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.gutters.m}, env(safe-area-inset-left));
        padding-right: max(${theme.gutters.m}, env(safe-area-inset-right));
      }
    }
  `};

  ${mediaMin.m`
    margin-top: ${theme.spacing.components.xl};
    margin-bottom: ${theme.spacing.components.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-device-width: ${rem(280)}) and (min-device-height: ${rem(480)}) and (orientation: landscape) {
    margin-top: ${rem(64)};
    margin-bottom: ${rem(64)};
  }
`;

const AltRow = styled.section`
  background-color: ${theme.colors.gray100};

  padding-top: ${theme.spacing.components.s};
  padding-bottom: ${theme.spacing.components.s};

  ${mediaMin.s`
    padding-top: ${theme.spacing.components.m};
    padding-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.m`
    padding-top: ${theme.spacing.components.xl};
    padding-bottom: ${theme.spacing.components.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-device-width: ${rem(280)}) and (min-device-height: ${rem(480)}) and (orientation: landscape) {
    padding-top: ${rem(64)};
    padding-bottom: ${rem(64)};
  }
`;

const RowContents = styled.div`
  max-width: ${theme.contain.wrapper.col10};
  margin: 0 auto;

  padding-right: ${theme.gutters.s};
  padding-left: ${theme.gutters.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(${theme.gutters.s}, env(safe-area-inset-left));
      padding-right: max(${theme.gutters.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.s`
    padding-right: ${theme.gutters.m};
    padding-left: ${theme.gutters.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.gutters.m}, env(safe-area-inset-left));
        padding-right: max(${theme.gutters.m}, env(safe-area-inset-right));
      }
    }
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
            <ImageWrapper>
              <FormattedMessage id="aboutTheBlogImageTitle">
                {(txt) => <Img alt={txt} fluid={props.data.aboutImage.childImageSharp.fluid} />}
              </FormattedMessage>
            </ImageWrapper>

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
              <StyledSocialNav>
                <SocialNav />
              </StyledSocialNav>
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
          </AltRow>
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
  query {
    aboutImage: file(relativePath: { regex: "/danilucaci_profile_image/" }) {
      childImageSharp {
        fluid(maxWidth: 480, maxHeight: 560, cropFocus: NORTH, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
