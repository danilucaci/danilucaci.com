---
title: "How to Add Dribbble Shots with React Hooks"
slug: "How to add Dribbble Shots with React Hooks"
date: "2019-03-14"
category: "blog"
intro: "Static sites like Gatsby or Hugo, are great for perfomance and tooling, but running a contact form on them is not that easy.
|
This is how I managed to use one on the website."
snippet: "How I added my Dribbble designs in the Gatsby site."
tags:
    - gatsby.js
posted: true
locale: "en"
twinPost: "Como Añadir Publicaciones de Dribbble Usando React Hooks"
---

## What options do we have for static sites?


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