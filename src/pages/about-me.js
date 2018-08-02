import React, { Component } from "react";
import Helmet from "react-helmet";
import styled, { css } from "styled-components";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import config from "../../data/SiteConfig";

import { theme, mediaMin, rem, breakpoints } from "../theme/globalStyles";
import { H1, H2, H3, H4 } from "../components/Headings/Headings";
import { Copy } from "../components/Copy/Copy";

const Wrapper = styled.div`
  max-width: ${theme.contain.content};
  margin: 0 auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};
`;

const StyledImage = styled.div`
  background: #dadada;
  display: block;
  min-width: 320px;
  min-height: 320px;
  margin: ${theme.gutters.s} 0;

  ${mediaMin.s`
    float: right;
    border-radius: 50%;
    shape-outside: circle(200px at 45% 40%);
    min-width: 400px;
    min-height: 400px;
    margin: -8% ${theme.gutters.m} 1.5rem;
  `};
`;

const StyledH4 = styled(H4)`
  color: ${theme.colors.main600};
  text-transform: uppercase;
`;

const StyledH1 = styled(H1)`
  margin-bottom: ${rem(16)};
`;

const Subhead = styled(Copy)`
  font-size: ${theme.fontSizes.subheads};
  line-height: ${theme.lineHeights.subheads};
  margin-bottom: ${rem(28)};

  ${mediaMin.s`
    font-size: ${theme.fontSizes.subhead};
    line-height: ${theme.lineHeights.subhead};
    width: calc(70% - ${rem(28)});
    margin-right: ${rem(24)};
  `};
`;

const StyledCopy = styled(Copy)`
  margin-bottom: ${rem(28)};

  ${mediaMin.s`
    width: calc(70% - ${rem(28)});
    margin-right: ${rem(24)};
  `};
`;

class AboutPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Wrapper>
          <Helmet title={`About Me || ${config.siteTitle}`} />
          <SEO />
          <StyledH4>Dani Lucaci</StyledH4>
          <StyledH1>About Me</StyledH1>
          <StyledImage />
          <Subhead>
            I am a UX/UI Designer and Front–End Developer that likes to create
            products that help their users achieve their personal goals and are
            built with performance, accesibility and user interaction in mind.
          </Subhead>
          <StyledCopy>
            I was born in Bucharest, Romania, but moved to Spain at a young age.
            I am currently living in Barcelona, Spain, where I am finishing my
            Multimedia degree from the UOC (Universitat Oberta de Catalunya).
          </StyledCopy>
          <StyledCopy>
            Previously I was an Automotive Photographer —for about 4 years—
            covering motorsport events in Spain and Europe. This blog was built
            as an personal challenge to improve my coding skills and as such I
            decided to build it using Gatsby.js, React.js, Styled Components and
            hosted it on Netlify.
          </StyledCopy>
          <H3>About this blog</H3>
          <StyledCopy>
            If you’d like to see the source code for yourself, the repository is
            publicly available and if you have any questions regarding any of
            the functionality, feel free to send me a tweet.
          </StyledCopy>
        </Wrapper>
      </Layout>
    );
  }
}

export default AboutPage;
