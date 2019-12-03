import React from "react";
import { string } from "prop-types";
import { FormattedMessage } from "react-intl";

import SiteNavListItem from "./SiteNavListItem/SiteNavListItem";
import { localePaths } from "../../i18n/i18n";

import { StyledSiteNavList } from "./styles";

const SiteNavList = ({ locale = "en" }) => (
  <StyledSiteNavList>
    <FormattedMessage id="site.nav.work">
      {(txt) => (
        <SiteNavListItem to={localePaths[locale].work}>{txt}</SiteNavListItem>
      )}
    </FormattedMessage>
    <FormattedMessage id="site.nav.blog">
      {(txt) => (
        <SiteNavListItem to={localePaths[locale].blog}>{txt}</SiteNavListItem>
      )}
    </FormattedMessage>
    <FormattedMessage id="site.nav.about">
      {(txt) => (
        <SiteNavListItem to={localePaths[locale].about}>{txt}</SiteNavListItem>
      )}
    </FormattedMessage>
    <FormattedMessage id="site.nav.contact">
      {(txt) => (
        <SiteNavListItem to={localePaths[locale].contact}>
          {txt}
        </SiteNavListItem>
      )}
    </FormattedMessage>
  </StyledSiteNavList>
);

SiteNavList.propTypes = {
  locale: string.isRequired,
};

export default SiteNavList;
