import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import sendGAEvent from "../../helpers/sendGAEvent";

import {
  ContactCardRowBackground,
  ContactCardTitle,
  Subtitle,
  StyledButton,
} from "./styles";

import { Col, Row } from "../Grid/Grid";

function ContactCard(props) {
  let locale = props.locale;
  let twinPostURL = "";

  if (locale === "en") {
    twinPostURL = "/contact";
  } else if (locale === "es") {
    twinPostURL = "/es/contacto";
  }

  return (
    <ContactCardRowBackground as="aside" data-testid="Contact__Card">
      <Row as="div" col8 padded>
        <Col>
          <FormattedMessage id="contact.card.title">
            {(txt) => <ContactCardTitle>{txt}</ContactCardTitle>}
          </FormattedMessage>

          <FormattedMessage id="contact.card.info">
            {(txt) => <Subtitle>{txt}</Subtitle>}
          </FormattedMessage>

          <FormattedMessage id="contact.card.cta">
            {(txt) => (
              <StyledButton
                to={twinPostURL}
                onClick={sendGAEvent("Contact Card", "Clicked CTA")}
              >
                {txt}
              </StyledButton>
            )}
          </FormattedMessage>
        </Col>
      </Row>
    </ContactCardRowBackground>
  );
}

export default ContactCard;

ContactCard.propTypes = {
  locale: PropTypes.string.isRequired,
};
