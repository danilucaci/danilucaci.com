import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";

import { theme, mediaMin, rem, breakpoints } from "../theme/globalStyles";
import { H1, H2, H3, H4 } from "../components/Headings/Headings";
import { Copy } from "../components/Copy/Copy";

import config from "../../data/SiteConfig";

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

const StyledHeader = styled.header`
  padding-bottom: ${rem(64)};

  ${mediaMin.s`
    padding-top: ${rem(32)};
    padding-bottom: ${rem(112)};
  `};

  ${mediaMin.m`
    padding-top: ${rem(64)};
    padding-bottom: ${rem(208)};
  `};
`;

const StyledH1 = styled(H2.withComponent("h1"))`
  margin-bottom: ${rem(16)};

  ${mediaMin.s`
    margin-bottom: ${rem(24)};
  `};
`;

const ServicesH1 = H1.extend`
  margin-bottom: ${rem(24)};

  ${mediaMin.m`
    margin-bottom: ${rem(56)};
  `};
`;

const Subhead = styled(Copy)`
  font-size: ${theme.fontSizes.subheads};
  line-height: ${theme.lineHeights.subheads};

  ${mediaMin.m`
    font-size: ${theme.fontSizes.subhead};
    line-height: ${theme.lineHeights.subhead};
  `};
`;

const ServicesH2 = H2.extend`
  margin-bottom: ${rem(24)};
`;

const ServicesH3 = H3.extend`
  margin-bottom: ${rem(8)};

  ${mediaMin.m`
    margin-bottom: ${rem(24)};
  `};
`;

const StyledH4 = H4.extend`
  text-transform: uppercase;
  color: ${theme.colors.main600};
  margin-bottom: ${rem(16)};
`;

const ServicesStack = styled.div`
  margin-top: ${rem(56)};
  margin-top: ${rem(56)};

  ${mediaMin.s`
    margin-top: ${rem(88)};
    margin-top: ${rem(88)};
  `};

  ${mediaMin.m`
    margin-top: ${rem(56)};
    margin-top: ${rem(56)};
  `};
`;

const Stack = styled.div`
  outline: 1px solid red;
  width: 100%;
  height: 100%;
  font-size: 0;

  ${mediaMin.m`

  `};

  ${mediaMin.xl`

  `};
`;

const ServicesItem = styled.div`
  display: inline-block;
  vertical-align: top;

  width: 100%;
  height: 100%;
  margin-bottom: ${rem(56)};

  background-color: ${theme.colors.main100};

  &:last-of-type {
    margin-right: 0;
  }

  ${mediaMin.s`
    margin-right: ${rem(24)};
    margin-bottom: ${rem(88)};
  `};

  @media screen and (min-width: ${theme.breakpoints.m}) and (max-width: ${theme
      .breakpoints.xl}) {
    width: calc(50% - ${rem(12)});

    &:nth-of-type(2n) {
      margin-right: 0;
    }
  }

  @media screen and (min-width: ${theme.breakpoints.xl}) {
    width: calc(25% - ${rem(20)});

    &:last-of-type() {
      margin-right: 0;
    }
  }
`;

class Index extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Wrapper>
          <Helmet title={config.siteTitle} />
          <SEO />
          <Stack>
            <StyledHeader>
              <StyledH4>Hi! I’m Dani.</StyledH4>
              <StyledH1>
                UX/UI Designer.<br />Front–End Developer.
              </StyledH1>
              <Subhead>
                I prototype, design and develop interfaces that have a strong
                focus on accesibility, performance and user interaction. I use
                the latest front-end techniques and design methods to create
                scalable and easy to use experiences.
              </Subhead>
            </StyledHeader>
          </Stack>
          <ServicesStack>
            <ServicesH1>My Services</ServicesH1>
            <ServicesH2>UX and UI Design</ServicesH2>
            <ServicesItem>
              <ServicesH3>Wireframing</ServicesH3>
              <Copy>
                I focus on creating scalable, easy to maintain and responsive
                front-end architectures using SASS, HTML5 and presentational
                Javascript.
              </Copy>
            </ServicesItem>
            <ServicesItem>
              <ServicesH3>Prototyping</ServicesH3>
              <Copy>
                I focus on creating scalable, easy to maintain and responsive
                front-end architectures using SASS, HTML5 and presentational
                Javascript.
              </Copy>
            </ServicesItem>
            <ServicesItem>
              <ServicesH3>Accesibility</ServicesH3>
              <Copy>
                I focus on creating scalable, easy to maintain and responsive
                front-end architectures using SASS, HTML5 and presentational
                Javascript.
              </Copy>
            </ServicesItem>
            <ServicesItem>
              <ServicesH3>Design Systems</ServicesH3>
              <Copy>
                I focus on creating scalable, easy to maintain and responsive
                front-end architectures using SASS, HTML5 and presentational
                Javascript.
              </Copy>
            </ServicesItem>
            <ServicesH3>Tools I Use</ServicesH3>
          </ServicesStack>
          <ServicesStack>
            <ServicesH2>Front–End Development</ServicesH2>
            <ServicesItem>
              <ServicesH3>Responsive Design</ServicesH3>
              <Copy>
                I focus on creating scalable, easy to maintain and responsive
                front-end architectures using SASS, HTML5 and presentational
                Javascript.
              </Copy>
            </ServicesItem>
            <ServicesItem>
              <ServicesH3>Gatsby.js and React</ServicesH3>
              <Copy>
                I focus on creating scalable, easy to maintain and responsive
                front-end architectures using SASS, HTML5 and presentational
                Javascript.
              </Copy>
            </ServicesItem>
            <ServicesH3>Tools I Use</ServicesH3>
          </ServicesStack>
        </Wrapper>
      </Layout>
    );
  }
}

export default Index;
