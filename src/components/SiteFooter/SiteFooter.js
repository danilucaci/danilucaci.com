import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import { FormattedMessage } from "react-intl";

import FooterNavList from "../FooterNavList/FooterNavList";
import FooterSocialNav from "../FooterSocialNav/FooterSocialNav";
import FooterLanguageSelector from "../FooterLanguageSelector/FooterLanguageSelector";
import { GridCol } from "../Grid/Grid";

import {
  StyledFooter,
  Copyright,
  Row,
  NavCol,
  LegalDocsList,
  LegalDocsListItem,
  SocialCol,
  LanguageCol,
  LegalDocLink,
  Divider,
  FooterBottom,
  StyledSubhead,
  LanguageWrapper,
} from "./styles";

const SiteFooter = ({ locale = "en", twinPostURL, currentPath }) => {
  const pageLocale = locale;
  const data = useStaticQuery(FOOTER_LEGAL_PAGES_QUERY);

  const localizedDocsList = data.allMdx.edges
    .map((edge) => ({
      slug: edge.node.fields.slug,
      title: edge.node.frontmatter.title,
      locale: edge.node.frontmatter.locale,
    }))
    .filter((edge) => edge.locale === pageLocale);

  return (
    <StyledFooter role="contentinfo">
      <Row as="div">
        <NavCol col={6} s={4} xxl={7}>
          <StyledSubhead>danilucaci.com</StyledSubhead>
          <FooterNavList locale={locale} />
        </NavCol>

        <SocialCol col={6} s={4} xxl={2}>
          <FormattedMessage id="footer.connect.title">
            {(txt) => <StyledSubhead>{txt}</StyledSubhead>}
          </FormattedMessage>

          <FooterSocialNav />
        </SocialCol>

        <LanguageCol col={12} s={4} xxl={3}>
          <FormattedMessage id="footer.language.title">
            {(txt) => <StyledSubhead>{txt}</StyledSubhead>}
          </FormattedMessage>
          <LanguageWrapper>
            <FooterLanguageSelector
              locale={locale}
              twinPostURL={twinPostURL}
              currentPath={currentPath}
            />
          </LanguageWrapper>
        </LanguageCol>

        <GridCol>
          <Divider />
          <FooterBottom>
            <LegalDocsList>
              {localizedDocsList.map((localizedDoc) => (
                <LegalDocsListItem key={localizedDoc.title}>
                  <LegalDocLink to={localizedDoc.slug}>
                    {localizedDoc.title}
                  </LegalDocLink>
                </LegalDocsListItem>
              ))}
            </LegalDocsList>
            <Copyright>&copy; {new Date().getFullYear()} Dani Lucaci</Copyright>
          </FooterBottom>
        </GridCol>
      </Row>
    </StyledFooter>
  );
};

SiteFooter.propTypes = {
  locale: PropTypes.string.isRequired,
  twinPostURL: PropTypes.string.isRequired,
  currentPath: PropTypes.string.isRequired,
};

export default SiteFooter;

const FOOTER_LEGAL_PAGES_QUERY = graphql`
  query FOOTER_LEGAL_PAGES_QUERY {
    allMdx(filter: { frontmatter: { category: { eq: "legal" } } }) {
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
