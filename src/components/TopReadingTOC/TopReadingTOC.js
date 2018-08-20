import React from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin, mediaMax } from "../../theme/globalStyles";
import { Icon } from "../Icon/Icon";

const StyledTopTOC = styled.nav`
  background-color: ${theme.colors.gray100};
  float: right;
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
    padding-left: ${rem(8)};

    ${mediaMin.s`
      padding-left: ${rem(16)};
    `};
  }

  & ul ul li {
    list-style-type: none;
    font-size: ${theme.fontSizes.s};
    line-height: ${theme.lineHeights.s};
  }

  & ul ul li a {
    margin-right: 0;

    ${mediaMin.s`
      margin-right: 0;
    `};
  }

  & li a {
    display: block;
    padding: ${rem(8)} 0;
  }

  a:active,
  a:focus {
    outline: 2px dashed ${theme.colors.main600};
  }

  a:visited,
  a:link {
    color: ${theme.colors.main600};
  }

  a:hover {
    color: ${theme.colors.main600};
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

const TopTocContents = styled.div`
  background-color: ${theme.colors.gray100};
  display: none;
  position: absolute;
  top: ${rem(56)};
  right: 0;
  padding: ${rem(8)} ${rem(16)} ${rem(8)} ${rem(16)};
  width: ${rem(272)};
  max-height: ${rem(320)};
  overflow-x: scroll;
  z-index: 2;

  & * {
    text-align: left;
  }

  box-shadow: 0px 8px 16px 4px rgba(153, 153, 153, 0.32),
    0px 4px 8px 0px rgba(153, 153, 153, 0.2),
    inset 0px -24px 24px -16px rgba(90, 90, 90, 0.28);

  ${"" /* &:after {
    content: "";
    display: block;
    width: ${rem(16)};
    height: ${rem(16)};

    border-top: ${rem(8)} solid #ffffff;
    border-left: ${rem(8)} solid #ffffff;
    transform: rotate(45deg);
    position: absolute;
    top: -${rem(8)};
    left: ${rem(40)};
    z-index: 1;
  } */} /* Hide the scrollbar and still scroll */
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

  ${mediaMax.xs`
    max-height: 64vh;
  `};

  ${mediaMin.xs`
    width: ${rem(320)};
  `};

  ${mediaMin.s`
    width: ${rem(400)};
  `};

  ${(props) =>
    props.showContent &&
    css`
      display: block;
    `};
`;

const TopReadingTOC = (props) => {
  return (
    <StyledTopTOC onClick={props.openTopReadingToc}>
      <h3>Table of Contents</h3>
      <StyledIcon open={props.contentVisible}>
        <use xlinkHref="#toc" />
      </StyledIcon>
      <TopTocContents
        showContent={props.contentVisible}
        dangerouslySetInnerHTML={{
          __html: props.tableOfContents,
        }}
      />
    </StyledTopTOC>
  );
};

export default TopReadingTOC;
