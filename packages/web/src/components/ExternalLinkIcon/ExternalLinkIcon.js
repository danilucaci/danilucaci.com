import React from "react";
import { FormattedMessage } from "react-intl";

import { StyledExternalLinkIcon } from "./styles";
import AriaText from "../AriaText";

const ExternalLinkIcon = () => (
  <StyledExternalLinkIcon>
    <FormattedMessage id="external.link.sr.only">
      {(txt) => <AriaText>{txt}</AriaText>}
    </FormattedMessage>
    <span aria-hidden="true" className="external-link" />
  </StyledExternalLinkIcon>
);

export default ExternalLinkIcon;
