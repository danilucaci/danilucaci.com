import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import { theme, rem } from "../../theme/globalStyles";

const StyledSkipToMainContent = styled.a`
  left: -999px;
  position: absolute;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -999;

  &:focus,
  &:active {
    color: ${theme.colors.gray100};
    background-color: ${theme.colors.main600};
    left: auto;
    top: auto;
    width: auto;
    height: auto;
    overflow: auto;
    padding: ${rem(12)} ${rem(16)};
    text-align: center;
    font-size: ${rem(20)};
    line-height: ${rem(32)};
    z-index: 999;
  }
`;

const SkipToMainContent = () => {
  return (
    <FormattedMessage id="skipToMainContent">
      {(txt) => (
        <StyledSkipToMainContent href="#main">{txt}</StyledSkipToMainContent>
      )}
    </FormattedMessage>
  );
};

export default SkipToMainContent;
