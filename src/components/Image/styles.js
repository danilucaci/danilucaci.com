import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

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
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  color: ${theme.colors.dark700};
  margin-top: ${rem(16)};

  font-weight: 400;
  font-style: normal;
`;
