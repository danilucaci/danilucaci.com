import React, { useContext } from "react";
import { useIntl } from "react-intl";

import FooterNavListItem from "./FooterNavListItem";
import { localePaths } from "../../i18n";

import { StyledFooterNavList } from "./styles";
import LocaleContext from "../../i18n/LocaleContext";

function FooterNavList() {
  const { locale } = useContext(LocaleContext);
  const intl = useIntl();

  return (
    <StyledFooterNavList>
      <FooterNavListItem to={localePaths[locale].work}>
        {intl.formatMessage({ id: "site.nav.work" })}
      </FooterNavListItem>
      <FooterNavListItem to={localePaths[locale].blog}>
        {intl.formatMessage({ id: "site.nav.blog" })}
      </FooterNavListItem>
      <FooterNavListItem to={localePaths[locale].about}>
        {intl.formatMessage({ id: "site.nav.about" })}
      </FooterNavListItem>
      <FooterNavListItem to={localePaths[locale].contact}>
        {intl.formatMessage({ id: "site.nav.contact" })}
      </FooterNavListItem>
    </StyledFooterNavList>
  );
}

export default FooterNavList;
