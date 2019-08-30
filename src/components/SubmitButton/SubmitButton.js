import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";

import Spinner from "../Spinner/Spinner";

import { StyledSubmitButton } from "./styles";

function SubmitButton({
  intl,
  buttonType = "submit",
  showSpinner = false,
  ...rest
}) {
  let str = buttonType.toLowerCase();

  const placeholder = intl.formatMessage({ id: `form.submit.${str}` });
  const sending = intl.formatMessage({ id: "form.submit.sending" });

  return (
    <StyledSubmitButton type="submit" showSpinner={showSpinner} {...rest}>
      {showSpinner ? (
        <>
          {sending}
          <Spinner light />
        </>
      ) : (
        placeholder
      )}
    </StyledSubmitButton>
  );
}

SubmitButton.propTypes = {
  buttonType: PropTypes.string,
  showSpinner: PropTypes.bool,
};

SubmitButton.defaultProps = {
  buttonType: "submit",
  showSpinner: false,
};

export default injectIntl(SubmitButton);
