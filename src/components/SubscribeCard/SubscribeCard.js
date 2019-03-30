import React, { useState } from "react";
import PropTypes from "prop-types";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { FormattedMessage } from "react-intl";

import PrivacyCheckbox from "../PrivacyCheckbox/PrivacyCheckbox";
import { CONSENT_VALUE, INPUT_EMAIL_ERROR } from "../../i18n/i18n";
import MCLoadingCTA from "../MCLoadingCTA/MCLoadingCTA";
import MCSuccessMessage from "../MCSuccessMessage/MCSuccessMessage";
import MCErrorMessage from "../MCErrorMessage/MCErrorMessage";

import {
  StyledSubscribeCard,
  FormContainer,
  StyledMCForm,
  InputsWrapper,
  StyledLabel,
  StyledInput,
  StyledSubmitButton,
  InputStatusIcon,
  StyledH2,
  Subtitle,
  AltCopy,
} from "./styles";

function SubscribeCard({ locale }) {
  const [email, setEmail] = useState("");
  const [acceptsConsentCheckbox, setAcceptsMCConsentCheckbox] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(CONSENT_VALUE[locale].no);
  const [MCSent, setMCSent] = useState(false);
  const [showMCLoading, setShowMCLoading] = useState(false);
  const [showMCError, setShowMCError] = useState(false);
  const [MCError, setMCError] = useState("");
  const [showMCSuccess, setShowMCSuccess] = useState(false);

  async function handleMCSubmit(e) {
    e.preventDefault();
    setShowMCLoading(true);
    setMCSent(true);

    try {
      const MCResponse = await addToMailchimp(email, {
        DLPO: checkboxValue,
      });

      handleFormSent(MCResponse.result, MCResponse.msg);
    } catch (error) {
      handleFormError(error);
    }
  }

  function handleFormSent(result, msg) {
    if (result.includes("success")) {
      handleMCSuccess();
    } else if (result.includes("error") && msg.includes("is already subscribed to")) {
      setShowMCError(true);
      setShowMCLoading(false);
      setMCError("already");
      throw new Error(msg);
    } else if (result.includes("error") && msg.includes("many")) {
      setShowMCError(true);
      setShowMCLoading(false);
      setMCError("many");
      throw new Error(msg);
    } else if (result.includes("error")) {
      setShowMCError(true);
      setShowMCLoading(false);
      setMCError("generic");
      throw new Error(msg);
    }
  }

  function handleMCConsentCheckbox(e) {
    setAcceptsMCConsentCheckbox(e.target.checked);
    if (e.target.checked) {
      setCheckboxValue(CONSENT_VALUE[locale].yes);
    } else {
      setCheckboxValue(CONSENT_VALUE[locale].no);
    }
  }

  function handleMCSuccess() {
    setShowMCLoading(false);
    setShowMCSuccess(true);
  }

  function handleFormError(error) {
    setShowMCLoading(false);
    setShowMCError(true);
    setMCError("generic");
    console.warn(error);
    throw new Error(error);
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
        <StyledMCForm onSubmit={handleMCSubmit}>
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
            {MCSent && (
              <MCLoadingCTA
                showMCLoading={showMCLoading}
                showMCSuccess={showMCSuccess}
                showMCError={showMCError}
                MCError={MCError}
                locale={locale}
              />
            )}
            {!MCSent && <StyledSubmitButton type="submit" disabled={!acceptsConsentCheckbox} />}
          </InputsWrapper>
          <PrivacyCheckbox
            type="checkbox"
            name="consentcheckbox"
            value={checkboxValue}
            onChange={handleMCConsentCheckbox}
            checkboxValue={checkboxValue}
            locale={locale}
            required
          />
        </StyledMCForm>

        {showMCSuccess && <MCSuccessMessage locale={locale} />}
        {showMCError && <MCErrorMessage locale={locale} MCError={MCError} />}
      </FormContainer>
    </StyledSubscribeCard>
  );
}

SubscribeCard.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default SubscribeCard;
