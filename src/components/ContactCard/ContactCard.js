import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import sendGAEvent from "../../helpers/sendGAEvent";

import {
  StyledContactCard,
  Row,
  ContactCardInner,
  ContactCardTitle,
  Subtitle,
  StyleButton,
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
    <StyledContactCard>
      <Row as="div">
        <ContactCardInner>
          <FormattedMessage id="contact.card.title">
            {(txt) => <ContactCardTitle>{txt}</ContactCardTitle>}
          </FormattedMessage>

          <FormattedMessage id="contact.card.info">
            {(txt) => <Subtitle>{txt}</Subtitle>}
          </FormattedMessage>

          <FormattedMessage id="contact.card.cta">
            {(txt) => (
              <StyleButton
                to={twinPostURL}
                onClick={sendGAEvent("Contact Card", "Clicked CTA")}
              >
                {txt}
              </StyleButton>
            )}
          </FormattedMessage>
        </ContactCardInner>
      </Row>
    </StyledContactCard>
  );
}

export default ContactCard;

ContactCard.propTypes = {
  locale: PropTypes.string.isRequired,
};
