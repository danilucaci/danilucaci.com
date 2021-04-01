import styled, { css } from "styled-components";

import { theme, rem, mediaMin } from "../../theme";

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
  font-weight: 400;
  font-style: normal;
  font-family: ${theme.font.family.body.fallback};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.regular};
  }
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
  transition: opacity 600ms ease 0s;
  box-shadow: ${theme.shadow.image} !important;

  ${({ jsLoaded }) => jsLoaded && "opacity: 0;"}

  ${({ inView }) =>
    inView &&
    css`
      opacity: 1;
    `}
`;

export const VideoInnerWrapper = styled.span`
  background-color: ${theme.color.background.section.lightest};
  position: relative;
  bottom: 0;
  left: 0;
  display: block;
`;

// eslint-disable-next-line consistent-return
function handleVideoSize({ videoWidth, videoHeight }) {
  if (videoWidth && videoHeight) {
    if (videoWidth === 375 && videoHeight === 812) {
      return css`
        & .video-inner-wrapper {
          padding-bottom: ${(videoHeight / videoWidth) * 100}%;
        }

        max-width: ${rem(288)};

        ${mediaMin.xxs`
          max-width: ${rem(375)};
        `};
      `;
    }

    return css`
      & .video-inner-wrapper {
        padding-bottom: ${(videoHeight / videoWidth) * 100}%;
      }
    `;
  }
}

export const VideoOuterWrapper = styled.span`
  position: relative;
  display: block;
  width: 100%;

  ${handleVideoSize}
`;

export const FallbackVideo = styled.video`
  box-shadow: ${theme.shadow.image} !important;
  width: 100%;
  height: 100%;
  margin: 0px;
`;
