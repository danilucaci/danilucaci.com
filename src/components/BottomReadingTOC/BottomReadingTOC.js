import React, { Component } from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin, mediaMax } from "../../theme/globalStyles";
import { Icon } from "../Icon/Icon";

const StyledBottomToc = styled.div`
  background-color: ${theme.colors.gray100};
  display: block;
  margin-left: auto;
  position: relative;
  margin-right: auto;
  z-index: 10;

  & h3 {
    padding: ${rem(12)};
    display: inline-block !important;
    margin-top: 0;
    margin-bottom: 0 !important;

    font-size: ${theme.fontSizes.s} !important;
    line-height: ${theme.lineHeights.s} !important;
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

const StyledTocContentsShadow = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 75%
  );
  position: absolute;
  bottom: 110%;
  height: ${rem(40)};
  z-index: 2;
  pointer-events: none;
  width: 97%;
`;

const TocContainer = styled.div`
  position: absolute;
  bottom: 140%;
  left: 5%;
  width: 115%;

  transition: scale, max-height 0.2s ease;
  transform-origin: 100% 0;
  transform: scaleY(${(props) => (props.showContent ? 1 : 0)});
  max-height: ${(props) => (props.showContent ? "50vh" : 0)};
  pointer-events: ${(props) => (props.showContent ? "auto" : "none")};

  ${mediaMin.s`
    max-height: ${(props) => (props.showContent ? rem(341) : 0)};
    width: 95%;
  `};

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
    left: 50%;
  }
`;

const StyledTocContentsInnerHTML = styled.div`
  background-color: ${theme.colors.gray100};
  ${theme.shadow.dropdown};
  display: block;
  position: absolute;
  bottom: 110%;
  overflow: auto;
  width: 100%;

  will-change: transform, max-height;
  transition: scale, max-height 0.2s ease;
  transform-origin: 100% 0%;
  transform: scaleY(${(props) => (props.showContent ? 1 : 0)});
  max-height: ${(props) => (props.showContent ? "50vh" : 0)};
  pointer-events: ${(props) => (props.showContent ? "auto" : "none")};
  max-height: 50vh;

  & * {
    text-align: left;
    list-style-type: none;
    font-weight: 400;
    font-size: ${theme.fontSizes.s};
    line-height: ${theme.lineHeights.s};

    ${mediaMin.m`
      font-size: ${theme.fontSizes.s};
      line-height: ${theme.lineHeights.s};
    `};

    .fonts-loaded & {
      font-family: ${theme.fonts.bodyRegular};
    }
  }
  
  ${"" /* Heading 2 */}
  & ul li a {
    margin-left: -${rem(16)};
    padding-left: ${rem(32)};
  }

  ${"" /* Heading 3 */}
  & ul li ul li a {
    padding-left: ${rem(48)};
  }

  ${"" /* Heading 4 */}
  & ul li ul li ul li a {
    padding-left: ${rem(64)};
  }

  & a {
    display: block;
    transition: scale 0.2s ease-in;
    transition-delay: 0.4s;
    transform-origin: 100% 0;
    transform: scaleY(${(props) => (props.showContent ? 1 : 0)});
    
    ${"" /* 16 side padding important for separating the heading level */}
    padding: ${rem(8)} 0 ${rem(8)} ${rem(16)};
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
    background-color: ${theme.colors.gray300};
    color: ${theme.colors.main600};
    cursor: pointer;
  }
`;

const BottomReadingTOC = (props) => {
  return (
    <StyledBottomToc onClick={props.openBottomReadingToc}>
      <h3>Table of Contents</h3>
      <StyledIcon open={props.contentVisible}>
        <use xlinkHref="#toc" />
      </StyledIcon>
      <TocContainer showContent={props.contentVisible}>
        <StyledTocContentsShadow />
        <StyledTocContentsInnerHTML
          showContent={props.contentVisible}
          dangerouslySetInnerHTML={{
            __html: props.tableOfContents,
          }}
        />
      </TocContainer>
    </StyledBottomToc>
  );
};

export default BottomReadingTOC;
