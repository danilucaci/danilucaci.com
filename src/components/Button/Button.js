import styled, { css } from "styled-components";
import { theme, mediaMin, rem } from "../../theme/globalStyles";

export const PrimaryButton = styled.button`
  background-color: ${theme.colors.main600};
  border: none;
  outline: none;
  color: ${theme.colors.gray100};
  font-family: ${theme.fonts.bodyBold};
  font-size: ${theme.fontSizes.button};
  line-height: ${theme.lineHeights.button};
  text-align: center;
  padding: ${rem(14)} ${rem(16)};
  height: ${rem(48)};
  ${theme.shadow.button};

  &:hover {
    background-color: ${theme.colors.main500};
    ${theme.shadow.buttonHover};
  }

  &:active,
  &:focus {
    background-color: ${theme.colors.main500};
    outline: dashed 2px ${theme.colors.main600};
  }
`;

export const ContactButton = styled.button`
  background-color: ${theme.colors.gray100};
  border: none;
  outline: none;
  color: ${theme.colors.dark900};
  font-family: ${theme.fonts.bodyBold};
  font-size: ${theme.fontSizes.button};
  line-height: ${theme.lineHeights.button};
  text-align: center;
  padding: ${rem(14)} ${rem(16)};
  height: ${rem(48)};
  ${theme.shadow.default};

  &:hover {
    color: ${theme.colors.main600};
    ${theme.shadow.hover};
  }

  &:active,
  &:focus {
    ${theme.shadow.hover};
    color: ${theme.colors.main600};
    outline: dashed 2px ${theme.colors.main600};
  }
`;
