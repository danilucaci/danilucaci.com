import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { FormattedMessage } from "react-intl";

import { theme, mediaMin, mediaMax, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import { Input, SubmitButton, Checkbox } from "../Input/Input";

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
    padding: ${rem(32)} ${rem(80)};
    margin-top: ${theme.spacing.components.m};
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.xxl`
    padding: ${rem(48)} ${rem(144)} ${rem(32)} ${rem(144)};
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
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  color: ${theme.colors.dark700};

  margin-top: ${rem(16)};
`;

const StyledCheckboxLabel = styled.label`
  display: inline-block;
  margin-top: ${rem(12)};
  margin-bottom: ${rem(12)};
  width: 100%;
`;

const StyledInput = styled(Input)`
  display: inline-block;
  width: 100%;

  ${mediaMin.l`
    margin-right: ${rem(16)};
    width: ${rem(360)};
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

const StyledCheckbox = styled(Checkbox)`
  display: inline-block;
  margin-right: ${rem(8)};
`;

const SubscribeCard = (props) => {
  let locale = props.locale;

  const consentCheckboxLabel = {
    en: "I have read and I accept the privacy policy.",
    es: "He leído y accepto la política de privacidad.",
  };

  const consentValue = {
    en: {
      no: "I do not accept the privacy policy.",
      yes: "I accept the privacy policy.",
    },
    es: {
      no: "No accepto la política de privacidad.",
      yes: "He leído y accepto la política de privacidad.",
    },
  };

  const MCErrors = {
    en: {
      generic: "Sorry 😐, something went wrong.",
      many:
        "Sorry 😐, you have too many subscribe attemps, please try again later.",
      already: "It looks like you have already subscribed to my newsletter 👌🏻",
    },
    es: {
      generic:
        "Lo siento 😐, algo ha salido mal, por favor intentalo de nuevo más tarde.",
      many:
        "Lo siento 😐, has hecho demasiadas intentos de subscribir, por favor intentalo de nuevo más tarde.",
      already: "Parece que ya eres miembro de mi newsletter 👌🏻",
    },
  };

  const [email, setEmail] = useState("");
  const [acceptsConsentCheckbox, setAcceptsConsentCheckbox] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(consentValue[locale].no);
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [MCError, setMCError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(`email: ${email}`);

    const mailChimpResult = await addToMailchimp(email, {
      DLPO: checkboxValue,
    });

    if (
      mailChimpResult.result.includes("error") &&
      mailChimpResult.msg.includes("is already subscribed to")
    ) {
      setMCError(MCErrors[locale].already);
    } else if (
      mailChimpResult.result.includes("error") &&
      mailChimpResult.msg.includes("many")
    ) {
      setMCError(MCErrors[locale].many);
    } else if (mailChimpResult.result.includes("error")) {
      setMCError(MCErrors[locale].many);
    }
  }

  function handleConsentCheckbox(e) {
    setAcceptsConsentCheckbox(e.target.checked);
    setCheckboxValue(consentValue[locale].yes);
    setAllowSubmit(acceptsConsentCheckbox);
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
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <StyledSubmitButton
              type="submit"
              value="Subscribe"
              disabled={!acceptsConsentCheckbox}
            />
          </InputWrapper>
          <StyledCheckboxLabel>
            <StyledCheckbox
              type="checkbox"
              name="consentcheckbox"
              value={checkboxValue}
              onChange={handleConsentCheckbox}
              required
            />
            {consentCheckboxLabel[locale]}
          </StyledCheckboxLabel>
        </StyledForm>
        {MCError && <SigupErrorMessage>{MCError}</SigupErrorMessage>}
      </FormContainer>
    </StyledSubscribeCard>
  );
};

SubscribeCard.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }),
};

export default SubscribeCard;
