import React, { Component } from "react";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import config from "../../data/SiteConfig";

import styled from "styled-components";

import { theme, mediaMin, rem, breakpoints } from "../theme/globalStyles";
import { H1, H2, H3, H4 } from "../components/Headings/Headings";
import { Copy } from "../components/Copy/Copy";
import { ContactButton, PrimaryButton } from "../components/Button/Button";

const Wrapper = styled.div`
  max-width: ${theme.contain.content};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${rem(56)};

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};
`;

const ContactWrapper = styled.section`
  outline: 1px solid red;

  ${mediaMin.s`
    display: inline-block;
    vertical-align: top;
    margin-right: ${rem(24)};
    width: calc(70% - ${rem(24)});
  `};
`;

const ContactInfo = styled.aside`
  outline: 1px solid red;

  ${mediaMin.m`
    display: inline-block;
    vertical-align: top;
    width: 30%;
  `};
`;

const PathWrapper = styled.div`
  width: 100%;
  margin-top: ${rem(32)};

  & h3 {
    margin-bottom: ${rem(24)};
  }

  ${mediaMin.m`
    margin-right: ${rem(24)};
    display: inline-block;
    vertical-align: top;
    width: calc(70% - ${rem(24)});
  `};
`;

const StyledContactButton = styled(ContactButton)`
  margin-right: ${rem(16)};
  margin-bottom: ${rem(16)};
  width: ${rem(288)};
`;

const StyledPrimaryButton = styled(PrimaryButton)`
  margin-right: ${rem(16)};
  width: ${rem(288)};
`;

const Subhead = styled(Copy)`
  font-size: ${theme.fontSizes.subheads};
  line-height: ${theme.lineHeights.subheads};
  margin-bottom: ${rem(28)};

  ${mediaMin.s`
    font-size: ${theme.fontSizes.subhead};
    line-height: ${theme.lineHeights.subhead};
  `};
`;

const StyledH1 = styled(H1)`
  display: block;
  width: 100%;

  outline: 1px solid red;
`;

const StyledH4 = styled(H4)`
  margin-top: ${rem(24)};
`;

const StyledList = styled.ul`
  list-style-type: disc;
  margin-top: ${rem(8)};
  padding-left: ${rem(20)};
`;

const StyledListItem = styled.li`
  padding-left: ${rem(4)};
`;

class ContactPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Wrapper>
          <Helmet title={`About | ${config.siteTitle}`} />
          <StyledH1>Let's talk</StyledH1>
          <ContactWrapper>
            <Subhead>
              If you have a project in mind and you think my services would
              help, or you simply want to know more about me or what I do, feel
              free to send me a message.
            </Subhead>
          </ContactWrapper>
          <ContactInfo>
            <StyledH4>I prefer email for:</StyledH4>
            <StyledList>
              <StyledListItem>Everything work related</StyledListItem>
              <StyledListItem>Project or colaboration proposals</StyledListItem>
              <StyledListItem>Longer messages</StyledListItem>
            </StyledList>
            <StyledH4>I prefer twitter for:</StyledH4>
            <StyledList>
              <StyledListItem>Everything else</StyledListItem>
            </StyledList>
          </ContactInfo>
          <PathWrapper>
            <H3>Choose your path</H3>
            <StyledContactButton>Email</StyledContactButton>
            <StyledContactButton>Tweet</StyledContactButton>
            <StyledPrimaryButton>Tweet</StyledPrimaryButton>
          </PathWrapper>
        </Wrapper>
      </Layout>
    );
  }
}

export default ContactPage;
