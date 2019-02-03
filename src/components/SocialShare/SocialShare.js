import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import urljoin from "url-join";
import { TwitterShareButton, LinkedinShareButton } from "react-share";

import config from "../../../data/SiteConfig";
import { theme, rem, mediaMax, mediaMin } from "../../theme/globalStyles";
import { Icon } from "../Icon/Icon";

const StyledSocialShare = styled.div`
  margin-left: -${rem(4)};
  white-space: nowrap;

  & .SocialMediaShareButton {
    display: inline-block;
    margin-right: ${rem(8)};
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

const TwitterIcon = styled(StyledIcon)``;

const LinkedinIcon = styled(StyledIcon)``;

const SocialShare = (props) => {
  const url = urljoin(config.siteUrl, config.pathPrefix, props.slug);
  return (
    <StyledSocialShare>
      <LinkedinShareButton
        url={url}
        title={props.title}
        description={props.snippet}
      >
        <LinkedinIcon aria-hidden="true">
          <use xlinkHref="#linkedin" />
        </LinkedinIcon>
        <span className="sr-only">
          Share article on linkedin, opens in new window.
        </span>
      </LinkedinShareButton>
      <TwitterShareButton url={url} title={props.title}>
        <TwitterIcon aria-hidden="true">
          <use xlinkHref="#twitter" />
        </TwitterIcon>
        <span className="sr-only">
          Share article on twitter, opens in new window.
        </span>
      </TwitterShareButton>
      <StyledCopyButton
        className="js-copyURL"
        onClick={props.onClick}
        role="button"
        tabIndex="0"
      >
        <CopyIcon aria-hidden="true">
          <use xlinkHref="#copy" />
        </CopyIcon>
        <CopyTooltip aria-hidden="true">Copy page link</CopyTooltip>
      </StyledCopyButton>
    </StyledSocialShare>
  );
};

SocialShare.propTypes = {
  onClick: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SocialShare;
