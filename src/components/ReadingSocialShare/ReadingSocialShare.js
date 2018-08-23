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

  ${theme.shadow.dropdown};

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
      width: 0;
      border-color: transparent #ffffff #ffffff transparent;
      border-style: solid;
      border-width: ${rem(8)};
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
  display: none;

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
    width: 0;
    border-color: transparent #ffffff #ffffff transparent;
    border-style: solid;
    border-width: 0 0 16px 16px;
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

const StyledReadingShareNav = (props) => {
  const url = urljoin(config.siteUrl, config.pathPrefix, props.slug);
  return (
    <StyledSocialShare onClick={props.openShareNav}>
      <ReadingShareIcon>
        <use xlinkHref="#share" />
      </ReadingShareIcon>
      <ShareIcons showIcons={props.contentVisible}>
        <FacebookShareButton url={url} quote={props.intro}>
          <FacebookIcon>
            <use xlinkHref="#facebook" />
          </FacebookIcon>
        </FacebookShareButton>
        <LinkedinShareButton
          url={url}
          title={props.title}
          description={props.snippet}
        >
          <LinkedinIcon>
            <use xlinkHref="#linkedin" />
          </LinkedinIcon>
        </LinkedinShareButton>
        <TwitterShareButton url={url} title={props.title}>
          <TwitterIcon>
            <use xlinkHref="#twitter" />
          </TwitterIcon>
        </TwitterShareButton>
        <StyledCopyButton
          className="js-copyURL"
          onClick={props.onClick}
          role="button"
          tabIndex="0"
        >
          <CopyIcon>
            <use xlinkHref="#copy" />
          </CopyIcon>
          <CopyTooltip>{props.tooltipMessage}</CopyTooltip>
        </StyledCopyButton>
      </ShareIcons>
    </StyledSocialShare>
  );
};

export default StyledReadingShareNav;
