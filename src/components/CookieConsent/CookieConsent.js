import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { FormattedMessage } from "react-intl";
import { graphql, StaticQuery } from "gatsby";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import { TertiaryButton, PrimaryButtonSmall } from "../Button/Button";
import LocaleLink from "../LocaleLink/LocaleLink";

const StyledCookieConsent = styled.aside`
  background-color: ${theme.colors.gray100};
  border-top: ${rem(8)} solid ${theme.colors.main600};
  display: block;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ${theme.shadow.mobileCookieConsent};

  padding: ${rem(8)} ${rem(16)} ${rem(24)};
  position: fixed;
  z-index: 10;
  will-change: transform;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;

  ${mediaMin.m`
    border-left: 8px solid ${theme.colors.main600};
    border-top: 1px solid ${theme.colors.gray400};
    border-bottom: 1px solid ${theme.colors.gray400};
    border-right: 1px solid ${theme.colors.gray400};
    border-radius: 3px;

    flex-direction: row;
    bottom: ${rem(20)};
    padding: ${rem(10)} ${rem(10)} ${rem(10)} ${rem(16)};
    width: 96%;
    max-width: 64em;
    margin-left: auto;
    margin-right: auto;
    ${theme.shadow.dropdown};
  `};
`;

const LearnMoreLink = styled(LocaleLink)`
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

const CopyContainer = styled.div`
  width: 100%;

  ${mediaMin.m`
    flex-grow: 3;
  `};
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-top: ${rem(24)};

  ${mediaMin.m`
    margin-top: 0;
    margin-left: ${rem(16)};
    flex-grow: 1;
  `};
`;

const StyledGhostButton = styled(TertiaryButton)``;

const StyledPrimaryButton = styled(PrimaryButtonSmall)`
  margin-left: ${rem(16)};
`;

const CookieConsent = (props) => {
  return (
    <StyledCookieConsent>
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
              <>
                {localizedDocsList.map((localizedDoc) => (
                  <FormattedMessage
                    id="cookieLearnMore"
                    key={localizedDoc.title}
                  >
                    {(txt) => (
                      <LearnMoreLink to={localizedDoc.slug}>
                        {txt}
                      </LearnMoreLink>
                    )}
                  </FormattedMessage>
                ))}
              </>
            );
          }}
        />
      </CopyContainer>

      <ButtonsContainer>
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
      </ButtonsContainer>
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
