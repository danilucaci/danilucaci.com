import styled, { css } from "styled-components";
import { theme, mediaMin, rem } from "../../theme/globalStyles";

export const BaseButton = styled.button`
  border: none;
  outline: none;
  text-align: center;

  .fonts-loaded {
    font-family: ${theme.fonts.bodyBold};
  }

  font-size: ${theme.fontSizes.button};
  font-weight: 700;
  line-height: ${theme.lineHeights.button};
  text-align: center;
  height: ${rem(48)};
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: ${theme.colors.main600};
  color: ${theme.colors.gray100};
  ${theme.shadow.button};
  padding: ${rem(14)} ${rem(16)};

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

export const MailButton = styled(PrimaryButton)`
  ${theme.shadow.button};
  padding: 0;

  & a {
    color: ${theme.colors.gray100};
    width: 100%;
    height: 100%;
    text-decoration: none;
    display: block;
    padding: ${rem(14)} ${rem(16)};

    &:active,
    &:focus {
      background-color: transparent;
      color: ${theme.colors.gray100};
      cursor: pointer;
      outline: none;
    }

    &:visited,
    &:link {
      background-color: transparent;
      color: ${theme.colors.gray100};
      cursor: pointer;
      outline: none;
    }

    &:hover {
      background-color: transparent;
      color: ${theme.colors.gray100};
      cursor: pointer;
      outline: none;
    }
  }
`;

export const ContactButton = styled(BaseButton)`
  background-color: ${theme.colors.gray100};
  color: ${theme.colors.dark900};

  text-align: center;
  padding: 0;
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

  & a {
    color: ${theme.colors.dark800};
    width: 100%;
    height: 100%;
    text-decoration: none;
    display: block;
    padding: ${rem(14)} ${rem(16)};

    &:active,
    &:focus {
      background-color: transparent;
      color: ${theme.colors.dark800};
      cursor: pointer;
      outline: none;
    }

    &:visited,
    &:link {
      background-color: transparent;
      color: ${theme.colors.dark800};
      cursor: pointer;
      outline: none;
    }

    &:hover {
      background-color: transparent;
      color: ${theme.colors.dark800};
      cursor: pointer;
      outline: none;
    }
  }
`;
