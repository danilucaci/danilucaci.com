import styled, { css, keyframes } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/theme";

export const placeholderAnimation = keyframes`
0% {
  background-position: 0% 50%;
 }
 50% {
  background-position: 100% 50%;
 }
 100% {
  background-position: 0% 50%;
 }
 `;

export const Figure = styled.figure`
  & img,
  & .gatsby-image-wrapper {
    box-shadow: ${theme.shadow.image} !important;
  }

  .gatsby-image-wrapper {
    background: linear-gradient(
      90deg,
      ${theme.colors.grey200},
      ${theme.colors.grey500},
      ${theme.colors.grey200}
    );

    background-size: 200% 200%;

    animation: ${placeholderAnimation} 3s ease infinite;
  }

  ${({ noShadow }) =>
    noShadow &&
    `
      & img,
      & .gatsby-image-wrapper {
        box-shadow: none !important;
      }
 `}

  ${({ didLoad }) =>
    didLoad &&
    `
    .gatsby-image-wrapper {
      background: transparent;
      animation: none;
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
  color: ${theme.colors.grey700};
  margin-top: ${rem(16)};

  font-weight: 400;
  font-style: normal;
`;
