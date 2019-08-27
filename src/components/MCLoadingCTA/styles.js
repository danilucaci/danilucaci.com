import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

export const StyledLoadingCTA = styled.div`
  ${(props) =>
    props.error
      ? css`
          background-color: ${theme.colors.danger500};
          color: ${theme.colors.danger100};
          ${theme.shadow.button.error};
        `
      : css`
          background-color: ${theme.colors.primary500};
          color: ${theme.colors.primary100};
          ${theme.shadow.button.main};
          border: none;
        `}

  border-radius: ${theme.borderRadius.buttons};

  text-align: center;
  text-decoration: none;
  font-size: ${theme.font.size.button.default};
  line-height: ${theme.font.lineHeight.button.default};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.bold};
  }

  font-style: normal;
  font-weight: 700;

  padding: ${rem(12)} ${rem(24)};
  height: ${theme.buttonHeight.xl};
  margin-top: ${rem(16)};
  margin-bottom: ${rem(8)};

  display: inline-block;

  width: 100%;
  white-space: nowrap;

  ${mediaMin.xl`
    width: auto;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: ${rem(8)};
    display: inline-block;
    vertical-align: middle;
  `};
`;
