import React, { Component } from "react";
import Helmet from "react-helmet";
import styled, { css } from "styled-components";

import Layout from "../components/Layout";
import { Stack } from "../components/Stack/Stack";
import SEO from "../components/SEO/SEO";

import { theme, mediaMin, rem, breakpoints } from "../theme/globalStyles";
import { H1, H2, H3, H4 } from "../components/Headings/Headings";
import { Copy } from "../components/Copy/Copy";

import config from "../../data/SiteConfig";

const StyledHeader = styled.header`
  padding-top: ${theme.stack.landing.s};

  ${mediaMin.m`
    padding-top: ${theme.stack.landing.m};
  `};
`;

const StyledH1 = styled(H2.withComponent("h1"))`
  margin: ${rem(16)} 0;
`;

const ServicesH1 = H1.extend`
  margin-bottom: ${rem(24)};

  ${mediaMin.m`
    margin-bottom: ${rem(56)};
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
`;

const ServicesStack = Stack.extend`
  padding-top: ${theme.stack.landing.s};
  outline: 1px solid red;
  width: 100%;
  height: 100%;
  font-size: 0;

  ${mediaMin.m`
    padding-top: ${theme.stack.landing.m};
  `};

  ${mediaMin.xl`
    padding-top: ${theme.stack.landing.xl};
  `};
`;

const Col = styled.div`
  display: inline-block;
  vertical-align: top;

  width: 100%;
  height: 100%;
  margin-bottom: ${rem(16)};

  background-color: ${theme.colors.main100};

  &:last-of-type {
    margin-right: 0;
  }

  ${mediaMin.s`
    margin-right: ${rem(24)};
    margin-bottom: ${rem(24)};
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
        <Helmet title={config.siteTitle} />
        <SEO />
        <Stack>
          <StyledHeader>
            <StyledH4>Hi! I’m Dani.</StyledH4>
            <StyledH1>
              UX/UI Designer.<br />Front–End Developer.
            </StyledH1>
            <Copy>
              I prototype, design and develop interfaces that have a strong
              focus on accesibility, performance and user interaction. I use the
              latest front-end techniques and design methods to create scalable
              and easy to use experiences.
            </Copy>
          </StyledHeader>
        </Stack>
        <ServicesStack>
          <ServicesH1>My Services</ServicesH1>
          <ServicesH2>UX and UI Design</ServicesH2>
          <Col>
            <ServicesH3>Wireframing</ServicesH3>
            <Copy>
              I focus on creating scalable, easy to maintain and responsive
              front-end architectures using SASS, HTML5 and presentational
              Javascript.
            </Copy>
          </Col>
          <Col>
            <ServicesH3>Prototyping</ServicesH3>
            <Copy>
              I focus on creating scalable, easy to maintain and responsive
              front-end architectures using SASS, HTML5 and presentational
              Javascript.
            </Copy>
          </Col>
          <Col>
            <ServicesH3>Accesibility</ServicesH3>
            <Copy>
              I focus on creating scalable, easy to maintain and responsive
              front-end architectures using SASS, HTML5 and presentational
              Javascript.
            </Copy>
          </Col>
          <Col>
            <ServicesH3>Design Systems</ServicesH3>
            <Copy>
              I focus on creating scalable, easy to maintain and responsive
              front-end architectures using SASS, HTML5 and presentational
              Javascript.
            </Copy>
          </Col>
          <ServicesH3>Tools I Use</ServicesH3>
        </ServicesStack>
        <ServicesStack>
          <ServicesH2>Front–End Development</ServicesH2>
          <Col>
            <ServicesH3>Responsive Design</ServicesH3>
            <Copy>
              I focus on creating scalable, easy to maintain and responsive
              front-end architectures using SASS, HTML5 and presentational
              Javascript.
            </Copy>
          </Col>
          <Col>
            <ServicesH3>Gatsby.js and React</ServicesH3>
            <Copy>
              I focus on creating scalable, easy to maintain and responsive
              front-end architectures using SASS, HTML5 and presentational
              Javascript.
            </Copy>
          </Col>
          <ServicesH3>Tools I Use</ServicesH3>
        </ServicesStack>
      </Layout>
    );
  }
}

export default Index;
