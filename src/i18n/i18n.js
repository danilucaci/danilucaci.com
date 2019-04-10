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
  formValidation: {
    en: {
      email: "Please enter a valid email",
      nameRequired: "Please enter your name. I don’t really want to call you ‘user182’ 😄",
      nameShort: "Your name is too short. I’m sure it’s longer than that...",
      nameLong: "Your name is too long. Are you sure it’s correct?",
      emailRequired: "Please enter your email so that I can get back to you.",
      messageRequired: "Please enter a message explaining what you would like to ask me.",
      messageShort:
        "Your message is too short. Please include some more details about what you`d like to ask me so that I can get back to you.",
      messageLong:
        "Your message is too long. Please include a short description of what you’d like to ask me and I’ll get back to you to go over the details.",
      privacyRequired: "To continue you need to accept the legal notice and privacy policy.",
    },
    es: {
      email: "El correo electrónico que has introducido no es válido.",
      nameRequired: "Por favor introduce tu nombre. No me gustaría llamarte ‘usuario371’ 😄",
      nameShort: "Tu nombre parece muy corto, ¿seguro te llamas así?",
      nameLong: "Tu nombre es un poco largo, ¿seguro te llamas así?",
      emailRequired: "Por favor introduce tu email para que pueda enviarte una respuesta.",
      messageRequired: "Por favor escribe un mensaje explicando lo que te gustaría preguntarme.",
      messageShort:
        "Tu mensaje es muy corto. Por favor describe un poco lo que te gustaría preguntarme, para que pueda darte una respuesta cuanto antes.",
      messageLong:
        "Tu mensaje es muy largo. Por favor coméntame un poco por encima lo que te gustaría preguntarme y me pondré en contacto contigo para concretar todos los detalles.",
      privacyRequired:
        "Para poder continuar tienes que aceptar el aviso legal y la política de privacidad.",
    },
  },
  errorSubtitle: {
    en:
      "Please feel free to get in touch by sending me an email at hello@danilucaci.com or a tweet at: @danilucaci.",
    es:
      "Por favor, ponte en contacto conmigo enviándome un email a hola@danilucaci.com o un mensaje privado en twitter a: @danilucaci.",
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

export const MC_ERRORS = {
  en: {
    generic: "Sorry 😔, something went wrong, please try again later.",
    many: "Sorry 😔, you have too many subscribe attemps, please try again later.",
    already: "You have already subscribed. Thank you for subscribing to my newsletter 🙏🏼.",
  },
  es: {
    generic: "Lo siento 😔, algo ha salido mal, por favor intentalo de nuevo más tarde.",
    many:
      "Lo siento 😔, has hecho demasiados intentos de suscribirte, por favor intentalo de nuevo más tarde.",
    already: "Ya te habías suscrito. ¡Gracias por apuntarte a mi lista de suscriptores! 🙏🏼",
  },
  formValidation: {
    en: {
      email: "Please enter a valid email",
      emailRequired: "Please enter your email so that I can get back to you.",
      privacyRequired: "To continue you need to accept the legal notice and privacy policy.",
    },
    es: {
      email: "El correo electrónico que has introducido no es válido.",
      emailRequired: "Por favor introduce tu email para que pueda enviarte una respuesta.",
      privacyRequired:
        "Para poder continuar tienes que aceptar el aviso legal y la política de privacidad.",
    },
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
    error: "Something went wrong... The projects from Dribbble couldn‘t be loaded 😔",
  },
  es: {
    error: "Algo ha salido mal... Los proyectos de Dribbble no se han podido cargar 😔",
  },
};

export default intlMessages;
