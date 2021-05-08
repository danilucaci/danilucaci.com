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

function getLinkTypeFromEdges(edges = [], linkType = "privacy", locale = "en") {
  return edges
    .map((edge) => ({
      slug: edge.node.fields.slug,
      locale: edge.node.frontmatter.locale,
      [linkType]: edge.node.frontmatter[linkType],
    }))
    .filter((edge) => edge.locale === locale && edge[linkType] === true);
}

function PrivacyCheckbox({ ...props }) {
  // eslint-disable-next-line no-use-before-define
  const data = useStaticQuery(PRIVACY_CHECKBOX_QUERY);
  const { locale } = useContext(LocaleContext);

  const intl = useIntl();

  const ariaLabel =
    locale === "en"
      ? "I have read and accept the legal notice and the privacy policy"
      : "He leído y accepto el aviso legal y la política de privacidad";

  const legalNoticeLink = getLinkTypeFromEdges(
    data.allMdx.edges,
    "legalNotice",
    locale,
  );

  const privacyLink = getLinkTypeFromEdges(
    data.allMdx.edges,
    "privacy",
    locale,
  );

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
