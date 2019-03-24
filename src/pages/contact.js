import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import { theme, mediaMin, rem } from "../theme/globalStyles";
import { Copy } from "../components/Copy/Copy";
import { HR } from "../components/HR/HR";
import ContactForm from "../components/ContactForm/ContactForm";
import SocialNav from "../components/SocialNav/SocialNav";
import { localePaths } from "../i18n/i18n";

const ContactMeWrapper = styled.section`
  max-width: ${theme.contain.wrapper.col10};
  margin-top: ${rem(24)};
  margin-bottom: ${rem(64)};
  margin-left: auto;
  margin-right: auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.m`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
    margin-top: ${rem(40)};
    margin-bottom: ${rem(80)};
  `};
`;

const ContactMeHeader = styled.header`
  ${mediaMin.m`
    max-width: ${rem(640)};
    margin-left: auto;
    margin-right: auto;
  `};

  ${mediaMin.xxl`
    display: inline-block;
    vertical-align: top;
    width: calc(45% - ${rem(24)});
  `};
`;

const ContactFormWrapper = styled.div`
  ${mediaMin.m`
    max-width: ${rem(640)};
    margin-left: auto;
    margin-right: auto;
  `};

  ${mediaMin.xxl`
    display: inline-block;
    vertical-align: top;
    width: 55%;
    margin-top: -${rem(24)};
    margin-left: ${rem(24)};
  `};
`;

const TopHR = styled(HR)`
  margin-top: ${rem(32)};
  margin-bottom: ${rem(24)};

  ${mediaMin.xxl`
      display: none;
  `};
`;

const StyledH1 = styled.h1`
  display: block;
  width: 100%;
  margin-bottom: ${rem(8)};
  margin-left: auto;
  margin-right: auto;

  max-width: ${rem(640)};

  ${mediaMin.xxl`
    max-width: auto;
    margin-left: 0;
    margin-right: 0;
  `};
`;

const Subhead = styled(Copy)`
  font-size: ${theme.fontSizes.subheadS};
  line-height: ${theme.lineHeights.subheadS};
  margin-bottom: ${rem(16)};
  color: ${theme.colors.dark700};

  ${mediaMin.s`
    font-size: ${rem(24)};
    line-height: ${rem(34)};
  `};

  ${mediaMin.xxl`
    margin-bottom: ${rem(32)};
  `};
`;

const Description = styled(Copy)`
  margin-bottom: ${rem(16)};

  ${mediaMin.xxl`
    margin-bottom: ${rem(32)};
  `};
`;

const StyledLink = styled.a`
  display: inline;
  white-space: nowrap;
`;

const SayHiWrapper = styled.div`
  margin-top: ${rem(48)};
  width: 100%;
  margin-top: ${rem(32)};

  ${mediaMin.m`
    max-width: ${rem(640)};
    margin-left: auto;
    margin-right: auto;
  `};

  ${mediaMin.xxl`
    max-width: 100%;
    margin-top: ${rem(64)};
    margin-left: 0;
    margin-right: 0;
  `};
`;

const SayHiTitle = styled.h3`
  margin-top: ${rem(24)};
  margin-bottom: ${rem(8)};

  ${mediaMin.m`  
    margin-top: ${rem(32)};
  `};
`;

const SayHiDescription = styled(Copy)`
  display: inline;
`;

const BottomHR = styled(HR)`
  margin-top: ${rem(24)};

  ${mediaMin.m`  
    margin-top: ${rem(32)};
  `};
`;

const SocialNavWrapper = styled.div`
  margin-top: ${rem(16)};
  margin-bottom: ${rem(64)};

  ${mediaMin.xxl`
    margin-bottom: ${rem(112)};
  `};
`;

const ContactPage = (props) => {
  let locale = props.pageContext.locale;
  let twinPostURL = "";

  if (locale === "en") {
    twinPostURL = localePaths["es"].contact;
  } else if (locale === "es") {
    twinPostURL = localePaths["en"].contact;
  }

  return (
    <Layout location={props.location} locale={locale}>
      <SEO
        locale={locale}
        twinPostURL={twinPostURL}
        currentPage="contact"
        currentPath={props.location.pathname}
      />
      <SiteHeader locale={locale} twinPostURL={twinPostURL} currentPath={props.location.pathname} />
      <Main role="main" id="main">
        <ContactMeWrapper>
          <FormattedMessage id="contactPageTitle">
            {(txt) => <StyledH1>{txt}</StyledH1>}
          </FormattedMessage>
          <ContactMeHeader>
            <FormattedMessage id="contactPageSubhead">
              {(txt) => <Subhead>{txt}</Subhead>}
            </FormattedMessage>
            <FormattedMessage id="contactPageDescription">
              {(txt) => <Description>{txt}</Description>}
            </FormattedMessage>
            <FormattedMessage id="contactPageWorkInfo">
              {(txt) => (
                <Copy>
                  {txt}{" "}
                  <StyledLink href="mailto:info@danilucaci.com">info@danilucaci.com</StyledLink>
                </Copy>
              )}
            </FormattedMessage>
          </ContactMeHeader>
          <ContactFormWrapper>
            <TopHR />
            <ContactForm locale={locale} />
          </ContactFormWrapper>
          <SayHiWrapper>
            <HR />
            <FormattedMessage id="contactPageOtherTitle">
              {(txt) => <SayHiTitle>{txt}</SayHiTitle>}
            </FormattedMessage>
            <FormattedMessage id="contactPageOtherDescription">
              {(txt) => (
                <SayHiDescription>
                  {txt}
                  <FormattedMessage id="contactPageOtherDescriptionLink">
                    {(txt2) => (
                      <StyledLink
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/danilucaci"
                      >
                        {txt2}
                      </StyledLink>
                    )}
                  </FormattedMessage>
                </SayHiDescription>
              )}
            </FormattedMessage>
            <BottomHR />
            <SocialNavWrapper>
              <SocialNav />
            </SocialNavWrapper>
          </SayHiWrapper>
        </ContactMeWrapper>
      </Main>
      <SiteFooter locale={locale} />
    </Layout>
  );
};

ContactPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactPage;
