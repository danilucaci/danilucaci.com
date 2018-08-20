import React, { Component } from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin, mediaMax } from "../../theme/globalStyles";
import { Icon } from "../Icon/Icon";

const StyledIcon = styled(Icon)`
  float: right;
  transition: transform 0.2s ease;
  transform: rotate(0deg);

  ${(props) =>
    props.animate &&
    css`
      transform-origin: 50% 50%;
      transform: rotate(180deg);
    `};

  ${mediaMin.s`
    display: none;
  `};
`;

const StyledTOC = styled.nav`
  background-color: ${theme.colors.gray100};
  display: block;

  margin-top: ${rem(16)};
  margin-bottom: ${rem(16)};
  padding: ${rem(16)};
  position: relative;
  ${theme.shadow.default};

  ${mediaMin.s`
    margin-top: ${rem(24)};
    margin-bottom: ${rem(56)};
  `};

  & h3 {
    display: inline-block !important;
    margin-top: 0;
    margin-bottom: 0 !important;

    ${mediaMax.s`
      font-size: ${theme.fontSizes.m} !important;
      line-height: ${theme.lineHeights.m} !important;
    `};
  }

  & ul {
    margin-top: 8px;
  }

  & ul li,
  ul li p {
    list-style-type: none;

    .fonts-loaded & {
      font-family: ${theme.fonts.bodyRegular};
    }

    font-weight: 400;
    font-size: ${theme.fontSizes.s};
    line-height: ${theme.lineHeights.s};
    margin-bottom: 0;

    ${mediaMin.m`
      font-size: ${theme.fontSizes.s};
      line-height: ${theme.lineHeights.s};
    `};
  }

  & ul ul {
    padding-left: ${rem(24)};

    ${mediaMin.s`
      padding-left: ${rem(32)};
    `};
  }

  & ul ul li {
    list-style-type: none;
    font-size: ${theme.fontSizes.s};
    line-height: ${theme.lineHeights.s};
  }

  & li a {
    display: block;
    padding: ${rem(8)} ${rem(16)};
    margin-right: ${rem(16)};

    ${mediaMin.s`
      padding: ${rem(8)} ${rem(24)};
    `};
  }

  ${mediaMin.s`
    box-shadow: none;
    padding: ${rem(24)};
  `};
`;

const TocContents = styled.div`
  opacity: 0;
  transform: scaleY(0);
  transition: all 0.1s ease-out;
  will-change: transform, opacity, position;
  transform-origin: 0% 0%;
  position: absolute;
  max-height: ${rem(320)};
  overflow: hidden;

  ${(props) =>
    props.showContent &&
    css`
      opacity: 1;
      transform: none;
      position: static;
      overflow: auto;
    `};

  ${mediaMax.xs`
    max-height: 64vh;
  `};

  ${mediaMin.s`
    opacity: 1;
    transform: none;
    position: static;
    overflow: auto;
  `};
`;

const PostTOC = (props) => {
  return (
    <StyledTOC onClick={props.openPostToc}>
      <h3>Table of Contents</h3>
      <StyledIcon animate={props.contentVisible}>
        <use xlinkHref="#down" />
      </StyledIcon>
      <TocContents
        showContent={props.contentVisible}
        dangerouslySetInnerHTML={{
          __html: props.tableOfContents,
        }}
      />
    </StyledTOC>
  );
};

export default PostTOC;
