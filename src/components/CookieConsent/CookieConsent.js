import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import { PrimaryButton, GhostButton } from "../Button/Button";

const StyledCookieConsent = styled.div`
  background-color: ${theme.colors.gray100};
  display: ${(props) => (props.askGDPRConsent ? "block" : "none")};
  display: ${(props) => (props.askGDPRConsent ? "flex" : "none")};
  flex-direction: column;
  padding: ${rem(24)};
  ${theme.shadow.default};
  position: fixed;
  z-index: 1000;
  will-change: transform;
  bottom: 0;
  left: 0;
  width: 100%;

  ${mediaMin.xxs`
    bottom: ${rem(24)};
    left: ${rem(24)};
    width: ${rem(248)};
  `};
`;

/**
|--------------------------------------------------
| MAKE THIS SOMEWHAT TRANSPARENT AND FULL WIDTH, INLINE BUTTONS, LESS INTRUSIVE
| We use cookies to ensure that we give you the best experience on our website. 
| Click here for more information. ACCEPT COOKIES | DENY COOKIES
|--------------------------------------------------
*/

const StyledPrimaryButton = styled(PrimaryButton)`
  width: 100%;
  margin-top: ${rem(8)};
  margin-bottom: ${rem(8)};
  display: block;

  ${mediaMin.xxs`
    width: ${rem(200)};
  `};
`;

const StyledGhostButton = styled(GhostButton)`
  width: 100%;
  display: block;

  ${mediaMin.xxs`
    width: ${rem(200)};
  `};
`;

const CookieConsent = (props) => {
  return (
    <StyledCookieConsent askGDPRConsent={props.askGDPRConsent}>
      <Copy>This page uses cookies.</Copy>
      {props.doNotTrackActive && <Copy>You have Do Not Track Active.</Copy>}
      <StyledPrimaryButton onClick={props.acceptsCookies}>
        Accept
      </StyledPrimaryButton>
      <StyledGhostButton onClick={props.deniesCookies}>Deny</StyledGhostButton>
    </StyledCookieConsent>
  );
};

CookieConsent.propTypes = {
  acceptsCookies: PropTypes.func.isRequired,
  askGDPRConsent: PropTypes.bool.isRequired,
  doNotTrackActive: PropTypes.bool.isRequired,
  deniesCookies: PropTypes.func.isRequired,
};

export default CookieConsent;
