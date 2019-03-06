import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import { FormattedMessage } from "react-intl";

import { theme, mediaMin, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";

const StyledContactCard = styled.aside`
  max-width: ${theme.contain.inner.col10};
  margin: 0 auto;
  border-top: ${rem(8)} solid ${theme.colors.main600};
  background-color: ${theme.colors.gray100};
  width: 100%;

  padding: ${rem(24)} ${rem(24)} ${rem(32)};

  ${mediaMin.s`
    padding: ${rem(24)} ${rem(32)} ${rem(32)};
  `};

  ${mediaMin.l`
    padding: ${rem(48)} ${rem(80)} ${rem(56)};
  `};

  ${mediaMin.xxl`
    padding: ${rem(56)} ${rem(112)} ${rem(64)};
  `};
`;

const StyledH2 = styled.h2`
  display: block;
  margin-bottom: ${rem(8)};
`;

const StyledMailToButton = styled(Link)`
  background-color: ${theme.colors.main600};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.buttonLight} !important;
  display: block;

  text-align: center;
  text-decoration: none;
  font-size: ${theme.fontSizes.button};
  line-height: ${theme.lineHeights.button};
  font-style: normal;
  font-weight: 700;

  padding: ${rem(12)} ${rem(40)};
  height: ${rem(48)};
  width: 100%;

  ${mediaMin.xxs`  
    width: ${rem(288)};
  `};

  margin-top: ${rem(24)};

  white-space: nowrap;

  font-family: ${theme.fonts.bodyBold};

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${theme.colors.main500};
    ${theme.shadow.buttons.main};
  }
`;

const StyledCopy = styled(Copy)`
  display: inline;
`;

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
      <div>
        <FormattedMessage id="contactCardDescription">
          {(txt) => <StyledCopy>{txt} </StyledCopy>}
        </FormattedMessage>
      </div>
      <FormattedMessage id="contactCardCTA">
        {(txt) => (
          <StyledMailToButton role="button" to={twinPostURL}>
            {txt}
          </StyledMailToButton>
        )}
      </FormattedMessage>
    </StyledContactCard>
  );
}

export default ContactCard;

ContactCard.propTypes = {
  locale: PropTypes.string.isRequired,
};
