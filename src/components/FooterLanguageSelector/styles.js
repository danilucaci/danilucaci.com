import styled from "styled-components";
import { Icon } from "../Icon/Icon";
import { theme, rem, mediaMin } from "../../theme/theme";

export const StyledFooterLanguageSelector = styled.div`
  display: inline-block;

  border: ${theme.size.border.button.default} solid
    ${theme.color.border.outlined.enabled};

  position: relative;
  border-radius: ${theme.borderRadius.button};
  background-color: white;

  padding: ${theme.spacing.button.default.vertical};

  width: 100%;

  .fonts-loaded & {
    font-family: ${theme.font.family.display.boldRegular};
  }

  font-size: ${theme.font.size.body.s};
  line-height: ${theme.font.lineHeight.body.s};

  &:hover > ul,
  &:active > ul {
    opacity: 1;
    transform: scale(1);
  }
`;

export const StyledLanguageDropdown = styled.ul`
  background-color: ${theme.colors.grey00};
  border: 1px solid ${theme.colors.grey400};
  border-radius: ${theme.borderRadius.default};
  box-shadow: ${theme.shadow.dropdown};

  display: block;

  width: ${rem(220)};

  ${mediaMin.s`
    width: ${rem(172)};  
  `};

  opacity: 0;
  transform: scale(0);
  transition: transform, visibility, opacity 0.2s ease;
  will-change: transform;

  position: absolute;
  bottom: ${rem(32)};
  right: -2px;

  padding: ${rem(8)} 0;
`;

export const LanguageDropdownLabel = styled.span`
  display: inline-block;
  vertical-align: bottom;
  margin-left: ${rem(8)};
  margin-right: ${rem(24)};
`;

export const CurrentLanguageIcon = styled(Icon)`
  display: inline-block;
  vertical-align: middle;
  fill: ${theme.colors.primary600};
  position: absolute;
  left: ${rem(56)};
  top: ${rem(8)};

  ${mediaMin.s`
    left: ${rem(32)};
  `};
`;

export const WorldIcon = styled(Icon)`
  display: inline-block;
  vertical-align: bottom;
`;

export const DropdownIcon = styled(Icon)`
  display: inline-block;
  vertical-align: bottom;
  position: absolute;
  right: ${rem(12)};
  top: ${rem(8)};
`;

export const CurrentLanguageSelector = styled.li`
  background-color: ${theme.colors.grey200};
  display: block;
  white-space: nowrap;
  position: relative;

  &:hover {
    background-color: ${theme.colors.grey100};
  }

  .fonts-loaded & {
    font-family: ${theme.font.family.display.boldRegular};
  }

  & a {
    padding: ${rem(8)} ${rem(4)};
    width: 100%;
    color: ${theme.colors.primary600};
    text-decoration: none;
    display: inline-block;
    text-align: center;
    font-size: ${theme.font.size.body.s};
    line-height: ${theme.font.lineHeight.body.s};

    &:hover {
      background-color: transparent;
    }

    &:focus,
    &:active {
      background-color: ${theme.colors.grey100};
      box-shadow: none !important;
      outline: none !important;
    }
  }
`;

export const LanguageSelectorItem = styled.li`
  display: block;
  white-space: nowrap;

  &:hover {
    background-color: ${theme.colors.grey100};
  }

  .fonts-loaded & {
    font-family: ${theme.font.family.display.boldRegular};
  }

  & a {
    padding: ${rem(8)} ${rem(4)};
    width: 100%;
    color: ${theme.colors.grey700};
    text-decoration: none;
    text-align: center;
    display: inline-block;
    font-size: ${theme.font.size.body.s};
    line-height: ${theme.font.lineHeight.body.s};

    &:hover {
      background-color: transparent;
    }

    &:focus,
    &:active {
      background-color: ${theme.colors.grey100};
      box-shadow: none !important;
      outline: none !important;
    }
  }
`;
