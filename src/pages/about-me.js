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

const ImageWrapper = styled.div`
  background: #dadada;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  margin: ${theme.gutters.s} 0;
  /* 
  shape-outside: circle at 50%;
  overflow: hidden;
  border-radius: 50%;

  & * {
    border-radius: 50%;
    overflow: hidden;
  } */

  ${mediaMin.l`
    margin-bottom: 0;
    margin-right: ${rem(12)};
    width: calc((100% / 2) - ${rem(12)});
  `};

  ${mediaMin.xl`
    width: calc(((100% / 10) * 4) - ${rem(12)});
  `};
`;

const InfoWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;

  ${mediaMin.l`
    margin-left: ${rem(12)};
    width: calc((100% / 2) - ${rem(12)});
  `};

  ${mediaMin.xl`
    margin-left: ${rem(12)};
    width: calc(((100% / 10) * 6) - ${rem(12)});
  `};
`;

const StyledH1 = styled.h1`
  margin-top: auto;
  margin-bottom: ${rem(16)};
`;

const StyledH3 = styled.h3`
  margin-bottom: ${rem(16)};
`;

const StyledSocialNav = styled.div`
  display: inline-block;

  ${mediaMin.l`
    margin-top: ${rem(32)};
    margin-bottom: auto;
  `};
`;

const Subhead = styled(Copy)`
  margin-bottom: ${rem(32)};
`;

const StyledCopy = styled(Copy)`
  margin-bottom: ${rem(28)};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Col1 = styled.div`
  margin-bottom: ${rem(48)};

  ${mediaMin.m`
    display: inline-block;
    vertical-align: top;
    margin-bottom: 0;
    margin-right: ${rem(12)};
    width: calc(((100% / 10) * 5) - ${rem(12)});
  `};
`;

const Col2 = styled.div`
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
  max-width: ${theme.contain.wrapper.col12};
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
            <ImageWrapper>
              <FormattedMessage id="aboutTheBlogImageTitle">
                {(txt) => (
                  <Img
                    alt={txt}
                    fluid={props.data.aboutImage.childImageSharp.fluid}
                  />
                )}
              </FormattedMessage>
            </ImageWrapper>
            <InfoWrapper>
              <FormattedMessage id="aboutMeTitle">
                {(txt) => <StyledH1>{txt}</StyledH1>}
              </FormattedMessage>
              <FormattedMessage id="aboutMeSubTitle">
                {(txt) => <Subhead>{txt}</Subhead>}
              </FormattedMessage>
              <StyledSocialNav>
                <SocialNav />
              </StyledSocialNav>
            </InfoWrapper>
          </HeaderInfo>
          <MoreAboutMeWrapper>
            <MoreAboutMeInner>
              <Col1>
                <FormattedMessage id="moreAboutMeTitle">
                  {(txt) => <StyledH3>{txt}</StyledH3>}
                </FormattedMessage>
                <FormattedMessage id="moreAboutMeP1">
                  {(txt) => <StyledCopy>{txt}</StyledCopy>}
                </FormattedMessage>
                <FormattedMessage id="moreAboutMeP2">
                  {(txt) => <StyledCopy>{txt}</StyledCopy>}
                </FormattedMessage>
              </Col1>
              <Col2>
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
              </Col2>
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
