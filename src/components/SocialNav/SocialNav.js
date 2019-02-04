import React from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

import { Icon } from "../Icon/Icon";

const Wrapper = styled.div``;

const StyledIcon = styled(Icon)`
  fill: ${(props) => (props.light ? theme.colors.light100 : null)};
`;

const StyledLink = styled.a`
  display: inline-block;
  vertical-align: top;
  margin-right: ${rem(16)};
  will-change: transform;
  transition: transform ease 0.15s;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    background-color: transparent;
    transform: scale(1.15);
    cursor: pointer;
  }
`;

const SocialNav = (props) => {
  return (
    <Wrapper>
      <StyledLink
        target="_blank"
        rel="noopener"
        href="https://github.com/danilucaci"
      >
        <span className="sr-only">
          View danilucaci Github account, opens in new window
        </span>
        <StyledIcon size="40" aria-hidden="true" light={props.light}>
          <use xlinkHref="#github" />
        </StyledIcon>
      </StyledLink>
      <StyledLink
        target="_blank"
        rel="noopener"
        href="https://twitter.com/danilucaci"
      >
        <span className="sr-only">
          View danilucaci Twitter account, opens in new window
        </span>
        <StyledIcon size="40" aria-hidden="true" light={props.light}>
          <use xlinkHref="#twitter" />
        </StyledIcon>
      </StyledLink>
      <StyledLink
        target="_blank"
        rel="noopener"
        href="https://dribbble.com/danilucaci"
      >
        <span className="sr-only">
          View danilucaci Drible account, opens in new window
        </span>
        <StyledIcon size="40" aria-hidden="true" light={props.light}>
          <use xlinkHref="#dribbble" />
        </StyledIcon>
      </StyledLink>
      <StyledLink
        target="_blank"
        rel="noopener"
        href="https://www.linkedin.com/in/danielmlucaci"
      >
        <span className="sr-only">
          View danilucaci Linkedin account, opens in new window
        </span>
        <StyledIcon size="40" aria-hidden="true" light={props.light}>
          <use xlinkHref="#linkedin" />
        </StyledIcon>
      </StyledLink>
    </Wrapper>
  );
};

export default SocialNav;
