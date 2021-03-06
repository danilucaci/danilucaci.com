import React, { useContext, useEffect, useRef } from "react";
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

function CookieConsent() {
  const [
    { isTransitioning, openCookieConsent },
    dispatch,
    { setAcceptedCookies, setDeniedCookies, removeTransition },
  ] = useContext(CookiesContext);

  const consentRef = useRef(null);

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

  useEffect(() => {
    let mounted = true;
    const nodeRef = consentRef.current;

    function handleTransitionEnd() {
      if (mounted) {
        nodeRef.removeEventListener("transitionend", handleTransitionEnd);
        dispatch(removeTransition());
      }
    }

    if (isTransitioning) {
      if (nodeRef) {
        nodeRef.addEventListener("transitionend", handleTransitionEnd);
      } else {
        setTimeout(() => {
          if (mounted) {
            dispatch(removeTransition());
          }
        }, 400);
      }
    }

    return () => {
      mounted = false;

      if (nodeRef) {
        nodeRef.removeEventListener("transitionend", handleTransitionEnd);
      }
    };
  }, [isTransitioning, removeTransition, dispatch]);

  return (
    <StyledCookieConsent
      isTransitioning={isTransitioning}
      showConsent={openCookieConsent}
      ref={consentRef}
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
}

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
