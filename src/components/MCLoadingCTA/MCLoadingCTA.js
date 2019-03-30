import React from "react";
import PropTypes from "prop-types";

import Spinner from "../Spinner/Spinner";
import { FORM_SUBMIT_STATUS } from "../../i18n/i18n";

import { StyledLoadingCTA } from "./styles";

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
