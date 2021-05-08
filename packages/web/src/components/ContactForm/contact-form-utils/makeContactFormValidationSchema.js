import * as Yup from "yup";

import { formSubmitStatus } from "../../../i18n";

function makeContactFormValidationSchema(locale = "en") {
  return Yup.object().shape({
    fullName: Yup.string()
      .min(2, formSubmitStatus.formValidation[locale].nameShort)
      .max(100, formSubmitStatus.formValidation[locale].nameLong)
      .required(formSubmitStatus.formValidation[locale].nameRequired),
    email: Yup.string()
      .email(formSubmitStatus.formValidation[locale].email)
      .required(formSubmitStatus.formValidation[locale].emailRequired),
    message: Yup.string()
      .min(2, formSubmitStatus.formValidation[locale].messageShort)
      .max(800, formSubmitStatus.formValidation[locale].messageLong)
      .required(formSubmitStatus.formValidation[locale].messageRequired),
    botField: Yup.string().max(0, "Great Success"),
    consentAccepted: Yup.boolean().oneOf(
      [true],
      formSubmitStatus.formValidation[locale].privacyRequired,
    ),
  });
}

export default makeContactFormValidationSchema;
