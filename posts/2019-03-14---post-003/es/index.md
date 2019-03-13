---
title: "Como Añadir Publicaciones de Dribbble Usando React Hooks"
slug: "Como Añadir Publicaciones de Dribbble Usando React Hooks"
date: "2019-03-14"
category: "blog"
intro: "Las páginas webs estáticas creadas con Gatsby.js o Hugo són opciones muy buenas para tener un sitio optimizado que se puede desarollar fácilmente, pero poder tener un formulario de contacto funcional, no es tán facil.
|
Así es como yo conseguí implementar uno en la página."
snippet: "Como conseguí implementar un formulario de contacto en mi web estática y que otras opciones podrías considerar."
tags:
    - gatsby.js
posted: true
locale: "es"
twinPost: "How to Add Dribbble Shots with React Hooks"
---

## ¿Qué Opciones Tenemos Para las Webs Estáticas?

```jsx
    const postNode = this.props.data.markdownRemark;
    const postInfo = postNode.frontmatter;
    const twinPost = this.props.pageContext.twinPost;
    const introCopy = postInfo.intro.split("|");
    const locale = this.props.pageContext.locale;
    const nextTitle = this.props.pageContext.nextTitle;
    const nextSlug = this.props.pageContext.nextSlug;
    const prevSlug = this.props.pageContext.prevSlug;
    const prevTitle = this.props.pageContext.prevTitle;
```