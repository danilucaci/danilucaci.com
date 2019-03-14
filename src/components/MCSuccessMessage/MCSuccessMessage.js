import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import { MC_SUCCESS } from "../../i18n/i18n";

const StatusMessageWrapper = styled.div`
  background-color: ${theme.colors.gray100};
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

const MessageTitle = styled(Copy)`
  color: ${theme.colors.main600};
  display: block;
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.s};
  font-weight: 700;

  .fonts-loaded & {
    font-family: ${theme.fonts.header};
  }
`;

const MessageSubtitle = styled(Copy)`
  color: ${theme.colors.main600};
  display: block;
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
`;

function MCSuccessMessage(props) {
  const locale = props.locale;

  return (
    <StatusMessageWrapper>
      <MessageTitle>{MC_SUCCESS[locale].title}</MessageTitle>
      <MessageSubtitle>{MC_SUCCESS[locale].message}</MessageSubtitle>
    </StatusMessageWrapper>
  );
}

export default MCSuccessMessage;

MCSuccessMessage.propTypes = {
  locale: PropTypes.string.isRequired,
};
