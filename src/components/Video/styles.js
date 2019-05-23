import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

export const Figure = styled.figure`
  ${(props) =>
    props.expand &&
    css`
      margin-top: ${rem(32)};
      margin-bottom: ${rem(32)};

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

  ${({ hasLoaded }) => hasLoaded && "opacity: 0;"}

  transition: opacity 600ms ease 0s;

  ${({ inView }) =>
    inView &&
    `
    opacity: 1;
  `}

  ${theme.shadow.image} !important;
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
  background-color: ${theme.colors.bgLight200};
  display: block;
`;
