---
title: "Como validar formularios en React con Formik y Styled Components"
slug: "validar formularios en react"
date: "2019-09-05"
category: "blog"
intro: "Crear y validar formularios en React puede llegar a ser bastante complejo. Tienes que encargarte de guardar los valores en el estado, de la validación de los datos y de mostrar los mensajes de error. Además, también tienes que gestionar el envío del formulario.
|
Afortunadamente, las librerías como Formik pueden ayudar a reducir la complejidad bastante para que puedas configurar un formulario mucho más rápido. Y esto es lo que aprenderás en este tutorial: cómo validar un formulario con Formik y aplicarle estilos con styled-components."
snippet: ""
tags:
  - formik
  - forms
  - styled-components
posted: true
locale: "es"
twinPost: "validate forms in react"
---

## La Solución Final

Si quieres aprender como crear el formulario de este tutorial sigue leyendo. Si quieres ver la solución final para investigar por ti mismo como funciona todo, puedes encontrar [una demo en Codesandbox](https://codesandbox.io/embed/react-formik-styled-components-demo-89dci) o el [repositorio en Github](https://github.com/danilucaci/react-formik-styled-components-demo).

## Configuración e Instalación

La manera más fácil de empezar es creando un nuevo proyecto desde 0 con create-react-app. Puedes hacerlo ejecutando en tu terminal `npx create-react-app <your-projects-name>` o solo `npx create-react-app .` para instalar todo en la carpeta actual, si esta vacia.

Después, tienes que instalar Formik, Yup (para la validación del formulario) y styled-components.

Para instalar todos los paquetes ejecuta el siguiente comando en tu terminal:

```bash
npm install formik yup styled-components
```

Una vez tienes todo instalado, puedes empezar ejecutando `npm start` en tu terminal.

## Creando el Formulario

Formik nos ofrece muchas opciones para controlar los formularios. Puedes usar todas las herramientas de ayuda incluidas con la librería —que es lo que yo hecho en este tutorial—, o puedes escribir todo a mano desde 0 y conectar el formulario y los sus campos de entrada de datos con los controladores de eventos de Formik.

Creo que la manera más fácil es usar todas las opciones de ayuda que nos ofrece porque ayuda a reducir mucho la complejidad de gestionar un formulario.

Para empezar, tienes que importar los componentes de Formik que necesitarás para renderizar el formulario y los campos de entrada de datos.

```jsx
import { Formik, Field, Form, ErrorMessage } from "formik";
```

Lo más básico que necesitas para empezar es usar el componente `<Formik />` que se encarga de controlar la validación de los datos y el envío del formulario. Después, necesitarás los componentes `<Form />` y `<Field />` para renderizar el formulario y sus campos.

```jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function App() {
  return (
    <div>
      <h1>React form validation with formik and styled components</h1>
      <Formik
        initialValues={{
          fullname: "",
          email: "",
        }}
        validationSchema={Yup.object().shape({
          fullname: Yup.string()
            .min(2, "Your name is too short")
            .required("Please enter your full name"),
          email: Yup.string()
            .email("The email is incorrect")
            .required("Please enter your email"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const timeOut = setTimeout(() => {
            console.log(values);
            setSubmitting(false);

            clearTimeout(timeOut);
          }, 1000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          validating,
          valid,
        }) => {
          return (
            <Form name="contact" method="post" onSubmit={handleSubmit}>
              <label htmlFor="fullname">
                Fullname
                <Field
                  type="text"
                  name="fullname"
                  autoComplete="name"
                  placeholder="your fullname"
                />
              </label>
              {errors.fullname && touched.fullname && <p>{errors.fullname}</p>}
              <label htmlFor="email">
                Email
                <Field
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="your email"
                />
              </label>
              <ErrorMessage name="email">{(msg) => <p>{msg}</p>}</ErrorMessage>
              <button type="submit" disabled={!valid || isSubmitting}>
                {isSubmitting ? `Submiting...` : `Submit`}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
```

Con esto, tenemos lo básico para empezar a crear un formulario de contacto creado con Formik y React. Pero primero, vamos a ver que tenemos hasta ahora.

```jsx
<Formik
  initialValues={{
    fullname: "",
    email: "",
  }}
  validationSchema={Yup.object().shape({
    fullname: Yup.string()
      .min(2, "Your name is too short")
      .required("Please enter your full name"),
    email: Yup.string()
      .email("The email is incorrect")
      .required("Please enter your email"),
  })}
  onSubmit={(values, { setSubmitting }) => {
    const timeOut = setTimeout(() => {
      console.log(values);
      setSubmitting(false);

      clearTimeout(timeOut);
    }, 1000);
  }}
>
...
```

`initialValues` es un objeto que guarda todos los valores iniciales de los campos del formulario. En este ejemplo, estos son `fullname` y `email`, pero puedes añadir los que necesites.

`validationSchema` es un objeto que guarda el esquema de validación de Yup que hemos definido con todas las reglas de validación de cada campo del formulario.

En este caso, tenemos un campo llamado `fullname` de tipo texto con una longitud mínima de 2 caracteres que también es un campo requerido. Hemos definido estos requisitos usando los métodos `Yup.string()`.

Si quieres ver todas las opciones que el validador de esquemas Yup tiene, puedes [leer su documentación](https://github.com/jquense/yup). Finalmente, el controlador de eventos `onSubmit` se usa para controlar el envío del formulario.

El componente Formik usa el método _render props_ para renderizar el formulario y los campos de este. Devuelve varias variables y controladores de eventos que podemos añadir al formulario HTML para controlarlo. Para hacerlo solo tienes que añadir los controladores de eventos `onSubmit` y `onChange` proporcionados por Formik, y usar el componente Field en vez de los elementos HTML del tipo input.

Después, una vez el usuario comience a introducir datos, se ejecutará la validación de los datos en cada campo.

## Añadiendo Estilos al Formulario

Hasta ahora podemos renderizar el formulario y sus campos, pero aun no hemos añadido los estilos. Puedes usar tus estilos CSS si lo prefieres, pero si quieres seguir con el tutorial copia estos estilos que he usado yo, en un nuevo archivo llamado `styles.js` e importalo en el fichero `App.js`

Una vez hecho esto, tu fichero `styles.js` debería ser como el siguiente:

```css
import styled, { css } from "styled-components";
import { Field } from "formik";

export const PageWrapper = styled.section`
  &,
  & * {
    box-sizing: border-box;
    display: block;
  }

  hr {
    display: block;
    border: none;
    border-top: 1px solid lightgrey;

    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  font-family: system-ui;
  font-size: 1rem;
  line-height: 1.5rem;
  max-width: 35em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem;
  padding: 1rem 0.75rem;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

export const CodeWrapper = styled.pre`
  font-family: monospace;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: hsl(210, 4%, 96%);
  overflow: auto;
  padding: 0.75rem;
  margin: 0;
  border-radius: 4px;

  & strong {
    margin-top: 1.5rem;

    &:first-child {
      margin-top: 0;
    }
  }
`;

export const Title = styled.h1`
  font-size: 1rem;
  line-height: 1.25rem;
  margin-top: 0;
`;

export const Label = styled.label`
  margin-top: 1.5rem;
  width: 100%;
`;

export const Input = styled(Field)`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 0.75rem;

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px, rgb(227, 230, 232) 0px 0px 0px
        3px;
    border: 1px solid rgb(26, 33, 43);
    outline: none;
  }

  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  }

  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid rgb(0, 156, 38);

      &:focus,
      &:active {
        border: 1px solid rgb(0, 156, 38);
        box-shadow: rgb(106, 237, 97) 0px 0px 2px 1px, rgb(177, 247, 160) 0px 0px
            0px 3px;
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(0, 156, 38);
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px, rgb(251, 178, 174) 0px 0px
            0px 3px;
        border: 1px solid rgb(191, 49, 12);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(191, 49, 12);
      }
    `}
`;

export const StyledInlineErrorMessage = styled.div`
  background-color: rgb(255, 245, 245);
  color: rgb(120, 27, 0);
  display: block;

  padding: 0.5rem 0.75rem;
  margin-top: 0.5rem;
  white-space: pre-line;
`;

export const Submit = styled.button`
  width: 100%;
  margin-top: 1.5rem;

  background-color: rgb(24, 81, 187);
  display: block;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 700;
  height: 3rem;
  white-space: nowrap;
  color: rgb(232, 243, 255) !important;
  padding: 0.5rem 1rem;

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    color: rgb(255, 255, 255) !important;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`;
```

Y el archivo `App.js` debería ser como este:

```jsx{9,13}
import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  PageWrapper,
  Title,
  Label,
  Input,
  StyledInlineErrorMessage,
  Submit,
  CodeWrapper,
} from "./styles";

function App() {
  const [formValues, setFormValues] = useState();

  return (
    <PageWrapper>
      <Title>
        React form validation with formik and styled components demo
      </Title>
      <hr />
      <Formik
        initialValues={{
          fullname: "",
          email: "",
        }}
        validationSchema={Yup.object().shape({
          fullname: Yup.string()
            .min(2, "Your name is too short")
            .required("Please enter your full name"),
          email: Yup.string()
            .email("The email is incorrect")
            .required("Please enter your email"),
        })}
        onSubmit={(values, actions) => {
          console.log(values);
          setFormValues(values);

          const timeOut = setTimeout(() => {
            actions.setSubmitting(false);

            clearTimeout(timeOut);
          }, 1000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          validating,
          valid,
        }) => {
          return (
            <>
              <Form name="contact" method="post" onSubmit={handleSubmit}>
                <Label htmlFor="fullname">
                  Fullname
                  <Input
                    type="text"
                    name="fullname"
                    autoCorrect="off"
                    autoComplete="name"
                    placeholder="your fullname"
                    valid={touched.fullname && !errors.fullname}
                    error={touched.fullname && errors.fullname}
                  />
                </Label>
                {errors.fullname && touched.fullname && (
                  <StyledInlineErrorMessage>
                    {errors.fullname}
                  </StyledInlineErrorMessage>
                )}
                <Label htmlFor="email">
                  Email
                  <Input
                    type="email"
                    name="email"
                    autoCapitalize="off"
                    autoCorrect="off"
                    autoComplete="email"
                    placeholder="your email"
                    valid={touched.email && !errors.email}
                    error={touched.email && errors.email}
                  />
                </Label>
                <ErrorMessage name="email">
                  {(msg) => (
                    <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                  )}
                </ErrorMessage>
                <Submit type="submit" disabled={!valid || isSubmitting}>
                  {isSubmitting ? `Submiting...` : `Submit`}
                </Submit>
              </Form>

              <hr />
              <CodeWrapper>
                <strong>Errors:</strong> {JSON.stringify(errors, null, 2)}
                <strong>Touched:</strong> {JSON.stringify(touched, null, 2)}
                {formValues && <strong>Submitted values:</strong>}
                {JSON.stringify(formValues, null, 2)}
              </CodeWrapper>
            </>
          );
        }}
      </Formik>
    </PageWrapper>
  );
}

export default App;
```

Los principales cambios que hemos hecho han sido usar un componente llamado `<Input />` que es el componente `<Field />` de Formik, pero con estilos aplicados con styled-components. Además, ahora lo importamos del fichero `styles.js` en vez de la librería Formik como antes.

## Mostrando Mensajes de Estado

Para mostrar los mensajes de error, la librería Formik nos ofrece varias maneras de hacerlo.

Primero, puedes usar el componente `<ErrorMessage />` que espera un atributo `name` con el valor de un campo existente en el formulario. Este atributo tiene que ser igual al que hemos usado en el formulario, en el objecto de valores iniciales y en el de validación proporcionado a Yup.

```jsx
<ErrorMessage name="email">
  {(msg) => <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>}
</ErrorMessage>
```

La otra manera de hacerlo es usar el objeto `errors` devuelto por el componente `<Formik />` en los _render props_.

```jsx
{
  errors.fullname && touched.fullname && (
    <StyledInlineErrorMessage>{errors.fullname}</StyledInlineErrorMessage>
  );
}
```

Con estos cambios, ahora estamos mostrando los mensajes de error si la validación no se cumple en algúno de los campos del formulario.

Además, para cambiar los estilos de los campos cuando son validos o no, usamos las variables tipo _prop_ enviadas a styled-components para cambiar los estilos CSS.

```jsx
<Label htmlFor="fullname">
  Fullname
  <Input
    type="text"
    name="fullname"
    autoCorrect="off"
    autoComplete="name"
    placeholder="your fullname"
    valid={touched.fullname && !errors.fullname}
    error={touched.fullname && errors.fullname}
  />
</Label>
```

Después, dentro del componente styled-components podemos cambiar los estilos cuando los valores `valid` o `error` sean `true`.

```css
${({ error }) =>
  error &&
  css`
    border: 1px solid rgb(191, 49, 12);
    outline: none;

    &:focus,
    &:active {
      box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px,
        rgb(251, 178, 174) 0px 0px 0px 3px;
      border: 1px solid rgb(191, 49, 12);
      outline: none;
    }

    /* Autocomplete styles in Chrome*/
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border: 1px solid rgb(191, 49, 12);
    }
`}
```

Estos estilos CSS solo cambian el color de los bordes y el valor de los `box-shadow` para que sea más obvio para el usuario cuando el campo sea valido o no.

Pero si intentas introducir algún valor en los campos, verás el siguiente error en la consola de tu navegador:

```jsx
index.js:1375 Warning: Received `true` for a non-boolean attribute `valid`.

If you want to write it to the DOM, pass a string instead: valid="true" or valid={value.toString()}.
in input (created by FieldInner)
in FieldInner (created by Context.Consumer)
in FormikConnect(FieldInner) (created by Context.Consumer)
```

## Filtrando Campos Que No Son Atributos Estándar HTML

Este error ocurre porque cuando usamos la sintaxis `styled.div`, styled-components solo pasa a los componentes los atributos HTML estándar. Pero cuando se utiliza la sintaxis `styled(ComponentName)`, pasa todos los atributos, incluso si no son atributos HTML válidos. Es por eso por lo que React nos advierte que estamos pasando atributos no válidos al elemento DOM.

Para solucionarlo, podemos usar un componente intermedio que he llamado `<FilteredPropsInputField />`(no se me ocurrió un nombre mejor 🤷‍♂️) que captura todos los atributos pasados y solo muestra en el nodo DOM los que sean atributos HTML válidos.

```jsx
import React from "react";
import { Field } from "formik";

function FilteredPropsInputField({ className, valid, error, ...props }) {
  return <Field className={className} {...props} />;
}

export default FilteredPropsInputField;
```

En nuestro caso, dado que solo estamos pasando los atributos `valid` y`error` que no sean atributos HTML estándar, los desestructuramos junto con el `className` y los demás atributos recibidos. Luego, solo adjuntamos `className` y `props` al componente `Field` para que no reciba ningún atributo que no forme parte del estándar HTML.

Ahora, en lugar de usar un componente `styled(Field)` en el archivo `styles.js`, usamos uno llamado `styled(FilteredPropsInputField)`.

```jsx
import FilteredPropsInputField from "./FilteredPropsInputField";
...

export const Input = styled(FilteredPropsInputField)`
  background-color: white;
  border: 1px solid lightgrey;
  ...

  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid rgb(0, 156, 38);
      ...

  ${({ error }) =>
    error &&
    css`
      border: 1px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        ...
```

Con estos cambios, ahora tenemos un formulario creado con Formik y styled-components 🎉.

## Conclusiones

Ahora tu también deberías poder crear tu formulario en React fácilmente. Cuando empecé a crear el formulario de contacto de esta página no estaba seguro del todo como usar todos los componentes de la librería Formik. Lo que más me costo fue entender como puedo validar cada campo del formulario individualmente cuando tengan un error de validación o sean validos y no estaba seguro del todo como hacerlo. Pero una vez entendí como combinar los estilos de styled-components con el componente usado para eliminar los atributos no estándar HTML, fue bastante fácil crear el formulario.
