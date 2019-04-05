import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";

export const StatusMessageWrapper = styled.div`
  background-color: ${theme.colors.grey100};
  border: ${rem(2)} solid ${theme.colors.main600};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.main600};

  display: block;

  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};

  padding: ${rem(16)};
  margin-top: ${rem(24)};
  white-space: pre-line;

  ${theme.shadow.subscribeSuccessMessage};

  ${mediaMin.xl`
      max-width: 84%;
  `};
`;

export const MessageTitle = styled(Copy)`
  color: ${theme.colors.main600};
  display: block;
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.s};
  font-weight: 700;

  .fonts-loaded & {
    font-family: ${theme.fonts.header};
  }
`;

export const MessageSubtitle = styled(Copy)`
  color: ${theme.colors.main600};
  display: block;
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
`;
