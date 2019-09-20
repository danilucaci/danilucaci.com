import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/theme";

export const Figure = styled.figure`
  & img,
  & .gatsby-image-wrapper {
    box-shadow: ${theme.shadow.image} !important;
  }

  ${({ noShadow }) =>
    noShadow &&
    `
      & img,
      & .gatsby-image-wrapper {
        box-shadow: none !important;
      }
 `}

  ${({ expand }) =>
    expand &&
    css`
      ${mediaMin.xxl`
        max-width: ${rem(936)};
        margin-right: -${rem(96)};
        margin-left: -${rem(96)};
      `};
    `}
`;

export const FigCaption = styled.figcaption`
  font-size: ${theme.font.size.body.s};
  line-height: ${theme.font.lineHeight.body.s};
  color: ${theme.color.text.subdued};
  margin-top: ${rem(16)};
  font-family: ${theme.font.family.body.fallback};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.regular};
  }
  font-weight: 400;
  font-style: normal;
`;
