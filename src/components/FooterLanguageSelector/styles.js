import styled, { keyframes } from "styled-components";
import { Icon } from "../Icon/Icon";
import { theme, rem, mediaMin } from "../../theme/theme";

import { MenuList, MenuButton } from "@reach/menu-button";

export const StyledMenuButton = styled(MenuButton)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${theme.color.background.outlined.enabled};
  border: ${theme.size.border.button.default}
    ${theme.color.border.outlined.enabled} solid;
  border-radius: ${theme.borderRadius.button};
  color: ${theme.color.text.button.outlined.enabled} !important;

  position: relative;
  padding: ${theme.spacing.button.default.vertical};
  width: 100%;

  font-size: ${theme.font.size.button.default};
  line-height: ${theme.font.lineHeight.button.default};
  font-style: normal;
  font-weight: 700;

  .fonts-loaded & {
    font-family: ${theme.font.family.body.bold};
  }

  padding: ${theme.spacing.button.default.vertical} ${rem(8)};
  height: ${theme.size.button.height.default};

  white-space: nowrap;

  &:hover {
    cursor: pointer;
    background-color: ${theme.color.background.outlined.hover};
    border: ${theme.size.border.button.default}
      ${theme.color.border.outlined.hover} solid;
    box-shadow: ${theme.shadow.button.outlined.hover};
  }

  &:focus {
    cursor: pointer;
    background-color: ${theme.color.background.outlined.focus};
    box-shadow: ${theme.shadow.button.outlined.focus};
    border: ${theme.size.border.button.focus}
      ${theme.color.border.outlined.focus} solid;
    outline: none;
  }

  &:active {
    cursor: pointer;
    background-color: ${theme.color.background.outlined.active};
    border: ${theme.size.border.button.default}
      ${theme.color.border.outlined.active} solid;
    outline: none;
    box-shadow: none;
  }
`;

export const SlideDown = keyframes`
0% {
  opacity: 0;
  transform: translateY(8px);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;

export const StyledMenuList = styled(MenuList)`
  background-color: white;
  border: 1px solid ${theme.color.border.default};
  border-radius: ${theme.borderRadius.default};
  box-shadow: ${theme.shadow.dropdown};

  overflow: hidden;

  display: block;
  animation: ${SlideDown} 200ms ease;
  padding: ${rem(8)} 0 !important;

  width: ${rem(180)};

  ${mediaMin.m`
    width: ${rem(200)};
  `};

  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    outline: none;
  }

  [data-reach-menu-item][data-selected] {
    background-color: ${theme.color.background.languageSelector.enabled};
  }

  & .reach__menu__link {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;

    .fonts-loaded & {
      font-family: ${theme.font.family.body.regular};
    }

    padding: ${rem(8)} ${rem(4)};
    width: 100%;
    color: ${theme.color.text.default};
    text-align: center;
    font-size: ${theme.font.size.body.s};
    line-height: ${theme.font.lineHeight.body.s};

    &:hover {
      color: ${theme.color.text.default};
      cursor: pointer;
      background-color: ${theme.color.background.languageSelector.hover};
      outline: 1px ${theme.color.border.default} solid;
    }

    &:focus {
      color: ${theme.color.text.default};
      cursor: pointer;
      background-color: ${theme.color.background.languageSelector.hover};
      outline: 2px ${theme.color.border.default} solid;
    }

    &:active {
      color: ${theme.color.text.default};
      cursor: pointer;
      background-color: ${theme.color.background.languageSelector.hover};
      outline: 2px ${theme.color.border.default} solid;
    }
  }
`;

export const CurrentLanguageIcon = styled(Icon)`
  display: inline-block;
  vertical-align: middle;
  fill: ${theme.color.icon.primary};
  margin-right: ${rem(6)};
  margin-left: -${rem(30)};
`;

export const ButtonLabelWrapper = styled.span`
  display: inline-block;
`;

export const ButtonLabel = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-left: ${rem(8)};
  padding-right: ${rem(24)};
  margin-right: auto;
`;

export const WorldIcon = styled(Icon)`
  display: inline-block;
  vertical-align: middle;
`;

export const DropdownIcon = styled(Icon)`
  display: inline-block;
  vertical-align: middle;
  margin-left: auto;
  transition: transform 200ms ease;
  transform: rotate(0deg);

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: rotate(180deg);
  `}
`;
