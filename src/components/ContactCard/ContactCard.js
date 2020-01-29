import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";

import { sendContactCardEvent } from "../../helpers/ga";

import {
  ContactCardRowBackground,
  ContactCardTitle,
  Subtitle,
  StyledButton,
} from "./styles";

import { Col, Row } from "../Grid/Grid";
import LocaleContext from "../../i18n/LocaleContext";

function ContactCard() {
  const { locale } = useContext(LocaleContext);

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
                onClick={() => sendContactCardEvent()}
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
