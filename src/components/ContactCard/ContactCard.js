import React from "react";
import styled from "styled-components";

import { theme, mediaMin, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import { DefaultLink } from "../Link/Link";
import { Icon } from "../Icon/Icon";
import { MailButton } from "../Button/Button";

const StyledContactCard = styled.aside`
  background-color: ${theme.colors.gray100};
  width: 100%;
  ${theme.shadow.subtle};
  padding-top: ${rem(128)};
  padding-bottom: ${rem(56)};

  ${mediaMin.xxl`
    padding-top: ${rem(112)};
    padding-bottom: ${rem(72)};
  `};
`;

const StyledContactCardContents = styled.div`
  max-width: ${theme.contain.content};
  margin: 0 auto;
  position: relative;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};
`;

const StyledIcon = styled(Icon)`
  display: block;
  fill: ${theme.colors.sectionBackground};
  width: ${rem(132)};
  height: ${rem(132)};
  transform: rotate(-12deg);
  position: absolute;
  left: -${rem(4)};
  top: -${rem(128)};
  z-index: 0;

  ${mediaMin.xxl`
    top: -${rem(48)};
    left: -${rem(48)};
  `};
`;

const StyledH2 = styled.h2`
  display: block;
  margin-bottom: ${rem(16)};
  position: relative;
  z-index: 5;
`;

const StyledMailToButton = styled(MailButton)`
  margin-top: ${rem(32)};
  width: 100%;

  ${mediaMin.s`
    width: ${rem(288)};
  `};
`;

const ContactCard = () => {
  return (
    <StyledContactCard>
      <StyledContactCardContents>
        <StyledIcon>
          <use xlinkHref="#mail" />
        </StyledIcon>
        <StyledH2>Have a project in mind? Let’s talk!</StyledH2>
        <Copy>
          If you have a project in mind where my services would help, contact me
          at <a href={theme.mailToLink}>hello@danilucaci.com</a>.
        </Copy>
        <StyledMailToButton>
          <a href={theme.mailToLink}>Contact Me</a>
        </StyledMailToButton>
      </StyledContactCardContents>
    </StyledContactCard>
  );
};

export default ContactCard;
