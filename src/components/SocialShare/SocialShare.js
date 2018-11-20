import React from "react";
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
  margin-left: -${rem(4)};
  white-space: nowrap;
  & .SocialMediaShareButton {
    display: inline-block;
    margin-right: 16px;

    &:focus,
    &:active {
      outline: 2px dashed ${theme.colors.main600};
    }
  }
`;

const StyledCopyButton = styled.div`
  display: inline-block;
  position: relative;

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
  width: ${rem(40)};
  height: ${rem(40)};

  ${mediaMin.s`
    width: ${rem(32)};
    height: ${rem(32)};
  `};

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

  ${(props) =>
    props.topReading && css
      ? `
    bottom: -${rem(56)};
    right: -${rem(4)};

    &:after {
      content: "";
      display: block;
      width: ${rem(16)};
      height: ${rem(16)};
      border-top: ${rem(8)} solid #ffffff;
      border-left: ${rem(8)} solid #ffffff;
      transform: rotate(45deg);
      position: absolute;
      top: -${rem(8)};
      right: ${rem(12)};
    }
  `
      : `
    top: -${rem(44)};
    left: -${rem(32)};

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
      left: ${rem(40)};
    }
  `};

  padding: ${rem(8)};
`;

const TwitterIcon = styled(Icon)`
  width: ${rem(40)};
  height: ${rem(40)};

  ${mediaMin.s`
    width: ${rem(32)};
    height: ${rem(32)};
  `};

  fill: ${theme.colors.social.twitter};
`;

const LinkedinIcon = styled(Icon)`
  width: ${rem(40)};
  height: ${rem(40)};

  ${mediaMin.s`
    width: ${rem(32)};
    height: ${rem(32)};
  `};

  fill: ${theme.colors.social.linkedin};
`;

const FacebookIcon = styled(Icon)`
  width: ${rem(40)};
  height: ${rem(40)};

  ${mediaMin.s`
    width: ${rem(32)};
    height: ${rem(32)};
  `};

  fill: ${theme.colors.social.facebook};
`;

const SocialShare = (props) => {
  const url = urljoin(config.siteUrl, config.pathPrefix, props.slug);

  return (
    <StyledSocialShare>
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
        <CopyTooltip topReading={props.topReading} show={props.tooltipOpen}>
          {props.tooltipMessage}
        </CopyTooltip>
      </StyledCopyButton>
    </StyledSocialShare>
  );
};

export default SocialShare;
