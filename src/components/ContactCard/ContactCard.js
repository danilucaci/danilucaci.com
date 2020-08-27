import React, { useContext } from "react";
import { useIntl } from "react-intl";

import { Col, Row } from "../Grid/Grid";
import { sendContactCardEvent } from "../../helpers/ga";
import LocaleContext from "../../i18n/LocaleContext";

import {
  ContactCardRowBackground,
  ContactCardTitle,
  Subtitle,
  StyledButton,
} from "./styles";

function ContactCard() {
  const { locale } = useContext(LocaleContext);
  const intl = useIntl();

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
          <ContactCardTitle>
            {intl.formatMessage({ id: "contact.card.title" })}
          </ContactCardTitle>
          <Subtitle>{intl.formatMessage({ id: "contact.card.info" })}</Subtitle>
          <StyledButton to={twinPostURL} onClick={() => sendContactCardEvent()}>
            {intl.formatMessage({ id: "contact.card.cta" })}
          </StyledButton>
        </Col>
      </Row>
    </ContactCardRowBackground>
  );
}

export default ContactCard;
