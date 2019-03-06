// Messages
import en from "./en.json";
import es from "./es.json";

const intlMessages = { en, es };

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
  success: {
    en:
      "Thank you for contacting me. \n I will send you a response in about 24 hours.",
    es:
      "Gracias por contactar conmigo. \n Recibirás una respuesta en aproximadamente 24 horas.",
  },
  error: {
    en: "Sorry 😔, your message couldn't be sent, please try again later.",
    es:
      "Lo siento 😔, tu mensaje no ha podido ser enviado, por favor prueba más tarde de nuevo.",
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
    already: "It looks like you have already subscribed to my newsletter 👌🏻",
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
    message:
      "Thanks for joining my newsletter! You will receive a confirmation email shortly.",
  },
  es: {
    message:
      "¡Gracias por suscribirte a mi newsletter! Pronto recibirás un email de confirmación.",
  },
};

export default intlMessages;
