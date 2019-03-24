import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { graphql, StaticQuery } from "gatsby";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import { DarkGhostButton, PrimaryButton } from "../Button/Button";
import { DefaultLink } from "../Link/Link";

const StyledCookieConsent = styled.aside`
  background-color: ${theme.colors.gray100};
  border-top: ${rem(8)} solid ${theme.colors.main600};
  display: ${(props) => (props.showConsent ? "block" : "none")};

  padding: ${rem(16)} ${rem(24)} ${rem(24)};
  position: fixed;
  z-index: 10;
  will-change: transform;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;

  ${theme.shadow.mobileCookieConsent};

  ${mediaMin.s`
    border: 2px solid ${theme.colors.gray400};
    border-radius: 4px;
    bottom: ${rem(16)};
    left: ${rem(16)};
    max-width: ${rem(340)};
    ${theme.shadow.dropdown};
  `};
`;

const LearnMoreLink = styled(DefaultLink)`
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s} !important;
  display: inline;
  white-space: nowrap;
`;

const StyledCopy = styled(Copy)`
  display: inline;
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s} !important;
`;

const CopyContainer = styled.div``;

const ButtonsContainer = styled.div`
  display: block;
  width: 100%;
  margin-top: ${rem(24)};

  ${mediaMin.m`
    margin-top: ${rem(40)};  
  `};
`;

const StyledPrimaryButton = styled(PrimaryButton)`
  display: block;
`;

const StyledGhostButton = styled(DarkGhostButton)`
  display: block;
  width: 100%;
  margin-top: ${rem(8)};
`;

const CookieConsent = (props) => (
  <StyledCookieConsent showConsent={props.askCookieConsent}>
    <CopyContainer>
      <FormattedMessage id="cookieMessage">
        {(txt) => <StyledCopy>{txt} </StyledCopy>}
      </FormattedMessage>
      <StaticQuery
        query={COOKIE_CONSENT_QUERY}
        render={(data) => {
          let localizedDocsList = data.allMarkdownRemark.edges
            .map((edge) => ({
              slug: edge.node.fields.slug,
              title: edge.node.frontmatter.title,
              locale: edge.node.frontmatter.locale,
            }))
            .filter((edge) => edge.locale === props.pageLocale);

          return (
            <React.Fragment>
              {localizedDocsList.map((localizedDoc) => (
                <FormattedMessage id="cookieLearnMore" key={localizedDoc.title}>
                  {(txt) => (
                    <LearnMoreLink to={localizedDoc.slug} target="_blank" rel="noopener noreferrer">
                      {txt}
                    </LearnMoreLink>
                  )}
                </FormattedMessage>
              ))}
            </React.Fragment>
          );
        }}
      />
    </CopyContainer>

    <ButtonsContainer>
      <FormattedMessage id="cookieAccept">
        {(txt) => <StyledPrimaryButton onClick={props.acceptsCookies}>{txt}</StyledPrimaryButton>}
      </FormattedMessage>
      <FormattedMessage id="cookieDeny">
        {(txt) => <StyledGhostButton onClick={props.deniesCookies}>{txt}</StyledGhostButton>}
      </FormattedMessage>
    </ButtonsContainer>
  </StyledCookieConsent>
);

CookieConsent.propTypes = {
  askCookieConsent: PropTypes.bool.isRequired,
  acceptsCookies: PropTypes.func.isRequired,
  deniesCookies: PropTypes.func.isRequired,
  pageLocale: PropTypes.string.isRequired,
};

export default CookieConsent;

const COOKIE_CONSENT_QUERY = graphql`
  query COOKIE_CONSENT_QUERY {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "legal" }, forCookieConsent: { eq: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            locale
          }
        }
      }
    }
  }
`;
