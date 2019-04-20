import React from "react";
import { FormattedMessage } from "react-intl";

import { StyledExternalLinkIcon } from "./styles";

const ExternalLinkIcon = () => (
  <StyledExternalLinkIcon>
    <FormattedMessage id="external.link.sr.only">
      {(txt) => <span className="sr-only">{txt}</span>}
    </FormattedMessage>
    <span aria-hidden="true" className="external-link" />
  </StyledExternalLinkIcon>
);

export default ExternalLinkIcon;
