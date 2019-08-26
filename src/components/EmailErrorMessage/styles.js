import styled from "styled-components";
import { theme, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";

export const MessageTitle = styled(Copy)`
  color: ${theme.colors.grey800};
  display: block;
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.s};
  font-weight: 700;

  .fonts-loaded & {
    font-family: ${theme.fonts.header};
  }
`;

export const MessageSubtitle = styled(Copy)`
  color: ${theme.colors.grey800};
  display: block;
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
`;

export const MessageError = styled(Copy)`
  color: ${theme.colors.grey800};
  display: block;
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  margin-top: ${rem(12)};
`;

export const StatusMessageWrapper = styled.div`
  border: ${rem(2)} solid ${theme.colors.grey900};
  border-radius: ${theme.borderRadius.buttons};
  display: block;
  background-color: ${theme.colors.grey00};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  color: ${theme.colors.grey900};
  padding: ${rem(16)};
  margin-top: ${rem(24)};
  ${theme.shadow.default};
  white-space: pre-line;
`;

export const InlineStatusMessageWrapper = styled.div`
  background-color: ${theme.colors.danger100};
  border-radius: ${theme.borderRadius.buttons};
  display: block;

  padding: ${rem(8)};
  margin-top: ${rem(8)};
  white-space: pre-line;
`;

export const InlineMessageCopy = styled(Copy)`
  color: ${theme.colors.danger600};
  display: block;
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
`;

export const ShowErrorLink = styled.button`
  border: none;
  background-color: transparent;
  color: ${theme.colors.main600};
  display: block;
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  font-weight: 700;
  margin-top: ${rem(16)};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyBold};
  }

  &:hover {
    cursor: pointer;
  }
`;
