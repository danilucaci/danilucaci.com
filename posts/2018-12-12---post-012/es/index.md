---
title: "Post numero 12"
description: "Como usar aframe"
date: "2018-12-12"
category: "blog"
intro: "Diviertete con aframe en la web.
|
Mola mazo"
snippet: "Diviertete con aframe en la web."
tags:
    - webvr
    - aframe
posted: true
locale: "es"
twinPost: "Post number 12"
---

##Como usar aframe en la web

Como usar aframe.

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