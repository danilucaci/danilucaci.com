import React, { useContext } from "react";
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
import LocaleContext from "../../i18n/LocaleContext";
import { CookiesContext } from "../../context/CookiesContext";

const CookieConsent = () => {
  const [
    { isTransitioning, openCookieConsent },
    dispatch,
    { setAcceptedCookies, setDeniedCookies },
  ] = useContext(CookiesContext);

  const { locale } = useContext(LocaleContext);
  // eslint-disable-next-line no-use-before-define
  const data = useStaticQuery(COOKIE_CONSENT_QUERY);
  const localizedDocsList = data.allMdx.edges
    .map((edge) => ({
      slug: edge.node.fields.slug,
      title: edge.node.frontmatter.title,
      locale: edge.node.frontmatter.locale,
    }))
    .filter((edge) => edge.locale === locale);

  return (
    <StyledCookieConsent
      isTransitioning={isTransitioning}
      showConsent={openCookieConsent}
    >
      <CopyContainer>
        <FormattedMessage id="cookie.message">
          {(txt) => <StyledCopy>{txt} </StyledCopy>}
        </FormattedMessage>
        {localizedDocsList.map((localizedDoc) => (
          <FormattedMessage id="cookie.learn.link" key={localizedDoc.title}>
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
        <FormattedMessage id="cookie.accept.copy">
          {(txt) => (
            <StyledPrimaryButton
              aria-label={`${txt} cookies`}
              onClick={() => dispatch(setAcceptedCookies())}
            >
              {txt}
            </StyledPrimaryButton>
          )}
        </FormattedMessage>
        <FormattedMessage id="cookie.deny.copy">
          {(txt) => (
            <StyledOutlinedButton
              aria-label={`${txt} cookies`}
              onClick={() => dispatch(setDeniedCookies())}
            >
              {txt}
            </StyledOutlinedButton>
          )}
        </FormattedMessage>
      </ButtonsContainer>
    </StyledCookieConsent>
  );
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
