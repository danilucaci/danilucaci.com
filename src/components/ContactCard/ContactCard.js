import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import { StyledContactCard, ContactCardTitle, Subtitle, StyledContactButton } from "./styles";

function ContactCard(props) {
  let locale = props.locale;
  let twinPostURL = "";

  if (locale === "en") {
    twinPostURL = "/contact";
  } else if (locale === "es") {
    twinPostURL = "/es/contacto";
  }

  return (
    <StyledContactCard>
      <FormattedMessage id="contactCardTitle">
        {(txt) => <ContactCardTitle>{txt}</ContactCardTitle>}
      </FormattedMessage>

      <FormattedMessage id="contactCardInfo">
        {(txt) => <Subtitle>{txt}</Subtitle>}
      </FormattedMessage>

      <FormattedMessage id="contactCardCTA">
        {(txt) => (
          <StyledContactButton role="button" to={twinPostURL}>
            {txt}
          </StyledContactButton>
        )}
      </FormattedMessage>
    </StyledContactCard>
  );
}

export default ContactCard;

ContactCard.propTypes = {
  locale: PropTypes.string.isRequired,
};
