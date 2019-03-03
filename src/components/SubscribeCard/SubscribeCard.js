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

  padding-top: ${rem(40)};
  padding-bottom: ${rem(40)};
  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.m`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
    margin-top: ${rem(16)};
    margin-bottom: ${rem(80)};
  `};

  ${mediaMin.xl`
    margin-top: ${rem(56)};
    margin-bottom: ${rem(144)};
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

const StyledLabel = styled.label`
  display: inline-block;
  margin-top: ${rem(16)};
  margin-right: ${rem(16)};
`;

const StyledCheckboxLabel = styled.label`
  display: inline-block;
  margin-top: ${rem(16)};
  width: 100%;
`;

const StyledInput = styled(Input)`
  display: inline-block;
  width: 100%;
  margin-top: ${rem(8)};
  padding: ${rem(12)} ${rem(8)};
`;

const StyledSubmitButton = styled(SubmitButton)`
  margin-top: ${rem(16)};

  ${mediaMin.xxs`  
    width: auto;
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
    en: "I accept the privacy policy.",
    es: "Accepto la privacidad",
  };

  const consentValue = {
    en: {
      no: "I do not accept the privacy policy.",
      yes: "I accept the privacy policy.",
    },
    es: {
      no: "No accepto la privacidad.",
      yes: "Si Accepto la privacidad.",
    },
  };

  const [email, setEmail] = useState("");
  const [acceptsConsentCheckbox, setAcceptsConsentCheckbox] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(consentValue[locale].no);
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [MCSubscribed, setMCSubscribed] = useState("");
  const [MCAlreadySubscribed, setMCAlreadySubscribed] = useState("");
  const [MCError, setMCError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(`email: ${email}`);

    const mailChimpResult = await addToMailchimp(email, {
      DLPO: checkboxValue,
    });

    console.log(mailChimpResult);

    if (mailChimpResult.result.includes("error")) {
      setMCError("Sorry, something went wrong.");
    }

    if (mailChimpResult.result.includes("success")) {
      if (mailChimpResult.msg.includes("We need to confirm your email")) {
        setMCSubscribed(
          "Thanks for subscribing! Please confirm your email to continue."
        );
      }
    }

    if (mailChimpResult.result.includes("error")) {
      if (mailChimpResult.msg.includes("is already subscribed to")) {
        setMCAlreadySubscribed("Sorry, you are already to my newsletter.");
      }
    }
  }

  function handleConsentCheckbox(e) {
    setAcceptsConsentCheckbox(e.target.checked);
    setCheckboxValue(consentValue[locale].yes);
    setAllowSubmit(acceptsConsentCheckbox);
  }

  return (
    <StyledSubscribeCard>
      <h2>Subscribe</h2>
      <Copy>Subscribe to my info</Copy>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <InputWrapper>
            <StyledLabel>
              Your Email (required)
              <StyledInput
                type="email"
                value={email}
                name="email"
                autoCapitalize="off"
                autoCorrect="off"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </StyledLabel>
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
        {MCSubscribed && <p>{MCSubscribed}</p>}
        {MCAlreadySubscribed && <p>{MCAlreadySubscribed}</p>}
        {MCError && <p>{MCError}</p>}
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
