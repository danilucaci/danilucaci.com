import React from "react";
import styled, { css } from "styled-components";
import { theme, rem, mediaMax, mediaMin } from "../../theme/globalStyles";
import { FormattedMessage } from "react-intl";

import { Icon } from "../Icon/Icon";

const Wrapper = styled.nav``;

const StyledIcon = styled(Icon)`
  fill: ${(props) => (props.light ? theme.colors.light100 : null)};
  width: ${rem(40)};
  height: ${rem(40)};

  ${mediaMin.m`
    width: ${rem(32)};
    height: ${rem(32)};  
  `};
`;

const StyledLink = styled.a`
  display: inline-block;
  vertical-align: top;
  margin-right: ${rem(16)};
  will-change: transform;
  transition: transform ease 0.15s;

  ${mediaMin.m`
    margin-right: ${rem(10)};
  `};

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    background-color: transparent;
    transform: scale(${theme.iconsScale});
    cursor: pointer;
  }
`;

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
    <StyledLink target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/danielmlucaci">
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
