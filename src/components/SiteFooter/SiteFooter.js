import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, graphql, StaticQuery } from "gatsby";
import { FormattedMessage } from "react-intl";

import { theme, rem } from "../../theme/globalStyles";
import { GreyLink } from "../Link/Link";
import { Copy, CopyBold } from "../Copy/Copy";
import SocialNav from "../SocialNav/SocialNav";

const StyledFooter = styled.footer`
  display: block;
  text-align: center;
  background-color: ${(props) =>
    props.gray ? theme.colors.pageBackground : theme.colors.gray100};
  width: 100%;
  padding: ${rem(56)} ${rem(16)};
`;

const StyledCopyright = styled(CopyBold)``;

const LegalDocsContainer = styled.div``;

const LegalDoc = styled(GreyLink)`
  margin-right: ${rem(16)};
`;

const StyledCopy = styled(Copy)`
  margin: ${rem(8)} 0;
`;

const SiteFooter = (props) => {
  let pageLocale = props.locale;

  return (
    <StyledFooter gray={props.gray} role="contentinfo">
      <StyledCopyright small>
        &copy; {new Date().getFullYear()} Dani Lucaci.
      </StyledCopyright>
      <StyledCopy small>
        This site is built with Gatsby.js and hosted on Netlify.
      </StyledCopy>
      <SocialNav />
      <StaticQuery
        query={LEGAL_PAGES_QUERY}
        render={(data) => {
          let localizedDocsList = [];

          localizedDocsList = data.allMarkdownRemark.edges
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
      <FormattedMessage id="footerChangeLanguage">
        {(txt) => <Link to={props.changeLanguage}>{txt}</Link>}
      </FormattedMessage>
    </StyledFooter>
  );
};

SiteFooter.propTypes = {
  changeLanguage: PropTypes.string.isRequired,
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
