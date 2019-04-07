// Messages
import en from "./en.json";
import es from "./es.json";

const intlMessages = { en, es };

export const localePaths = {
  en: {
    default: true,
    siteLocalePrefix: "/",
    index: "/",
    contact: "/contact",
    about: "/about-me",
    work: "/work",
    thanks: "/thanks",
    paginationName: "/page/",
    blog: "/blog",
    email: "hello@danilucaci.com",
  },
  es: {
    siteLocalePrefix: "/es",
    index: "/es",
    contact: "/es/contacto",
    about: "/es/sobre-mi",
    work: "/es/trabajos",
    thanks: "/es/gracias",
    paginationName: "/pagina/",
    blog: "/es/blog",
    email: "hola@danilucaci.com",
  },
};

export const EXTERNAL_LINK = {
  en: {
    srOnly: "Opens in new window",
  },
  es: {
    srOnly: "Abre en nueva ventana",
  },
};

export const COPY_URL_MESSAGES = {
  en: {
    default: "Copy page link",
    copied: "Page link copied! ✅",
    error: "Couldn't copy the link 😔",
  },
  es: {
    default: "Copiar enlace",
    copied: "¡Enlace copiado! ✅",
    error: "Algo ha salido mal 😔",
  },
};

export const COPY_CODE_MESSAGES = {
  en: {
    default: "Copy",
    copied: "Copied! ✅",
    error: "Couldn't copy the snippet 😔",
  },
  es: {
    default: "Copiar",
    copied: "¡Copiado! ✅",
    error: "Algo ha salido mal 😔",
  },
};

export const CONSENT_VALUE = {
  en: {
    no: "I have not read and I do not accept the legal notice and the privacy policy.",
    yes: "I have read and accept the legal notice and the privacy policy.",
  },
  es: {
    no: "No he leído y no acepto el aviso legal y la política de privacidad.",
    yes: "He leído y acepto el aviso legal y la política de privacidad.",
  },
};

export const FORM_SUBMIT_STATUS = {
  successTitle: {
    en: "Thank you for contacting me!",
    es: "!Gracias por contactar conmigo¡",
  },
  successSubtitle: {
    en:
      "You’ll hear back from me in about 24—48 hours. If not, please send me an email at hello@danilucaci.com.",
    es:
      "Recibirás una respuesta en un plazo de 24-48 horas. De lo contrario, por favor mandame un email a hola@danilucaci.com.",
  },
  errorTitle: {
    en: "Sorry 😔, your message couldn't be sent.",
    es: "Lo siento 😔, tu mensaje no ha podido ser enviado.",
  },
  errorSubtitle: {
    en:
      "Please feel free to get in touch by sending me an email at info@danilucaci.com or at @danilucaci.",
    es:
      "Por favor, ponte en contacto conmigo enviándome  un email a info@danilucaci.com o a @danilucaci.",
  },
  cta: {
    en: "Message Sent!",
    es: "¡Mensaje Enviado!",
  },
  ctaError: {
    en: "Something went wrong 😔",
    es: "Algo ha salido mal 😔",
  },
  subscribeCta: {
    en: "Message Sent! 🎉",
    es: "¡Mensaje Enviado! 🎉",
  },
};

export const INPUT_EMAIL_ERROR = {
  en:
    "The email you have written is incomplete (the part after the @). An example of a correct email is: example@example.com (.com is your emails country code)",
  es:
    "El email que has introducido es incompleto (la parte después de la @). Un ejemplo de email correcto es: ejemplo@ejemplo.es (.es es el código del país de tu email)",
};

export const MC_ERRORS = {
  en: {
    generic: "Sorry 😔, something went wrong, please try again later.",
    many: "Sorry 😔, you have too many subscribe attemps, please try again later.",
    already: "You have already subscribed. Thank you for subscribing to my newsletter 🙏🏼.",
  },
  es: {
    generic: "Lo siento 😔, algo ha salido mal, por favor intentalo de nuevo más tarde.",
    many: "Lo siento 😔, has hecho demasiados intentos, por favor intentalo de nuevo más tarde.",
    already: "Ya te habías suscrito. ¡Gracias por apuntarte a mi lista de suscriptores! 🙏🏼",
  },
};

export const MC_SUCCESS = {
  en: {
    title: "Thanks for joining my newsletter!",
    message:
      "Now you just need to confirm your subscription. Please click the link in the email you should receive shortly.",
  },
  es: {
    title: "¡Gracias por suscribirte a mi newsletter!",
    message:
      "Para acabar, solo tienes que confirmar tu suscripción haciendo click en el enlace del email que llegará a tu buzón.",
  },
};

export const DRIBBBLE_STATUS = {
  en: {
    error: "Something went wrong... The projects from Dribbble couldn‘t be loaded 😔.",
  },
  es: {
    error: "Algo ha salido mal... Los proyectos de Dribbble no se han podido cargar 😔.",
  },
};

export default intlMessages;
