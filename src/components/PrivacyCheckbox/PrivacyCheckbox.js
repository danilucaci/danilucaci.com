import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { FormattedMessage } from "react-intl";
import { graphql, StaticQuery } from "gatsby";

import { theme, rem } from "../../theme/globalStyles";
import { Checkbox } from "../Checkbox/Checkbox";

const StyledCheckboxLabel = styled.label`
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  display: inline-block;
  margin-top: ${rem(8)};
  margin-bottom: ${rem(8)};
  display: inline-block;
`;

const StyledCheckbox = styled(Checkbox)`
  display: inline-block;
  margin-right: ${rem(8)};

  &:not(:checked) {
    & ~ input {
      pointer-events: none !important;
      background-color: ${theme.colors.dark700};
      color: ${theme.colors.gray100};

      &:hover,
      &:focus {
        background-color: ${theme.colors.dark700};
        box-shadow: none;
        cursor: not-allowed;
      }
    }
  }

  &:checked {
    & ~ input {
      pointer-events: auto;
    }
  }
`;

const Required = styled.span`
  display: inline-block;
  margin-left: ${rem(6)};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  color: ${theme.colors.dark900};
`;

const AndSpan = styled.span`
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  display: inline;
`;

const LearnMoreLink = styled.a`
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  display: inline;
  margin-left: ${rem(5)};
  color: ${theme.colors.dark800} !important;

  &:hover {
    background-color: ${theme.colors.gray300} !important;
  }
`;

function PrivacyCheckbox({ locale, ...rest }) {
  return (
    <StaticQuery
      query={PRIVACY_CHECKBOX_QUERY}
      render={(data) => {
        let legalNoticeLink = data.allMarkdownRemark.edges
          .map((edge) => ({
            slug: edge.node.fields.slug,
            locale: edge.node.frontmatter.locale,
            legalNotice: edge.node.frontmatter.legalNotice,
          }))
          .filter(
            (edge) => edge.locale === locale && edge.legalNotice === true
          );

        let privacyLink = data.allMarkdownRemark.edges
          .map((edge) => ({
            slug: edge.node.fields.slug,
            locale: edge.node.frontmatter.locale,
            privacy: edge.node.frontmatter.privacy,
          }))
          .filter((edge) => edge.locale === locale && edge.privacy === true);

        return (
          <>
            <StyledCheckbox id="privacycheckbox" {...rest} />
            <StyledCheckboxLabel htmlFor="privacycheckbox">
              <FormattedMessage id="formPrivacyMore1">
                {(txt) => <>{txt}</>}
              </FormattedMessage>
              <FormattedMessage id="formPrivacyCheckboxHiddenLabel">
                {(txt) => (
                  <span className="aria-hidden" aria-hidden="true">
                    {txt}
                  </span>
                )}
              </FormattedMessage>
            </StyledCheckboxLabel>
            <FormattedMessage id="formPrivacyMore2">
              {(txt) => (
                <LearnMoreLink
                  href={legalNoticeLink[0].slug}
                  target="_blank"
                  rel="noopener"
                >
                  {txt}
                </LearnMoreLink>
              )}
            </FormattedMessage>
            <FormattedMessage id="formPrivacyMore3">
              {(txt) => <AndSpan>{txt}</AndSpan>}
            </FormattedMessage>
            <FormattedMessage id="formPrivacyMore4">
              {(txt) => (
                <LearnMoreLink
                  href={privacyLink[0].slug}
                  target="_blank"
                  rel="noopener"
                >
                  {txt}
                </LearnMoreLink>
              )}
            </FormattedMessage>
            <FormattedMessage id="formPrivacyRequired">
              {(txt) => <Required>{txt}</Required>}
            </FormattedMessage>
          </>
        );
      }}
    />
  );
}

PrivacyCheckbox.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default PrivacyCheckbox;

const PRIVACY_CHECKBOX_QUERY = graphql`
  query PRIVACY_CHECKBOX_QUERY {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "legal" } } }) {
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
