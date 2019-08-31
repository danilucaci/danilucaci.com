import React from "react";
import { bool, func, string } from "prop-types";
import { FormattedMessage } from "react-intl";
import { graphql, useStaticQuery } from "gatsby";

import {
  StyledCookieConsent,
  LearnMoreLink,
  StyledCopy,
  CopyContainer,
  ButtonsContainer,
  StyledPrimaryButton,
  StyledOutlinedButton,
} from "./styles";

const CookieConsent = (props) => {
  const data = useStaticQuery(COOKIE_CONSENT_QUERY);
  const localizedDocsList = data.allMdx.edges
    .map((edge) => ({
      slug: edge.node.fields.slug,
      title: edge.node.frontmatter.title,
      locale: edge.node.frontmatter.locale,
    }))
    .filter((edge) => edge.locale === props.pageLocale);

  return (
    <StyledCookieConsent
      isTransitioning={props.isTransitioning}
      showConsent={props.openCookieConsent}
    >
      <CopyContainer>
        <FormattedMessage id="cookie.message">
          {(txt) => <StyledCopy>{txt} </StyledCopy>}
        </FormattedMessage>
        {localizedDocsList.map((localizedDoc) => (
          <FormattedMessage id="cookie.learn.more" key={localizedDoc.title}>
            {(txt) => (
              <LearnMoreLink
                to={localizedDoc.slug}
                target="_blank"
                rel="noopener noreferrer"
              >
                {txt}
              </LearnMoreLink>
            )}
          </FormattedMessage>
        ))}
      </CopyContainer>

      <ButtonsContainer>
        <FormattedMessage id="cookie.accept">
          {(txt) => (
            <StyledPrimaryButton onClick={props.acceptedCookies}>
              {txt}
            </StyledPrimaryButton>
          )}
        </FormattedMessage>
        <FormattedMessage id="cookie.deny">
          {(txt) => (
            <StyledOutlinedButton onClick={props.deniedCookies}>
              {txt}
            </StyledOutlinedButton>
          )}
        </FormattedMessage>
      </ButtonsContainer>
    </StyledCookieConsent>
  );
};

CookieConsent.propTypes = {
  openCookieConsent: bool.isRequired,
  isTransitioning: bool.isRequired,
  acceptedCookies: func.isRequired,
  deniedCookies: func.isRequired,
  pageLocale: string.isRequired,
};

export default CookieConsent;

const COOKIE_CONSENT_QUERY = graphql`
  query COOKIE_CONSENT_QUERY {
    allMdx(
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
