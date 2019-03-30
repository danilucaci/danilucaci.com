import styled from "styled-components";
import { Icon } from "../Icon/Icon";
import { theme, rem, mediaMin, mediaMax } from "../../theme/globalStyles";

export const StyledLanguageSelector = styled.li`
  border: 2px solid ${theme.colors.gray400};
  border-radius: ${theme.borderRadius.buttons};
  display: inline-block;
  list-style-type: none;
  position: relative;

  .fonts-loaded & {
    font-family: ${theme.fonts.headerRegular};
  }

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
  margin-top: ${rem(24)};

  width: ${rem(208)};

  ${mediaMin.s`
    width: auto;
    margin-top: 0;
    border: none;
    padding: ${rem(16)} ${rem(12)};
  `};
`;

export const StyledLanguageDropdown = styled.ul`
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

export const LanguageDropdownLabel = styled.span`
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

export const CurrentLanguageIcon = styled(Icon)`
  display: inline-block;
  fill: ${theme.colors.main600};
  position: absolute;
  left: ${rem(40)};
  top: ${rem(12)};

  ${mediaMin.s`
    left: ${rem(12)};
    top: ${rem(6)};
  `};
`;

export const WorldIcon = styled(Icon)`
  display: inline-block;
`;

export const DropdownIcon = styled(Icon)`
  display: inline-block;
`;

export const CurrentLanguageSelector = styled.li`
  background-color: ${theme.colors.gray300};
  display: block;
  white-space: nowrap;
  position: relative;

  .fonts-loaded & {
    font-family: ${theme.fonts.headerRegular};
  }

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

export const LanguageSelectorItem = styled.li`
  display: block;
  white-space: nowrap;

  &:hover {
    background-color: ${theme.colors.gray200};
  }

  .fonts-loaded & {
    font-family: ${theme.fonts.headerRegular};
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