import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";

import Spinner from "../Spinner/Spinner";

import { StyledSubmitButton } from "./styles";

function SubmitButton({
  intl,
  showSpinner = false,
  submitted = false,
  ...rest
}) {
  const submit = intl.formatMessage({ id: "form.submit.submit" });
  const sending = intl.formatMessage({ id: "form.submit.sending" });
  const sent = intl.formatMessage({ id: "form.submit.sent" });

  return (
    <StyledSubmitButton type="submit" showSpinner={showSpinner} {...rest}>
      {submitted ? (
        sent
      ) : showSpinner ? (
        <>
          {sending}
          <Spinner light />
        </>
      ) : (
        submit
      )}
    </StyledSubmitButton>
  );
}

SubmitButton.propTypes = {
  showSpinner: PropTypes.bool,
};

SubmitButton.defaultProps = {
  showSpinner: false,
};

export default injectIntl(SubmitButton);
