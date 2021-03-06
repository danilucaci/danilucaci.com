---
title: "Cómo Añadir un Formulario de Contacto en una Web Estática"
slug: "Formulario Contacto en Web Estatica"
date: "2019-03-12"
category: "blog"
intro: "Los generadores de webs estáticas como Gatsby.js son una buena opción para crear un blog personal o porfolio online. Tendrás todas las mejores prácticas de optimización integradas, además de todas las herramientas de desarrollo modernas que te hacen la vida más fácil como desarrollador.
|
Pero si necesitas añadir un formulario de contacto en tu web, de momento no hay ningún plugin que te permita hacerlo.
|
En este artículo te enseñaré como he añadido un formulario de contacto en mi página web personal creada con Gatsby.js y Netlify Forms."
snippet: "Cómo he añadido un formulario de contacto a mi página web estática creada con Gatsby.js y Netlify Forms."
tags:
    - gatsby.js
    - forms
posted: true
locale: "es"
twinPost: "contact form on static site"
---

import Image from "components/Image/Image";

## ¿Qué Opciones Tenemos Actualmente?

Una de las características principales que necesitaba en mi página web era tener
un formulario de contacto, para que cualquier cliente potencial se pueda poner
en contacto conmigo.

Pero pensé que crear un servidor _back-end_ para ello, quizás sería demasiado en
mi caso.

Entonces empecé a buscar formas de poder gestionar peticiones de formularios en
una web estática.

Primero pensé en un usar un servicio externo como Formspree. Te ofrecen un plan
gratuito para empezar, pero era un poco limitado, mientras que el plan de pago
era demasiado caro para mis necesidades.

Así que finalmente me decidí por usar los formularios de Netlify ya que ahí es
tenía hospedada la web también, así que me pareció la mejor opción.

Te ofrecen un buen plan para comenzar con hasta 100 peticiones de formularios al
mes —después tendrás que pasar al plan de pago Pro.

Si quieres probar otras herramientas o servicios que van bien para las páginas
web estáticas,
[este repositorio en Github](https://github.com/agarrharr/awesome-static-website-services "repositorio en Github con recursos para webs estáticas")
es un buen recurso.

## ¿Qué Necesitas Para Empezar?

Si tienes tu web hospedada en Netlify, ya puedes empezar a usar su servicio de
formularios.

Para hacerlo, solo tienes que añadir un atributo `data-netlify="true"` o
`netlify` a tu formulario y un atributo `name="nombre-del-formulario"` —que es
el que verás como nombre del formulario en tu panel de usuario de Netlify.

Este solo es el inicio de la etiqueta del mío, el formulario entero es un poco
más largo —volveremos a esto más adelante.

```jsx{2,5}
<Form
  name="contact"
  method="post"
  action={thanksURL}
  data-netlify="true"
  data-netlify-honeypot="botfield"
  onSubmit={handleSubmit}
>
```

### Elementos Adicionales Para los Inputs en Formularios JSX

Si estás usando tu formulario en un generador de webs estáticas como Gatsby.js,
tendrás que añadir un input oculto con el valor `name` puesto como `form-name` y
el `value` puesto como el nombre de tu formulario, en mi caso es `contact`.

Este paso es importante ya que, si no se indica, el formulario no aparecerá en
el panel de usuario de Netlify.

```jsx
<input type="hidden" name="form-name" aria-hidden="true" value="contact" />
```

## Añadiendo Protección Antispam

Si necesitas activar el filtro de _spam_ —y yo te recomiendo hacerlo, si no es
posible que llegues al limite de 100 peticiones al mes bastante rápido— Netlify
te ofrece 2 opciones.

La primera es usando un input oculto del tipo “honeypot” el cual solo los _bots_
que intenten rellenar el formulario verán, y si Netlify detecta ese campo como
completado, simplemente ignorará la presentación de ese formulario. En mi
ejemplo, el mio se llama `data-netlify-honeypot="botfield"`.

```html
data-netlify-honeypot="botfield"
```

La segunda forma de activar el filtro Spam es usando reCAPTCHA 2. Si necesitas
aprender como implementarlo, puedes
[leer este artículo de Netlify](https://www.netlify.com/docs/form-handling/) en
el que explican como puedes hacerlo.

Así que vamos a empezar a crear el formulario.

## Gestionando las Peticiones de Formularios

Por defecto, cuando un usuario te presenta un formulario, Netlify le redirige a
una página genérica de agradecimiento. Si te vale esa opción, puedes seguir
usando esa opción.

Pero podemos mejorar la experiencia de los usuarios usando una página
personalizada o un componente React para cuando el usuario tiene activado el
javascript en su navegador.

```jsx{4,7}
<StyledForm
  name="contact"
  method="post"
  action={thanksURL}
  data-netlify="true"
  data-netlify-honeypot="botfield"
  onSubmit={handleSubmit}
>
```

En mi caso he decidido implementar ambos casos.

### 1. El Usuario ha Desactivado Javascript en su Navegador

Cuando el usuario tiene javascript deshabilitado en su navegador, será
redirigido a una página hecha por mi usando el atributo `action={thanksURL}` del
formulario. De esta manera, puedo usar mi propia página de agradecimiento creada
con mis estílos de marca.

<Image
  src="2019-03-12---post-001/es/pagina_confirmacion_formulario_contacto_javascript_deshabilitado.png"
  caption="Página de confirmación personalizada para los usuarios que tienen javascript deshabilitado"
  expand
/>

### 2. El Usuario Tiene Activado Javascript en su Navegador

Cuando el usuario tiene javascript habilitado en su navegador, el formulario
será gestionado por la función `onSubmit={handleSubmit}`. Teniendo en cuenta de
que todo se realiza de forma asíncrona, puedo mejorar la experiencia de usuario
y mostrar un indicador del estado de carga mientras la información es enviada a
los servidores de Netlify.

Así que vamos a ver como podemos hacerlo.

```jsx{4,5,20}
async function handleSubmit(e) {
  e.preventDefault();

  setShowFormLoading(true);
  setFormSubmitted(true);

  const form = e.target;
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": form.getAttribute("name"),
      email,
      fullname: fullName,
      message,
      botfield: botField,
    }),
  })
    .then(() => {
      handleFormSent();
    })
    .catch((error) => handleFormError(error));
}
```

En este ejemplo puedes ver que estoy usando la nueva API de Hooks de React, pero
se podría conseguir lo mismo usando clases.

Lo primero que hace la función `handleSubmit()` es cambiar el valor de la
variable de estado `showFormLoading` a `true`. Después, el indicador de carga
_spinner_ se muestre en pantalla.

Acto seguido, cambia el valor de la variable de estado `formSubmited` de `false`
a `true` para que el componente `<EmailLoading ... />` se muestre en pantalla
(más adelante veremos como hacerlo).

## Mostrando un Indicador y un Mensaje con el Estado de Carga

Cuando `fetch()` devuelve una respuesta, se ejecuta la función
`handleFormSent()` que cambiará el valor de la variable de estado `formLoading`
a `false` y el valor de la variable `showFormSuccess` a `true`, si no se ha
devuelto ningún error.

```jsx
function handleFormSent() {
  setShowFormLoading(false);
  setShowFormSuccess(true);
}
```

Si la respuesta devuelve un error, la función `handleFormError()` se ejecutará
dentro del bloque `catch()`, el cual cambiará el valor de la variable de estado
`showFormError` a `true`, para que muestre en pantalla un mensaje de error.

```jsx
function handleFormSent() {
  let timer = setTimeout(() => {
    setShowFormLoading(false);
    setShowFormSuccess(true);

    clearTimeout(timer);
  }, 800);
}

function handleFormError(error) {
  setShowFormLoading(false);
  setShowFormError(true);
  setFormErrorRes(error);
}
```

Mientras la información del formulario se envía a los servidores de Netlify, el
icóno reemplaza el texto del botón de enviar el formulario.

Entonces, cuando `formSubmitted` cambia a `true`, el componente
`<EmailLoading />` se mostrará en pantalla y mostrará el indicador del estado de
carga junto con los mensajes de error o éxito, dependiendo de la respuesta del
servidor.

```jsx
{
  formSubmitted && (
    <EmailLoading
      showFormLoading={showFormLoading}
      showFormSuccess={showFormSuccess}
      showFormError={showFormError}
      formErrorRes={formErrorRes}
      locale={locale}
    />
  );
}
```

El componente `<EmailLoading ... />` simplemente devuelve un indicador del
estado de carga de la información cuando `isLoading` es equivalente a `true`, y
un mensaje de error o éxito cuando recibe la respuesta del servidor.

```jsx
{
  showFormLoading ? (
    <Spinner />
  ) : (
    <React.Fragment>
      {FORM_SUBMIT_STATUS.cta[locale]}
      <StyledIcon aria-hidden="true">
        <use xlinkHref="#correct" />
      </StyledIcon>
    </React.Fragment>
  );
}
```

## Validando Formularios con CSS

Para validar la información introducida en el formulario he decido usar solo
CSS.

Mi solución esta basada en usar los selectores de nivel 3 de CSS como `&:valid`,
`:not()`, `:placeholder-shown` o `:invalid`.

Si te gustaría leer más sobre ellos, puedes leer
[este articulo de css-tricks](https://css-tricks.com/form-validation-ux-html-css/)
en el que lo explican más.

Usando una combinación de estos selectores CSS, puedo tener hasta validación en
tiempo real del formulario mientras el usuario esta introduciendo la
información.

Por ejemplo, esto es una forma de comprobar si el input no esta activado o tiene
_focus_, si se ha introducido información y si es válido.

```css
/*  Input is:
 *  1. Valid
 *  2. NOT Empty
 *  3. NOT In Focus
 */
&:valid:not(:focus):not(:placeholder-shown) {
  color: ${theme.colors.success600};
  background-color: white !important;
  border: 2px solid ${theme.colors.success400};
  padding-right: ${rem(40)};

  & ~ span {
    display: block !important;
    ${optimizedSuccessSVGDataURI};
    background-size: ${rem(24)};
    background-repeat: no-repeat;
    background-position: 0px 0px;
  }
}
```

En este caso, también estoy mostrando un icono svg insertado usando un template
literal de ES6 `${optimizedSuccessSVGDataURI};` como background-image que se
activa con el selector css `~`.

Aparte de la validación de la información del formulario, también deberías
asegurarte de usar los atributos correctos para cada tipo de input.

En mi ejemplo, utilizo un input tipo `email` para el que he desactivado las
mayúsculas automáticas con `autoCapitalize` y la autocorección con
`autoCorrect`.

También he añadido el atributo `autoComplete` para que el navegador autocomplete
la información de contacto del usuario.

```jsx
<StyledInput
  type="email"
  value={email}
  name="email"
  placeholderType="email"
  title={INPUT_EMAIL_ERROR[locale]}
  pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
  autoCapitalize="off"
  autoCorrect="off"
  `autoComplete`="email"
  onChange={(e) => setEmail(e.target.value)}
  required
/>
```

El _regular expression_ que utilizo en el atributo `pattern` sirve para
comprobar si formato del email introducido es correcto, en concreto la parte que
sigue después de la _@_ que contiene el dominio del email.

El valor guardado en `title` será el que es mostrado al usuario cuando el
formato del email introducido no es válido, pero deberías tener en cuenta que
cada navegador muestra el mensaje de forma distinta, así que pruébalo primero.

La variable `INPUT_EMAIL_ERROR[locale]` simplemente guarda una versión traducida
del `title` ya que el blog lo he traducido al inglés y castellano.

## Creando un Formulario de Contacto que Cumple con la RGPD

Ya que actualmente vivo en España, tengo que cumplir con la ley de protección de
datos RGPD. Por tanto, faltan algunos campos en el formulario. El campo más
importante que me falta es un _checkbox_ que tiene que ser activado por el
usuario antes de que me pueda presentar un formulario con su información
personal.

Esto también es relativamente fácil hacer con Netlify ya que puedes enviar los
valores de cada input y si el usuario ha dado su consentimiento de usar su
información, o no, activando el checkbox.

**Nota:**

Antes de continuar leyendo, deberías tener en cuenta de que solo siguiendo estos
pasos **no estarás cumpliendo con la RGPD. Faltan muchos otros pasos y más
información que no está detallada en este artículo**.

Para asegurarte, deberías consultar con tu propio abogado como hice yo.

### Desactivando el Botón de Enviar

De acuerdo con las leyes actuales de privacidad, los usuarios no pueden enviarte
su información personal si no te han dado un consentimiento expreso previamente.

Por ello, tuve que añadír el checkbox —que no puede estar marcado por defecto—
que controla si el formulario puede ser presentado o no.

Fue muy fácil de hacer ya que se puede usar una variable _boolean_ que cambia de
`true` a `false` cuando el _checkbox_ es activado.

En caso contrario, el botón está desactivado hasta que el _checkbox_ se activa.

```jsx
{
  !formSubmitted && <SubmitButton disabled={!acceptsConsentCheckbox} />;
}
```

Depués deberías poder ver en tu panel de usuario de Netlify todas las peticiones
de formularios que se han realizado, junto con el consentimiento del usuario.

### El Formulario de Contacto con Todas las Opciones

```jsx
function ContactForm({ locale }) {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [botField, setBotField] = useState("");
  const [acceptsConsentCheckbox, setAcceptsConsentCheckbox] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(CONSENT_VALUE[locale].no);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showFormLoading, setShowFormLoading] = useState(false);
  const [showFormSuccess, setShowFormSuccess] = useState(false);
  const [showFormError, setShowFormError] = useState(false);
  const [formErrorRes, setFormErrorRes] = useState({});

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setShowFormLoading(true);
    setFormSubmitted(true);

    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        email,
        fullname: fullName,
        message,
        datesent: dateSent,
        botfield: botField,
        acceptsconsentcheckbox: acceptsConsentCheckbox,
      }),
    })
      .then(() => {
        handleFormSent();
      })
      .catch((error) => handleFormError(error));
  }

  function handleConsentCheckbox(e) {
    setAcceptsConsentCheckbox(e.target.checked);

    if (e.target.checked) {
      setCheckboxValue(CONSENT_VALUE[locale].yes);
    } else {
      setCheckboxValue(CONSENT_VALUE[locale].no);
    }
  }

  function handleFormSent() {
    setShowFormLoading(false);
    setShowFormSuccess(true);
  }

  function handleFormError(error) {
    setShowFormLoading(false);
    setShowFormError(true);
    setFormErrorRes(error);
  }

  return (
    <FormContainer>
      <StyledForm
        name="contact"
        method="post"
        action="path-to-custom-thank-you-page"
        data-netlify="true"
        data-netlify-honeypot="botfield"
        onSubmit={handleSubmit}
      >
        <input
          type="hidden"
          name="form-name"
          aria-hidden="true"
          value="contact"
        />
        <input
          style={{ display: "none" }}
          aria-hidden="true"
          name="botfield"
          value={botField}
          onChange={(e) => setBotField(e.target.value)}
        />
        <StyledLabel labelType="full name">
          <StyledInput
            type="text"
            value={fullName}
            name="fullname"
            placeholderType="full name"
            autoCorrect="off"
            autoComplete="name"
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <InputStatusIcon aria-hidden="true" />
        </StyledLabel>
        <StyledLabel labelType="email">
          <StyledInput
            type="email"
            value={email}
            name="email"
            placeholderType="email"
            title={INPUT_EMAIL_ERROR[locale]}
            pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputStatusIcon aria-hidden="true" />
        </StyledLabel>
        <StyledLabel labelType="message">
          <StyledTextArea
            rows="8"
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <InputTextAreaStatusIcon aria-hidden="true" />
        </StyledLabel>
        <PrivacyCheckbox
          type="checkbox"
          name="acceptsconsentcheckbox"
          value={checkboxValue}
          onChange={handleConsentCheckbox}
          locale={locale}
          required
        />

        {formSubmitted && (
          <EmailLoading
            showFormLoading={showFormLoading}
            showFormSuccess={showFormSuccess}
            showFormError={showFormError}
            formErrorRes={formErrorRes}
            locale={locale}
          />
        )}

        {!formSubmitted && <SubmitButton disabled={!acceptsConsentCheckbox} />}
      </StyledForm>
    </FormContainer>
  );
}
```

## Conclusiones

Añadir un formulario de contacto a una página web estática creada con Gatsby.js
fue bastante más fácil de lo que pensé.

Usando serivicios como Netlify, es relativamente fácil hacerlo y también puedes
cumplir con la RGPD.

Espero que te haya ayudado a aprender como puedes crear tu propio formulario en
tu web.

No dudes en dejar tu comentario más abajo si conoces algúna alternativa a usar
Netlify. De momento estoy contento con ellos, pero siempre se puede mejorar 🤔.
