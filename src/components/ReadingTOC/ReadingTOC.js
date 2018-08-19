import React, { Component } from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin, mediaMax } from "../../theme/globalStyles";
import { Icon } from "../Icon/Icon";

const StyledTOC = styled.nav`
  background-color: ${theme.colors.gray100};
  display: block;
  max-width: ${rem(220)};
  text-align-last: left;

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
      padding-left: ${rem(40)};
      margin-left: -${rem(20)};
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
      margin-left: -${rem(20)};
      margin-right: 0;
    `};
  }

  & li a {
    display: block;
    padding: ${rem(8)} ${rem(16)};
    margin-left: -${rem(16)};
    margin-right: -${rem(16)};

    ${mediaMin.s`
      padding: ${rem(8)} ${rem(20)};
      margin-left: -${rem(20)};
      margin-right: -${rem(20)};
    `};
  }

  a:active,
  a:focus {
    outline: 2px dashed ${theme.colors.main600};
    background-color: ${theme.colors.gray300};
  }

  a:visited,
  a:link {
    color: ${theme.colors.main600};
  }

  a:hover {
    color: ${theme.colors.main600};
    background-color: ${theme.colors.gray300};
    cursor: pointer;
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
  bottom: ${rem(64)};
  padding: ${rem(8)} ${rem(16)} ${rem(8)} ${rem(16)};
  width: ${rem(272)};
  max-height: ${rem(320)};
  max-height: 64vh;
  overflow-x: scroll;
  z-index: 2;

  & * {
    text-align: left;
  }

  /* Hide the scrollbar and still scroll */
  /* On webkit */
  &::-webkit-scrollbar {
    display: none;
  }

  /* For Edge */
  -ms-overflow-style: -ms-autohiding-scrollbar;
  -ms-overflow-style: none;

  ${mediaMax.xxs`
    left: ${rem(16)};
  `};

  ${mediaMin.xs`
    width: ${rem(320)};
  `};

  ${mediaMin.s`
    width: ${rem(400)};
  `};

  box-shadow: 0px 8px 16px 4px rgba(153,153,153,0.32), 0px 4px 8px 0px rgba(153,153,153,0.2),
    inset 0px -24px 24px -16px rgba(90, 90, 90, 0.28);

  
  ${
    "" /* &:after {
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
    z-index: 1;
  }  */
  }


  ${'' /* prettier-ignore */}
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
