---
title: "Aplicación de tareas en React y Firebase"
slug: "aplicación tareas react firebase"
snippet:
  "Una aplicación de tareas creada con React.js y Firebase diseñada y
  desarrollada con un fuerte enfoque en la accesibilidad y la interacción del
  usuario."
date: "2020-01-20"
category: "work"
tags:
  - Front-End Development
  - Firebase
  - Proyecto Personal
posted: true
pageImage: "./aplicacion_tareas_presentacion.png"
cardImage: "./aplicacion_tareas_card_presentacion.png"
locale: "es"
twinPost: "react firebase todo app"
---

import Image from "components/Image/Image";

import Video from "components/Video/Video";

import { Row, Col } from "components/Grid/Grid";

import { OverviewRow, OverviewInfoCol, OverviewInfoItem, } from
"styles/caseStudy.styles";

import { StyledCol, AltRowBackground, TechStackRow, TechStackCol, StyledSubhead,
ImageRow, ImageCol, ImageCopy } from "../todosApp.styles";

<OverviewRow spaced col12 as="div">
<StyledCol xl={5}>

## Introducción

Esta aplicación ha sido creada para mejorar mis habilidades de desarrollo
front-end y para continuar aprendiendo cómo diseñar y desarrollar una aplicación
javascript moderna con React.js ya que creo que la mejor manera de aprender una
nueva habilidad es practicando.

Además, también quería aprender cómo crear una aplicación React.js que fuera
accesible, por lo que la accesibilidad ha sido una prioridad durante todo el
ciclo de diseño y desarrollo.

</StyledCol>
<OverviewInfoCol xl={6}>
<OverviewInfoItem>

### Mi Rol

- Diseño UI
- Desarrollo Front-End
- Desarrollo Back-End

</OverviewInfoItem>
<OverviewInfoItem>

### Herramientas Utilizadas

- React.js
- Redux
- Firebase
- Figma

</OverviewInfoItem>
<OverviewInfoItem>

### Enlaces

- [Repositorio en Github](https://github.com/danilucaci/dl-react-redux-firebase-todo-app)
- [Figma Design System](https://www.figma.com/file/nuc3EnIKE3aEyGEjyJiLRD/Todo-app)
- [Visitar Aplicación](https://todos.danilucaci.com/)

</OverviewInfoItem>

<OverviewInfoItem>

### Tipo de Proyecto

- Proyecto Personal

</OverviewInfoItem>

</OverviewInfoCol>
</OverviewRow>

<AltRowBackground padded spaced as="div">
<Row col8 as="div">
<StyledCol>

## Solución

<Video
  caption="Demostración de como usar la aplicación con el lector de pantalla Voice Over."
  posterSrc="todos-app/es/aplicacion_tareas_videos_poster.jpg"
  webmSrc="todos-app/es/aplicacion_tareas_video_accesibilidad.webm"
  mp4Src="todos-app/es/aplicacion_tareas_video_accesibilidad.mp4"
  gifSrc="todos-app/es/aplicacion_tareas_video_accesibilidad.gif"
  gifBrowserSupport="Su navegador no soporta video HTML5."
  gifAlt="Ver el GIF de la demostración de como usar la aplicación con el lector de pantalla Voice Over."
  videoWidth={1024}
  videoHeight={768}
  expand
/>

<Video
  caption="Demostración de las características principales de la aplicación."
  posterSrc="todos-app/es/aplicacion_tareas_videos_poster.jpg"
  webmSrc="todos-app/es/aplicacion_tareas_video_usando_aplicacion.webm"
  mp4Src="todos-app/es/aplicacion_tareas_video_usando_aplicacion.mp4"
  gifSrc="todos-app/es/aplicacion_tareas_video_usando_aplicacion.gif"
  gifBrowserSupport="Su navegador no soporta video HTML5."
  gifAlt="Ver el GIF de la demostración de las características principales de la aplicación."
  videoWidth={1024}
  videoHeight={768}
  expand
/>

</StyledCol>

</Row>
</AltRowBackground>

<Row col8 spaced as="div">
<StyledCol>

## Tecnologías Utilizadas

Mi objetivo principal para este proyecto era aprender cómo desarrollar una
aplicación moderna con React.js, por tanto, la opción obvia en ese momento era
integrar React con Redux para gestionar el estado de la aplicación. Sin embargo,
todavía necesitaba una base de datos y un _back-end_, así que decidí usar
Firebase ya que ofrecía todo lo que necesitaba para este proyecto: un poderoso
sistema de autenticación, un servicio de base de datos fácil de usar y el poder
de las _Cloud Functions_ que facilita la implementación de cualquier servicio de
_back-end_ que pueda necesitar sin tener que implementar un servidor físico.

</StyledCol>

<Col>
<TechStackRow>
<TechStackCol>

<StyledSubhead>Frond-End</StyledSubhead>

- React.js
- Redux.js
- Sass
- Algolia Search
- react-day-picker
- downshift.js

</TechStackCol>
<TechStackCol>

<StyledSubhead>Back-End</StyledSubhead>

- Firebase
- Firestore
- Cloud Functions
- Express.js

</TechStackCol>
<TechStackCol>

<StyledSubhead>Testing</StyledSubhead>

- React Testing Library
- Jest

</TechStackCol>
<TechStackCol>

<StyledSubhead>Diseño</StyledSubhead>

- Figma
- Unicons

</TechStackCol>
<TechStackCol>

<StyledSubhead>Hosting</StyledSubhead>

- Netlify

</TechStackCol>

</TechStackRow>
</Col>

</Row>

<Row col8 spaced as="div">
<StyledCol>

## Características de la Aplicación

Las características principales de la aplicación han sido diseñadas para
permitir que los usuarios puedan agregar fácilmente tareas y organizarlas en
proyectos o añadirles etiquetas. Por tanto, cada tarea puede pertenecer a un
solo proyecto y puede tener varias etiquetas asignadas. Además, los usuarios
pueden añadir fechas de vencimiento a cada tarea para ver qué tareas deben
completarse primero.

</StyledCol>
</Row>

<ImageRow col12 spaced reverse as="div">
<Col l={5}>
<ImageCopy reverse>

### Proyectos

Los usuarios pueden organizar sus tareas en proyectos para realizar un
seguimiento de todo el trabajo que tienen pendiente. Cada tarea puede pertenecer
a un solo proyecto o al proyecto predeterminado de bandeja de entrada _Inbox_
que contiene cualquier tarea que no forma parte de un proyecto personalizado.

</ImageCopy>
</Col>

<ImageCol reverse l={7}>
<Image
  src="todos-app/es/aplicacion_tareas_proyectos.png"
  caption="Pantalla de proyectos en la aplicación de tareas."
  noShadow
  ariaOnlyCaption
/>
</ImageCol>
</ImageRow>

<ImageRow col12 spaced as="div">
<Col l={5}>
<ImageCopy>

### Fechas de Vencimiento

Los usuarios pueden añadir fechas de vencimiento a cada tarea utilizando el
selector de fechas que también dispone de un selector de tiempo integrado para
permitir que los usuarios puedan establecer la fecha y hora de vencimiento de
cada tarea.

</ImageCopy>
</Col>

<ImageCol l={7}>
<Image
  src="todos-app/es/aplicacion_tareas_fechas_final_tareas.png"
  caption="Cómo añadir fechas de vencimiento a las tareas en la aplicación de tareas."
  noShadow
  ariaOnlyCaption
/>
</ImageCol>
</ImageRow>

<ImageRow col12 spaced reverse as="div">
<Col l={5}>
<ImageCopy reverse>

### Añadir Nuevas Tareas

Los usuarios pueden agregar fácilmente tareas nuevas y asignarlas a un proyecto
o añadirles etiquetas. Cada tarea también puede tener una fecha u hora de
vencimiento opcional.

</ImageCopy>
</Col>

<ImageCol reverse l={7}>
<Image
  src="todos-app/es/aplicacion_tareas_anadir_tareas.png"
  caption="Cómo añadir nuevas tareas y asignarlas a un proyecto o etiqueta."
  noShadow
  ariaOnlyCaption
/>
</ImageCol>
</ImageRow>

<ImageRow col12 spaced as="div">
<Col l={5}>
<ImageCopy>

### Búsqueda de Tareas

Los usuarios pueden encontrar sus tareas utilizando la función de búsqueda de la
aplicación en caso de que no recuerden a qué proyecto pertenece alguna de ellas.
Despúes, una vez seleccionada en el menú desplegable, serán redirigidos al
proyecto donde se encuentra.

</ImageCopy>
</Col>

<ImageCol l={7}>
<Image
  src="todos-app/es/aplicacion_tareas_busqueda.png"
  caption="Búsqueda de tareas en la aplicación de tareas."
  noShadow
  ariaOnlyCaption
/>
</ImageCol>
</ImageRow>

<AltRowBackground padded spaced as="div">
<Row col8 as="div">
<StyledCol>

## Lecciones Aprendidas

Puesto que este fue mi primer proyecto de más complejidad creado con React.js,
comencé con relativamente pocos conocimientos de cómo funcionaba, pero ahora
puedo crear _Hooks_ personalizados para la gestión del estado, interacciones con
la interfaz de usuario, llamadas a API’s o incluso _Hooks_ personalizados, como
`useThunk()` o `useLogger()`, que emulan funciones de Redux. Puedes ver los
_Hooks_ personalizados que cree para este proyecto en el
[repositorio de Github](https://github.com/danilucaci/dl-react-redux-firebase-todo-app/tree/master/src/hooks).

Por otro lado, también aprendí a trabajar con una biblioteca de administración
de estado avanzada como Redux, pero probablemente usaría _Hooks_ personalizados
combinados con la API de _Context_ para mis próximos proyectos con React. Si
quieres ver cómo usar _Hooks_ personalizados y la _Context_ API para la gestión
del estado en una aplicación React, puedes ver algunos ejemplos en el
[repositorio de un proyecto de demostración](https://github.com/danilucaci/dl-apollo-express-mongodb-shop-rest-client)
que he creado.

Además, también disfruté trabajando en este proyecto porque he podido aprender
cómo conseguir que una aplicación en React.js sea accesible para que los
usuarios puedan usarla con su teclado. Además, también aprendí los conceptos
básicos de cómo usar un lector de pantalla para validar mi soluciones y
experimentar de primera mano como es usar una aplicación en JavaScript con un
lector de pantalla.

Finalmente, también aprendí a trabajar con los servicios en la nube
proporcionados por Firebase para autenticación, integración de la base de datos
de Firestore y Cloud Functions, lo cual también me permitió mejorar mi
comprensión de cómo usar las funciones asíncronas de ES6, las _Promise_ y cómo
el _Event Loop_ de JavaScript las integra en la _Micro Task Queue_.

</StyledCol>
</Row>
</AltRowBackground>
