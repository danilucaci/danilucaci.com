import React from "react";
import { FormattedMessage } from "react-intl";

import { StyledSkipToMainContent } from "./styles";

const SkipToMainContent = () => (
  <FormattedMessage id="skip.to.main.content">
    {(txt) => <StyledSkipToMainContent href="#main">{txt}</StyledSkipToMainContent>}
  </FormattedMessage>
);

export default SkipToMainContent;
