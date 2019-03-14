import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

const StyledExternalLinkIcon = styled.span`
  display: inline;
`;

const ExternalLinkIcon = (props) => (
  <StyledExternalLinkIcon>
    <FormattedMessage id="externalLinkSrOnly">
      {(txt) => <span className="sr-only">{txt}</span>}
    </FormattedMessage>
    <span aria-hidden="true" className="external-link" />
  </StyledExternalLinkIcon>
);

export default ExternalLinkIcon;
