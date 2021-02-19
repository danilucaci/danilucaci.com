---
title: "How to Validate Forms in React with Formik and Styled Components"
slug: "validate forms in react"
date: "2019-09-05"
category: "blog"
intro:
  "Creating and validating forms in React can get pretty complicated. You need
  to save the values in state, handle input validation and error messages, and
  also control the form submission. Fortunately, libraries such as Formik can
  help reduce the complexity so that you can set-up your form much faster. This
  is what you’ll learn in this tutorial: how to validate a form with Formik and
  style it with Styled Components."
snippet: ""
tags:
  - formik
  - forms
  - styled-components
posted: true
locale: "en"
twinPost: "validar formularios en react"
---

## The solution

If you’d like to lean how to build the form in this tutorial keep reading,
otherwise feel free to dig into the code. You can find the
[live version on codesandbox](https://codesandbox.io/embed/react-formik-styled-components-demo-89dci)
and the
[repo on Github](https://github.com/danilucaci/react-formik-styled-components-demo).

## Setup and Instalation

The easiest way to get started is to create a new project with create react app.
You can do so by running in your terminal
`npx create-react-app <your-projects-name>` or just `npx create-react-app .` to
install everything in your current folder, if it is empty.

Then, you need to install Formik, Yup (for handling the form validation) and
styled-components.

To install them simply run these commands in your terminal:

```bash
npm install formik yup styled-components
```

Once you have installed everything, you can run `npm start` to start the
development server.

## Creating the Form

Formik gives you many options to control the forms in your app. You could either
use all the helpers included with the library —which is what I will do in this
tutorial—, or you can write everything yourself and connect the input fields and
form to the Formik methods and event handlers.

I think that the easiest way is to use the helpers it offers because that way
you can abstract away much of the complexity.

To get started, you need to import the Formik components used to render the form
and inputs.

```jsx
import { Formik, Field, Form, ErrorMessage } from "formik";
```

The basic boilerplate is that we need to use the `<Formik />` component that
handles the form validation and submission. Then, we use the `<Form />` and
`<Field />` components to render the form and the input elements.

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

With this, we have a basic boilerplate of a contact form made with Formik and
React, but first, let’s see what we have so far.

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

`initialValues` is an object that stores the values the input fields of the form
will have initially. In this example, they are `fullname` and `email` (you can
add as many as you’d like).

`validationSchema` is an object that holds the Yup validation schema defined
that represents the validation rules for each of the input fields of the form.

In this case, we have a `fullname` text field with a minimum length of 2
characters that is also required. We defined these requirements by using the
`Yup.string()` methods. If you’d like to see all the other methods available on
the Yup schema validator you can
[read their docs](https://github.com/jquense/yup). Finally, the `onSubmit` event
handler is used to control the submission of the form

The Formik components use a render props approach to render the form and input
fields. It returns several boolean values and event handlers which you can use
to control the form.

You just need to connect the regular form `onSubmit` event to the `onChange`
handler provided by Formik, and to use the Field component instead of the
regular HTML input element.

Then, once the user starts typing, the validation be executed on each of the
fields.

## Styling the Form

So far we can render the form and its elements but we still need to style it.
You can use your CSS, but if you’d like to follow along with the tutorial copy
these styles in a new `styles.js` file and import in the `App.js` file.

Your `styles.js` file should look like this:

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

And the `App.js` file should look like this:

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

The main changes are that we are now using a `<Input />` component which is just
the `<Field />` component from Formik but wrapped with Styled Components so that
we can add our styles to it. We are also importing it from the `styles.js` file
and not from the Formik library as before.

## Displaying Error Messages

In order to display the error messages when the validation fails, Formik gives
you several ways to do it. First, you can use the `<ErrorMessage />` component
which expects a `name` prop that holds the name of the input element in the
form. This name has to match the name provided to the validation schema and
initial values object.

```jsx
<ErrorMessage name="email">
  {(msg) => <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>}
</ErrorMessage>
```

The other way is to use the `errors` object returned by the `<Formik />`
component from the render props.

```jsx
{
  errors.fullname && touched.fullname && (
    <StyledInlineErrorMessage>{errors.fullname}</StyledInlineErrorMessage>
  );
}
```

With this, we are now displaying the error messages if the validation fails for
any of the input fields.

To also change the styling of the input field we are passing in an `valid` and
an `error` prop to styled-components to change the CSS.

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

Then, inside the styled-component component we can change the CSS when the
`valid` or `error` props are set to `true`.

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

These CSS styles just change the border color and the `box-shadow` so that it is
more obvious to the user that the value entered is incorrect.

However, if you type any value in the input fields you will receive the
following error in the console:

```jsx
index.js:1375 Warning: Received `true` for a non-boolean attribute `valid`.

If you want to write it to the DOM, pass a string instead: valid="true" or valid={value.toString()}.
in input (created by FieldInner)
in FieldInner (created by Context.Consumer)
in FormikConnect(FieldInner) (created by Context.Consumer)
```

## Filtering Props That Are Not Known HTML Attributes

This error happens because when using the `styled.div` syntax, styled-components
only passes through known HTML attributes. However, when using the
`styled(ComponentName)` syntax, it passes through all props, even if they are
not valid HTML attributes. This is why React warns us that we are passing
invalid attributes to the DOM element.

To solve this we can use an intermediate component which I called
`<FilteredPropsInputField />` (best name I could come up with 🤷‍♂️) which captures
all the props passed and only renders on the DOM node the valid attributes.

```jsx
import React from "react";
import { Field } from "formik";

function FilteredPropsInputField({ className, valid, error, ...props }) {
  return <Field className={className} {...props} />;
}

export default FilteredPropsInputField;
```

In our case since we are only passing in `valid` and `error` as props that are
not HTML attributes, we destructure them along with the `className` and other
props. Then, we only attach the `className` and `props` to the `Field` component
so that it doesn’t receive any props that are not known HTML attributes.

Now, rather than using a `styled(Field)` component in the `styles.js` file, we
use a `styled(FilteredPropsInputField)`.

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

With these changes, we now have a working form made with Formik and styled with
styled-components 🎉.

## Takeaways

Now you should also be able to set-up your form in React with ease. When I
started working on the contact form on this site, I wasn’t sure how to use all
the components in the Formik library. The most challenging part for me was
understanding how I can validate each input field individually. I wanted to
style each of them according to their current state, but I wasn’t sure how to.
Then, once I understood how to mix styled-components and the component that
filtered the non-standard HTML attributes it was pretty easy to set-up.
