import React from "react";
import { useIntl } from "react-intl";

import { StyledExternalLinkIcon } from "./styles";
import AriaText from "../AriaText";

function ExternalLinkIcon() {
  const intl = useIntl();

  return (
    <StyledExternalLinkIcon>
      <AriaText>{intl.formatMessage({ id: "external.link.sr.only" })}</AriaText>
      <span aria-hidden="true" className="external-link" />
    </StyledExternalLinkIcon>
  );
}

export default ExternalLinkIcon;
