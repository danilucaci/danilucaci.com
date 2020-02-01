---
title: "React + Firebase Todo App"
slug: "react firebase todo app"
snippet:
  "A todo app built with React.js and Firebase that was designed and developed
  with a strong focus on accessibility and user interaction."
date: "2020-01-20"
category: "work"
tags:
  - Front-End Development
  - Firebase
  - Personal Project
posted: true
pageImage: "./todos_app_presentation.png"
cardImage: "./todos_app_card_presentation.png"
locale: "en"
twinPost: "aplicacion tareas react firebase"
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

## Overview

This app was built to further improve my front-end development skills and to
continue learning how to design and develop a modern javascript application made
with React.js since I believe that the best way to learn a new skill is by
doing.

Furthermore, I also wanted to learn how to build a React.js app that was
accessible, so accessibility was a top priority during the entire design and
development cycle.

</StyledCol>
<OverviewInfoCol xl={6}>
<OverviewInfoItem>

### My Role

- UI Design
- Front-End Development
- Back-End Development

</OverviewInfoItem>
<OverviewInfoItem>

### Tools Used

- React.js
- Redux
- Firebase
- Figma

</OverviewInfoItem>
<OverviewInfoItem>

### Links

- [Github Repository](https://github.com/danilucaci/dl-react-redux-firebase-todo-app)
- [Figma Design System](https://www.figma.com/file/nuc3EnIKE3aEyGEjyJiLRD/Todo-app)
- [Visit App](https://todos.danilucaci.com/)

</OverviewInfoItem>

<OverviewInfoItem>

### Project Type

- Personal Project

</OverviewInfoItem>

</OverviewInfoCol>
</OverviewRow>

<AltRowBackground padded spaced as="div">
<Row col8 as="div">
<StyledCol>

## Solution

<Video
  caption="Demo of using the app with the Voice Over screen reader."
  posterSrc="todos-app/en/todos_app_videos_poster.jpg"
  webmSrc="todos-app/en/todos_app_accessibility_video.webm"
  mp4Src="todos-app/en/todos_app_accessibility_video.mp4"
  gifSrc="todos-app/en/todos_app_accessibility_video.gif"
  gifBrowserSupport="Your browser does not support HTML5 video."
  gifAlt="View the GIF version of the demo of using the app with the Voice Over screen reader."
  videoWidth={1024}
  videoHeight={768}
  expand
/>

<Video
  caption="Demo of the main features of the app."
  posterSrc="todos-app/en/todos_app_videos_poster.jpg"
  webmSrc="todos-app/en/todos_app_using_app_video.webm"
  mp4Src="todos-app/en/todos_app_using_app_video.mp4"
  gifSrc="todos-app/en/todos_app_using_app_video.gif"
  gifBrowserSupport="Your browser does not support HTML5 video."
  gifAlt="View the GIF version of the demo of the main features of the app."
  videoWidth={1024}
  videoHeight={768}
  expand
/>

</StyledCol>

</Row>
</AltRowBackground>

<Row col8 spaced as="div">
<StyledCol>

## Tech Stack

My main goal for this project was to learn how to build a modern React.js app,
so the obvious choice at the time was to integrate React with Redux for state
management. However, I still needed a database and back-end, so I decided to use
Firebase since it provided everything I needed for this project: a powerful
authentication system, an easy to use database service, and the power of Cloud
Functions that allowed me to have any back-end service I needed without having
the build a physical server myself.

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

<StyledSubhead>Design</StyledSubhead>

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

## App features

The main features of the app are designed to allow users to easily add todos and
organize them into projects or to tag them with labels. Therefore, each task can
belong to a single project and can have many labels assigned. Users can also add
due dates to each task to see which tasks need to be done first.

</StyledCol>
</Row>

<ImageRow col12 spaced reverse as="div">
<Col l={5}>
<ImageCopy reverse>

### Projects

Users can organize their tasks into projects to keep track of all the work they
need to get done. Each task could belong to a single project or to the default
Inbox project that contained any tasks that aren’t part of any project.

</ImageCopy>
</Col>

<ImageCol reverse l={7}>
<Image
  src="todos-app/en/todos_app_projects.png"
  caption="Projects feature of the todos app."
  noShadow
  ariaOnlyCaption
/>
</ImageCol>
</ImageRow>

<ImageRow col12 spaced as="div">
<Col l={5}>
<ImageCopy>

### Due dates

Users can add due dates to each task using the date picker that also has an
integrated time picker to allow them to set the time for when the tasks should
be done.

</ImageCopy>
</Col>

<ImageCol l={7}>
<Image
  src="todos-app/en/todos_app_due_dates.png"
  caption="Add due dates feature of the todos app."
  noShadow
  ariaOnlyCaption
/>
</ImageCol>
</ImageRow>

<ImageRow col12 spaced reverse as="div">
<Col l={5}>
<ImageCopy reverse>

### Add new todos

Users can easily add new todos and assign them to a project or tag them with
labels. Each task can also have an optional due date or time.

</ImageCopy>
</Col>

<ImageCol reverse l={7}>
<Image
  src="todos-app/en/todos_app_add_todo.png"
  caption="Add todos and assign them to projects or labels."
  noShadow
  ariaOnlyCaption
/>
</ImageCol>
</ImageRow>

<ImageRow col12 spaced as="div">
<Col l={5}>
<ImageCopy>

### Search todos

Users can find their todos by using the search feature of the app if they don’t
remember which project a todo belongs to. Once they select a todo from the
dropdown, they will be redirected to the project where the todo is located.

</ImageCopy>
</Col>

<ImageCol l={7}>
<Image
  src="todos-app/en/todos_app_search.png"
  caption="Searching feature of the todos app."
  noShadow
  ariaOnlyCaption
/>
</ImageCol>
</ImageRow>

<AltRowBackground padded spaced as="div">
<Row col8 as="div">
<StyledCol>

## Lessons learned

Since this was my first large project built with React, I started with little
understanding of how it worked but now I can write custom Hooks for state
management, UI interactions, API calls or even custom hooks, such as
`useThunk()` or `useLogger()`, that emulate Redux features. You can see the
custom hooks I built for this project in the
[Github repo](https://github.com/danilucaci/dl-react-redux-firebase-todo-app/tree/master/src/hooks).

I also learned how to work with an advanced state management library like Redux,
but I would probably use custom hooks combined with the Context API for my next
React projects. If you’d like to see how I used custom hooks and the Context API
for state management in a React app, feel free to take a look at the
[repo of a demo project](https://github.com/danilucaci/dl-apollo-express-mongodb-shop-rest-client)
I made.

Besides that, I also enjoyed working on this project because I could learn how
to make a React app accessible so that users could use it with their keyboard.
Moreover, I also learned the basics of how to use a screen reader to validate my
solutions and to experience first hand what it is like to use a React app with a
screen reader.

Finally, I also learned how to work with the cloud services provided by Firebase
for authentication, Firestore database integration, and Cloud Functions, which
also allowed me to improve my understanding of how to use ES6 async functions,
Promises and how the Javascript Event Loop integrates them into the Micro Task
queue.

</StyledCol>
</Row>
</AltRowBackground>
