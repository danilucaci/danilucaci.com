import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { FormattedMessage } from "react-intl";

import SocialNav from "../SocialNav/SocialNav";
import { StyledFooter, StyledCopyright, StyledCopy, LegalDocsContainer, LegalDoc } from "./styles";

const SiteFooter = (props) => {
  const pageLocale = props.locale;

  return (
    <StyledFooter role="contentinfo">
      <StyledCopyright small>&copy; {new Date().getFullYear()} Dani Lucaci.</StyledCopyright>
      <FormattedMessage id="footer.built.with">
        {(txt) => (
          <StyledCopy small light>
            {txt}
          </StyledCopy>
        )}
      </FormattedMessage>
      <SocialNav light />
      <StaticQuery
        query={FOOTER_LEGAL_PAGES_QUERY}
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

const FOOTER_LEGAL_PAGES_QUERY = graphql`
  query FOOTER_LEGAL_PAGES_QUERY {
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
