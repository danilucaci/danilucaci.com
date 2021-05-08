import React, { useContext } from "react";
import { useIntl } from "react-intl";

import SiteNavListItem from "./SiteNavListItem";
import { localePaths } from "../../i18n";

import { StyledSiteNavList } from "./styles";
import LocaleContext from "../../i18n/LocaleContext";

function SiteNavList() {
  const { locale } = useContext(LocaleContext);
  const intl = useIntl();

  return (
    <StyledSiteNavList>
      <SiteNavListItem to={localePaths[locale].work}>
        {intl.formatMessage({ id: "site.nav.work" })}
      </SiteNavListItem>
      <SiteNavListItem to={localePaths[locale].blog}>
        {intl.formatMessage({ id: "site.nav.blog" })}
      </SiteNavListItem>
      <SiteNavListItem to={localePaths[locale].about}>
        {intl.formatMessage({ id: "site.nav.about" })}
      </SiteNavListItem>
      <SiteNavListItem to={localePaths[locale].contact}>
        {intl.formatMessage({ id: "site.nav.contact" })}
      </SiteNavListItem>
    </StyledSiteNavList>
  );
}

export default SiteNavList;
