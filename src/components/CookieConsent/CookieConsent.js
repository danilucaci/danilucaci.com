import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { graphql, StaticQuery } from "gatsby";

import {
  StyledCookieConsent,
  LearnMoreLink,
  StyledCopy,
  CopyContainer,
  ButtonsContainer,
  StyledPrimaryButton,
  StyledGhostButton,
} from "./styles";

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
