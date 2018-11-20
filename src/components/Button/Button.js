import styled from "styled-components";
import { theme, rem } from "../../theme/globalStyles";

export const BaseButton = styled.button`
  border: none;
  outline: none;
  text-align: center;

  font-size: ${theme.fontSizes.button};
  line-height: ${theme.lineHeights.button};
  font-style: normal;
  font-weight: 700;
  text-align: center;
  height: ${rem(48)};

  .fonts-loaded {
    font-family: ${theme.fonts.bodyBold};
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: ${theme.colors.main600};
  color: ${theme.colors.gray100};
  padding: ${rem(8)} ${rem(16)};

  &:hover {
    background-color: ${theme.colors.main500};
    ${theme.shadow.buttonHover};
  }
`;

export const MailButton = styled(BaseButton)`
  background-color: ${theme.colors.main600};
  color: ${theme.colors.gray100};
  height: ${rem(48)};

  & a {
    color: ${theme.colors.gray100};
    width: 100%;
    height: 100%;
    text-decoration: none;
    font-size: ${theme.fontSizes.button};
    line-height: ${theme.lineHeights.button};
    display: block;
    padding: ${rem(12)} ${rem(16)};

    &:active,
    &:focus {
      background-color: transparent;
      color: ${theme.colors.gray100};
      cursor: pointer;
    }

    &:visited,
    &:link {
      background-color: transparent;
      color: ${theme.colors.gray100};
      cursor: pointer;
    }

    &:hover {
      background-color: transparent;
      color: ${theme.colors.gray100};
      cursor: pointer;
    }
  }
`;
