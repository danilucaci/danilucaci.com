import React from "react";
import { FormattedMessage } from "react-intl";

import {
  StyledFooterSocialNav,
  StyledFooterSocialNavItem,
  FooterNavLink,
} from "./styles";

import sendGAEvent from "../../helpers/sendGAEvent";
import AriaText from "../AriaText/AriaText";

const FooterSocialNav = () => (
  <StyledFooterSocialNav>
    <StyledFooterSocialNavItem>
      <FooterNavLink
        href="https://twitter.com/danilucaci"
        onClick={sendGAEvent("Footer Social Nav Visit", "Twitter")}
      >
        Twitter
        <FormattedMessage id="social.nav.twitter">
          {(txt) => <AriaText>{txt}</AriaText>}
        </FormattedMessage>
      </FooterNavLink>
    </StyledFooterSocialNavItem>
    <StyledFooterSocialNavItem>
      <FooterNavLink
        href="https://www.linkedin.com/in/danilucaci/"
        onClick={sendGAEvent("Footer Social Nav Visit", "Linkedin")}
      >
        Linkedin
        <FormattedMessage id="social.nav.linkedin">
          {(txt) => <AriaText>{txt}</AriaText>}
        </FormattedMessage>
      </FooterNavLink>
    </StyledFooterSocialNavItem>
    <StyledFooterSocialNavItem>
      <FooterNavLink
        href="https://dribbble.com/danilucaci"
        onClick={sendGAEvent("Footer Social Nav Visit", "Dribbble")}
      >
        Dribbble
        <FormattedMessage id="social.nav.dribbble">
          {(txt) => <AriaText>{txt}</AriaText>}
        </FormattedMessage>
      </FooterNavLink>
    </StyledFooterSocialNavItem>
    <StyledFooterSocialNavItem>
      <FooterNavLink
        href="https://github.com/danilucaci"
        onClick={sendGAEvent("Footer Social Nav Visit", "Github")}
      >
        Github
        <FormattedMessage id="social.nav.github">
          {(txt) => <AriaText>{txt}</AriaText>}
        </FormattedMessage>
      </FooterNavLink>
    </StyledFooterSocialNavItem>
  </StyledFooterSocialNav>
);

export default FooterSocialNav;
