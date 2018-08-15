import React, { Component } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import { Icon } from "../components/Icon/Icon";

import { theme, mediaMin, mediaMax, rem } from "../theme/globalStyles";

import { H1, H2, H3, H4 } from "../components/Headings/Headings";
import { Copy } from "../components/Copy/Copy";
import { ContactButton } from "../components/Button/Button";

const Wrapper = styled.div`
  max-width: ${theme.contain.content};
  margin-left: auto;
  margin-right: auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.m`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};

  ${mediaMin.xl`
    margin-top: ${rem(56)};
  `};
`;

const ContactWrapper = styled.section`
  ${mediaMin.l`
    display: inline-block;
    vertical-align: top;
    margin-right: ${rem(24)};
    width: calc(70% - ${rem(24)});
  `};
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
  margin-bottom: ${rem(16)};

  ${mediaMin.s`
    margin-bottom: ${rem(24)};
  `};
`;

const ContactInfo = styled.aside`
  ${mediaMin.l`
    display: inline-block;
    vertical-align: top;
    width: 30%;
  `};
`;

const ContactInfoItem = styled.div`
  ${mediaMax.l`
    display: inline-block;
    vertical-align: top;
    margin-right: ${rem(16)};
  `};

  ${mediaMin.s`
    &:first-of-type{
      margin-bottom: ${rem(24)};
    } 
  `};
`;

const PathWrapper = styled.div`
  width: 100%;
  margin-top: ${rem(32)};

  & h3 {
    margin-bottom: ${rem(24)};
  }
`;

const StyledContactButton = styled(ContactButton)`
  margin-bottom: ${rem(16)};
  width: 100%;

  ${mediaMin.m`
    display: inline-block;
    width: ${rem(256)};
    margin-right: ${rem(24)};
  `};
`;

const StyledList = styled.ul`
  list-style-type: disc;
  margin-top: ${rem(8)};
  padding-left: ${rem(20)};
`;

const StyledListItem = styled.li`
  padding-left: ${rem(4)};
`;

const MailIcon = styled(Icon)`
  margin-left: ${rem(8)};
  margin-bottom: ${rem(4)};
  fill: ${theme.colors.dark800};
`;

const TwitterIcon = styled(Icon)`
  margin-left: ${rem(8)};
  margin-bottom: ${rem(4)};
  fill: ${theme.colors.social.twitter};
`;

class ContactPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Wrapper>
          <Helmet title={`Contact Me || ${config.siteTitle}`} />
          <SEO />
          <StyledH1>Let's talk</StyledH1>
          <ContactWrapper>
            <Subhead>
              If you have a project in mind and you think my services would
              help, or you simply want to know more about me or what I do, feel
              free to send me a message.
            </Subhead>
          </ContactWrapper>
          <ContactInfo>
            <ContactInfoItem>
              <H4>I prefer email for:</H4>
              <StyledList>
                <StyledListItem>Everything work related</StyledListItem>
                <StyledListItem>
                  Project or colaboration proposals
                </StyledListItem>
                <StyledListItem>Longer messages</StyledListItem>
              </StyledList>
            </ContactInfoItem>
            <ContactInfoItem>
              <H4>I prefer twitter for:</H4>
              <StyledList>
                <StyledListItem>Everything else</StyledListItem>
              </StyledList>
            </ContactInfoItem>
          </ContactInfo>
          <PathWrapper>
            <H3>Choose your path</H3>
            <StyledContactButton>
              Email
              <MailIcon>
                <use xlinkHref="#mail" />
              </MailIcon>
            </StyledContactButton>
            <StyledContactButton>
              Tweet
              <TwitterIcon>
                <use xlinkHref="#twitter" />
              </TwitterIcon>
            </StyledContactButton>
          </PathWrapper>
        </Wrapper>
      </Layout>
    );
  }
}

export default ContactPage;
