import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { Link } from "gatsby";
import { Menu, MenuLink } from "@reach/menu-button";
import "@reach/menu-button/styles.css";

import AriaText from "../AriaText/AriaText";

import {
  StyledMenuButton,
  WorldIcon,
  DropdownIcon,
  StyledMenuList,
  ButtonLabel,
  CurrentLanguageIcon,
  ButtonLabelWrapper,
} from "./styles";

const FooterLanguageSelector = ({
  locale = "en",
  twinPostURL,
  currentPath,
}) => {
  const englishLanguagePicker = () => (
    <StyledMenuList>
      <MenuLink as={Link} to={currentPath} className="reach__menu__link ">
        <ButtonLabelWrapper>
          <CurrentLanguageIcon aria-hidden="true">
            <use xlinkHref="#check" />
          </CurrentLanguageIcon>
          <AriaText>Change the page language to</AriaText>
          English
        </ButtonLabelWrapper>
      </MenuLink>
      <MenuLink as={Link} to={twinPostURL} className="reach__menu__link">
        <AriaText>Cambiar el idioma de la página al</AriaText>
        Español
      </MenuLink>
    </StyledMenuList>
  );

  const spanishLanguagePicker = () => (
    <StyledMenuList>
      <MenuLink as={Link} to={twinPostURL} className="reach__menu__link">
        <AriaText>Change the page language to</AriaText>
        English
      </MenuLink>
      <MenuLink as={Link} to={currentPath} className="reach__menu__link">
        <ButtonLabelWrapper>
          <CurrentLanguageIcon aria-hidden="true">
            <use xlinkHref="#check" />
          </CurrentLanguageIcon>
          <AriaText>Cambiar el idioma de la página al</AriaText>
          Español
        </ButtonLabelWrapper>
      </MenuLink>
    </StyledMenuList>
  );

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <StyledMenuButton aria-labelledby="language-selector-button-label">
            <WorldIcon aria-hidden="true">
              <use xlinkHref={locale === "en" ? "#en" : "#es"} />
            </WorldIcon>
            <FormattedMessage id="change.language.button.aria.label">
              {(txt) => (
                <AriaText id="language-selector-button-label">{txt}</AriaText>
              )}
            </FormattedMessage>
            <FormattedMessage id="change.language.toggle.footer">
              {(txt) => <ButtonLabel>{txt}</ButtonLabel>}
            </FormattedMessage>
            <DropdownIcon aria-hidden="true" isOpen={isOpen}>
              <use xlinkHref="#dropdown" />
            </DropdownIcon>
          </StyledMenuButton>
          {locale === "en" ? englishLanguagePicker() : spanishLanguagePicker()}
        </>
      )}
    </Menu>
  );
};

FooterLanguageSelector.propTypes = {
  locale: PropTypes.string.isRequired,
  twinPostURL: PropTypes.string.isRequired,
  currentPath: PropTypes.string.isRequired,
};

export default FooterLanguageSelector;
