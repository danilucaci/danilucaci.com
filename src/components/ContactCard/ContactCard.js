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
    padding: ${rem(40)} ${rem(32)} ${rem(40)} ${rem(32)};
  `};

  ${mediaMin.l`
    padding: ${rem(64)} ${rem(80)} ${rem(56)} ${rem(72)};
  `};

  ${mediaMin.xxl`
    padding: ${rem(64)} ${rem(112)} ${rem(56)} ${rem(96)};
  `};
`;

const StyledH2 = styled.h2`
  margin-bottom: ${rem(16)};
  font-size: ${theme.fontSizes.h2s};
  line-height: ${theme.lineHeights.h2s};

  ${mediaMin.m`
    font-size: ${theme.fontSizes.h2};
    line-height: ${theme.lineHeights.h2};
  `};
`;

const Subtitle = styled(Copy)`
  color: ${theme.colors.dark700};
  display: block;
  font-size: ${theme.fontSizes.subheadS};
  line-height: ${theme.lineHeights.subheadS};
  margin-bottom: ${rem(16)};

  ${mediaMin.s`
    font-size: ${theme.fontSizes.subheadCompact};
    line-height: ${theme.lineHeights.subheadCompact};
    margin-bottom: ${rem(12)};
    width: 96%;
  `};
`;

const Info = styled(Copy)`
  display: block;
/* 
  ${mediaMin.s`
    width: 100%;
  `}; */
`;

const StyledContactButton = styled(Link)`
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

  ${mediaMin.l`  
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

      <FormattedMessage id="contactCardDescription">
        {(txt) => <Subtitle>{txt} </Subtitle>}
      </FormattedMessage>

      <FormattedMessage id="contactCardInfo">
        {(txt) => <Info small>{txt} </Info>}
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
