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

const AboutMeWrapper = styled.section``;

const HeaderInfo = styled.header`
  display: block;
  width: 100%;
  max-width: ${theme.contain.wrapper.col10};
  /* Create a containment block for floated elements to prevent overflowing the container */
  overflow: visible;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};

  margin-bottom: ${rem(48)};
  margin-left: auto;
  margin-right: auto;

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

const MoreAboutMeWrapper = styled.section`
  background-color: ${theme.colors.gray100};
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

const MoreAboutMeInner = styled.div`
  max-width: ${theme.contain.wrapper.col10};
  margin: 0 auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};
`;

const ContactWrapper = styled.div`
  margin-top: ${theme.spacing.components.s};
  margin-bottom: ${theme.spacing.components.s};

  ${mediaMin.s`
    margin-top: ${theme.spacing.components.m};
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.m`
    margin-top: ${theme.spacing.components.xl};
    margin-bottom: ${theme.spacing.components.xl};
  `};
`;

const ContactInner = styled.div`
  max-width: ${theme.contain.wrapper.col10};
  margin: 0 auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};
`;

const AboutPage = (props) => {
  let locale = props.pageContext.locale;
  let twinPostURL = "";

  if (locale === "en") {
    twinPostURL = "/es/sobre-mi";
  } else if (locale === "es") {
    twinPostURL = "/about-me";
  }

  return (
    <Layout location={props.location} locale={locale}>
      <SiteHeader
        twinPostURL={twinPostURL}
        locale={locale}
        currentPath={props.location.pathname}
      />
      <Main role="main" id="main">
        <AboutMeWrapper>
          <SEO
            locale={locale}
            currentPage="about"
            currentPath={props.location.pathname}
          />
          <HeaderInfo>
            <FormattedMessage id="aboutMeTitle">
              {(txt) => <StyledH1>{txt}</StyledH1>}
            </FormattedMessage>
            <AboutImageWrapper>
              <FormattedMessage id="aboutTheBlogImageTitle">
                {(txt) => (
                  <Img
                    alt={txt}
                    fluid={props.data.aboutImage.childImageSharp.fluid}
                  />
                )}
              </FormattedMessage>
            </AboutImageWrapper>
            <FormattedMessage id="aboutMeSubTitle">
              {(txt) => <Subhead>{txt}</Subhead>}
            </FormattedMessage>
            <StyledSocialNav>
              <SocialNav />
            </StyledSocialNav>
          </HeaderInfo>
          <MoreAboutMeWrapper>
            <MoreAboutMeInner>
              <Col1of2>
                <FormattedMessage id="moreAboutMeTitle">
                  {(txt) => <StyledH3>{txt}</StyledH3>}
                </FormattedMessage>
                <FormattedMessage id="moreAboutMeP1">
                  {(txt) => <StyledCopy>{txt}</StyledCopy>}
                </FormattedMessage>
                <FormattedMessage id="moreAboutMeP2">
                  {(txt) => <StyledCopy>{txt}</StyledCopy>}
                </FormattedMessage>
              </Col1of2>
              <Col2of2>
                <FormattedMessage id="aboutTheBlog">
                  {(txt) => <StyledH3>{txt}</StyledH3>}
                </FormattedMessage>
                <FormattedMessage id="aboutTheBlogP1">
                  {(txt) => <StyledCopy>{txt}</StyledCopy>}
                </FormattedMessage>
                <StyledCopy>
                  <FormattedMessage id="aboutTheBlogP2">
                    {(txt) => <>{txt}</>}
                  </FormattedMessage>
                  <a href="https://github.com/danilucaci/danilucaci.com">
                    github
                  </a>
                  <FormattedMessage id="aboutTheBlogP3">
                    {(txt) => <>{txt}</>}
                  </FormattedMessage>
                  <FormattedMessage id="aboutTheBlogP4">
                    {(txt) => (
                      <a
                        href="https://twitter.com/messages/compose?recipient_id=734468984658071554&ref_src=twsrc%5Etfw"
                        data-screen-name="@danilucaci"
                        data-show-count="false"
                      >
                        {txt}
                      </a>
                    )}
                  </FormattedMessage>
                  <FormattedMessage id="aboutTheBlogP5">
                    {(txt) => <>{txt}</>}
                  </FormattedMessage>
                </StyledCopy>
              </Col2of2>
            </MoreAboutMeInner>
          </MoreAboutMeWrapper>
        </AboutMeWrapper>
      </Main>
      <ContactWrapper>
        <ContactInner>
          <ContactCard locale={locale} />
        </ContactInner>
      </ContactWrapper>
      <SiteFooter locale={locale} />
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
    aboutImage: file(relativePath: { regex: "/danilucaci_profile_image/" }) {
      childImageSharp {
        fluid(maxWidth: 480, maxHeight: 480, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
