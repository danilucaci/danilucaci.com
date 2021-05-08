import React from "react";
import { useIntl } from "react-intl";

import { StyledSkipToMainContent } from "./styles";

function SkipToMainContent() {
  const intl = useIntl();

  return (
    <StyledSkipToMainContent href="#main">
      {intl.formatMessage({ id: "skip.to.main.content" })}
    </StyledSkipToMainContent>
  );
}

export default SkipToMainContent;
