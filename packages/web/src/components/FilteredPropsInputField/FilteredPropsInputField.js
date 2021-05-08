import React from "react";
import { oneOfType, string, bool } from "prop-types";

/**
 * It removes any non-standard html props from the field
 * valid=true or error=true will not be rendered on the final dom node
 *
 * This also works:
 *
 *  const StyledLink= styled(({ primary, ...props }) => <Link {...props} />)`
 *  color: ${props => props.primary ? themeColors.primary : 'red'};
 * `
 *
 */
function FilteredPropsInputField({ className, valid, error, ...props }) {
  return <input {...props} className={className} />;
}

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
