import styled, { css } from "styled-components";
import { theme } from "../../theme/theme";

export const Copy = styled.p`
  ${({ small }) =>
    small &&
    css`
      font-size: ${theme.font.size.body.s};
      line-height: ${theme.font.lineHeight.body.s};
    `};
`;

export const AltCopy = styled.p`
  color: ${theme.color.text.subdued};

  ${({ small }) =>
    small &&
    css`
      font-size: ${theme.font.size.body.s};
      line-height: ${theme.font.lineHeight.body.s};
    `};
`;

export const CopyBold = styled(Copy)`
  .fonts-loaded & {
    font-family: ${theme.font.family.body.bold};
  }

  font-weight: 700;
  font-style: normal;
`;

export const CopyItalic = styled(Copy)`
  .fonts-loaded & {
    font-family: ${theme.font.family.body.italic};
  }

  font-weight: 400;
  font-style: italic;
`;
