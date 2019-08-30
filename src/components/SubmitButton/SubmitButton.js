import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";

import Spinner from "../Spinner/Spinner";

import { StyledSubmitButton } from "./styles";

function SubmitButton({ intl, showSpinner = false, ...rest }) {
  const submit = intl.formatMessage({ id: "form.submit.submit" });
  const sending = intl.formatMessage({ id: "form.submit.sending" });

  return (
    <StyledSubmitButton type="submit" showSpinner={showSpinner} {...rest}>
      {showSpinner ? (
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
