import React from "react";
import { bool, string } from "prop-types";

import Spinner from "../Spinner/Spinner";
import { FORM_SUBMIT_STATUS } from "../../i18n/i18n";

import { StyledLoadingCTA } from "./styles";

function MCLoadingCTA({ showMCError = false, showMCLoading = true, locale = "en" }) {
  return (
    <StyledLoadingCTA error={showMCError}>
      {showMCLoading && <Spinner />}
      {!showMCLoading && !showMCError && <>{FORM_SUBMIT_STATUS.subscribeCta[locale]}</>}
      {!showMCLoading && showMCError && <>{FORM_SUBMIT_STATUS.ctaError[locale]}</>}
    </StyledLoadingCTA>
  );
}

MCLoadingCTA.propTypes = {
  showMCLoading: bool.isRequired,
  showMCError: bool,
  locale: string.isRequired,
};

MCLoadingCTA.defaultProps = {
  showMCError: false,
};

export default MCLoadingCTA;
