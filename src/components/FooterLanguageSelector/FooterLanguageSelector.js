import React, { useContext } from "react";
import { string } from "prop-types";
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
import LocaleContext from "../../i18n/LocaleContext";

const FooterLanguageSelector = ({ twinPostURL, currentPath }) => {
  const { locale } = useContext(LocaleContext);

  const englishLanguagePicker = () => (
    <StyledMenuList>
      <MenuLink
        as={Link}
        to={currentPath}
        className="reach__menu__link"
        aria-label="Change the page language to english"
      >
        <ButtonLabelWrapper>
          <CurrentLanguageIcon aria-hidden="true">
            <use xlinkHref="#check" />
          </CurrentLanguageIcon>
          English
        </ButtonLabelWrapper>
      </MenuLink>
      <MenuLink
        as={Link}
        to={twinPostURL}
        className="reach__menu__link"
        aria-label="Change the page language to spanish"
      >
        Español
      </MenuLink>
    </StyledMenuList>
  );

  const spanishLanguagePicker = () => (
    <StyledMenuList>
      <MenuLink
        as={Link}
        to={twinPostURL}
        className="reach__menu__link"
        aria-label="Cambiar el idioma de la página al inglés"
      >
        English
      </MenuLink>
      <MenuLink
        as={Link}
        to={currentPath}
        className="reach__menu__link"
        aria-label="Cambiar el idioma de la página al español"
      >
        <ButtonLabelWrapper>
          <CurrentLanguageIcon aria-hidden="true">
            <use xlinkHref="#check" />
          </CurrentLanguageIcon>
          Español
        </ButtonLabelWrapper>
      </MenuLink>
    </StyledMenuList>
  );

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <StyledMenuButton aria-labelledby="footer-language-selector-button-label">
            <WorldIcon aria-hidden="true">
              <use xlinkHref={locale === "en" ? "#en" : "#es"} />
            </WorldIcon>
            <FormattedMessage id="change.language.button.aria.label">
              {(txt) => (
                <AriaText id="footer-language-selector-button-label">
                  {txt}
                </AriaText>
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
  twinPostURL: string.isRequired,
  currentPath: string.isRequired,
};

export default FooterLanguageSelector;
