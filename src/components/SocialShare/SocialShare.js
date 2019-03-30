import React from "react";
import PropTypes from "prop-types";
import urljoin from "url-join";

import config from "../../../data/SiteConfig";

import {
  SocialShareWrapper,
  SocialShareButton,
  StyledCopyButton,
  CopyIcon,
  CopyTooltip,
  StyledIcon,
} from "./styles";

const SocialShare = (props) => {
  const url = urljoin(config.siteUrl, props.slug);

  return (
    <SocialShareWrapper>
      <SocialShareButton
        target="_blank"
        rel="noopener noreferrer"
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
        rel="noopener noreferrer"
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
