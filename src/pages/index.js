import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import { theme, mediaMin, rem, breakpoints } from "../theme/globalStyles";
import { H1, H2, H3, H4 } from "../components/Headings/Headings";
import { Copy } from "../components/Copy/Copy";
import { Icon } from "../components/Icon/Icon";

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
    padding-bottom: ${rem(200)};
  `};

  ${mediaMin.m`
    padding-top: ${rem(64)};
    padding-bottom: ${rem(288)};
  `};
`;

const StyledH4 = H4.extend`
  color: ${theme.colors.main600};
  text-transform: uppercase;
  margin-bottom: ${rem(8)};

  ${mediaMin.s`
    margin-bottom: 0;
  `};
`;

const StyledH1 = H1.extend`
  margin-bottom: ${rem(16)};

  ${mediaMin.m`
    max-width: ${rem(648)};
    margin-bottom: ${rem(8)};
  `};
`;

const ServicesH2 = H2.extend`
  margin-bottom: ${rem(32)};
  font-size: ${theme.fontSizes.h1s};
  line-height: ${theme.lineHeights.h1s};

  ${mediaMin.m`
    margin-bottom: ${rem(88)};
    font-size: ${theme.fontSizes.h2};
    line-height: ${theme.lineHeights.h2};
  `};

  ${mediaMin.l`
    margin-bottom: ${rem(96)};
    font-size: ${theme.fontSizes.h1};
    line-height: ${theme.lineHeights.h1};
  `};
`;

const Subhead = styled(Copy)`
  font-size: ${theme.fontSizes.subheads};
  line-height: ${theme.lineHeights.subheads};

  ${mediaMin.m`
    font-size: ${theme.fontSizes.subhead};
    line-height: ${theme.lineHeights.subhead};

    max-width: ${rem(648)};
  `};
`;

const ServicesH3 = H3.extend`
  font-size: ${theme.fontSizes.h2s};
  line-height: ${theme.lineHeights.h2s};
  margin-top: ${rem(32)};
  margin-bottom: ${rem(16)};

  ${mediaMin.m`
    font-size: ${theme.fontSizes.h3s};
    line-height: ${theme.lineHeights.h3s};

    margin-top: 0;
    margin-bottom: ${rem(40)};
  `};

  ${mediaMin.l`
    font-size: ${theme.fontSizes.h2};
    line-height: ${theme.lineHeights.h2};

    margin-bottom: ${rem(40)};
  `};
`;

const ServicesH4 = H4.extend`
  margin-bottom: ${rem(8)};
`;

const RowOne = styled.div`
  margin-bottom: ${rem(64)};

  ${mediaMin.s`
    margin-bottom: ${rem(200)};
  `};

  ${mediaMin.m`
    margin-bottom: ${rem(280)};
  `};
`;

const RowTwo = styled.section`
  margin-bottom: ${rem(64)};

  ${mediaMin.s`
    margin-bottom: ${rem(200)};
  `};

  ${mediaMin.m`
    margin-bottom: ${rem(280)};
  `};
`;

const RowThree = styled.section`
  margin-bottom: ${rem(64)};

  ${mediaMin.s`
    margin-bottom: ${rem(200)};
  `};

  ${mediaMin.m`
    margin-bottom: ${rem(256)};
  `};
`;

const ServicesItem = styled.section`
  display: inline-block;
  vertical-align: top;

  width: 100%;
  height: 100%;
  margin-bottom: ${rem(56)};

  @media screen and (min-width: ${theme.breakpoints.m}) {
    width: calc(50% - ${theme.gutters.m});
    margin-right: ${theme.gutters.m};

    &:last-of-type() {
      margin-right: 0;
    }
  }
`;

const ToolsWrapper = styled.div`
  display: block;
`;

const Tools = styled.div`
  overflow-x: scroll;
  white-space: nowrap;

  /* Hide the scrollbar and still scroll */
  /* On webkit */
  &::-webkit-scrollbar {
    display: none;
  }

  /* For Edge */
  -ms-overflow-style: -ms-autohiding-scrollbar;
  -ms-overflow-style: none;
`;

const ToolsIcon = styled(Icon)`
  display: inline-block;
  margin-right: ${rem(4)};
`;

class Index extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Wrapper>
          <Helmet title={config.siteTitle} />
          <SEO />
          <StyledHeader>
            <StyledH4>Hi! I’m Dani.</StyledH4>
            <StyledH1>UX/UI Designer and Front–End Developer.</StyledH1>
            <Subhead>
              I prototype, design and develop interfaces that have a strong
              focus on accesibility, performance and user interaction. I use the
              latest front-end techniques and design methods to create scalable
              and easy to use experiences.
            </Subhead>
          </StyledHeader>
          <RowOne>
            <ServicesH2>What I Do</ServicesH2>
            <ServicesH3>UX and UI Design</ServicesH3>
            <ServicesItem>
              <ServicesH4>Wireframing</ServicesH4>
              <Copy>
                I focus on creating scalable, easy to maintain and responsive
                front-end architectures using SASS, HTML5 and presentational
                Javascript.
              </Copy>
            </ServicesItem>
            <ServicesItem>
              <ServicesH4>Prototyping</ServicesH4>
              <Copy>
                I focus on creating scalable, easy to maintain and responsive
                front-end architectures using SASS, HTML5 and presentational
                Javascript.
              </Copy>
            </ServicesItem>
            <ServicesItem>
              <ServicesH4>Accesibility</ServicesH4>
              <Copy>
                I focus on creating scalable, easy to maintain and responsive
                front-end architectures using SASS, HTML5 and presentational
                Javascript.
              </Copy>
            </ServicesItem>
            <ServicesItem>
              <ServicesH4>Design Systems</ServicesH4>
              <Copy>
                I focus on creating scalable, easy to maintain and responsive
                front-end architectures using SASS, HTML5 and presentational
                Javascript.
              </Copy>
            </ServicesItem>
            <ToolsWrapper>
              <ServicesH4>My Toolkit</ServicesH4>
              <Tools>
                <ToolsIcon size="48">
                  <use xlinkHref="#github" />
                </ToolsIcon>
                <ToolsIcon size="48">
                  <use xlinkHref="#github" />
                </ToolsIcon>
                <ToolsIcon size="48">
                  <use xlinkHref="#github" />
                </ToolsIcon>
                <ToolsIcon size="48">
                  <use xlinkHref="#github" />
                </ToolsIcon>
                <ToolsIcon size="48">
                  <use xlinkHref="#github" />
                </ToolsIcon>
                <ToolsIcon size="48">
                  <use xlinkHref="#github" />
                </ToolsIcon>
              </Tools>
            </ToolsWrapper>
          </RowOne>
          <RowTwo>
            <ServicesH3>Front–End Development</ServicesH3>
            <ServicesItem>
              <ServicesH4>Responsive Design</ServicesH4>
              <Copy>
                I focus on creating scalable, easy to maintain and responsive
                front-end architectures using SASS, HTML5 and presentational
                Javascript.
              </Copy>
            </ServicesItem>
            <ServicesItem>
              <ServicesH4>Gatsby.js and React</ServicesH4>
              <Copy>
                I focus on creating scalable, easy to maintain and responsive
                front-end architectures using SASS, HTML5 and presentational
                Javascript.
              </Copy>
            </ServicesItem>
            <ServicesItem>
              <ServicesH4>Gatsby.js and React</ServicesH4>
              <Copy>
                I focus on creating scalable, easy to maintain and responsive
                front-end architectures using SASS, HTML5 and presentational
                Javascript.
              </Copy>
            </ServicesItem>
            <ServicesItem>
              <ServicesH4>Gatsby.js and React</ServicesH4>
              <Copy>
                I focus on creating scalable, easy to maintain and responsive
                front-end architectures using SASS, HTML5 and presentational
                Javascript.
              </Copy>
            </ServicesItem>
            <ToolsWrapper>
              <ServicesH4>My Toolkit</ServicesH4>
              <Tools>
                <ToolsIcon size="48">
                  <use xlinkHref="#github" />
                </ToolsIcon>
                <ToolsIcon size="48">
                  <use xlinkHref="#github" />
                </ToolsIcon>
                <ToolsIcon size="48">
                  <use xlinkHref="#github" />
                </ToolsIcon>
                <ToolsIcon size="48">
                  <use xlinkHref="#github" />
                </ToolsIcon>
                <ToolsIcon size="48">
                  <use xlinkHref="#github" />
                </ToolsIcon>
                <ToolsIcon size="48">
                  <use xlinkHref="#github" />
                </ToolsIcon>
              </Tools>
            </ToolsWrapper>
          </RowTwo>
          <RowThree>
            <ServicesH2>Front–End Development</ServicesH2>
            <ServicesItem>
              <ServicesH4>Responsive Design</ServicesH4>
              <Copy>
                I focus on creating scalable, easy to maintain and responsive
                front-end architectures using SASS, HTML5 and presentational
                Javascript.
              </Copy>
            </ServicesItem>
            <ServicesItem>
              <ServicesH4>Gatsby.js and React</ServicesH4>
              <Copy>
                I focus on creating scalable, easy to maintain and responsive
                front-end architectures using SASS, HTML5 and presentational
                Javascript.
              </Copy>
            </ServicesItem>
            <ServicesItem>
              <ServicesH4>Gatsby.js and React</ServicesH4>
              <Copy>
                I focus on creating scalable, easy to maintain and responsive
                front-end architectures using SASS, HTML5 and presentational
                Javascript.
              </Copy>
            </ServicesItem>
            <ServicesItem>
              <ServicesH4>Gatsby.js and React</ServicesH4>
              <Copy>
                I focus on creating scalable, easy to maintain and responsive
                front-end architectures using SASS, HTML5 and presentational
                Javascript.
              </Copy>
            </ServicesItem>
            <ToolsWrapper>
              <ServicesH4>My Toolkit</ServicesH4>
              <Tools>
                <ToolsIcon size="48">
                  <use xlinkHref="#github" />
                </ToolsIcon>
                <ToolsIcon size="48">
                  <use xlinkHref="#github" />
                </ToolsIcon>
                <ToolsIcon size="48">
                  <use xlinkHref="#github" />
                </ToolsIcon>
                <ToolsIcon size="48">
                  <use xlinkHref="#github" />
                </ToolsIcon>
                <ToolsIcon size="48">
                  <use xlinkHref="#github" />
                </ToolsIcon>
                <ToolsIcon size="48">
                  <use xlinkHref="#github" />
                </ToolsIcon>
              </Tools>
            </ToolsWrapper>
          </RowThree>
        </Wrapper>
      </Layout>
    );
  }
}

export default Index;
