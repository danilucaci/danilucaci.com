import React from "react";
import { useIntl } from "react-intl";
import { string, func, bool } from "prop-types";

import { Wrapper, StyledIcon, StyledLink } from "./styles";
import { sendSocialNavVisitEvent } from "../../helpers/ga";
import GA_EVENTS from "../../helpers/gaEvents";
import AriaText from "../AriaText/AriaText";

export function SocialNavProfileLink({
  socialMediaName,
  socialMediaLink,
  socialMediaID,
  handleClick,
  light,
}) {
  const intl = useIntl();

  return (
    <StyledLink
      target="_blank"
      rel="noopener noreferrer"
      href={socialMediaLink}
      onClick={() =>
        handleClick({
          action: socialMediaName,
        })
      }
    >
      <AriaText>
        {intl.formatMessage({ id: `social.nav.${socialMediaID}` })}
      </AriaText>
      <StyledIcon aria-hidden="true" light={light}>
        <use xlinkHref={`#${socialMediaID}`} />
      </StyledIcon>
    </StyledLink>
  );
}

SocialNavProfileLink.propTypes = {
  socialMediaName: string.isRequired,
  socialMediaLink: string.isRequired,
  socialMediaID: string.isRequired,
  handleClick: func.isRequired,
  light: bool,
};

SocialNavProfileLink.defaultProps = {
  light: false,
};

function SocialNav({ light }) {
  return (
    <Wrapper>
      {GA_EVENTS.socialMediaProfiles.map((profileName) => (
        <SocialNavProfileLink
          handleClick={sendSocialNavVisitEvent}
          socialMediaName={GA_EVENTS.socialNavVisit.actions[profileName].name}
          socialMediaLink={GA_EVENTS.socialNavVisit.actions[profileName].link}
          socialMediaID={profileName}
          key={profileName}
          light={light}
        />
      ))}
    </Wrapper>
  );
}

SocialNav.propTypes = {
  light: bool,
};

SocialNav.defaultProps = {
  light: false,
};

export default SocialNav;
