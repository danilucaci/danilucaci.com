import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import { theme, mediaMin, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";

const StyledContactCard = styled.aside`
  border-top: ${rem(8)} solid ${theme.colors.main600};
  background-color: ${theme.colors.gray100};
  width: 100%;
  padding: ${rem(24)} ${rem(20)} ${rem(32)};
  ${mediaMin.l`
    padding: ${rem(48)} ${rem(64)} ${rem(56)};
  `};

  ${mediaMin.xxl`
    padding: ${rem(56)} ${rem(148)} ${rem(64)};
  `};

  ${mediaMin.xxxl`
    padding: ${rem(80)} ${rem(200)} ${rem(96)};
  `};
`;

const StyledContactCardContents = styled.div`
  max-width: ${theme.contain.content};
  margin: 0 auto;
`;

const StyledH2 = styled.h2`
  display: block;
  margin-bottom: ${rem(8)};
`;

const StyledMailToButton = styled.a`
  background-color: ${theme.colors.main600};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.buttonLight} !important;
  display: block;

  text-align: center;
  text-decoration: none;
  font-size: ${theme.fontSizes.button};
  line-height: ${theme.lineHeights.button};
  font-style: normal;
  font-weight: 700;

  padding: ${rem(12)} ${rem(40)};
  height: ${rem(48)};
  width: ${rem(288)};
  margin-top: ${rem(24)};

  white-space: nowrap;

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyBold};
  }

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${theme.colors.main500};
    ${theme.shadow.buttons.main};
  }
`;

const CopyContainer = styled.div`
  /* max-width: ${rem(600)}; */
  
`;

const StyledCopy = styled(Copy)`
  display: inline;
`;

const MailLink = styled.a`
  display: inline;
  white-space: nowrap;
`;

const ContactCard = (props) => {
  let emailURL = "";

  if (props.locale === "en") {
    emailURL = "mailto:hello@danilucaci.com";
  } else if (props.locale === "es") {
    emailURL = "mailto:hola@danilucaci.com";
  }

  return (
    <StyledContactCard>
      <StyledContactCardContents>
        <FormattedMessage id="contactCardTitle">
          {(txt) => <StyledH2>{txt}</StyledH2>}
        </FormattedMessage>
        <CopyContainer>
          <FormattedMessage id="contactCardDescription">
            {(txt) => <StyledCopy>{txt} </StyledCopy>}
          </FormattedMessage>
          <FormattedMessage id="contactCardEmail">
            {(txt) => <MailLink href={emailURL}>{txt}</MailLink>}
          </FormattedMessage>
        </CopyContainer>
        <FormattedMessage id="contactCardCTA">
          {(txt) => (
            <StyledMailToButton role="button" href={emailURL}>
              {txt}
            </StyledMailToButton>
          )}
        </FormattedMessage>
      </StyledContactCardContents>
    </StyledContactCard>
  );
};

export default ContactCard;
