import React, { useContext } from "react";
import { string, bool } from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import { FormattedMessage } from "react-intl";

import FooterNavList from "../FooterNavList/FooterNavList";
import FooterSocialNav from "../FooterSocialNav/FooterSocialNav";
import FooterLanguageSelector from "../FooterLanguageSelector/FooterLanguageSelector";
import { Col } from "../Grid/Grid";

import {
  FooterRowBackground,
  Copyright,
  FooterInnerRow,
  NavCol,
  LegalDocsList,
  LegalDocsListItem,
  SocialCol,
  LanguageCol,
  LegalDocLink,
  Divider,
  FooterBottom,
  StyledSubhead,
} from "./styles";
import LocaleContext from "../../i18n/LocaleContext";

const SiteFooter = ({ twinPostURL, currentPath, expand }) => {
  const { locale } = useContext(LocaleContext);
  const data = useStaticQuery(FOOTER_LEGAL_PAGES_QUERY);

  const localizedDocsList = data.allMdx.edges
    .map((edge) => ({
      slug: edge.node.fields.slug,
      title: edge.node.frontmatter.title,
      locale: edge.node.frontmatter.locale,
    }))
    .filter((edge) => edge.locale === locale);

  return (
    <FooterRowBackground role="contentinfo" as="footer">
      <FooterInnerRow as="div" col10 expand={expand}>
        <NavCol col={6} s={4} xxl={7}>
          <StyledSubhead>danilucaci.com</StyledSubhead>
          <FooterNavList />
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
          <FooterLanguageSelector
            twinPostURL={twinPostURL}
            currentPath={currentPath}
          />
        </LanguageCol>

        <Col>
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
        </Col>
      </FooterInnerRow>
    </FooterRowBackground>
  );
};

SiteFooter.propTypes = {
  twinPostURL: string.isRequired,
  currentPath: string.isRequired,
  expand: bool,
};

SiteFooter.defaultProps = {
  expand: false,
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
