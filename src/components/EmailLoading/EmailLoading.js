import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { theme, rem } from "../../theme/globalStyles";
import Spinner from "../Spinner/Spinner";
import EmailSuccessMessage from "../EmailSuccessMessage/EmailSuccessMessage";
import EmailErrorMessage from "../EmailErrorMessage/EmailErrorMessage";
import { Icon } from "../Icon/Icon";
import { FORM_SUBMIT_STATUS } from "../../i18n/i18n";

const StyledLoadingWrapper = styled.div``;

const StyledLoadingCTA = styled.div`
  background-color: ${theme.colors.main500};
  border: none;
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.buttonLight};

  text-align: center;
  text-decoration: none;
  font-size: ${theme.fontSizes.button};
  line-height: ${theme.lineHeights.button};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyBold};
  }

  font-style: normal;
  font-weight: 700;

  padding: ${rem(10)} ${rem(24)};
  height: ${rem(48)};
  margin-top: ${rem(16)};
  width: 100%;

  white-space: nowrap;

  ${theme.shadow.buttons.main};
`;

const StyledErrorCTA = styled(StyledLoadingCTA)`
  background-color: ${theme.colors.gray100};
  border: ${rem(2)} solid ${theme.colors.danger600};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.danger600};

  ${theme.shadow.subscribeErrorMessage};
`;

const StyledIcon = styled(Icon)`
  fill: ${theme.colors.buttonLight};
  margin-bottom: ${rem(1)};
  margin-left: ${rem(4)};
`;

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
