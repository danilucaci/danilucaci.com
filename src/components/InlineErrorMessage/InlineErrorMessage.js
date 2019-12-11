import React from "react";
import { node, string } from "prop-types";

import { MessageWrapper, MessageCopy } from "./styles";

function InlineErrorMessage({ children, testid, ...props }) {
  return (
    <MessageWrapper>
      <MessageCopy data-testid={testid} {...props}>
        {children}
      </MessageCopy>
    </MessageWrapper>
  );
}

InlineErrorMessage.propTypes = {
  children: node.isRequired,
  testid: string,
};

InlineErrorMessage.defaultProps = {
  testid: null,
};

export default InlineErrorMessage;
