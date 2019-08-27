import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";

import locales from "../../locales/locales";

const LocaleLink = ({ to, intl: { locale }, ...props }) => {
  let path = locales[locale].default ? to : `/${locale}${to}`;

  // logo link to /es and not /es/
  if (to === "/" && !locales[locale].default) {
    path = `/${locale}`;
  }

  return <Link {...props} to={path} />;
};

LocaleLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default injectIntl(LocaleLink);
