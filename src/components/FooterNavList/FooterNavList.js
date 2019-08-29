import React from "react";
import { string } from "prop-types";
import { FormattedMessage } from "react-intl";

import FooterNavListItem from "./FooterNavListItem/FooterNavListItem";
import { localePaths } from "../../i18n/i18n";

import { StyledFooterNavList } from "./styles";

const FooterNavList = ({ locale }) => (
  <StyledFooterNavList role="menu">
    <FormattedMessage id="site.nav.work">
      {(txt) => (
        <FooterNavListItem to={localePaths[locale].work}>
          {txt}
        </FooterNavListItem>
      )}
    </FormattedMessage>
    <FormattedMessage id="site.nav.blog">
      {(txt) => (
        <FooterNavListItem to={localePaths[locale].blog}>
          {txt}
        </FooterNavListItem>
      )}
    </FormattedMessage>
    <FormattedMessage id="site.nav.about">
      {(txt) => (
        <FooterNavListItem to={localePaths[locale].about}>
          {txt}
        </FooterNavListItem>
      )}
    </FormattedMessage>
    <FormattedMessage id="site.nav.contact">
      {(txt) => (
        <FooterNavListItem to={localePaths[locale].contact}>
          {txt}
        </FooterNavListItem>
      )}
    </FormattedMessage>
  </StyledFooterNavList>
);

FooterNavList.propTypes = {
  locale: string.isRequired,
};

export default FooterNavList;
