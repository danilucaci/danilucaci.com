import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import { StyledContactCard, StyledH2, Subtitle, Info, StyledContactButton } from "./styles";

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
        {(txt) => <StyledH2>{txt}</StyledH2>}
      </FormattedMessage>

      {/* <FormattedMessage id="contactCardDescription">
        {(txt) => <Subtitle>{txt} </Subtitle>}
      </FormattedMessage> */}

      <FormattedMessage id="contactCardInfo">
        {(txt) => <Subtitle>{txt} </Subtitle>}
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
