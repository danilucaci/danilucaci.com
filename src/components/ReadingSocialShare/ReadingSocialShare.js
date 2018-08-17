import React, { Component } from "react";
import styled, { css } from "styled-components";
import urljoin from "url-join";

import config from "../../../data/SiteConfig";
import { theme, rem, mediaMax, mediaMin } from "../../theme/globalStyles";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

import { Icon } from "../Icon/Icon";

const StyledSocialShare = styled.div`
  display: block;
  position: relative;
  width: 100%;
`;

const ReadingShareIcon = styled(Icon)`
  width: ${rem(48)};
  height: ${rem(48)};
  padding: ${rem(8)};

  ${mediaMin.m`
    display: none;
  `};
`;

const ShareIcons = styled.div`
  background-color: ${theme.colors.gray100};
  display: none;

  ${theme.shadow.hover};

  ${(props) =>
    props.showIcons &&
    css`
      display: block;
      position: absolute;
      top: -${rem(68)};
      right: -${rem(32)};
      width: ${rem(192)};
    `};

  ${mediaMax.m`
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
      right: ${rem(40)};
    }
  `};

  ${mediaMin.m`
    display: block;
    box-shadow: none;
    width: auto;
    position: static;
  `};

  & .SocialMediaShareButton {
    display: inline-block;
    width: ${rem(48)};
    height: ${rem(48)};
    padding: ${rem(8)} 0;

    &:focus,
    &:active {
      outline: 2px dashed ${theme.colors.main600};
    }
  }
`;

const StyledCopyButton = styled.div`
  display: inline-block;
  position: relative;
  width: ${rem(48)};
  height: ${rem(48)};
  padding: ${rem(8)} 0;

  &:focus,
  &:active {
    outline: 2px dashed ${theme.colors.main600};
    & span {
      display: block;
    }
  }

  &:hover {
    & span {
      display: block;
    }
  }
`;

const CopyIcon = styled(Icon)`
  width: ${rem(32)};
  height: ${rem(32)};
  fill: ${theme.colors.dark800};
`;

const CopyTooltip = styled.span`
  background-color: ${theme.colors.gray100};
  ${theme.shadow.hover};
  display: ${(props) => (props.show ? "block" : "none")};
  white-space: nowrap;
  font-size: ${theme.fontSizes.xs};
  line-height: ${theme.lineHeights.xs};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyRegular};
  }

  position: absolute;
  top: -${rem(44)};
  left: -${rem(60)};
  padding: ${rem(8)};

  &:after {
    content: "";
    display: block;
    width: ${rem(16)};
    height: ${rem(16)};
    border-bottom: ${rem(8)} solid #ffffff;
    border-right: ${rem(8)} solid #ffffff;
    transform: rotate(45deg);
    position: absolute;
    top: ${rem(24)};
    right: ${rem(16)};
  }
`;

const TwitterIcon = styled(Icon)`
  width: ${rem(32)};
  height: ${rem(32)};
  fill: ${theme.colors.social.twitter};
`;

const LinkedinIcon = styled(Icon)`
  width: ${rem(32)};
  height: ${rem(32)};
  fill: ${theme.colors.social.linkedin};
`;

const FacebookIcon = styled(Icon)`
  width: ${rem(32)};
  height: ${rem(32)};
  fill: ${theme.colors.social.facebook};
`;

class StyledReadingShareNav extends Component {
  state = {
    contentVisible: false,
  };

  showContent = () => {
    this.setState((prevState) => ({
      contentVisible: !prevState.contentVisible,
    }));
  };

  render() {
    const url = urljoin(config.siteUrl, config.pathPrefix, this.props.slug);

    return (
      <StyledSocialShare onClick={this.showContent}>
        <ReadingShareIcon>
          <use xlinkHref="#share" />
        </ReadingShareIcon>
        <ShareIcons showIcons={this.state.contentVisible}>
          <FacebookShareButton url={url} quote={this.props.intro}>
            <FacebookIcon>
              <use xlinkHref="#facebook" />
            </FacebookIcon>
          </FacebookShareButton>
          <LinkedinShareButton
            url={url}
            title={this.props.title}
            description={this.props.snippet}
          >
            <LinkedinIcon>
              <use xlinkHref="#linkedin" />
            </LinkedinIcon>
          </LinkedinShareButton>
          <TwitterShareButton url={url} title={this.props.title}>
            <TwitterIcon>
              <use xlinkHref="#twitter" />
            </TwitterIcon>
          </TwitterShareButton>
          <StyledCopyButton
            className="js-copyURL"
            onClick={this.props.onClick}
            role="button"
            tabIndex="0"
          >
            <CopyIcon>
              <use xlinkHref="#copy" />
            </CopyIcon>
            <CopyTooltip show={this.props.tooltipOpen}>
              {this.props.tooltipMessage}
            </CopyTooltip>
          </StyledCopyButton>
        </ShareIcons>
      </StyledSocialShare>
    );
  }
}

export default StyledReadingShareNav;
