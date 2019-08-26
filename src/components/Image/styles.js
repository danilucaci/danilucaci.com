import styled, { css, keyframes } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

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
  margin-top: ${rem(32)};
  margin-bottom: ${rem(32)};

  ${mediaMin.s`
    margin-bottom: ${rem(64)};
  `};

  & img,
  & .gatsby-image-wrapper {
    ${theme.shadow.image} !important;
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

  ${(props) =>
    props.expand &&
    css`
      ${mediaMin.xl`
        max-width: ${rem(808)};
        margin-right: -${rem(96)};
        margin-left: -${rem(96)};
      `};

      ${mediaMin.xxl`
        max-width: ${rem(936)};
        margin-right: -${rem(192)};
        margin-left: -${rem(192)};
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
