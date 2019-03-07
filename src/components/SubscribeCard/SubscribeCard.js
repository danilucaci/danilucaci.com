import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { FormattedMessage } from "react-intl";

import { theme, mediaMin, mediaMax, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import {
  CONSENT_VALUE,
  MC_ERRORS,
  MC_SUCCESS,
  INPUT_EMAIL_ERROR,
} from "../../i18n/i18n";
import PrivacyCheckbox from "../PrivacyCheckbox/PrivacyCheckbox";

const StyledSubscribeCard = styled.aside`
  background-color: ${theme.colors.gray100};
  border-top: ${rem(8)} solid ${theme.colors.main600};
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

const InputsWrapper = styled.div`
  display: block;
  width: 100%;
`;

const StyledLabel = styled.label`
  display: inline-block;
  width: 100%;
  position: relative;

  ${mediaMin.l`
    margin-right: ${rem(16)};
    width: ${rem(360)};
  `};

  ${mediaMin.xxl`
    margin-right: ${rem(16)};
    width: ${rem(400)};
  `};
`;

const InputStatusIcon = styled.span`
  display: none;
  position: absolute;
  right: ${rem(16)};
  top: ${rem(12)};
  width: ${rem(24)};
  height: ${rem(24)};
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
  border: ${rem(2)} solid ${theme.colors.danger500};
  border-radius: ${theme.borderRadius.buttons};
  display: inline-block;
  background-color: ${theme.colors.gray100};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  color: ${theme.colors.dark800};
  padding: ${rem(16)};
  margin-top: ${rem(8)};
`;

const SigupSuccessMessage = styled(Copy)`
  border: ${rem(2)} solid ${theme.colors.main600};
  border-radius: ${theme.borderRadius.buttons};
  display: inline-block;
  background-color: ${theme.colors.gray100};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  color: ${theme.colors.dark800};
  padding: ${rem(16)};
  margin-top: ${rem(8)};
  ${theme.shadow.buttons.mainGhost}
`;

const StyledInput = styled(Input)`
  display: inline-block;
  width: 100%;
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
  const [MCSuccess, setMCSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const mailChimpResult = await addToMailchimp(email, {
      DLPO: checkboxValue,
    });

    console.log(mailChimpResult);

    if (mailChimpResult.result.includes("success")) {
      handleMCSuccess();
    } else if (
      mailChimpResult.result.includes("error") &&
      mailChimpResult.msg.includes("is already subscribed to")
    ) {
      handleMCError(MC_ERRORS[locale].already);
    } else if (
      mailChimpResult.result.includes("error") &&
      mailChimpResult.msg.includes("many")
    ) {
      handleMCError(MC_ERRORS[locale].many);
    } else if (mailChimpResult.result.includes("error")) {
      handleMCError(MC_ERRORS[locale].generic);
    }
  }

  function handleConsentCheckbox(e) {
    setAcceptsConsentCheckbox(e.target.checked);
    setCheckboxValue(CONSENT_VALUE[locale].yes);
  }

  function handleMCSuccess() {
    setMCSuccess(MC_SUCCESS[locale].message);

    // self clearing setTimeout
    let timer = setTimeout(() => {
      setMCSuccess("");
      clearTimeout(timer);
    }, 5000);
  }

  function handleMCError(message) {
    setMCError(message);

    // self clearing setTimeout
    let timer = setTimeout(() => {
      setMCError("");
      clearTimeout(timer);
    }, 5000);
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
          <InputsWrapper>
            <StyledLabel>
              <StyledInput
                type="email"
                value={email}
                name="email"
                autoCapitalize="off"
                autoCorrect="off"
                autoComplete="email"
                placeholderType="email"
                title={INPUT_EMAIL_ERROR[locale]}
                pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <InputStatusIcon arriaHidden="true" />
            </StyledLabel>
            {MCSuccess && (
              <StyledSubmitButton
                type="success"
                disabled={!acceptsConsentCheckbox}
              />
            )}
            {!MCSuccess && (
              <StyledSubmitButton
                type="subscribe"
                disabled={!acceptsConsentCheckbox}
              />
            )}
          </InputsWrapper>
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
        {MCSuccess && <SigupSuccessMessage>{MCSuccess}</SigupSuccessMessage>}
      </FormContainer>
    </StyledSubscribeCard>
  );
};

SubscribeCard.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default SubscribeCard;
