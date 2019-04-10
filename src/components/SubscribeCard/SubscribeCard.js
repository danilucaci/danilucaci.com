import React, { useState } from "react";
import PropTypes from "prop-types";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { FormattedMessage } from "react-intl";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";

import { CONSENT_VALUE, MC_ERRORS } from "../../i18n/i18n";
import PrivacyCheckbox from "../PrivacyCheckbox/PrivacyCheckbox";
import MCLoadingCTA from "../MCLoadingCTA/MCLoadingCTA";
import MCSuccessMessage from "../MCSuccessMessage/MCSuccessMessage";
import MCErrorMessage from "../MCErrorMessage/MCErrorMessage";
import { InlineStatusMessageWrapper, InlineMessageCopy } from "../EmailErrorMessage/styles";

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
  const [MCSent, setMCSent] = useState(false);
  const [showMCLoading, setShowMCLoading] = useState(false);
  const [showMCError, setShowMCError] = useState(false);
  const [MCError, setMCError] = useState("");
  const [MCAPIErrorMSG, setMCAPIErrorMSG] = useState("");
  const [showMCSuccess, setShowMCSuccess] = useState(false);

  async function handleMCSubmit({ email, acceptsconsentcheckbox }) {
    setShowMCLoading(true);
    setMCSent(true);

    try {
      const MCResponse = await addToMailchimp(email, {
        DLPO:
          acceptsconsentcheckbox === true ? CONSENT_VALUE[locale].yes : CONSENT_VALUE[locale].no,
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
      // throw new Error(msg);
    } else if (result.includes("error") && msg.includes("many")) {
      setShowMCError(true);
      setShowMCLoading(false);
      setMCError("many");
      // throw new Error(msg);
    } else if (result.includes("error")) {
      setShowMCError(true);
      setShowMCLoading(false);
      setMCError("generic");
      setMCAPIErrorMSG(msg);
      // throw new Error(msg);
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
    // throw new Error(error);
  }

  const MCSchema = Yup.object().shape({
    email: Yup.string()
      .email(MC_ERRORS.formValidation[locale].email)
      .required(MC_ERRORS.formValidation[locale].emailRequired),
    acceptsconsentcheckbox: Yup.boolean().oneOf(
      [true],
      MC_ERRORS.formValidation[locale].privacyRequired,
    ),
  });

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
        <Formik
          initialValues={{
            email: "",
            acceptsconsentcheckbox: false,
          }}
          validationSchema={MCSchema}
          onSubmit={(values, { setSubmitting }) => {
            // setTimeout(() => {
            handleMCSubmit(values);
            setSubmitting(false);
            // }, 400);
          }}
        >
          {({ isValid }) => (
            <StyledMCForm method="post">
              <InputsWrapper>
                <StyledLabel>
                  <StyledInput
                    type="email"
                    name="email"
                    autoCapitalize="off"
                    autoCorrect="off"
                    autoComplete="email"
                    placeholderType="email"
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

                {!MCSent && <StyledSubmitButton buttonType="subscribe" disabled={!isValid} />}
              </InputsWrapper>
              <ErrorMessage name="email">
                {(errorMessage) => (
                  <InlineStatusMessageWrapper>
                    <InlineMessageCopy>{errorMessage}</InlineMessageCopy>
                  </InlineStatusMessageWrapper>
                )}
              </ErrorMessage>
              <PrivacyCheckbox
                type="checkbox"
                name="acceptsconsentcheckbox"
                value={isValid === true ? CONSENT_VALUE[locale].yes : CONSENT_VALUE[locale].no}
                locale={locale}
              />
              <ErrorMessage name="acceptsconsentcheckbox">
                {(errorMessage) => (
                  <InlineStatusMessageWrapper>
                    <InlineMessageCopy>{errorMessage}</InlineMessageCopy>
                  </InlineStatusMessageWrapper>
                )}
              </ErrorMessage>
            </StyledMCForm>
          )}
        </Formik>

        {showMCSuccess && <MCSuccessMessage locale={locale} />}
        {showMCError && (
          <MCErrorMessage locale={locale} MCError={MCError} apiMessage={MCAPIErrorMSG} />
        )}
      </FormContainer>
    </StyledSubscribeCard>
  );
}

SubscribeCard.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default SubscribeCard;
