import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";

import FooterNavListItem from "./FooterNavListItem/FooterNavListItem";
import { localePaths } from "../../i18n/i18n";

import { StyledFooterNavList } from "./styles";
import LocaleContext from "../../i18n/LocaleContext";

function FooterNavList() {
  const { locale } = useContext(LocaleContext);

  return (
    <StyledFooterNavList>
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
}

export default FooterNavList;
