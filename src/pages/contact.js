import React from "react";
import styled, { css } from "styled-components";
import Helmet from "react-helmet";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import { Icon } from "../components/Icon/Icon";
import { theme, mediaMin, mediaMax, rem } from "../theme/globalStyles";
import intlMessages from "../i18n/i18n";
import { Copy } from "../components/Copy/Copy";
import { PrimaryButton } from "../components/Button/Button";

const ContactMeWrapper = styled.div`
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

const Subhead = styled(Copy)`
  font-size: ${theme.fontSizes.subheads};
  line-height: ${theme.lineHeights.subheads};
  margin-bottom: ${rem(28)};

  ${mediaMin.s`
    font-size: ${theme.fontSizes.subhead};
    line-height: ${theme.lineHeights.subhead};
  `};

  ${mediaMin.l`
    display: inline-block;
    vertical-align: top;
    margin-right: ${rem(24)};
    width: calc(70% - ${rem(24)});
  `};
`;

const StyledH1 = styled.h1`
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

  ${(props) =>
    props.separate &&
    css`
      margin-bottom: ${rem(24)};
    `};
`;

const PathWrapper = styled.div`
  width: 100%;
  margin-top: ${rem(32)};

  & h3 {
    margin-bottom: ${rem(24)};
  }
`;

const StyledPrimaryButton = styled(PrimaryButton)`
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
  fill: ${theme.colors.dark800};
  margin-left: ${rem(8)};
  margin-bottom: ${rem(4)};
`;

const TwitterIcon = styled(Icon)`
  margin-left: ${rem(8)};
  margin-bottom: ${rem(4)};
  fill: ${theme.colors.social.twitter};
`;

const ContactPage = (props) => {
  let lang = props.pageContext.locale;
  let changeLanguage = "";

  if (lang === "en") {
    changeLanguage = "/es/contacto";
  } else if (lang === "es") {
    changeLanguage = "/contact";
  }

  return (
    <Layout location={props.location} locale={props.pageContext.locale}>
      <Helmet
        title={`${
          intlMessages[props.pageContext.locale].meta.contactMetaTitle
        }`}
      />

      <SEO />
      <SiteHeader locale={props.pageContext.locale} />
      <Main role="main">
        <ContactMeWrapper>
          <StyledH1>Let's talk</StyledH1>
          <Subhead>
            If you have a project in mind and you think my services would help,
            or you simply want to know more about me or what I do, feel free to
            send me a message.
          </Subhead>
          <ContactInfo>
            <ContactInfoItem separate>
              <h4>I prefer email for:</h4>
              <StyledList>
                <StyledListItem>Everything work related</StyledListItem>
                <StyledListItem>
                  Project or colaboration proposals
                </StyledListItem>
                <StyledListItem>Longer messages</StyledListItem>
              </StyledList>
            </ContactInfoItem>
            <ContactInfoItem>
              <h4>I prefer twitter for:</h4>
              <StyledList>
                <StyledListItem>Everything else</StyledListItem>
              </StyledList>
            </ContactInfoItem>
          </ContactInfo>
          <PathWrapper>
            <h3>Choose your path:</h3>
            <StyledPrimaryButton>
              <a href={theme.mailToLink}>
                Email
                <MailIcon>
                  <use xlinkHref="#mail" />
                </MailIcon>
              </a>
            </StyledPrimaryButton>
            <StyledPrimaryButton>
              <a
                href="https://twitter.com/messages/compose?recipient_id=734468984658071554&ref_src=twsrc%5Etfw"
                data-screen-name="@danilucaci"
                data-show-count="false"
              >
                Tweet
                <TwitterIcon>
                  <use xlinkHref="#twitter" />
                </TwitterIcon>
              </a>
            </StyledPrimaryButton>
          </PathWrapper>
        </ContactMeWrapper>
      </Main>
      <SiteFooter changeLanguage={changeLanguage} />
    </Layout>
  );
};

export default ContactPage;
