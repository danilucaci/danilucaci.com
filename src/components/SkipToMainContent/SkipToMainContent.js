import React from "react";
import { FormattedMessage } from "react-intl";

import { StyledSkipToMainContent } from "./styles";

const SkipToMainContent = () => (
  <FormattedMessage id="skipToMainContent">
    {(txt) => <StyledSkipToMainContent href="#main">{txt}</StyledSkipToMainContent>}
  </FormattedMessage>
);

export default SkipToMainContent;
