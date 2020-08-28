import React, { useContext } from "react";
import { string } from "prop-types";
import { useIntl } from "react-intl";
import { Link } from "gatsby";
import { Menu, MenuLink } from "@reach/menu-button";
import "@reach/menu-button/styles.css";

import AriaText from "../AriaText/AriaText";
import LocaleContext from "../../i18n/LocaleContext";

import {
  MenuWrapper,
  StyledMenuButton,
  WorldIcon,
  DropdownIcon,
  StyledMenuList,
  ButtonLabel,
  CurrentLanguageIcon,
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
        <CurrentLanguageIcon aria-hidden="true">
          <use xlinkHref="#check" />
        </CurrentLanguageIcon>
        English
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

EnglishLanguagePicker.propTypes = {
  twinPostURL: string.isRequired,
  currentPath: string.isRequired,
};

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
        <CurrentLanguageIcon aria-hidden="true">
          <use xlinkHref="#check" />
        </CurrentLanguageIcon>
        Español
      </MenuLink>
    </StyledMenuList>
  );
}

SpanishLanguagePicker.propTypes = {
  twinPostURL: string.isRequired,
  currentPath: string.isRequired,
};

function LanguageSelector({ twinPostURL, currentPath }) {
  const { locale } = useContext(LocaleContext);
  const intl = useIntl();

  return (
    <MenuWrapper data-testid="Sitenav__Language__Selector">
      <Menu>
        {({ isOpen }) => (
          <>
            <StyledMenuButton aria-labelledby="language-selector-button-label">
              <WorldIcon aria-hidden="true">
                <use xlinkHref={locale === "en" ? "#en" : "#es"} />
              </WorldIcon>
              <AriaText id="language-selector-button-label">
                {intl.formatMessage({
                  id: "change.language.button.aria.label",
                })}
              </AriaText>
              <ButtonLabel aria-hidden="true">
                {intl.formatMessage({
                  id: "change.language.toggle",
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
    </MenuWrapper>
  );
}

LanguageSelector.propTypes = {
  twinPostURL: string.isRequired,
  currentPath: string.isRequired,
};

export default LanguageSelector;
