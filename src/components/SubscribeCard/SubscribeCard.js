import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { FormattedMessage } from "react-intl";

import { theme, mediaMin, mediaMax, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import PrivacyCheckbox from "../PrivacyCheckbox/PrivacyCheckbox";
import { CONSENT_VALUE, INPUT_EMAIL_ERROR } from "../../i18n/i18n";
import MCLoadingCTA from "../MCLoadingCTA/MCLoadingCTA";
import MCSuccessMessage from "../MCSuccessMessage/MCSuccessMessage";
import MCErrorMessage from "../MCErrorMessage/MCErrorMessage";

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
    padding: ${rem(64)} ${rem(56)} ${rem(40)} ${rem(64)};
    margin-top: ${theme.spacing.components.m};
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.xxxl`
    padding: ${rem(64)} ${rem(120)} ${rem(56)} ${rem(144)};
    margin-top: ${theme.spacing.components.xl};
    margin-bottom: ${theme.spacing.components.xl};
  `};
`;

const FormContainer = styled.div``;

const StyledMCForm = styled.form`
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

  ${mediaMin.xl`
    max-width: calc(60% - ${rem(8)});
    margin-top: 0;
    margin-right: ${rem(8)};
    display: inline-block;
    vertical-align: middle;
  `};
`;

const StyledInput = styled(Input)`
  display: inline-block;
`;

const StyledSubmitButton = styled(SubmitButton)`
  margin-top: ${rem(16)};

  ${mediaMin.xl`
    width: auto;
    margin-top: 0;
    margin-right: ${rem(8)};
    display: inline-block;
    vertical-align: middle;
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
  margin-bottom: ${rem(16)};
  font-size: ${theme.fontSizes.h2s};
  line-height: ${theme.lineHeights.h2s};

  ${mediaMin.m`
    font-size: ${theme.fontSizes.h2};
    line-height: ${theme.lineHeights.h2};
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
