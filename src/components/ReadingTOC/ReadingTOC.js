import React, { Component } from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin, mediaMax } from "../../theme/globalStyles";
import { Icon } from "../Icon/Icon";

const StyledTOC = styled.nav`
  background-color: ${theme.colors.gray100};
  display: block;
  max-width: ${rem(220)};

  margin-left: auto;
  margin-right: auto;

  position: relative;

  & h3 {
    padding: ${rem(12)};
    display: inline-block !important;
    margin-top: 0;
    margin-bottom: 0 !important;

    font-size: ${theme.fontSizes.s} !important;
    line-height: ${theme.lineHeights.s} !important;
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
    padding-left: ${rem(32)};
    margin-left: -${rem(16)};

    ${mediaMin.s`
      padding-left: ${rem(48)};
      margin-left: -${rem(24)};
    `};
  }

  & ul ul li {
    list-style-type: none;
    font-size: ${theme.fontSizes.s};
    line-height: ${theme.lineHeights.s};
  }

  & ul ul li a {
    margin-left: -${rem(16)};
    margin-right: 0;

    ${mediaMin.s`
      margin-left: -${rem(24)};
      margin-right: 0;
    `};
  }

  & li a {
    display: block;
    padding: ${rem(8)} ${rem(16)};
    margin-left: -${rem(16)};
    margin-right: -${rem(16)};

    ${mediaMin.s`
      padding: ${rem(8)} ${rem(24)};
      margin-left: -${rem(24)};
      margin-right: -${rem(24)};
    `};
  }
`;

const StyledIcon = styled(Icon)`
  display: inline-block;
  vertical-align: middle;
  transition: transform 0.2s ease;
  transform: rotate(0deg);
  margin-left: ${rem(4)};
  margin-bottom: ${rem(2)};

  ${(props) =>
    props.open &&
    css`
      fill: ${theme.colors.main600};
    `};
`;

const TocContents = styled.div`
  background-color: ${theme.colors.gray100};
  display: none;
  position: absolute;
  top: -400px;
  padding: ${rem(16)};
  width: ${rem(288)};

  ${mediaMin.m`
    width: ${rem(360)};
  `};

  ${theme.shadow.hover};

  &:after {
    content: "";
    display: block;
    width: ${rem(16)};
    height: ${rem(16)};

    border-bottom: ${rem(8)} solid #ffffff;
    border-right: ${rem(8)} solid #ffffff;
    transform: rotate(45deg);
    position: absolute;
    bottom: -${rem(8)};
    left: ${rem(40)};
  }

  ${(props) =>
    props.showContent &&
    css`
      display: block;
    `};
`;

const ReadingTOC = (props) => {
  return (
    <StyledTOC onClick={props.openReadingToc}>
      <h3>Table of Contents</h3>
      <StyledIcon open={props.contentVisible}>
        <use xlinkHref="#toc" />
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

export default ReadingTOC;
