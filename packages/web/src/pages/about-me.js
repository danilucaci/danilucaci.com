import React, { useContext } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { useIntl } from "react-intl";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Main from "../components/Main";
import SocialNav from "../components/SocialNav";
import ContactCard from "../components/ContactCard";
import { Col, Row } from "../components/Grid";
import ErrorBoundary from "../components/ErrorBoundary";
import ScrollToTop from "../components/ScrollToTop";
import { localePaths } from "../i18n";
import LocaleContext from "../i18n/LocaleContext";

import {
  HeaderRow,
  HeaderInfoCol,
  AboutMeTitle,
  AboutCopy,
  StyledCopy,
  AltRowBackground,
  MyWorkTitle,
  SkillsTitle,
  SkillsSubtitle,
  SkilsCol,
} from "../styles/about-me.styles";

function AboutPage({ location, data }) {
  const { locale } = useContext(LocaleContext);
  const intl = useIntl();

  return (
    <ErrorBoundary>
      <Layout
        location={location}
        expandHeaderAndFooter
        twinPostURL={
          locale === "en" ? localePaths["es"].about : localePaths["en"].about
        }
      >
        <SEO
          currentPage="about"
          currentPath={location.pathname}
          twinPostURL={
            locale === "en" ? localePaths["es"].about : localePaths["en"].about
          }
        />
        <Main>
          <HeaderRow as="header" col12 mb>
            <Col xl={5}>
              <GatsbyImage
                image={data.aboutImage.childImageSharp.gatsbyImageData}
                alt={intl.formatMessage({ id: "about.me.image.alt" })}
              />
            </Col>
            <HeaderInfoCol xl={7}>
              <AboutMeTitle>
                {intl.formatMessage({ id: "about.me.title" })}
              </AboutMeTitle>
              <AboutCopy>
                {intl.formatMessage({ id: "about.me.subtitle" })}
              </AboutCopy>
              <SocialNav />
            </HeaderInfoCol>
          </HeaderRow>
          <AltRowBackground padded>
            <Row col12 pb as="div">
              <Col xxl={5}>
                <MyWorkTitle>
                  {intl.formatMessage({ id: "about.me.what.i.do.title" })}
                </MyWorkTitle>
              </Col>
              <Col xxl={7}>
                <StyledCopy>
                  {intl.formatMessage({ id: "about.me.what.i.do.copy.1" })}
                </StyledCopy>
                <StyledCopy>
                  {intl.formatMessage({ id: "about.me.what.i.do.copy.2" })}
                </StyledCopy>
                <StyledCopy>
                  {intl.formatMessage({ id: "about.me.what.i.do.copy.3" })}
                </StyledCopy>
                <StyledCopy>
                  {intl.formatMessage({ id: "about.me.what.i.do.copy.4" })}
                </StyledCopy>
              </Col>
            </Row>
            <Row col12 as="div">
              <Col col={12}>
                <SkillsTitle>
                  {intl.formatMessage({ id: "about.me.skills.title" })}
                </SkillsTitle>
              </Col>
              <SkilsCol xxs={6} s={4} xl={3}>
                <SkillsSubtitle>
                  {intl.formatMessage({ id: "about.me.skills.1.subtitle" })}
                </SkillsSubtitle>
                <ul>
                  <li>
                    {intl.formatMessage({ id: "about.me.skills.1.item.1" })}
                  </li>
                  <li>
                    {intl.formatMessage({ id: "about.me.skills.1.item.2" })}
                  </li>
                  <li>
                    {intl.formatMessage({ id: "about.me.skills.1.item.3" })}
                  </li>
                  <li>
                    {intl.formatMessage({ id: "about.me.skills.1.item.4" })}
                  </li>
                  <li>
                    {intl.formatMessage({ id: "about.me.skills.1.item.5" })}
                  </li>
                  <li>
                    {intl.formatMessage({ id: "about.me.skills.1.item.6" })}
                  </li>
                </ul>
              </SkilsCol>
              <SkilsCol xxs={6} s={4} xl={3}>
                <SkillsSubtitle>
                  {intl.formatMessage({ id: "about.me.skills.2.subtitle" })}
                </SkillsSubtitle>
                <ul>
                  <li>
                    {intl.formatMessage({ id: "about.me.skills.2.item.1" })}
                  </li>
                  <li>
                    {intl.formatMessage({ id: "about.me.skills.2.item.2" })}
                  </li>
                  <li>
                    {intl.formatMessage({ id: "about.me.skills.2.item.3" })}
                  </li>
                  <li>
                    {intl.formatMessage({ id: "about.me.skills.2.item.4" })}
                  </li>
                </ul>
              </SkilsCol>
              <SkilsCol xxs={6} s={4} xl={3}>
                <SkillsSubtitle>
                  {intl.formatMessage({ id: "about.me.skills.3.subtitle" })}
                </SkillsSubtitle>
                <ul>
                  <li>
                    {intl.formatMessage({ id: "about.me.skills.3.item.1" })}
                  </li>
                  <li>
                    {intl.formatMessage({ id: "about.me.skills.3.item.2" })}
                  </li>
                  <li>
                    {intl.formatMessage({ id: "about.me.skills.3.item.3" })}
                  </li>
                </ul>
              </SkilsCol>
              <SkilsCol xxs={6} s={4} xl={3}>
                <SkillsSubtitle>
                  {intl.formatMessage({ id: "about.me.skills.4.subtitle" })}
                </SkillsSubtitle>
                <ul>
                  <li>
                    {intl.formatMessage({ id: "about.me.skills.4.item.1" })}
                  </li>
                  <li>
                    {intl.formatMessage({ id: "about.me.skills.4.item.2" })}
                  </li>
                  <li>
                    {intl.formatMessage({ id: "about.me.skills.4.item.3" })}
                  </li>
                  <li>
                    {intl.formatMessage({ id: "about.me.skills.4.item.4" })}
                  </li>
                </ul>
              </SkilsCol>
            </Row>
          </AltRowBackground>
        </Main>
        <ContactCard />
      </Layout>
      <ScrollToTop />
    </ErrorBoundary>
  );
}

export default AboutPage;

export const query = graphql`
  query ABOUT_ME_IMAGE_QUERY {
    aboutImage: file(relativePath: { regex: "/danilucaci_profile_image/" }) {
      childImageSharp {
        gatsbyImageData(
          width: 720
          height: 540
          quality: 70
          transformOptions: { cropFocus: NORTH }
          layout: CONSTRAINED
        )
      }
    }
  }
`;
