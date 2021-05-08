import styled from "styled-components";

import { theme, rem, mediaMin } from "../../../theme";
import { Copy, AltCopy } from "../../Copy";
import Icon from "../../Icon";

export const ErrorMessageWrapper = styled.div`
  border: 1px solid ${theme.color.border.default};
  border-radius: ${theme.borderRadius.default};
  display: block;
  background-color: ${theme.colors.grey00};
  padding: ${rem(16)};
  margin-top: ${rem(24)};
  white-space: pre-line;

  ${mediaMin.s`
    padding: ${rem(24)};
  `};
`;

export const ErrorTitleWrapper = styled.div`
  margin-bottom: ${rem(12)};

  ${mediaMin.xxxs`
    display: flex;
    align-items: center;    
  `};
`;

export const ErrorIconWrapper = styled.div`
  width: ${rem(40)};
  height: ${rem(40)};
  padding: ${rem(8)};
  border-radius: 50%;
  background-color: ${theme.color.background.error};
  margin-bottom: ${rem(8)};

  ${mediaMin.xxxs`
    margin-bottom: 0;
  `};
`;

export const ErrorIcon = styled(Icon)`
  fill: ${theme.color.icon.error};
`;

export const ErrorTitle = styled.h3`
  font-size: ${theme.font.size.display.mobile.h4};
  line-height: ${theme.font.lineHeight.display.mobile.h4};

  ${mediaMin.xs`
  font-size: ${theme.font.size.display.desktop.h4};
  line-height: ${theme.font.lineHeight.display.desktop.h4};
`}

  ${mediaMin.xxxs`
    margin-left: ${rem(8)};
  `};
`;

export const ErrorCopy = styled(Copy)`
  margin-bottom: ${rem(16)};
`;

export const ErrorAltInfo = styled(AltCopy)`
  margin-top: ${rem(16)};
  margin-bottom: ${rem(16)};
`;

export const ErrorDetails = styled(Copy)`
  color: ${theme.colors.grey800};
  display: block;
  font-size: ${theme.font.size.body.s};
  line-height: ${theme.font.lineHeight.body.s};
  margin-top: ${rem(12)};
`;

export const ShowErrorButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${theme.color.text.default};
  display: block;
  font-size: ${theme.font.size.body.s};
  line-height: ${theme.font.lineHeight.body.s};
  font-weight: 700;

  .fonts-loaded & {
    font-family: ${theme.font.family.body.bold};
  }

  &:hover {
    color: ${theme.color.text.button.text.enabled};
    cursor: pointer;
    background-color: transparent;
    border: none;
    box-shadow: none;
  }

  &:focus {
    color: ${theme.color.text.button.text.enabled};
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  &:active {
    color: ${theme.color.text.button.text.enabled};
    cursor: pointer;
    background-color: transparent;
  }

  &:disabled {
    color: ${theme.color.text.button.text.disabled} !important;
    cursor: pointer;
    background-color: transparent;
    border: none;
    box-shadow: none;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`;

export const CloseErrorButton = styled(ShowErrorButton)`
  margin-left: auto;
`;

export const ButtonsWrapper = styled.div`
  margin-top: ${rem(16)};
  width: auto;
  display: flex;
  justify-content: space-between;
`;
