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

  & ul li,
  ul li p {
    list-style-type: none;
    font-family: ${theme.fonts.bodyRegular};
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
    padding: ${rem(8)};
    margin-left: -${rem(16)};
    margin-right: -${rem(16)};

    ${mediaMin.s`
      padding: ${rem(8)} ${rem(24)};
      margin-left: -${rem(24)};
      margin-right: -${rem(24)};
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
  overflow: hidden;
  position: absolute;

  ${(props) =>
    props.showContent &&
    css`
      opacity: 1;
      transform: none;
      position: static;
      overflow: visible;
    `};

  ${mediaMin.s`
    opacity: 1;
    overflow: visible;
    transform: none;
    position: static;
  `};
`;

class PostTOC extends Component {
  state = {
    contentVisible: false,
  };

  showContent = () => {
    this.setState((prevState) => ({
      contentVisible: !prevState.contentVisible,
    }));
  };

  render() {
    let tableOfContents = this.props.tableOfContents;
    const contentVisible = this.state.contentVisible;

    return (
      <StyledTOC onClick={this.showContent}>
        <h3>Table of Contents</h3>
        <StyledIcon animate={contentVisible}>
          <use xlinkHref="#down" />
        </StyledIcon>
        {tableOfContents && (
          <TocContents
            showContent={contentVisible}
            dangerouslySetInnerHTML={{
              __html: tableOfContents,
            }}
          />
        )}
      </StyledTOC>
    );
  }
}

export default PostTOC;
