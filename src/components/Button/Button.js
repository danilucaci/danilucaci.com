import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

export const PrimaryButton = styled.button`
  background-color: ${theme.colors.main600};
  border: none;
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.buttonLight};

  text-align: center;
  text-decoration: none;
  font-size: ${theme.fontSizes.button};
  line-height: ${theme.lineHeights.button};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyBold};
  }

  font-style: normal;
  font-weight: 700;

  padding: ${rem(8)} ${rem(40)};
  height: ${theme.buttonHeight.xl};
  width: 100%;

  white-space: nowrap;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${theme.colors.main500};
    ${theme.shadow.buttons.main};
  }
`;

export const MainGhostButton = styled.button`
  background-color: transparent;
  border: 2px solid ${theme.colors.main600};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.main600};

  text-align: center;
  text-decoration: none;
  font-size: ${theme.fontSizes.button};
  line-height: ${theme.lineHeights.button};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyBold};
  }

  font-style: normal;
  font-weight: 700;

  padding: ${rem(8)} ${rem(40)};
  height: ${theme.buttonHeight.xl};
  width: 100%;

  white-space: nowrap;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${theme.colors.grey100};
    ${theme.shadow.buttons.mainGhost};
  }
`;

export const DarkGhostButton = styled.button`
  background-color: transparent;
  border: 2px solid ${theme.colors.grey400};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.dark800};

  text-align: center;
  text-decoration: none;
  font-size: ${theme.fontSizes.button};
  line-height: ${theme.lineHeights.button};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyBold};
  }

  font-style: normal;
  font-weight: 700;

  padding: ${rem(8)} ${rem(40)};
  height: ${theme.buttonHeight.xl};
  width: 100%;

  white-space: nowrap;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${theme.colors.grey100};
    ${theme.shadow.buttons.darkGhost};
  }
`;

export const PrimaryButtonSmall = styled.button`
  background-color: ${theme.colors.main600};
  border: none;
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.buttonLight};

  text-align: center;
  text-decoration: none;
  font-size: ${theme.fontSizes.buttonS};
  line-height: ${theme.lineHeights.buttonS};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyRegular};
  }

  font-style: normal;
  font-weight: 400;

  white-space: nowrap;

  padding: ${rem(8)} ${rem(32)};
  height: ${theme.buttonHeight.s};

  &:hover,
  &:focus {
    background-color: ${theme.colors.main500};
    cursor: pointer;
    ${theme.shadow.buttons.main};
  }
`;

export const TertiaryButton = styled.button`
  border: none;
  background-color: transparent;
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.dark800};

  text-align: center;
  font-size: ${theme.fontSizes.buttonS};
  line-height: ${theme.lineHeights.buttonS};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyRegular};
  }

  font-style: normal;
  font-weight: 400;
  text-decoration: underline;
  text-align: center;

  white-space: nowrap;

  height: ${theme.buttonHeight.s};
  padding: ${rem(8)} ${rem(32)};

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export const LoadComments = styled.button`
  background-color: ${theme.colors.grey100};
  border: 2px solid ${theme.colors.grey400};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.dark700};

  text-align: center;
  text-decoration: none;
  font-size: ${theme.fontSizes.button};
  line-height: ${theme.lineHeights.button};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyRegular};
  }

  & * {
    font-size: ${theme.fontSizes.button};
    line-height: ${theme.lineHeights.button};
  }

  font-style: normal;
  font-weight: 400;

  padding: ${rem(8)} ${rem(24)};
  height: ${rem(56)};

  width: 100%;

  ${mediaMin.xxs`  
    width: ${rem(288)};
  `};

  white-space: nowrap;

  &:hover,
  &:focus {
    color: ${theme.colors.dark900};
    cursor: pointer;
    border: 2px solid ${theme.colors.dark900};
    background-color: ${theme.colors.grey100};
    outline: none;

    & svg {
      fill: ${theme.colors.dark700};
    }
  }
`;
