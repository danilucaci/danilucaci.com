import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { Link } from "gatsby";

import {
  StyledLanguageSelector,
  StyledLanguageDropdown,
  LanguageDropdownLabel,
  CurrentLanguageIcon,
  WorldIcon,
  DropdownIcon,
  CurrentLanguageSelector,
  LanguageSelectorItem,
} from "./styles";

const LanguageSelector = ({ locale = "en", twinPostURL, currentPath }) => (
  <StyledLanguageSelector>
    <WorldIcon arriaHidden="true">
      {locale === "en" ? <use xlinkHref="#en" /> : <use xlinkHref="#es" />}
    </WorldIcon>
    <FormattedMessage id="change.language.toggle">
      {(txt) => <LanguageDropdownLabel>{txt}</LanguageDropdownLabel>}
    </FormattedMessage>
    <DropdownIcon arriaHidden="true">
      <use xlinkHref="#dropdown" />
    </DropdownIcon>
    <StyledLanguageDropdown>
      {locale === "en" ? (
        <>
          <CurrentLanguageSelector>
            <CurrentLanguageIcon arriaHidden="true">
              <use xlinkHref="#check" />
            </CurrentLanguageIcon>
            <Link to={currentPath}>
              <span className="sr-only">change the page language to</span>
              English
            </Link>
          </CurrentLanguageSelector>
          <LanguageSelectorItem>
            <Link to={twinPostURL}>
              <span className="sr-only">cambiar el idioma de la página al</span>
              Español
            </Link>
          </LanguageSelectorItem>
        </>
      ) : (
        <>
          <LanguageSelectorItem>
            <Link to={twinPostURL}>
              <span className="sr-only">change the page language to</span>
              English
            </Link>
          </LanguageSelectorItem>
          <CurrentLanguageSelector>
            <CurrentLanguageIcon arriaHidden="true">
              <use xlinkHref="#check" />
            </CurrentLanguageIcon>
            <Link to={currentPath}>
              <span className="sr-only">cambiar el idioma de la página al</span>
              Español
            </Link>
          </CurrentLanguageSelector>
        </>
      )}
    </StyledLanguageDropdown>
  </StyledLanguageSelector>
);

LanguageSelector.propTypes = {
  locale: PropTypes.string.isRequired,
  twinPostURL: PropTypes.string.isRequired,
  currentPath: PropTypes.string.isRequired,
};

export default LanguageSelector;
