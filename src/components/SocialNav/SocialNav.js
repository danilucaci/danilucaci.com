import React from "react";
import { FormattedMessage } from "react-intl";

import { Wrapper, StyledIcon, StyledLink } from "./styles";
import { sendSocialNavVisitEvent } from "../../helpers/ga";
import GA_EVENTS from "../../helpers/gaEvents";
import AriaText from "../AriaText/AriaText";

const SocialNav = (props) => (
  <Wrapper>
    <StyledLink
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/danilucaci"
      onClick={() =>
        sendSocialNavVisitEvent({
          action: GA_EVENTS.socialNavVisit.actions.github.name,
        })
      }
    >
      <FormattedMessage id="social.nav.github">
        {(txt) => <AriaText>{txt}</AriaText>}
      </FormattedMessage>
      <StyledIcon aria-hidden="true" light={props.light}>
        <use xlinkHref="#github" />
      </StyledIcon>
    </StyledLink>
    <StyledLink
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/danilucaci"
      onClick={() =>
        sendSocialNavVisitEvent({
          action: GA_EVENTS.socialNavVisit.actions.twitter.name,
        })
      }
    >
      <FormattedMessage id="social.nav.twitter">
        {(txt) => <AriaText>{txt}</AriaText>}
      </FormattedMessage>
      <StyledIcon aria-hidden="true" light={props.light}>
        <use xlinkHref="#twitter" />
      </StyledIcon>
    </StyledLink>
    <StyledLink
      target="_blank"
      rel="noopener noreferrer"
      href="https://dribbble.com/danilucaci"
      onClick={() =>
        sendSocialNavVisitEvent({
          action: GA_EVENTS.socialNavVisit.actions.dribbble.name,
        })
      }
    >
      <FormattedMessage id="social.nav.dribbble">
        {(txt) => <AriaText>{txt}</AriaText>}
      </FormattedMessage>
      <StyledIcon aria-hidden="true" light={props.light}>
        <use xlinkHref="#dribbble" />
      </StyledIcon>
    </StyledLink>
    <StyledLink
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/danilucaci/"
      onClick={() =>
        sendSocialNavVisitEvent({
          action: GA_EVENTS.socialNavVisit.actions.linkedin.name,
        })
      }
    >
      <FormattedMessage id="social.nav.linkedin">
        {(txt) => <AriaText>{txt}</AriaText>}
      </FormattedMessage>
      <StyledIcon aria-hidden="true" light={props.light}>
        <use xlinkHref="#linkedin" />
      </StyledIcon>
    </StyledLink>
  </Wrapper>
);

export default SocialNav;
