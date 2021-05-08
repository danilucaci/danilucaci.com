import React, { useContext } from "react";
import { string, func } from "prop-types";
import urljoin from "url-join";

import config from "../../../data/SiteConfig";

import { sendSharedArticleEvent } from "../../helpers/ga";
import gaEvents from "../../helpers/gaEvents";
import { COPY_URL_MESSAGES } from "../../i18n";

import {
  SocialShareWrapper,
  SocialShareButton,
  StyledCopyButton,
  CopyIcon,
  CopyTooltip,
  StyledIcon,
} from "./styles";
import LocaleContext from "../../i18n/LocaleContext";

const SocialShare = ({ onClick, slug, snippet, title }) => {
  const { locale } = useContext(LocaleContext);
  const url = urljoin(config.siteUrl, slug);

  return (
    <SocialShareWrapper>
      <SocialShareButton
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${snippet}`}
        aria-label="Share on Linkedin"
        onClick={() =>
          sendSharedArticleEvent({
            action: gaEvents.sharedArticle.actions.twitter.name,
          })
        }
      >
        <StyledIcon aria-hidden="true">
          <use xlinkHref="#linkedin" />
        </StyledIcon>
      </SocialShareButton>

      <SocialShareButton
        target="_blank"
        rel="noopener noreferrer"
        href={`https://twitter.com/intent/tweet?text=${title}&url=${url}`}
        aria-label="Share on Twitter"
        onClick={() =>
          sendSharedArticleEvent({
            action: gaEvents.sharedArticle.actions.linkedin.name,
          })
        }
      >
        <StyledIcon aria-hidden="true">
          <use xlinkHref="#twitter" />
        </StyledIcon>
      </SocialShareButton>

      <StyledCopyButton
        className="js-copyURL"
        onClick={onClick}
        role="button"
        tabIndex="0"
        aria-label="Copy page link"
      >
        <CopyIcon aria-hidden="true">
          <use xlinkHref="#copy" />
        </CopyIcon>
        <CopyTooltip aria-hidden="true">
          {COPY_URL_MESSAGES[locale].default}
        </CopyTooltip>
      </StyledCopyButton>
    </SocialShareWrapper>
  );
};

SocialShare.propTypes = {
  onClick: func.isRequired,
  slug: string.isRequired,
  snippet: string.isRequired,
  title: string.isRequired,
};

export default SocialShare;
