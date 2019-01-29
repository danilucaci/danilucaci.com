import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import SEO from "../components/SEO/SEO";
import { theme, mediaMin, rem } from "../theme/globalStyles";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import config from "../../data/SiteConfig";
import SocialNav from "../components/SocialNav/SocialNav";
import ContactCard from "../components/ContactCard/ContactCard";
import { Copy } from "../components/Copy/Copy";
import intlMessages from "../i18n/i18n";

const AboutMeWrapper = styled.div`
  max-width: ${theme.contain.content};
  margin-left: auto;
  margin-right: auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};
`;

const HeaderInfo = styled.div`
  display: block;
  width: 100%;
  ${"" /* Create a containment block for floated elements to prevent overflowing the container */} ${"" /* prettier-ignore */}
  overflow: visible;
  margin-bottom: ${rem(48)};

  ${mediaMin.m`
    margin-bottom: ${rem(96)};
  `};

  ${mediaMin.xl`
    margin-top: ${rem(56)};
  `};
`;

const AboutImageWrapper = styled.div`
  background: #dadada;
  display: block;
  width: 100%;
  margin: ${theme.gutters.s} 0;

  ${mediaMin.l`
    margin-top: -${rem(48)};
  `};

  ${mediaMin.l`
    border-radius: 50%;
    shape-outside: circle(180px at 50% 50%);
    float: right;
    overflow: hidden;
    margin-bottom: 0;
    margin-left: ${rem(12)};
    width: calc((100% / 2) - ${rem(12)});
    
    & * {
      border-radius: 50%;
      overflow: hidden;
    }
  `};

  ${mediaMin.xl`
    width: calc(((100% / 10) * 4) - ${rem(12)});
  `};
`;

const SocialHeader = styled.h4`
  letter-spacing: ${theme.letterSpacing.socialHeader};
  margin-bottom: ${rem(8)};
`;

const StyledH1 = styled.h1`
  margin-bottom: ${rem(16)};
`;

const StyledH3 = styled.h3`
  margin-bottom: ${rem(16)};
`;

const StyledSocialNav = styled.div`
  display: inline-block;
`;

const Subhead = styled(Copy)`
  font-size: ${theme.fontSizes.subheadS};
  line-height: ${theme.lineHeights.subheadS};
  margin-bottom: ${rem(32)};

  ${mediaMin.s`
    font-size: ${theme.fontSizes.subhead};
    line-height: ${theme.lineHeights.subhead};
  `};

  ${mediaMin.l`
    margin-right: ${rem(12)};
    width: calc((100% / 2) - ${rem(12)});
  `};

  ${mediaMin.xl`
    margin-right: ${rem(12)};
    width: calc(((100% / 10) * 6) - ${rem(12)});
  `};
`;

const StyledCopy = styled(Copy)`
  margin-bottom: ${rem(28)};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Col1of2 = styled.div`
  margin-bottom: ${rem(48)};

  ${mediaMin.m`
    display: inline-block;
    vertical-align: top;
    margin-bottom: 0;
    margin-right: ${rem(12)};
    width: calc(((100% / 10) * 5) - ${rem(12)});
  `};
`;

const Col2of2 = styled.div`
  ${mediaMin.m`
    display: inline-block;
    vertical-align: top;
    margin-left: ${rem(12)};
    width: calc(((100% / 10) * 5) - ${rem(12)});
  `};
`;

const AboutPage = (props) => {
  let locale = props.pageContext.locale;
  let changeLanguage = "";

  if (locale === "en") {
    changeLanguage = "/es/sobre-mi";
  } else if (locale === "es") {
    changeLanguage = "/about-me";
  }

  return (
    <Layout location={props.location} locale={locale}>
      <SiteHeader locale={locale} />
      <Main role="main">
        <AboutMeWrapper>
          <Helmet title={`${intlMessages[locale].meta.aboutMetaTitle}`} />
          <SEO />
          <HeaderInfo>
            {/* <StyledNameHeader>Hi! I’m Dani Lucaci.</StyledNameHeader> */}
            <StyledH1>About Me</StyledH1>
            <AboutImageWrapper>
              <Img
                title="Dani Lucaci portrait image"
                alt="Dani Lucaci portrait image"
                fluid={props.data.aboutImage.childImageSharp.fluid}
              />
            </AboutImageWrapper>
            <Subhead>
              I am a UX/UI Designer and Front–End Developer that likes to create
              products that help their users achieve their personal goals and
              are built with performance, accesibility and user interaction in
              mind.
            </Subhead>
            <StyledSocialNav>
              <SocialHeader>You can find me on social media</SocialHeader>
              <SocialNav />
            </StyledSocialNav>
          </HeaderInfo>
          <Col1of2>
            <StyledH3>More about me</StyledH3>
            <StyledCopy>
              I was born in Bucharest, Romania, but moved to Spain at a young
              age. I am currently living in Barcelona, Spain, where I am
              finishing my Multimedia degree from the UOC (Universitat Oberta de
              Catalunya).
            </StyledCopy>
            <StyledCopy>
              Previously I was an Automotive Photographer —for about 4 years—
              covering motorsport events in Spain and Europe.
            </StyledCopy>
          </Col1of2>
          <Col2of2>
            <StyledH3>About this blog</StyledH3>
            <StyledCopy>
              This blog was built as an personal challenge to improve my coding
              skills and as such I decided to build it using Gatsby.js,
              React.js, Styled Components and hosted it on Netlify.
            </StyledCopy>
            <StyledCopy>
              If you’d like to see the source code for yourself,{" "}
              <a href="https://github.com/danilucaci/danilucaci.com">
                the repository is publicly available
              </a>{" "}
              and if you have any questions regarding any of the functionality,
              feel free to{" "}
              <a
                href="https://twitter.com/messages/compose?recipient_id=734468984658071554&ref_src=twsrc%5Etfw"
                data-screen-name="@danilucaci"
                data-show-count="false"
              >
                send me a tweet
              </a>
              .
            </StyledCopy>
          </Col2of2>
        </AboutMeWrapper>
      </Main>
      <ContactCard />
      <SiteFooter gray changeLanguage={changeLanguage} locale={locale} />
    </Layout>
  );
};

AboutPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    aboutImage: PropTypes.object.isRequired,
  }),
};

export default AboutPage;

export const query = graphql`
  query {
    aboutImage: file(relativePath: { regex: "/bwp/" }) {
      childImageSharp {
        fluid(maxWidth: 480, maxHeight: 480, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
