// Messages
import en from "./en.json";
import es from "./es.json";

const intlMessages = { en, es };

export const localePaths = {
  en: {
    default: true,
    siteLocalePrefix: "/",
    contact: "/contact",
    about: "/about-me",
    work: "/work",
    thanks: "/thanks",
    paginationName: "/page/",
    blog: "/blog",
  },
  es: {
    siteLocalePrefix: "/es",
    contact: "/es/contacto",
    about: "/es/sobre-mi",
    work: "/es/trabajos",
    thanks: "/es/gracias",
    paginationName: "/pagina/",
    blog: "/es/blog",
  },
};

export const CONSENT_VALUE = {
  en: {
    no: "I do not accept the privacy policy.",
    yes: "I have read and I accept the privacy policy.",
  },
  es: {
    no: "No accepto la política de privacidad.",
    yes: "He leído y accepto la política de privacidad.",
  },
};

export const FORM_SUBMIT_STATUS = {
  successTitle: {
    en: "Thank you for contacting me!",
    es: "!Gracias por contactar conmigo¡",
  },
  successSubtitle: {
    en: "You’ll hear back from me in about 24—48 hours.",
    es: "Te enviaré una respuesta en un plazo de 24-48 horas.",
  },
  error: {
    en: "Sorry 😔, your message couldn't be sent, please try again later.",
    es:
      "Lo siento 😔, tu mensaje no ha podido ser enviado, por favor prueba de nuevo más tarde.",
  },
  cta: {
    en: "Message Sent!",
    es: "¡Mensaje Enviado!",
  },
  subscribeCta: {
    en: "Subscribed! 🎉",
    es: "¡Suscrito! 🎉",
  },
  errorCta: {
    en: "Something went wrong 😔",
    es: "Algo ha salido mal 😔",
  },
};

export const INPUT_EMAIL_ERROR = {
  en:
    "The email you have written is incomplete (the part after the @). An example of a correct email is: example@example.com (.com is your emails country code)",
  es:
    "El email que has introducido es incompleto (la parte despúes de la @). Un ejemplo de email correcto es: ejemplo@ejemplo.es (.es es el código del pais de tu email)",
};

export const MC_ERRORS = {
  en: {
    generic: "Sorry 😔, something went wrong, please try again later.",
    many:
      "Sorry 😔, you have too many subscribe attemps, please try again later.",
    already: "It seems that you already are a member of my newsletter 👌🏻",
  },
  es: {
    generic:
      "Lo siento 😔, algo ha salido mal, por favor intentalo de nuevo más tarde.",
    many:
      "Lo siento 😔, has hecho demasiados intentos, por favor intentalo de nuevo más tarde.",
    already: "Parece que ya eres miembro de mi newsletter 👌🏻",
  },
};

export const MC_SUCCESS = {
  en: {
    title: "Thanks for joining my newsletter!",
    message:
      "Now you just need to confirm your subscription by clicking on the link you will receive in your inbox.",
  },
  es: {
    title: "¡Gracias por suscribirte a mi newsletter!",
    message:
      "Para acabar, solo tienes que confirmar tu suscripción haciendo click en el enlace que llegará a tu buzón.",
  },
};

export default intlMessages;
