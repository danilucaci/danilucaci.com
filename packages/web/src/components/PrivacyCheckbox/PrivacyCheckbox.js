import React, { useContext } from "react";
import { useIntl } from "react-intl";
import { graphql, useStaticQuery } from "gatsby";

import {
  StyledCheckboxLabel,
  StyledCheckbox,
  Required,
  AndSpan,
  LearnMoreLink,
} from "./styles";
import LocaleContext from "../../i18n/LocaleContext";

function PrivacyCheckbox({ ...props }) {
  // eslint-disable-next-line no-use-before-define
  const data = useStaticQuery(PRIVACY_CHECKBOX_QUERY);
  const { locale } = useContext(LocaleContext);

  const intl = useIntl();

  const ariaLabel =
    locale === "en"
      ? "I have read and accept the legal notice and the privacy policy"
      : "He leído y accepto el aviso legal y la política de privacidad";

  let legalNoticeLink = data.allMdx.edges
    .map((edge) => ({
      slug: edge.node.fields.slug,
      locale: edge.node.frontmatter.locale,
      legalNotice: edge.node.frontmatter.legalNotice,
    }))
    .filter((edge) => edge.locale === locale && edge.legalNotice === true);

  let privacyLink = data.allMdx.edges
    .map((edge) => ({
      slug: edge.node.fields.slug,
      locale: edge.node.frontmatter.locale,
      privacy: edge.node.frontmatter.privacy,
    }))
    .filter((edge) => edge.locale === locale && edge.privacy === true);

  return (
    <>
      <StyledCheckbox
        id="privacycheckbox"
        aria-label={ariaLabel}
        type="checkbox"
        {...props}
      />
      <StyledCheckboxLabel htmlFor="privacycheckbox">
        {intl.formatMessage({ id: "form.privacy.more.1" })}
        <span className="aria-hidden" aria-hidden="true">
          {intl.formatMessage({ id: "form.privacy.checkbox.hidden.label" })}
        </span>
      </StyledCheckboxLabel>
      <LearnMoreLink
        href={legalNoticeLink[0].slug}
        target="_blank"
        rel="noopener noreferrer"
      >
        {intl.formatMessage({ id: "form.privacy.more.2" })}
      </LearnMoreLink>
      <AndSpan>{intl.formatMessage({ id: "form.privacy.more.3" })}</AndSpan>
      <LearnMoreLink
        href={privacyLink[0].slug}
        target="_blank"
        rel="noopener noreferrer"
      >
        {intl.formatMessage({ id: "form.privacy.more.4" })}
      </LearnMoreLink>
      <Required>{intl.formatMessage({ id: "form.privacy.required" })}</Required>
    </>
  );
}

export default PrivacyCheckbox;

export const PRIVACY_CHECKBOX_QUERY = graphql`
  query PRIVACY_CHECKBOX_QUERY {
    allMdx(filter: { frontmatter: { category: { eq: "legal" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            locale
            legalNotice
            privacy
          }
        }
      }
    }
  }
`;
