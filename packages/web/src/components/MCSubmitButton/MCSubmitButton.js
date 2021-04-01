import React from "react";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";

import Spinner from "../Spinner";

import { StyledMCSubmitButton } from "./styles";

function MCSubmitButton({ isSubmitting = false, ...rest }) {
  const intl = useIntl();

  const subscribe = intl.formatMessage({ id: "form.submit.subscribe" });
  const sending = intl.formatMessage({ id: "form.submit.sending" });

  return (
    <StyledMCSubmitButton type="submit" isSubmitting={isSubmitting} {...rest}>
      {isSubmitting ? (
        <>
          {sending}
          <Spinner light />
        </>
      ) : (
        subscribe
      )}
    </StyledMCSubmitButton>
  );
}

MCSubmitButton.propTypes = {
  isSubmitting: PropTypes.bool,
};

MCSubmitButton.defaultProps = {
  isSubmitting: false,
};

export default MCSubmitButton;
