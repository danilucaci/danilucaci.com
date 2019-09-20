import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/theme";

export const Figure = styled.figure`
  ${({ expand }) =>
    expand &&
    css`
      margin-top: ${rem(32)};

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

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  margin: 0px;
  vertical-align: middle;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 1;

  ${({ jsLoaded }) => jsLoaded && "opacity: 0;"}

  transition: opacity 600ms ease 0s;

  ${({ inView }) =>
    inView &&
    `
    opacity: 1;
  `}

  box-shadow: ${theme.shadow.image} !important;
`;

export const VideoIphoneXWrapper = styled.span`
  position: relative;
  display: block;
  width: 100%;
  max-width: ${rem(288)};

  ${mediaMin.xxs`
    max-width: ${rem(375)};
  `};
`;

export const VideoIphoneXInner = styled.span`
  padding-bottom: 216.53333333333333%;
  position: relative;
  bottom: 0;
  left: 0;
  background-color: ${theme.color.background.section.lightest};
  display: block;
`;
