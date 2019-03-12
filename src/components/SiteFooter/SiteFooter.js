import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import { FormattedMessage } from "react-intl";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { LightSecondaryLink } from "../Link/Link";
import { Copy, CopyBold } from "../Copy/Copy";
import SocialNav from "../SocialNav/SocialNav";

const StyledFooter = styled.footer`
  display: block;
  text-align: center;
  background-color: ${theme.colors.pageDark500};
  width: 100%;
  padding: ${rem(64)} ${rem(16)} ${rem(40)};

  ${mediaMin.s`
    padding: ${rem(80)} ${rem(24)} ${rem(56)};
  `};
`;

const StyledCopyright = styled(CopyBold)`
  color: ${theme.colors.light100};
  margin-bottom: ${rem(8)};
  white-space: nowrap;
`;

const StyledCopy = styled(Copy)`
  color: ${theme.colors.light100};
  margin-bottom: ${rem(16)};
`;

const LegalDocsContainer = styled.nav`
  margin-top: ${rem(56)};
  ${mediaMin.s`
      margin-top: ${rem(24)};
  `};
`;

const LegalDoc = styled(LightSecondaryLink)`
  display: inline-block;
  margin-right: ${rem(16)};
  white-space: nowrap;
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  margin-top: ${rem(12)};

  ${mediaMin.l`
      margin-top: 0;
  `};
`;

const SiteFooter = (props) => {
  const pageLocale = props.locale;

  return (
    <StyledFooter role="contentinfo">
      <StyledCopyright small>&copy; {new Date().getFullYear()} Dani Lucaci.</StyledCopyright>
      <FormattedMessage id="footerBuiltWith">
        {(txt) => (
          <StyledCopy small light>
            {txt}
          </StyledCopy>
        )}
      </FormattedMessage>
      <SocialNav light />
      <StaticQuery
        query={LEGAL_PAGES_QUERY}
        render={(data) => {
          const localizedDocsList = data.allMarkdownRemark.edges
            .map((edge) => ({
              slug: edge.node.fields.slug,
              title: edge.node.frontmatter.title,
              locale: edge.node.frontmatter.locale,
            }))
            .filter((edge) => edge.locale === pageLocale);

          return (
            <LegalDocsContainer>
              {localizedDocsList.map((localizedDoc) => (
                <LegalDoc to={localizedDoc.slug} key={localizedDoc.title}>
                  {localizedDoc.title}
                </LegalDoc>
              ))}
            </LegalDocsContainer>
          );
        }}
      />
    </StyledFooter>
  );
};

SiteFooter.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default SiteFooter;

const LEGAL_PAGES_QUERY = graphql`
  query LEGAL_PAGES_QUERY {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "legal" } } }) {
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
