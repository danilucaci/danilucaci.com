import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { graphql, StaticQuery } from "gatsby";

import { theme, mediaMin, mediaMax, rem } from "../../theme/globalStyles";
import { Checkbox } from "../Checkbox/Checkbox";
import ExternalLocaleLink from "../ExternalLocaleLink/ExternalLocaleLink";

const StyledCheckboxWrapper = styled.span`
  display: inline-block;
  margin-top: ${rem(12)};
  margin-bottom: ${rem(12)};
  width: 100%;
`;

const StyledCheckboxLabel = styled.label`
  display: inline;
`;

const StyledCheckbox = styled(Checkbox)`
  display: inline-block;
  margin-right: ${rem(8)};
`;

const Required = styled.span`
  display: inline-block;
  margin-left: ${rem(8)};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  color: ${theme.colors.dark700};
`;

const LearnMoreLink = styled(ExternalLocaleLink)`
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s} !important;
  display: inline;
  white-space: nowrap;
`;

function PrivacyCheckbox({ locale, ...rest }) {
  return (
    <StyledCheckboxWrapper>
      <StyledCheckboxLabel>
        <StyledCheckbox {...rest} />
        <FormattedMessage id="formPrivacyMore1">
          {(txt) => <>{txt}</>}
        </FormattedMessage>
      </StyledCheckboxLabel>
      <StaticQuery
        query={PRIVACY_CHECKBOX_QUERY}
        render={(data) => {
          let localizedDocsList = data.allMarkdownRemark.edges
            .map((edge) => ({
              slug: edge.node.fields.slug,
              title: edge.node.frontmatter.title,
              locale: edge.node.frontmatter.locale,
            }))
            .filter((edge) => edge.locale === locale);
          return (
            <>
              {localizedDocsList.map((localizedDoc) => (
                <FormattedMessage
                  id="formPrivacyMore2"
                  key={localizedDoc.title}
                >
                  {(txt) => (
                    <LearnMoreLink
                      href={localizedDoc.slug}
                      target="_blank"
                      rel="noopener"
                    >
                      {txt}
                    </LearnMoreLink>
                  )}
                </FormattedMessage>
              ))}
            </>
          );
        }}
      />
      <FormattedMessage id="formPrivacyRequired">
        {(txt) => <Required>{txt}</Required>}
      </FormattedMessage>
    </StyledCheckboxWrapper>
  );
}

PrivacyCheckbox.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default PrivacyCheckbox;

const PRIVACY_CHECKBOX_QUERY = graphql`
  query PRIVACY_CHECKBOX_QUERY {
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
