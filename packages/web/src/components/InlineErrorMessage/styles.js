import styled from "styled-components";

import { theme, rem } from "../../theme";
import { Copy } from "../Copy";

export const MessageWrapper = styled.div`
  background-color: ${theme.color.background.error};
  border-radius: ${theme.borderRadius.default};
  display: block;

  padding: ${rem(12)} ${rem(16)};
  margin-top: ${rem(8)};
  white-space: pre-line;
`;

export const MessageCopy = styled(Copy)`
  color: ${theme.color.text.validation.error};
  font-size: ${theme.font.size.body.s};
  line-height: ${theme.font.lineHeight.body.s};
`;
