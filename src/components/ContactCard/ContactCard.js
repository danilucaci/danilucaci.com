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
  padding: ${rem(40)} ${rem(16)} ${rem(56)} ${rem(16)};
  ${theme.shadow.subtle};

  ${mediaMin.m`
    padding-top: ${rem(72)};
    padding-bottom: ${rem(88)};
  `};
`;

const StyledContactCardContents = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 46.5em;
  position: relative;
`;

const StyledIcon = styled(Icon)`
  display: block;
  fill: ${theme.colors.gray200};
  width: ${rem(132)};
  height: ${rem(132)};
  transform: rotate(-12deg);
  position: absolute;
  top: -${rem(56)};
  left: -${rem(64)};
  z-index: 0;
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
          Feel free to send me an email for any work related inquiery where my
          services would help. You can also{" "}
          <DefaultLink to={"/about-me"}>learn more about me</DefaultLink>, see
          the{" "}
          <DefaultLink to={"/services"}>
            services I am currently offering
          </DefaultLink>{" "}
          or{" "}
          <DefaultLink to={""}>
            read some of the case studies I made
          </DefaultLink>
          .
        </Copy>
        <StyledMailToButton>
          <a href={theme.mailToLink}>Contact Me</a>
        </StyledMailToButton>
      </StyledContactCardContents>
    </StyledContactCard>
  );
};

export default ContactCard;
