import * as Yup from "yup";

import { FORM_SUBMIT_STATUS } from "../../../i18n";

function makeContactFormValidationSchema(locale = "en") {
  return Yup.object().shape({
    fullName: Yup.string()
      .min(2, FORM_SUBMIT_STATUS.formValidation[locale].nameShort)
      .max(100, FORM_SUBMIT_STATUS.formValidation[locale].nameLong)
      .required(FORM_SUBMIT_STATUS.formValidation[locale].nameRequired),
    email: Yup.string()
      .email(FORM_SUBMIT_STATUS.formValidation[locale].email)
      .required(FORM_SUBMIT_STATUS.formValidation[locale].emailRequired),
    message: Yup.string()
      .min(2, FORM_SUBMIT_STATUS.formValidation[locale].messageShort)
      .max(800, FORM_SUBMIT_STATUS.formValidation[locale].messageLong)
      .required(FORM_SUBMIT_STATUS.formValidation[locale].messageRequired),
    botField: Yup.string().max(0, "Great Success"),
    consentAccepted: Yup.boolean().oneOf(
      [true],
      FORM_SUBMIT_STATUS.formValidation[locale].privacyRequired,
    ),
  });
}

export default makeContactFormValidationSchema;
