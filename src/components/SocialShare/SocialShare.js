import React from "react";
import styled, { css } from "styled-components";
import urljoin from "url-join";

import config from "../../../data/SiteConfig";
import { theme, rem, mediaMax, mediaMin } from "../../theme/globalStyles";

import { TwitterShareButton, LinkedinShareButton } from "react-share";

import { Icon } from "../Icon/Icon";

const StyledSocialShare = styled.div`
  margin-left: -${rem(4)};
  white-space: nowrap;

  & .SocialMediaShareButton {
    display: inline-block;
  }
`;

const StyledCopyButton = styled.div`
  display: inline-block;
  position: relative;

  &:hover {
    & span {
      display: block;
    }
  }
`;

const CopyIcon = styled(Icon)`
  width: ${rem(40)};
  height: ${rem(40)};
  fill: ${theme.colors.dark800};
  will-change: transform;
  transition: transform ease 0.15s;

  &:hover {
    transform: scale(1.2);
  }

  ${mediaMin.xl`
    width: ${rem(32)};
    height: ${rem(32)};
  `};
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

  padding: ${rem(8)};
`;

const StyledIcon = styled(Icon)`
  width: ${rem(40)};
  height: ${rem(40)};
  will-change: transform;
  transition: transform ease 0.15s;

  &:hover {
    transform: scale(1.2);
  }

  ${mediaMin.xl`
    width: ${rem(32)};
    height: ${rem(32)};
  `};
`;

const TwitterIcon = styled(StyledIcon)`
  fill: ${theme.colors.social.twitter};
`;

const LinkedinIcon = styled(StyledIcon)`
  fill: ${theme.colors.social.linkedin};
`;

const SocialShare = (props) => {
  const url = urljoin(config.siteUrl, config.pathPrefix, props.slug);

  return (
    <StyledSocialShare>
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
        <CopyTooltip>Copy page link</CopyTooltip>
      </StyledCopyButton>
    </StyledSocialShare>
  );
};

export default SocialShare;
