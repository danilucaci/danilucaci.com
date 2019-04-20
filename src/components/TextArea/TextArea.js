import React from "react";
import { injectIntl, intlShape } from "react-intl";

import { StyledTextArea } from "./styles";

// High 5 to: https://stackoverflow.com/questions/39630620/react-intl-how-to-use-formattedmessage-in-input-placeholder
function TextArea({ intl, ...rest }) {
  const placeholder = intl.formatMessage({
    id: "form.placeholder.message",
  });

  return <StyledTextArea placeholder={placeholder} {...rest} />;
}

TextArea.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(TextArea);
