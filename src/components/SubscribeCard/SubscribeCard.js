import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { FormattedMessage } from "react-intl";

import { theme, mediaMin, mediaMax, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";

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

const FormContainer = styled.div`
  margin-top: ${rem(32)};

  label {
    display: block;
    margin-bottom: ${rem(16)};
  }

  input {
    display: block;
    padding: ${rem(8)};
    margin-bottom: ${rem(16)};
  }
`;

const SubscribeCard = (props) => {
  let locale = props.locale;

  const gdprCheckboxLabel = {
    en: "I accept the privacy policy.",
    es: "Accepto la privacidad",
  };

  const gdprConsents = {
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
  const [acceptsGDPRCheckbox, setAcceptsGDPRCheckbox] = useState(false);
  const [GDPRConsentMSG, setGDPRConsentMSG] = useState(gdprConsents[locale].no);
  const [allowSubmit, setAllowSubmit] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(`email: ${email}`);

    const mailChimpResult = await addToMailchimp(email, {
      DLPO: GDPRConsentMSG,
    });

    console.log(mailChimpResult);

    if (mailChimpResult.result.includes("error")) {
      console.warn("Not ok!");
    }

    if (mailChimpResult.result.includes("success")) {
      if (mailChimpResult.msg.includes("We need to confirm your email")) {
        console.log("Great! Now Confirm.");
      }
    }

    if (mailChimpResult.result.includes("error")) {
      if (mailChimpResult.msg.includes("is already subscribed to")) {
        console.log("You Already Subscribed");
      }
    }
  }

  function handleGDPRCheckbox(e) {
    setAcceptsGDPRCheckbox(e.target.checked);
    setGDPRConsentMSG(gdprConsents[locale].yes);
    setAllowSubmit(acceptsGDPRCheckbox);
  }

  return (
    <StyledSubscribeCard>
      <h2>Subscribe</h2>
      <Copy>Subscribe to my info</Copy>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            value={email}
            name="email"
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="checkbox"
            value="Acceptas?"
            required={GDPRConsentMSG}
            onChange={handleGDPRCheckbox}
          />
          <label htmlFor="email">{gdprCheckboxLabel[locale]}</label>
          <input type="submit" value="Submit" disabled={!acceptsGDPRCheckbox} />
        </form>
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
