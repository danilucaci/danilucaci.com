import React from "react";
import PropTypes from "prop-types";

import Spinner from "../Spinner/Spinner";
import EmailSuccessMessage from "../EmailSuccessMessage/EmailSuccessMessage";
import EmailErrorMessage from "../EmailErrorMessage/EmailErrorMessage";
import { FORM_SUBMIT_STATUS } from "../../i18n/i18n";

import { StyledLoadingWrapper, StyledLoadingCTA, StyledErrorCTA, StyledIcon } from "./styles";

function EmailLoading({
  showFormSuccess = false,
  showFormError = false,
  formErrorRes = {},
  showFormLoading = true,
  locale = "en",
}) {
  return (
    <StyledLoadingWrapper>
      {showFormLoading && (
        <StyledLoadingCTA>
          <Spinner />
        </StyledLoadingCTA>
      )}

      {!showFormLoading && showFormSuccess && (
        <StyledLoadingCTA>
          {FORM_SUBMIT_STATUS.cta[locale]}
          <StyledIcon aria-hidden="true">
            <use xlinkHref="#correct" />
          </StyledIcon>
        </StyledLoadingCTA>
      )}

      {showFormSuccess && <EmailSuccessMessage locale={locale} />}
      {showFormError && (
        <React.Fragment>
          <StyledErrorCTA>
            {FORM_SUBMIT_STATUS.ctaError[locale]}
            <StyledIcon aria-hidden="true">
              <use xlinkHref="#error" />
            </StyledIcon>
          </StyledErrorCTA>
          <EmailErrorMessage locale={locale} formErrorRes={formErrorRes} />
        </React.Fragment>
      )}
    </StyledLoadingWrapper>
  );
}

EmailLoading.propTypes = {
  showFormSuccess: PropTypes.bool,
  showFormLoading: PropTypes.bool,
  showFormError: PropTypes.bool,
  formErrorRes: PropTypes.object,
  locale: PropTypes.string.isRequired,
};

export default EmailLoading;
