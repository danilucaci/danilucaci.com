import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import { theme, mediaMin, mediaMax, rem } from "../theme/globalStyles";
import { Copy } from "../components/Copy/Copy";
import { HR } from "../components/HR/HR";
import { FormattedMessage } from "react-intl";

const ContactMeWrapper = styled.section`
  max-width: ${theme.contain.wrapper.col8};
  margin-left: auto;
  margin-right: auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.m`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
    margin-top: ${rem(16)};
    margin-bottom: ${rem(80)};
  `};

  ${mediaMin.xl`
    margin-top: ${rem(56)};
    margin-bottom: ${rem(144)};
  `};
`;

const StyledH1 = styled.h1`
  display: block;
  width: 100%;
  margin-bottom: ${rem(16)};
`;

const Subhead = styled(Copy)`
  font-size: ${theme.fontSizes.subheads};
  line-height: ${theme.lineHeights.subheads};
  margin-bottom: ${rem(32)};

  ${mediaMin.s`
    font-size: ${theme.fontSizes.subhead};
    line-height: ${theme.lineHeights.subhead};
  `};
`;

const StyledMailToButton = styled.a`
  background-color: ${theme.colors.main600};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.buttonLight} !important;
  display: block;

  text-align: center;
  text-decoration: none;
  font-size: ${theme.fontSizes.button};
  line-height: ${theme.lineHeights.button};
  font-style: normal;
  font-weight: 700;

  padding: ${rem(12)} ${rem(40)};
  height: ${rem(48)};
  width: 100%;

  ${mediaMin.xxs`  
    width: ${rem(288)};
  `};

  margin-top: ${rem(24)};

  ${mediaMin.m`  
    margin-top: ${rem(8)};
  `};

  white-space: nowrap;

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyBold};
  }

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${theme.colors.main500};
    ${theme.shadow.buttons.main};
  }
`;

const StyledLink = styled.a`
  display: inline;
  white-space: nowrap;
`;

const SayHiContainer = styled.div`
  margin-top: ${rem(40)};

  ${mediaMin.m`  
    margin-top: ${rem(80)};
  `};

  ${mediaMin.xl`  
    margin-top: ${rem(112)};
  `};
`;

const SayHiTitle = styled.h3`
  margin-top: ${rem(24)};

  ${mediaMin.m`  
    margin-top: ${rem(32)};
  `};
`;

const SayHiDescription = styled(Copy)`
  display: inline;
`;

const ContactPage = (props) => {
  let locale = props.pageContext.locale;
  let twinPostURL = "";
  let emailURL = "";

  if (locale === "en") {
    twinPostURL = "/es/contacto";
    emailURL = "mailto:hello@danilucaci.com";
  } else if (locale === "es") {
    emailURL = "mailto:hola@danilucaci.com";
    twinPostURL = "/contact";
  }

  return (
    <Layout location={props.location} locale={locale}>
      <SEO
        locale={locale}
        currentPage="contact"
        currentPath={props.location.pathname}
      />
      <SiteHeader
        locale={locale}
        twinPostURL={twinPostURL}
        currentPath={props.location.pathname}
      />
      <Main role="main" id="main">
        <ContactMeWrapper>
          <FormattedMessage id="contactPageTitle">
            {(txt) => <StyledH1>{txt}</StyledH1>}
          </FormattedMessage>
          <FormattedMessage id="contactPageDescription">
            {(txt) => <Subhead>{txt}</Subhead>}
          </FormattedMessage>
          <FormattedMessage id="contactPageWorkInfo">
            {(txt) => (
              <Copy>
                {txt}{" "}
                <FormattedMessage id="contactPageEmail">
                  {(txt) => <StyledLink href={emailURL}>{txt}</StyledLink>}
                </FormattedMessage>
              </Copy>
            )}
          </FormattedMessage>
          <FormattedMessage id="contactPageCTA">
            {(txt) => (
              <StyledMailToButton role="button" href={emailURL}>
                {txt}
              </StyledMailToButton>
            )}
          </FormattedMessage>
          <SayHiContainer>
            <HR />
            <FormattedMessage id="contactPageOtherTitle">
              {(txt) => <SayHiTitle>{txt}</SayHiTitle>}
            </FormattedMessage>
            <FormattedMessage id="contactPageOtherDescription">
              {(txt) => (
                <SayHiDescription>
                  {txt}
                  <FormattedMessage id="contactPageOtherDescriptionLink">
                    {(txt) => (
                      <StyledLink
                        target="_blank"
                        rel="noopener"
                        href="https://twitter.com/danilucaci"
                      >
                        {txt}
                      </StyledLink>
                    )}
                  </FormattedMessage>
                </SayHiDescription>
              )}
            </FormattedMessage>
          </SayHiContainer>
        </ContactMeWrapper>
      </Main>
      <SiteFooter locale={locale} />
    </Layout>
  );
};

ContactPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }),
};

export default ContactPage;
