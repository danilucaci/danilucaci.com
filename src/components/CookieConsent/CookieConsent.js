import React, { useContext } from "react";
import { useIntl } from "react-intl";
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

  const intl = useIntl();

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
        <StyledCopy>{intl.formatMessage({ id: "cookie.message" })} </StyledCopy>
        {localizedDocsList.map((localizedDoc) => (
          <LearnMoreLink
            key={localizedDoc.title}
            to={localizedDoc.slug}
            target="_blank"
            rel="noopener noreferrer"
          >
            {intl.formatMessage({ id: "cookie.learn.link" })}
          </LearnMoreLink>
        ))}
      </CopyContainer>

      <ButtonsContainer>
        <StyledPrimaryButton
          aria-label={`${intl.formatMessage({
            id: "cookie.accept.copy",
          })} cookies`}
          onClick={() => dispatch(setAcceptedCookies())}
        >
          {intl.formatMessage({ id: "cookie.accept.copy" })}
        </StyledPrimaryButton>

        <StyledOutlinedButton
          aria-label={`${intl.formatMessage({
            id: "cookie.deny.copy",
          })} cookies`}
          onClick={() => dispatch(setDeniedCookies())}
        >
          {intl.formatMessage({ id: "cookie.deny.copy" })}
        </StyledOutlinedButton>
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
