import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

export const PrimaryButton = styled.button`
  background-color: ${theme.colors.primary600};
  border: none;
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.buttonLight};

  text-align: center;
  text-decoration: none;
  font-size: ${theme.font.size.button.default};
  line-height: ${theme.font.lineHeight.button.default};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.bold};
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
    background-color: ${theme.colors.primary500};
    ${theme.shadow.buttons.main};
  }
`;

export const MainGhostButton = styled.button`
  background-color: transparent;
  border: 2px solid ${theme.colors.primary600};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.primary600};

  text-align: center;
  text-decoration: none;
  font-size: ${theme.font.size.button.default};
  line-height: ${theme.font.lineHeight.button.default};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.bold};
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
    background-color: ${theme.colors.grey00};
    ${theme.shadow.buttons.mainGhost};
  }
`;

export const DarkGhostButton = styled.button`
  background-color: transparent;
  border: 2px solid ${theme.colors.grey400};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.grey800};

  text-align: center;
  text-decoration: none;
  font-size: ${theme.font.size.button.default};
  line-height: ${theme.font.lineHeight.button.default};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.bold};
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
    background-color: ${theme.colors.grey00};
    ${theme.shadow.buttons.darkGhost};
  }
`;

export const PrimaryButtonSmall = styled.button`
  background-color: ${theme.colors.primary600};
  border: none;
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.buttonLight};

  text-align: center;
  text-decoration: none;
  font-size: ${theme.font.size.button.default};
  line-height: ${theme.font.lineHeight.button.default};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.bold};
  }

  font-style: normal;
  font-weight: 700;

  white-space: nowrap;

  padding: ${rem(4)} ${rem(16)};
  height: ${theme.buttonHeight.s};

  &:hover,
  &:focus {
    background-color: ${theme.colors.primary500};
    cursor: pointer;
    ${theme.shadow.buttons.main};
  }
`;

export const TertiaryButton = styled.button`
  background-color: transparent;
  border: 2px solid ${theme.colors.grey400};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.grey800};

  text-align: center;
  font-size: ${theme.font.size.button.default};
  line-height: ${theme.font.lineHeight.button.default};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.bold};
  }

  font-style: normal;
  font-weight: 700;

  white-space: nowrap;

  height: ${theme.buttonHeight.s};
  padding: ${rem(4)} ${rem(16)};

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${theme.colors.grey00};
    ${theme.shadow.buttons.darkGhost};
  }
`;

export const LoadComments = styled.button`
  background-color: ${theme.colors.grey00};
  border: 2px solid ${theme.colors.grey400};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.grey700};

  text-align: center;
  text-decoration: none;
  font-size: ${theme.font.size.button.default};
  line-height: ${theme.font.lineHeight.button.default};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.regular};
  }

  & * {
    font-size: ${theme.font.size.button.default};
    line-height: ${theme.font.lineHeight.button.default};
  }

  font-style: normal;
  font-weight: 400;

  padding: ${rem(6)} ${rem(24)} ${rem(8)} ${rem(24)};
  height: ${rem(56)};

  width: 100%;

  ${mediaMin.xxs`  
    width: ${rem(288)};
  `};

  white-space: nowrap;

  &:hover,
  &:focus {
    color: ${theme.colors.grey900};
    cursor: pointer;
    border: 2px solid ${theme.colors.grey900};
    background-color: ${theme.colors.grey00};
    outline: none;

    & svg {
      fill: ${theme.colors.grey700};
    }
  }
`;
