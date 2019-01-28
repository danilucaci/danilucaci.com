---
title: "Use Aframe on the web 10"
description: "Have fun with aframe and use ar on the web"
date: "2018-12-05"
category: "blog"
intro: "Have fun with aframe and use ar on the web.
|
It's fun"
snippet: "Have fun with aframe and use ar on the web. It's fun."
tags:
    - webvr
    - aframe
posted: true
lang: "en"
twinPost: "Usando Aframe en la web 10"
---

##How to use the video tag to make better, lightweight gifs.

Gifs are great but they are too big. Do this to make them smaller and better.

```javascript
componentDidMount() {
  // Test via a getter in the options object to see if the passive property is accessed
  // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
  var supportsPassive = textPassiveEventSupport();
  // Use our detect's results. passive applied if supported, capture will be false either way.
  window.addEventListener(
    "scroll",
    this.handlePageScroll,
    supportsPassive ? { passive: true } : false
  );

  this.handlePageScroll();
  this.addSafariVideoControls();
}
```