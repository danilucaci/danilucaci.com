import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { FormattedMessage } from "react-intl";
import { graphql, StaticQuery } from "gatsby";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import { PrimaryButton, GhostButton } from "../Button/Button";
import LocaleLink from "../LocaleLink/LocaleLink";

const StyledCookieConsent = styled.div`
  background-color: ${theme.colors.sectionBackground};
  display: block;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: ${rem(24)};
  ${theme.shadow.navbar};
  position: fixed;
  z-index: 10;
  will-change: transform;
  bottom: 0;
  left: 0;
  width: 100%;

  ${mediaMin.xxs`
    width: 100%;
  `};
`;

const StyledPrimaryButton = styled(PrimaryButton)`
  width: 100%;
  margin-left: ${rem(16)};
  display: block;

  ${mediaMin.xxs`
    width: ${rem(200)};
  `};
`;

const StyledGhostButton = styled(GhostButton)`
  width: 100%;
  display: block;

  ${mediaMin.xxs`
    width: ${rem(200)};
  `};
`;

const CookieConsent = (props) => {
  return (
    <StyledCookieConsent>
      <FormattedMessage id="cookieMessage">
        {(txt) => <Copy small>{txt}</Copy>}
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
            <div>
              {localizedDocsList.map((localizedDoc) => (
                <FormattedMessage id="cookieLearnMore" key={localizedDoc.title}>
                  {(txt) => (
                    <LocaleLink to={localizedDoc.slug}>{txt}</LocaleLink>
                  )}
                </FormattedMessage>
              ))}
            </div>
          );
        }}
      />

      <FormattedMessage id="cookieDeny">
        {(txt) => (
          <StyledGhostButton onClick={props.deniesCookies}>
            {txt}
          </StyledGhostButton>
        )}
      </FormattedMessage>
      <FormattedMessage id="cookieAccept">
        {(txt) => (
          <StyledPrimaryButton onClick={props.acceptsCookies}>
            {txt}
          </StyledPrimaryButton>
        )}
      </FormattedMessage>
    </StyledCookieConsent>
  );
};

CookieConsent.propTypes = {
  acceptsCookies: PropTypes.func.isRequired,
  doNotTrackActive: PropTypes.bool.isRequired,
  deniesCookies: PropTypes.func.isRequired,
  pageLocale: PropTypes.string.isRequired,
};

export default CookieConsent;

const COOKIE_CONSENT_QUERY = graphql`
  query COOKIE_CONSENT_QUERY {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          category: { eq: "legal" }
          forCookieConsent: { eq: true }
        }
      }
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
