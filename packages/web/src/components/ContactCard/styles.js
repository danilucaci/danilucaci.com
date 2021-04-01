import styled from "styled-components";

import { theme, mediaMin, rem } from "../../theme";
import { Copy } from "../Copy";
import { RowSpacer } from "../Grid";
import SecondaryLinkButton from "../SecondaryLinkButton";

export const ContactCardRowBackground = styled(RowSpacer)`
  background-color: ${theme.color.background.section.contactCard};
`;

export const ContactCardTitle = styled.h2`
  color: ${theme.color.text.light.white};
  margin-bottom: ${rem(16)};

  font-size: ${theme.font.size.display.mobile.contactCardTitle};
  line-height: ${theme.font.lineHeight.display.mobile.contactCardTitle};

  ${mediaMin.xs`
    text-align: center;
  `};

  ${mediaMin.m`
    margin-bottom: ${rem(24)};
    font-size: ${theme.font.size.display.desktop.contactCardTitle};
    line-height: ${theme.font.lineHeight.display.desktop.contactCardTitle};
  `};
`;

export const Subtitle = styled(Copy)`
  color: ${theme.color.text.light.primary};
  display: block;
  font-size: ${theme.font.size.display.mobile.contactCardSubtitle};
  line-height: ${theme.font.lineHeight.display.mobile.contactCardSubtitle};
  margin-bottom: ${rem(64)};

  ${mediaMin.xs`
    text-align: center;
  `};

  ${mediaMin.m`
    margin-bottom: ${rem(40)};
    font-size: ${theme.font.size.display.desktop.contactCardSubtitle};
    line-height: ${theme.font.lineHeight.display.desktop.contactCardSubtitle};
  `};
`;

export const StyledButton = styled(SecondaryLinkButton)`
  width: 100%;

  ${mediaMin.s`
    width: ${rem(340)};
    margin-left: auto;
    margin-right: auto;
  `};
`;
