import styled from "styled-components";

import { theme, mediaMin, rem } from "../../theme/theme";
import OutlinedButton from "../OutlinedButton/OutlinedButton";

export const Title = styled.h2`
  font-size: ${theme.font.size.display.mobile.h1};
  line-height: ${theme.font.lineHeight.display.mobile.h1};

  margin-bottom: ${rem(24)};

  ${mediaMin.s`
    font-size: ${theme.font.size.display.desktop.h2};
    line-height: ${theme.font.lineHeight.display.desktop.h2};
  `};
`;

export const ErrorMessageWrapper = styled.div`
  background-color: ${({ polite }) =>
    polite
      ? theme.color.background.section.lightest
      : theme.color.background.error};

  display: block;
  padding: ${rem(16)} ${rem(16)};

  ${({ polite }) =>
    polite
      ? `border-left: ${rem(4)} solid ${theme.color.border.dark};`
      : `border-left: ${rem(4)} solid ${theme.color.border.error};`}

  margin-bottom: ${rem(32)};
`;

export const ErrorMessage = styled.p`
  color: ${theme.color.text.validation.error};
  color: ${({ polite }) =>
    polite ? theme.color.text.default : theme.color.text.validation.error};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.regular};
  }
`;

export const StyledLoadMore = styled(OutlinedButton)`
  margin-left: auto;
  margin-right: auto;
  display: block;

  width: 100%;
  margin-top: ${rem(40)};

  ${mediaMin.s`
    width: ${rem(288)};
    margin-top: ${rem(64)};
  `};
`;
