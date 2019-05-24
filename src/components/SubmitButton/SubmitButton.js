import React from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "react-intl";

import Spinner from "../Spinner/Spinner";

import { StyledSubmitButton } from "./styles";

// High 5 to: https://stackoverflow.com/questions/39630620/react-intl-how-to-use-formattedmessage-in-input-placeholder
function SubmitButton({
  intl, buttonType = "submit", showSpinner = false, ...rest
}) {
  let str = buttonType.toLowerCase();

  const placeholder = intl.formatMessage({ id: `form.submit.${str}` });
  const sending = intl.formatMessage({ id: "form.submit.sending" });

  return (
    <StyledSubmitButton type="submit" {...rest}>
      {showSpinner === true ? (
        <React.Fragment>
          {sending}
          <Spinner />
        </React.Fragment>
      ) : (
        placeholder
      )}
    </StyledSubmitButton>
  );
}

SubmitButton.propTypes = {
  intl: intlShape.isRequired,
  buttonType: PropTypes.string,
  showSpinner: PropTypes.bool,
};

SubmitButton.defaultProps = {
  buttonType: "submit",
  showSpinner: false,
};

export default injectIntl(SubmitButton);
