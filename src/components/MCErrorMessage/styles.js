import styled from "styled-components";
import { theme, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";

export const MessageTitle = styled(Copy)`
  color: ${theme.colors.dark800};
  display: block;
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.s};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyRegular};
  }
`;

export const StatusMessageWrapper = styled.div`
  background-color: ${theme.colors.gray100};
  border: ${rem(2)} solid ${theme.colors.dark800};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.dark800};

  display: block;

  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};

  padding: ${rem(16)};
  margin-top: ${rem(24)};
  white-space: pre-line;
  width: 100%;

  ${theme.shadow.default};
`;