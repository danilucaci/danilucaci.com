import React, { Component } from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { Icon } from "../Icon/Icon";

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

const StyledTOC = styled.nav`
  background-color: ${theme.colors.gray100};
  display: block;
  padding: ${rem(16)};
  position: relative;
  ${theme.shadow.default};

  & h3 {
    display: inline-block;
    margin-bottom: 0 !important;
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
