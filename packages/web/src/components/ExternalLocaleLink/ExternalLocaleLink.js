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

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a {...props} href={path} />;
};

ExternalLocaleLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default ExternalLocaleLink;
