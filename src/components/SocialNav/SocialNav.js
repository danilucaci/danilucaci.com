import React from "react";
import { FormattedMessage } from "react-intl";

import { Wrapper, StyledIcon, StyledLink } from "./styles";
import sendGAEvent from "../../helpers/sendGAEvent";

const SocialNav = (props) => (
  <Wrapper>
    <StyledLink
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/danilucaci"
      onClick={sendGAEvent("Social Nav Visit", "Github")}
    >
      <FormattedMessage id="social.nav.github">
        {(txt) => <span className="sr-only">{txt}</span>}
      </FormattedMessage>
      <StyledIcon aria-hidden="true" light={props.light}>
        <use xlinkHref="#github" />
      </StyledIcon>
    </StyledLink>
    <StyledLink
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/danilucaci"
      onClick={sendGAEvent("Social Nav Visit", "Twitter")}
    >
      <FormattedMessage id="social.nav.twitter">
        {(txt) => <span className="sr-only">{txt}</span>}
      </FormattedMessage>
      <StyledIcon aria-hidden="true" light={props.light}>
        <use xlinkHref="#twitter" />
      </StyledIcon>
    </StyledLink>
    <StyledLink
      target="_blank"
      rel="noopener noreferrer"
      href="https://dribbble.com/danilucaci"
      onClick={sendGAEvent("Social Nav Visit", "Dribbble")}
    >
      <FormattedMessage id="social.nav.dribbble">
        {(txt) => <span className="sr-only">{txt}</span>}
      </FormattedMessage>
      <StyledIcon aria-hidden="true" light={props.light}>
        <use xlinkHref="#dribbble" />
      </StyledIcon>
    </StyledLink>
    <StyledLink
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/danilucaci/"
      onClick={sendGAEvent("Social Nav Visit", "Linkedin")}
    >
      <FormattedMessage id="social.nav.linkedin">
        {(txt) => <span className="sr-only">{txt}</span>}
      </FormattedMessage>
      <StyledIcon aria-hidden="true" light={props.light}>
        <use xlinkHref="#linkedin" />
      </StyledIcon>
    </StyledLink>
  </Wrapper>
);

export default SocialNav;
