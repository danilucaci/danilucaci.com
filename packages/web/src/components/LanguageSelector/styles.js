import styled, { keyframes } from "styled-components";
import { MenuList, MenuButton } from "@reach/menu-button";

import Icon from "../Icon";
import { theme, rem, mediaMin } from "../../theme";

export const MenuWrapper = styled.div`
  display: inline-block;
  position: absolute;

  top: ${rem(12)};
  right: 0;

  .fonts-loaded & {
    font-family: ${theme.font.family.body.regular};
  }

  font-size: ${theme.font.size.body.s};
  line-height: ${theme.font.lineHeight.body.s};

  ${mediaMin.s`
    display: inline-block;
    position: static;
  `};
`;

export const StyledMenuButton = styled(MenuButton)`
  background-color: transparent;
  border: none;
  padding: ${rem(6)} ${rem(6)} ${rem(6)} 0;

  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
  }

  &:focus,
  &:active {
    cursor: pointer;
    background-color: transparent;
  }
`;

export const SlideDown = keyframes`
0% {
  opacity: 0;
  transform: translateY(-8px);
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

  width: ${rem(164)};

  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    outline: none;
  }

  [data-reach-menu-item][data-selected] {
    color: ${theme.color.text.default};
    cursor: pointer;
    background-color: ${theme.color.background.languageSelector.hover};
    outline: 1px ${theme.color.border.default} solid;
  }

  & .reach__menu__link {
    display: block;
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

export const ButtonLabel = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-left: ${rem(4)};
`;

export const CurrentLanguageIcon = styled(Icon)`
  display: inline-block;
  fill: ${theme.color.icon.primary};
  position: absolute;
  left: ${rem(24)};
  top: ${rem(8)};
`;

export const WorldIcon = styled(Icon)`
  display: inline-block;
  vertical-align: middle;
`;

export const DropdownIcon = styled(Icon)`
  display: inline-block;
  margin-top: ${rem(2)};
  vertical-align: middle;
  transition: transform 200ms ease;
  transform: rotate(0deg);

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: rotate(-180deg);
  `}
`;
