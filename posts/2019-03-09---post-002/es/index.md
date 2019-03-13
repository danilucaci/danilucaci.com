---
title: "Como Crear Gif's Más Ligeros Para Navegadores Modernos"
slug: "Como Crear Gifs Más Ligeros Para Navegadores Modernos"
date: "2019-03-09"
category: "blog"
intro: "Hoy en día, poder compartir un Gif en una página web es prácticamente una necesidad, sobretodo para un diseñador UI como yo. 
|
Pero normalmente pesan unos cuantos megabytes cada uno y las facturas de los visitantes podrían sufrir. Gracias a algoritmos de compresión modernos, podemos conseguir Gifs que pesan hasta un 80% menos."
snippet: "Como usar algoritmos de compresión modernos para reducir el peso de los Gifs en hasta un 80%."
tags:
    - perfmatters
    - gifs
posted: true
locale: "es"
twinPost: "How to Make Lightweight Gifs For Modern Browsers"
---

## Los Gifs molan pero no

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