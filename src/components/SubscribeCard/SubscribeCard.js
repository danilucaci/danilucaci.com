import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { FormattedMessage } from "react-intl";

import { theme, mediaMin, mediaMax, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import { CONSENT_VALUE, MC_ERRORS } from "../../i18n/i18n";
import PrivacyCheckbox from "../PrivacyCheckbox/PrivacyCheckbox";

const StyledSubscribeCard = styled.aside`
  background-color: ${theme.colors.gray100};
  width: 100%;
  max-width: ${theme.contain.wrapper.col10};
  margin-left: auto;
  margin-right: auto;

  margin-top: ${theme.spacing.components.s};
  margin-bottom: ${theme.spacing.components.s};

  padding: ${rem(32)} ${rem(24)};

  ${mediaMin.m`
    padding: ${rem(32)} ${rem(56)};
    margin-top: ${theme.spacing.components.m};
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.xxl`
    padding: ${rem(64)} ${rem(80)} ${rem(56)} ${rem(96)};
    margin-top: ${theme.spacing.components.xl};
    margin-bottom: ${theme.spacing.components.xl};
  `};
`;

const FormContainer = styled.div``;

const StyledForm = styled.form`
  width: 100%;
`;

const InputWrapper = styled.div`
  display: block;
  width: 100%;
`;

const StyledH2 = styled.h2`
  margin-bottom: ${rem(8)};

  ${mediaMax.m`
    margin-bottom: ${rem(16)};
    font-size: ${theme.fontSizes.h1s};
    line-height: ${theme.lineHeights.h1s};
  `};
`;

const Subtitle = styled(Copy)`
  margin-bottom: ${rem(8)};
`;

const AltCopy = styled(Copy)`
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  color: ${theme.colors.dark700};

  margin-bottom: ${rem(32)};

  ${mediaMin.m`
    margin-bottom: ${rem(24)};
  `};
`;

const SigupErrorMessage = styled(Copy)`
  border: 1px solid ${theme.colors.gray400};
  border-radius: ${theme.borderRadius.buttons};
  display: block;
  background-color: ${theme.colors.gray100};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  color: ${theme.colors.dark800};
  padding: ${rem(16)};
  margin-top: ${rem(24)};
  max-width: ${rem(450)};
  ${theme.shadow.dropdown}
`;

const StyledInput = styled(Input)`
  display: inline-block;
  width: 100%;

  ${mediaMin.l`
    margin-right: ${rem(16)};
    width: ${rem(360)};
  `};

  ${mediaMin.xxl`
    margin-right: ${rem(16)};
    width: ${rem(400)};
  `};
`;

const StyledSubmitButton = styled(SubmitButton)`
  margin-top: ${rem(16)};

  ${mediaMin.l`  
    width: auto;
    margin-top: 0;
    display: inline-block;
  `};
`;

const SubscribeCard = (props) => {
  let locale = props.locale;

  const [email, setEmail] = useState("");
  const [acceptsConsentCheckbox, setAcceptsConsentCheckbox] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(CONSENT_VALUE[locale].no);
  const [MCError, setMCError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const mailChimpResult = await addToMailchimp(email, {
      DLPO: checkboxValue,
    });

    if (
      mailChimpResult.result.includes("error") &&
      mailChimpResult.msg.includes("is already subscribed to")
    ) {
      setMCError(MC_ERRORS[locale].already);
    } else if (
      mailChimpResult.result.includes("error") &&
      mailChimpResult.msg.includes("many")
    ) {
      setMCError(MC_ERRORS[locale].many);
    } else if (mailChimpResult.result.includes("error")) {
      setMCError(MC_ERRORS[locale].many);
    }
  }

  function handleConsentCheckbox(e) {
    setAcceptsConsentCheckbox(e.target.checked);
    setCheckboxValue(CONSENT_VALUE[locale].yes);
  }

  return (
    <StyledSubscribeCard>
      <FormattedMessage id="subscribeCardTitle">
        {(txt) => <StyledH2>{txt}</StyledH2>}
      </FormattedMessage>
      <FormattedMessage id="subscribeCardSubTitle">
        {(txt) => <Subtitle>{txt}</Subtitle>}
      </FormattedMessage>
      <FormattedMessage id="subscribeCardSpam">
        {(txt) => <AltCopy>{txt}</AltCopy>}
      </FormattedMessage>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <InputWrapper>
            <StyledInput
              type="email"
              value={email}
              name="email"
              autoCapitalize="off"
              autoCorrect="off"
              autoComplete="email"
              placeholderType="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <StyledSubmitButton
              type="Subscribe"
              disabled={!acceptsConsentCheckbox}
            />
          </InputWrapper>
          <PrivacyCheckbox
            type="checkbox"
            name="consentcheckbox"
            value={checkboxValue}
            onChange={handleConsentCheckbox}
            checkboxValue={checkboxValue}
            locale={locale}
            required
          />
        </StyledForm>
        {MCError && <SigupErrorMessage>{MCError}</SigupErrorMessage>}
      </FormContainer>
    </StyledSubscribeCard>
  );
};

SubscribeCard.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default SubscribeCard;
