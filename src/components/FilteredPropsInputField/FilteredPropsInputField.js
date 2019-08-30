import React from "react";
import { oneOfType, string, bool } from "prop-types";
import { Field } from "formik";

// This will remove any non-standard html props from the field
// valid=true or error=true will not be rendered on the final dom node
const FilteredPropsInputField = ({ className, valid, error, ...props }) => (
  <Field className={className} {...props} />
);

FilteredPropsInputField.propTypes = {
  className: string.isRequired,
  valid: oneOfType([bool, string]),
  error: oneOfType([bool, string]),
};

FilteredPropsInputField.defaultProps = {
  valid: undefined,
  error: undefined,
};

export default FilteredPropsInputField;
