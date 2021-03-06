import React from "react";
import { useIntl } from "react-intl";

import { StyledLoadComments, StyledIcon } from "./styles";

function LoadComments({ ...rest }) {
  const intl = useIntl();

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

export default LoadComments;
