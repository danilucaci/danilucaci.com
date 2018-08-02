import React, { Component } from "react";
import styled, { css } from "styled-components";

import { theme, mediaMin, mediaMax, rem } from "../../theme/globalStyles";

import { H3 } from "../Headings/Headings";
import { Icon } from "../Icon/Icon";

const StyledCollapsible = styled.div`
  background-color: ${theme.colors.gray100};
  ${theme.shadow.default};

  padding: ${rem(14)} ${rem(16)};
  position: relative;

  width: 100%;
  height: 100%;

  ${mediaMin.s`
    padding: 0;
    background-color: transparent;
    box-shadow: none;
  `};
`;

const StyledTitle = styled(H3)`
  ${mediaMax.s`
    font-size: ${theme.fontSizes.m};
    line-height: ${theme.lineHeights.m};
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
      <StyledCollapsible onClick={this.showContent}>
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
