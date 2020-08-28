import React from "react";
import { useIntl } from "react-intl";
import { func, string } from "prop-types";

import {
  StyledFooterSocialNav,
  StyledFooterSocialNavItem,
  FooterNavLink,
} from "./styles";

import { sendFooterSocialNavVisitEvent } from "../../helpers/ga";
import GA_EVENTS from "../../helpers/gaEvents";
import AriaText from "../AriaText/AriaText";

export function FooterSocialNavProfileLink({
  socialMediaName,
  socialMediaLink,
  socialMediaID,
  handleClick,
}) {
  const intl = useIntl();

  return (
    <StyledFooterSocialNavItem>
      <FooterNavLink
        target="_blank"
        rel="noopener noreferrer"
        href={socialMediaLink}
        onClick={() =>
          handleClick({
            action: socialMediaName,
          })
        }
      >
        {socialMediaName}
        <AriaText>
          {intl.formatMessage({ id: `social.nav.${socialMediaID}` })}
        </AriaText>
      </FooterNavLink>
    </StyledFooterSocialNavItem>
  );
}

FooterSocialNavProfileLink.propTypes = {
  socialMediaName: string.isRequired,
  socialMediaLink: string.isRequired,
  socialMediaID: string.isRequired,
  handleClick: func.isRequired,
};

const FooterSocialNav = () => (
  <StyledFooterSocialNav>
    {GA_EVENTS.socialMediaProfiles.map((profileName) => (
      <FooterSocialNavProfileLink
        key={profileName}
        handleClick={sendFooterSocialNavVisitEvent}
        socialMediaID={profileName}
        socialMediaName={
          GA_EVENTS.footerSocialNavVisit.actions[profileName].name
        }
        socialMediaLink={
          GA_EVENTS.footerSocialNavVisit.actions[profileName].link
        }
      />
    ))}
  </StyledFooterSocialNav>
);

export default FooterSocialNav;
