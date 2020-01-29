import React from "react";
import { FormattedMessage } from "react-intl";

import {
  StyledFooterSocialNav,
  StyledFooterSocialNavItem,
  FooterNavLink,
} from "./styles";

import { sendFooterSocialNavVisitEvent } from "../../helpers/ga";
import GA_EVENTS from "../../helpers/gaEvents";
import AriaText from "../AriaText/AriaText";

const FooterSocialNav = () => (
  <StyledFooterSocialNav>
    <StyledFooterSocialNavItem>
      <FooterNavLink
        href="https://twitter.com/danilucaci"
        onClick={() =>
          sendFooterSocialNavVisitEvent({
            action: GA_EVENTS.footerSocialNavVisit.actions.twitter.name,
          })
        }
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
        onClick={() =>
          sendFooterSocialNavVisitEvent({
            action: GA_EVENTS.footerSocialNavVisit.actions.linkedin.name,
          })
        }
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
        onClick={() =>
          sendFooterSocialNavVisitEvent({
            action: GA_EVENTS.footerSocialNavVisit.actions.dribbble.name,
          })
        }
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
        onClick={() =>
          sendFooterSocialNavVisitEvent({
            action: GA_EVENTS.footerSocialNavVisit.actions.github.name,
          })
        }
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
