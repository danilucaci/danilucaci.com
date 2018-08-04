import React from "react";
import styled from "styled-components";
import urljoin from "url-join";

import config from "../../../data/SiteConfig";
import { theme, rem } from "../../theme/globalStyles";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

import { Icon } from "../Icon/Icon";

const StyledSocialShare = styled.div`
  & .SocialMediaShareButton {
    display: inline-block;

    &:focus,
    &:active {
      outline: 2px dashed ${theme.colors.main600};
    }
  }
`;

const StyledCopyButton = styled.div`
  display: inline-block;

  &:focus,
  &:active {
    outline: 2px dashed ${theme.colors.main600};
  }
`;

const CopyIcon = styled(Icon)`
  background-color: ${theme.colors.gray100};
  fill: ${theme.colors.dark800};
  margin-right: ${rem(8)};
`;

const TwitterIcon = styled(Icon)`
  background-color: ${theme.colors.gray100};
  fill: ${theme.colors.social.twitter};
  margin-right: ${rem(8)};
`;

const LinkedinIcon = styled(Icon)`
  background-color: ${theme.colors.gray100};
  fill: ${theme.colors.social.linkedin};
  margin-right: ${rem(8)};
`;

const FacebookIcon = styled(Icon)`
  background-color: ${theme.colors.gray100};
  fill: ${theme.colors.social.facebook};
  margin-right: ${rem(8)};
`;

const SocialShare = (props) => {
  const url = urljoin(config.siteUrl, config.pathPrefix, props.slug);

  return (
    <StyledSocialShare>
      <FacebookShareButton url={url} quote={props.snippet}>
        <FacebookIcon size={32}>
          <use xlinkHref="#facebook" />
        </FacebookIcon>
      </FacebookShareButton>
      <LinkedinShareButton
        url={url}
        title={props.title}
        description={props.snippet}
      >
        <LinkedinIcon size={32}>
          <use xlinkHref="#linkedin" />
        </LinkedinIcon>
      </LinkedinShareButton>
      <TwitterShareButton url={url} title={props.title}>
        <TwitterIcon size={32}>
          <use xlinkHref="#twitter" />
        </TwitterIcon>
      </TwitterShareButton>
      <StyledCopyButton
        className="js-copyURL"
        onClick={props.onClick}
        role="button"
        tabIndex="0"
      >
        <CopyIcon size={32}>
          <use xlinkHref="#share" />
        </CopyIcon>
      </StyledCopyButton>
    </StyledSocialShare>
  );
};

export default SocialShare;
