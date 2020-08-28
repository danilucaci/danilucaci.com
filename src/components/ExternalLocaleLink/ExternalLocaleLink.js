import React from "react";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";

import locales from "../../locales/locales";

const ExternalLocaleLink = ({ href, ...props }) => {
  const intl = useIntl();

  let path = locales[intl.locale].default ? href : `/${intl.locale}${href}`;

  // logo link href /es and not /es/
  if (href === "/" && !locales[intl.locale].default) {
    path = `/${intl.locale}`;
  }

  return <a {...props} href={path} />;
};

ExternalLocaleLink.propTypes = {
  href: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
};

export default ExternalLocaleLink;
