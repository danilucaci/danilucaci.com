import React from "react";
import { FormattedMessage } from "react-intl";

import { Wrapper, StyledIcon, StyledLink } from "./styles";

const SocialNav = (props) => (
  <Wrapper>
    <StyledLink target="_blank" rel="noopener noreferrer" href="https://github.com/danilucaci">
      <FormattedMessage id="socialNavGithub">
        {(txt) => <span className="sr-only">{txt}</span>}
      </FormattedMessage>
      <StyledIcon aria-hidden="true" light={props.light}>
        <use xlinkHref="#github" />
      </StyledIcon>
    </StyledLink>
    <StyledLink target="_blank" rel="noopener noreferrer" href="https://twitter.com/danilucaci">
      <FormattedMessage id="socialNavTwitter">
        {(txt) => <span className="sr-only">{txt}</span>}
      </FormattedMessage>
      <StyledIcon aria-hidden="true" light={props.light}>
        <use xlinkHref="#twitter" />
      </StyledIcon>
    </StyledLink>
    <StyledLink target="_blank" rel="noopener noreferrer" href="https://dribbble.com/danilucaci">
      <FormattedMessage id="socialNavDribbble">
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
    >
      <FormattedMessage id="socialNavLinkedin">
        {(txt) => <span className="sr-only">{txt}</span>}
      </FormattedMessage>
      <StyledIcon aria-hidden="true" light={props.light}>
        <use xlinkHref="#linkedin" />
      </StyledIcon>
    </StyledLink>
  </Wrapper>
);

export default SocialNav;
