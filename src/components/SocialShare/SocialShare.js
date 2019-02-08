import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import urljoin from "url-join";

import config from "../../../data/SiteConfig";
import { theme, rem, mediaMax, mediaMin } from "../../theme/globalStyles";
import { Icon } from "../Icon/Icon";

const SocialShareWrapper = styled.div`
  white-space: nowrap;

  ${mediaMin.s`
    margin-left: ${rem(24)};
  `};

  & .SocialMediaShareButton {
    display: inline-block;
    margin-right: ${rem(8)};
  }
`;

const SocialShareButton = styled.a`
  &:hover {
    background-color: transparent;
  }
`;

const StyledCopyButton = styled.button`
  border: none;
  background-color: transparent;
  display: inline-block;
  position: relative;

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
  will-change: transform;
  transition: transform ease 0.15s;

  &:hover {
    transform: scale(${theme.iconsScale});
  }
`;

const CopyTooltip = styled.span`
  background-color: ${theme.colors.gray100};
  border: 1px solid ${theme.colors.gray400};
  border-radius: ${theme.borderRadius.buttons};
  ${theme.shadow.dropdown};

  display: none;
  white-space: nowrap;
  font-size: ${theme.fontSizes.xs};
  line-height: ${theme.lineHeights.xs};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyRegular};
  }

  position: absolute;

  top: -${rem(44)};
  left: -${rem(64)};

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
    left: ${rem(68)};
  }

  padding: ${rem(8)};
`;

const StyledIcon = styled(Icon)`
  width: ${rem(32)};
  height: ${rem(32)};
  will-change: transform;
  transition: transform ease 0.15s;

  &:hover {
    transform: scale(${theme.iconsScale});
    background-color: transparent;
  }
`;

const SocialShare = (props) => {
  const url = urljoin(config.siteUrl, props.slug);

  return (
    <SocialShareWrapper>
      <SocialShareButton
        target="_blank"
        rel="noopener"
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${
          props.title
        }&summary=${props.snippet}`}
        aria-label="Share on Linkedin"
      >
        <StyledIcon aria-hidden="true">
          <use xlinkHref="#linkedin" />
        </StyledIcon>
      </SocialShareButton>

      <SocialShareButton
        target="_blank"
        rel="noopener"
        href={`https://twitter.com/intent/tweet?text=${props.title}&url=${url}`}
        aria-label="Share on Twitter"
      >
        <StyledIcon aria-hidden="true">
          <use xlinkHref="#twitter" />
        </StyledIcon>
      </SocialShareButton>

      <StyledCopyButton
        className="js-copyURL"
        onClick={props.onClick}
        role="button"
        tabIndex="0"
        aria-label="Copy page link"
      >
        <CopyIcon aria-hidden="true">
          <use xlinkHref="#copy" />
        </CopyIcon>
        <CopyTooltip aria-hidden="true">Copy page link</CopyTooltip>
      </StyledCopyButton>
    </SocialShareWrapper>
  );
};

SocialShare.propTypes = {
  onClick: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SocialShare;
