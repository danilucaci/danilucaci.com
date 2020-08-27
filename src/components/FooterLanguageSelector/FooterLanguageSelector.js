import React, { useContext } from "react";
import { string } from "prop-types";
import { useIntl } from "react-intl";
import { Link } from "gatsby";
import { Menu, MenuLink } from "@reach/menu-button";
import "@reach/menu-button/styles.css";

import LocaleContext from "../../i18n/LocaleContext";
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

export function EnglishLanguagePicker({ twinPostURL, currentPath }) {
  return (
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
}

export function SpanishLanguagePicker({ twinPostURL, currentPath }) {
  return (
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
}

function FooterLanguageSelector({ twinPostURL, currentPath }) {
  const { locale } = useContext(LocaleContext);
  const intl = useIntl();

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <StyledMenuButton aria-labelledby="footer-language-selector-button-label">
            <WorldIcon aria-hidden="true">
              <use xlinkHref={locale === "en" ? "#en" : "#es"} />
            </WorldIcon>
            <AriaText id="footer-language-selector-button-label">
              {intl.formatMessage({
                id: "change.language.button.aria.label",
              })}
            </AriaText>
            <ButtonLabel>
              {intl.formatMessage({
                id: "change.language.toggle.footer",
              })}
            </ButtonLabel>
            <DropdownIcon aria-hidden="true" isOpen={isOpen}>
              <use xlinkHref="#dropdown" />
            </DropdownIcon>
          </StyledMenuButton>
          {locale === "en" ? (
            <EnglishLanguagePicker
              twinPostURL={twinPostURL}
              currentPath={currentPath}
            />
          ) : (
            <SpanishLanguagePicker
              twinPostURL={twinPostURL}
              currentPath={currentPath}
            />
          )}
        </>
      )}
    </Menu>
  );
}

FooterLanguageSelector.propTypes = {
  twinPostURL: string.isRequired,
  currentPath: string.isRequired,
};

export default FooterLanguageSelector;
