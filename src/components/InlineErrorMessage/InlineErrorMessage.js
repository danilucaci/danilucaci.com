import React from "react";
import { node } from "prop-types";

import { MessageWrapper, MessageCopy } from "./styles";

function InlineErrorMessage({ children }) {
  return (
    <MessageWrapper>
      <MessageCopy>{children}</MessageCopy>
    </MessageWrapper>
  );
}

InlineErrorMessage.propTypes = {
  children: node.isRequired,
};

export default InlineErrorMessage;
