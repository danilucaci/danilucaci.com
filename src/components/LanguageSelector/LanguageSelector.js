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

const LanguageSelector = (props) => {
  function handleLocales() {
    if (props.locale === "en") {
      return (
        <React.Fragment>
          <CurrentLanguageSelector>
            <CurrentLanguageIcon arriaHidden="true">
              <use xlinkHref="#check" />
            </CurrentLanguageIcon>
            <Link to={props.currentPath}>
              <span className="sr-only">change the page language to</span>
              English
            </Link>
          </CurrentLanguageSelector>
          <LanguageSelectorItem>
            <Link to={props.twinPostURL}>
              <span className="sr-only">cambiar el idioma de la página al</span>
              Español
            </Link>
          </LanguageSelectorItem>
        </React.Fragment>
      );
    } else if (props.locale === "es") {
      return (
        <React.Fragment>
          <LanguageSelectorItem>
            <Link to={props.twinPostURL}>
              <span className="sr-only">change the page language to</span>
              English
            </Link>
          </LanguageSelectorItem>
          <CurrentLanguageSelector>
            <CurrentLanguageIcon arriaHidden="true">
              <use xlinkHref="#check" />
            </CurrentLanguageIcon>
            <Link to={props.currentPath}>
              <span className="sr-only">cambiar el idioma de la página al</span>
              Español
            </Link>
          </CurrentLanguageSelector>
        </React.Fragment>
      );
    }
  }

  return (
    <StyledLanguageSelector>
      <WorldIcon arriaHidden="true">
        {props.locale === "en" ? <use xlinkHref="#en" /> : <use xlinkHref="#es" />}
      </WorldIcon>
      <FormattedMessage id="changeLanguageToggle">
        {(txt) => <LanguageDropdownLabel>{txt}</LanguageDropdownLabel>}
      </FormattedMessage>
      <DropdownIcon arriaHidden="true">
        <use xlinkHref="#dropdown" />
      </DropdownIcon>
      <StyledLanguageDropdown>{handleLocales()}</StyledLanguageDropdown>
    </StyledLanguageSelector>
  );
};

LanguageSelector.propTypes = {
  locale: PropTypes.string.isRequired,
  twinPostURL: PropTypes.string.isRequired,
  currentPath: PropTypes.string.isRequired,
};

export default LanguageSelector;
