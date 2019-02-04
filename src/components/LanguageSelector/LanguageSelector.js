import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
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
      visibility: visible;
      opacity: 1;
      transform: scale(1);
    }
  }

  padding: ${rem(12)};

  ${mediaMax.s`
    margin-top: ${rem(8)};
  `};

  ${mediaMin.s`
    margin-left: ${rem(12)};
    border: none;
    padding: ${rem(16)} 0;
  `};

  ${mediaMin.l`
    margin-left: ${rem(16)};
  `};
`;

const StyledLanguageDropdown = styled.ul`
  background-color: ${theme.colors.gray100};
  border: 1px solid ${theme.colors.gray400};
  border-radius: ${theme.borderRadius.buttons};
  ${theme.shadow.dropdown};

  display: block;

  visibility: hidden;
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

  padding: ${rem(4)} 0;
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
  margin-left: -${rem(24)};
  margin-right: ${rem(4)};
`;

const WorldIcon = styled(Icon)`
  display: inline-block;

  ${mediaMax.s`
    margin-right: ${rem(4)};
  `};
`;

const DropdownIcon = styled(Icon)`
  display: inline-block;

  ${mediaMax.s`
    margin-left: ${rem(8)};
  `};
`;

const CurrentLanguageSelector = styled.li`
  background-color: ${theme.colors.gray300};
  display: block;
  padding: ${rem(4)} ${rem(32)} ${rem(4)} ${rem(40)};
  white-space: nowrap;

  & a {
    color: ${theme.colors.main600};
    text-decoration: none;
    display: inline-block;
    text-align: right;
    font-size: ${theme.fontSizes.s};
    line-height: ${theme.lineHeights.s};

    &:hover {
      background-color: transparent;
    }
  }
`;

const LanguageSelectorItem = styled.li`
  display: block;
  padding: ${rem(4)} ${rem(32)} ${rem(4)} ${rem(40)};
  white-space: nowrap;

  & a {
    color: ${theme.colors.dark700};
    text-decoration: none;
    text-align: right;
    display: inline-block;
    font-size: ${theme.fontSizes.s};
    line-height: ${theme.lineHeights.s};

    &:hover {
      background-color: transparent;
    }
  }
`;

const LanguageSelector = (props) => {
  function handleLocales() {
    if (props.locale === "en") {
      return (
        <>
          <CurrentLanguageSelector>
            <CurrentLanguageIcon>
              <use xlinkHref="#check" />
            </CurrentLanguageIcon>
            <Link to={props.currentPath}>English</Link>
          </CurrentLanguageSelector>
          <LanguageSelectorItem>
            <Link to={props.twinPostURL}>Español</Link>
          </LanguageSelectorItem>
        </>
      );
    } else if (props.locale === "es") {
      return (
        <>
          <LanguageSelectorItem>
            <Link to={props.twinPostURL}>English</Link>
          </LanguageSelectorItem>
          <CurrentLanguageSelector>
            <CurrentLanguageIcon>
              <use xlinkHref="#check" />
            </CurrentLanguageIcon>
            <Link to={props.currentPath}>Español</Link>
          </CurrentLanguageSelector>
        </>
      );
    }
  }

  return (
    <StyledLanguageSelector>
      <WorldIcon>
        <use xlinkHref="#world" />
      </WorldIcon>
      <FormattedMessage id="changeLanguageToggle">
        {(txt) => <LanguageDropdownLabel>{txt}</LanguageDropdownLabel>}
      </FormattedMessage>
      <DropdownIcon>
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
