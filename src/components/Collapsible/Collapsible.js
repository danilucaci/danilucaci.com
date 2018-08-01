import React, { Component } from "react";
import styled, { css } from "styled-components";

import { theme, mediaMin, rem } from "../../theme/globalStyles";

import { H3 } from "../Headings/Headings";
import { Icon } from "../Icon/Icon";

const StyledCollapsible = styled.div`
  background-color: ${theme.colors.gray100};
  ${theme.shadow.default};
  display: inline-block;
  vertical-align: top;

  padding: ${rem(14)} ${rem(16)};
  position: relative;

  width: 100%;
  height: 100%;
  margin-bottom: ${rem(24)};

  ${mediaMin.s`
    background-color: transparent;
    box-shadow: none;
  `};

  ${(props) =>
    props.split &&
    css`
      @media screen and (min-width: ${theme.breakpoints.m}) {
        width: calc(50% - ${theme.gutters.m});
        margin-right: ${theme.gutters.m};

        &:nth-of-type(2) {
          margin-right: 0;
        }
      }
    `};
`;

const StyledTitle = styled(H3)`
  font-family: ${theme.fonts.header};
  font-weight: 700;
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.m};

  ${mediaMin.s`
    font-size: ${theme.fontSizes.h3};
    line-height: ${theme.lineHeights.h3};
  `};
`;

const CollapsibleContent = styled.div`
  opacity: 0;
  transform: scaleY(0);
  transition: all 0.1s ease-out;
  will-change: transform, opacity, position;
  transform-origin: 0% 0%;
  overflow: hidden;
  position: absolute;
  padding-top: ${rem(16)};

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

const StyledIcon = Icon.extend`
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

class Collapsible extends Component {
  state = {
    contentVisible: false,
  };

  showContent = () => {
    this.setState((prevState) => ({
      contentVisible: !prevState.contentVisible,
    }));
  };

  render() {
    const contentVisible = this.state.contentVisible;

    return (
      <StyledCollapsible split={this.props.split} onClick={this.showContent}>
        <StyledIcon animate={contentVisible}>
          <use xlinkHref="#down" />
        </StyledIcon>
        <StyledTitle>{this.props.title}</StyledTitle>
        <CollapsibleContent showContent={contentVisible}>
          {this.props.children}
        </CollapsibleContent>
      </StyledCollapsible>
    );
  }
}

export default Collapsible;
