import * as Yup from "yup";

import { mcErrors } from "../../i18n";

const MCSchema = (locale = "en") =>
  Yup.object().shape({
    email: Yup.string()
      .email(mcErrors.formValidation[locale].email)
      .required(mcErrors.formValidation[locale].emailRequired),
    acceptsconsentcheckbox: Yup.boolean().oneOf(
      [true],
      mcErrors.formValidation[locale].privacyRequired,
    ),
  });

export default MCSchema;
