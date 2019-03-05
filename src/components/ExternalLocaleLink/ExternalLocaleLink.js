import React from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "react-intl";

import locales from "../../locales/locales";

const ExternalLocaleLink = ({ href, intl: { locale }, ...props }) => {
  let path = locales[locale].default ? href : `/${locale}${href}`;

  // logo link href /es and not /es/
  if (href === "/" && !locales[locale].default) {
    path = `/${locale}`;
  }

  return <a {...props} href={path} />;
};

ExternalLocaleLink.propTypes = {
  href: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(ExternalLocaleLink);
