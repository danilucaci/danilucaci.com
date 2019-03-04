import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

export const Input = styled.input`
  background-color: ${theme.colors.gray100};
  border: 2px solid ${theme.colors.gray400};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.dark700};

  font-size: ${theme.fontSizes.button};
  line-height: ${theme.lineHeights.button};

  font-style: normal;
  font-weight: 400;

  padding: ${rem(16)} ${rem(24)};
  height: ${rem(48)};

  width: 100%;

  font-family: ${theme.fonts.bodyRegular};

  &:focus {
    color: ${theme.colors.dark800};
    border: 2px solid ${theme.colors.dark800};
    outline: none;
  }
`;

export const Checkbox = styled.input`
  &:focus {
    color: ${theme.colors.dark800};
    outline: 1px solid ${theme.colors.dark800};
  }
`;

export const TextArea = styled.textarea`
  background-color: ${theme.colors.gray100};
  border: 2px solid ${theme.colors.gray400};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.dark700};

  font-size: ${theme.fontSizes.button};
  line-height: ${theme.lineHeights.button};

  font-style: normal;
  font-weight: 400;

  padding: ${rem(16)};

  width: 100%;

  font-family: ${theme.fonts.bodyRegular};

  &:focus {
    color: ${theme.colors.dark800};
    border: 2px solid ${theme.colors.dark800};
    outline: none;
  }
`;

export const SubmitButton = styled.input`
  background-color: ${theme.colors.main600};
  border: none;
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.buttonLight};

  text-align: center;
  text-decoration: none;
  font-size: ${theme.fontSizes.button};
  line-height: ${theme.lineHeights.button};
  font-style: normal;
  font-weight: 700;

  padding: ${rem(12)} ${rem(40)};
  height: ${rem(48)};
  margin-top: ${rem(16)};
  width: 100%;

  &:disabled {
    background-color: ${theme.colors.dark700};

    &:hover,
    &:focus {
      cursor: pointer;
      background-color: ${theme.colors.dark700};
      box-shadow: none;
      cursor: not-allowed;
    }
  }

  white-space: nowrap;

  font-family: ${theme.fonts.bodyBold};

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${theme.colors.main500};
    ${theme.shadow.buttons.main};
  }
`;
