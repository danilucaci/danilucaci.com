import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { Link } from "gatsby";

import {
  StyledFooterLanguageSelector,
  StyledLanguageDropdown,
  LanguageDropdownLabel,
  CurrentLanguageIcon,
  WorldIcon,
  DropdownIcon,
  CurrentLanguageSelector,
  LanguageSelectorItem,
} from "./styles";

const FooterLanguageSelector = ({
  locale = "en",
  twinPostURL,
  currentPath,
}) => {
  const englishLanguagePicker = () => (
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
  );

  const spanishLanguagePicker = () => (
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
  );

  return (
    <StyledFooterLanguageSelector>
      <WorldIcon arriaHidden="true">
        {locale === "en" ? <use xlinkHref="#en" /> : <use xlinkHref="#es" />}
      </WorldIcon>
      <FormattedMessage id="change.language.toggle.footer">
        {(txt) => <LanguageDropdownLabel>{txt}</LanguageDropdownLabel>}
      </FormattedMessage>
      <DropdownIcon arriaHidden="true">
        <use xlinkHref="#dropdown" />
      </DropdownIcon>
      <StyledLanguageDropdown>
        {locale === "en" ? englishLanguagePicker() : spanishLanguagePicker()}
      </StyledLanguageDropdown>
    </StyledFooterLanguageSelector>
  );
};

FooterLanguageSelector.propTypes = {
  locale: PropTypes.string.isRequired,
  twinPostURL: PropTypes.string.isRequired,
  currentPath: PropTypes.string.isRequired,
};

export default FooterLanguageSelector;
