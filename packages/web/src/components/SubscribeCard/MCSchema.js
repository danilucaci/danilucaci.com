import * as Yup from "yup";

import { MC_ERRORS } from "../../i18n";

const MCSchema = (locale = "en") =>
  Yup.object().shape({
    email: Yup.string()
      .email(MC_ERRORS.formValidation[locale].email)
      .required(MC_ERRORS.formValidation[locale].emailRequired),
    acceptsconsentcheckbox: Yup.boolean().oneOf(
      [true],
      MC_ERRORS.formValidation[locale].privacyRequired,
    ),
  });

export default MCSchema;
