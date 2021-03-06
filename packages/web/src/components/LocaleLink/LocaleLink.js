import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";

import locales from "../../locales/locales";

const LocaleLink = ({ to, ...props }) => {
  const intl = useIntl();

  let path = locales[intl.locale].default ? to : `/${intl.locale}${to}`;

  // logo link to /es and not /es/
  if (to === "/" && !locales[intl.locale].default) {
    path = `/${intl.locale}`;
  }

  return <Link {...props} to={path} />;
};

LocaleLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default LocaleLink;
