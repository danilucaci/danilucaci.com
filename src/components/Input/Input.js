import React from "react";
import { oneOfType, string, bool } from "prop-types";
import { injectIntl } from "react-intl";

import { StyledInput } from "./styles";
import ValidInputStatusIcon from "../ValidInputStatusIcon/ValidInputStatusIcon";
import ErrorInputStatusIcon from "../ErrorInputStatusIcon/ErrorInputStatusIcon";

function Input({ intl, valid, error, placeholderType = "fullname", ...props }) {
  let str = placeholderType.toLowerCase();

  const placeholder = intl.formatMessage({
    id: `form.placeholder.${str}`,
  });

  return (
    <>
      <StyledInput
        placeholder={placeholder}
        valid={valid}
        error={error}
        {...props}
      />
      {valid && <ValidInputStatusIcon aria-hidden="true" />}
      {error && <ErrorInputStatusIcon aria-hidden="true" />}
    </>
  );
}

Input.propTypes = {
  placeholderType: string.isRequired,
  valid: oneOfType([bool, string]),
  error: oneOfType([bool, string]),
};

Input.defaultProps = {
  valid: undefined,
  error: undefined,
};

export default injectIntl(Input);
