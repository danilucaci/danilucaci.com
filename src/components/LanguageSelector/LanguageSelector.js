import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { Link } from "gatsby";

import { Icon } from "../Icon/Icon";
import { theme, rem, mediaMin, mediaMax } from "../../theme/globalStyles";

const StyledLanguageSelector = styled.li`
  border: 2px solid ${theme.colors.gray400};
  border-radius: ${theme.borderRadius.buttons};
  display: inline-block;
  list-style-type: none;
  position: relative;
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};

  &:hover {
    & ul {
      /* visibility: visible; */
      opacity: 1;
      transform: scale(1);
    }
  }

  padding: ${rem(12)};

  ${mediaMin.s`
    margin-top: 0;
    border: none;
    padding: ${rem(16)} ${rem(12)};
  `};
`;

const StyledLanguageDropdown = styled.ul`
  background-color: ${theme.colors.gray100};
  border: 1px solid ${theme.colors.gray400};
  border-radius: ${theme.borderRadius.buttons};
  ${theme.shadow.dropdown};

  display: block;

  /* visibility: hidden; */
  opacity: 0;
  transform: scale(0);
  transition: transform, visibility, opacity 0.2s ease;
  will-change: transform;

  position: absolute;
  top: 100%;
  right: 0;

  ${mediaMax.s`
    left: 0;
  `};

  ${mediaMin.s`
    top: 85%;
  `};

  padding: ${rem(8)} 0;
`;

const LanguageDropdownLabel = styled.span`
  display: inline-block;
  vertical-align: middle;

  ${mediaMin.s`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  `};
`;

const CurrentLanguageIcon = styled(Icon)`
  display: inline-block;
  fill: ${theme.colors.main600};
  position: absolute;
  left: ${rem(48)};
  top: ${rem(12)};

  ${mediaMin.s`
    left: ${rem(12)};
    top: ${rem(6)};
  `};
`;

const WorldIcon = styled(Icon)`
  display: inline-block;
`;

const DropdownIcon = styled(Icon)`
  display: inline-block;
`;

const CurrentLanguageSelector = styled.li`
  background-color: ${theme.colors.gray300};
  display: block;
  white-space: nowrap;
  position: relative;

  & a {
    padding: ${rem(12)} ${rem(32)};
    width: 100%;
    color: ${theme.colors.main600};
    text-decoration: none;
    display: inline-block;
    text-align: center;
    font-size: ${theme.fontSizes.s};
    line-height: ${theme.lineHeights.s};

    &:hover {
      background-color: transparent;
    }

    ${mediaMin.s`
      padding: ${rem(6)} ${rem(40)};
    `};
  }
`;

const LanguageSelectorItem = styled.li`
  display: block;
  white-space: nowrap;

  &:hover {
    background-color: ${theme.colors.gray200};
  }

  & a {
    padding: ${rem(12)} ${rem(32)};
    width: 100%;
    color: ${theme.colors.dark700};
    text-decoration: none;
    text-align: center;
    display: inline-block;
    font-size: ${theme.fontSizes.s};
    line-height: ${theme.lineHeights.s};

    &:hover {
      background-color: transparent;
    }

    ${mediaMin.s`
      padding: ${rem(6)} ${rem(40)};
    `};
  }
`;

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
