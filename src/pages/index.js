import React, { Component } from "react";
import Helmet from "react-helmet";
import styled, { css } from "styled-components";

import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import { theme, mediaMin, rem } from "../theme/globalStyles";
import { BulletList, BulletListItem, Copy } from "../components/Copy/Copy";
import ContactCard from "../components/ContactCard/ContactCard";

const IndexHeader = styled.header`
  max-width: ${theme.contain.content};
  margin: 0 auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};

  padding-bottom: ${rem(48)};

  ${mediaMin.xs`
    padding-top: ${rem(24)};
    padding-bottom: ${rem(64)};
  `};

  ${mediaMin.m`
    padding-top: ${rem(56)};
    padding-bottom: ${rem(144)};
  `};

  ${mediaMin.xl`
    padding-top: ${rem(48)};
  `};
`;

const StyledH1 = styled.h1`
  margin-bottom: ${rem(16)};

  ${mediaMin.m`
    max-width: ${rem(648)};
    margin-bottom: ${rem(32)};
  `};
`;

const Subhead = styled(Copy)`
  font-size: ${theme.fontSizes.subheadS};
  line-height: ${theme.lineHeights.subheadS};
  letter-spacing: normal;

  ${mediaMin.l`
    font-size: ${theme.fontSizes.subhead};
    line-height: ${theme.lineHeights.subhead};

    max-width: ${rem(744)};
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

const CaseStudiesH2 = styled.h2`
  margin-bottom: 0;
  font-size: ${theme.fontSizes.h1s};
  line-height: ${theme.lineHeights.h1s};

  ${mediaMin.m`
    font-size: ${theme.fontSizes.h2};
    line-height: ${theme.lineHeights.h2};
  `};
`;

const ServicesH4 = styled.h4`
  ${mediaMin.s`
    margin-bottom: ${rem(8)};
  `};
`;

const ServicesItem = styled.section`
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

const Stack = styled.section`
  margin-bottom: ${rem(48)};

  ${mediaMin.s`
    margin-bottom: ${rem(80)};
  `};

  ${mediaMin.m`
    margin-bottom: ${rem(144)};
  `};
`;

const AltStack = styled(Stack)`
  background-color: ${theme.colors.gray100};
  padding-top: ${rem(48)};
  padding-bottom: ${rem(48)};
`;

const StackContents = styled.div`
  max-width: ${theme.contain.content};
  margin: 0 auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};
`;

class Index extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet>
          <title>{`${config.siteTitle}`}</title>
        </Helmet>
        <SEO />

        <SiteHeader />
        <Main role="main">
          <Helmet title={config.siteTitle} />
          <SEO />
          <IndexHeader>
            <StyledH1>Hi! I’m Dani.</StyledH1>
            <Subhead>
              I’m a UX/UI Designer and Front-End Developer based in Barcelona. I
              help teams prototype, design and develop digital products using
              the latest front-end techniques and design patterns to create
              scalable, user focused experiences.
            </Subhead>
          </IndexHeader>
          <AltStack>
            <StackContents>
              <ServicesH2>My services</ServicesH2>
              <ServicesItem>
                <ServicesH4>UX Design</ServicesH4>
                <BulletList>
                  <BulletListItem>Competitor Research</BulletListItem>
                  <BulletListItem>Wireframing</BulletListItem>
                  <BulletListItem>Lo–Fi Prototypes</BulletListItem>
                  <BulletListItem>Hi–Fi Prototypes</BulletListItem>
                </BulletList>
              </ServicesItem>
              <ServicesItem>
                <ServicesH4>UI Design</ServicesH4>
                <BulletList>
                  <BulletListItem>Competitor Research</BulletListItem>
                  <BulletListItem>Wireframing</BulletListItem>
                  <BulletListItem>Lo–Fi Prototypes</BulletListItem>
                  <BulletListItem>Hi–Fi Prototypes</BulletListItem>
                </BulletList>
              </ServicesItem>
              <ServicesItem>
                <ServicesH4>Front&ndash;End Development</ServicesH4>
                <BulletList>
                  <BulletListItem>Competitor Research</BulletListItem>
                  <BulletListItem>Wireframing</BulletListItem>
                  <BulletListItem>Lo–Fi Prototypes</BulletListItem>
                  <BulletListItem>Hi–Fi Prototypes</BulletListItem>
                </BulletList>
              </ServicesItem>
            </StackContents>
          </AltStack>
          <Stack>
            <StackContents>
              <CaseStudiesH2>Case Studies</CaseStudiesH2>
              <Copy>
                Case studies showcasing my discovery, research, prototyping and
                designing iterative process.
              </Copy>
            </StackContents>
          </Stack>
        </Main>
        <Stack>
          <ContactCard />
        </Stack>
        <SiteFooter gray />
      </Layout>
    );
  }
}

export default Index;
