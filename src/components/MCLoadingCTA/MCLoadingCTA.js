import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import Spinner from "../Spinner/Spinner";
import { FORM_SUBMIT_STATUS } from "../../i18n/i18n";

const StyledLoadingCTA = styled.div`
  ${(props) =>
    (props.error
      ? css`
          background-color: ${theme.colors.danger500};
          color: ${theme.colors.danger100};
          ${theme.shadow.buttons.error};
        `
      : css`
          background-color: ${theme.colors.main500};
          color: ${theme.colors.buttonLight};
          ${theme.shadow.buttons.main};
          border: none;
        `)}

  border-radius: ${theme.borderRadius.buttons};

  text-align: center;
  text-decoration: none;
  font-size: ${theme.fontSizes.button};
  line-height: ${theme.lineHeights.button};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyBold};
  }

  font-style: normal;
  font-weight: 700;

  padding: ${rem(12)} ${rem(24)};
  height: ${rem(48)};
  margin-top: ${rem(16)};
  margin-bottom: ${rem(8)};

  display: inline-block;

  width: 100%;
  white-space: nowrap;

  ${mediaMin.xl`
    width: auto;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: ${rem(8)};
    display: inline-block;
    vertical-align: middle;
  `};
`;

function MCLoadingCTA({ showMCError = false, showMCLoading = true, locale = "en" }) {
  return (
    <StyledLoadingCTA error={showMCError}>
      {showMCLoading && <Spinner locale={locale} />}
      {!showMCLoading && !showMCError && <>{FORM_SUBMIT_STATUS.subscribeCta[locale]}</>}
      {!showMCLoading && showMCError && <>{FORM_SUBMIT_STATUS.ctaError[locale]}</>}
    </StyledLoadingCTA>
  );
}

MCLoadingCTA.propTypes = {
  showMCLoading: PropTypes.bool.isRequired,
  showMCError: PropTypes.bool,
  locale: PropTypes.string.isRequired,
};

export default MCLoadingCTA;
