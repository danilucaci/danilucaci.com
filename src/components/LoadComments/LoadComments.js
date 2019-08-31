import React from "react";
import { injectIntl } from "react-intl";

import { StyledLoadComments, StyledIcon } from "./styles";

function LoadComments({ intl, ...rest }) {
  const loadMsg = intl.formatMessage({ id: "load.comments" });

  return (
    <StyledLoadComments {...rest}>
      <StyledIcon>
        <use xlinkHref="#comments" aria-hidden="true" />
      </StyledIcon>
      {loadMsg}
    </StyledLoadComments>
  );
}

export default injectIntl(LoadComments);
