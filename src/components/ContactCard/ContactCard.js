import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import {
  ContactCardWrapper,
  ContactCardInner,
  ContactCardTitle,
  Subtitle,
  StyledContactButton,
} from "./styles";

function ContactCard(props) {
  let locale = props.locale;
  let twinPostURL = "";

  if (locale === "en") {
    twinPostURL = "/contact";
  } else if (locale === "es") {
    twinPostURL = "/es/contacto";
  }

  return (
    <ContactCardWrapper spaced as="aside">
      <ContactCardInner>
        <FormattedMessage id="contact.card.title">
          {(txt) => <ContactCardTitle>{txt}</ContactCardTitle>}
        </FormattedMessage>

        <FormattedMessage id="contact.card.info">
          {(txt) => <Subtitle>{txt}</Subtitle>}
        </FormattedMessage>

        <FormattedMessage id="contact.card.cta">
          {(txt) => (
            <StyledContactButton role="button" to={twinPostURL}>
              {txt}
            </StyledContactButton>
          )}
        </FormattedMessage>
      </ContactCardInner>
    </ContactCardWrapper>
  );
}

export default ContactCard;

ContactCard.propTypes = {
  locale: PropTypes.string.isRequired,
};
