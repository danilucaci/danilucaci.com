---
title: "The Problems of 'Schema-First' GraphQL Server Development"
slug: "problems of schema-first"
date: "2018-12-14"
category: "blog"
intro: "Tooling for GraphQL server development has exploded in the last two years. | We believe that the need for most tools comes from the popular schema-first approach — and can be solved by an alternative: code-first."
snippet: "Tooling for GraphQL server development has exploded in the last two years."
tags:
    - graphql
    - jsx
posted: true
locale: "en"
twinPost: "los Problemas de 'Schema-First'"
---

##Summary
Prisma helps Labelbox deliver the flexible feature set their customers need to create and manage machine learning training data:
Prisma simplifies how Labelbox interacts with their rapidly evolving MySQL database
Prisma speeds up Labelbox's development process with streamlined DB migrations
Prisma helps the Labelbox Customer Success Team efficiently extract relevant information from the main Labelbox database

```jsx
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

##About Labelbox
Imagine that on any given day you had to build features to measure cow health, trucker safety, fashion, and sports; that companies with vast data sets and very precise needs relied on your software to get accurate assessments.
This is the challenge and the opportunity of Labelbox— a company that emerged out of stealth mode in March 2018 and focuses on labeling data to train machine learning models. As machine learning algorithms depend on having the most accurate training data, Labelbox creates tools to support that sort of collaborative labeling.

## What Labelbox needed to manage their data
Labelbox’s customers train algorithms based on information labeled with the company’s tool. This results in Labelbox retaining millions of human assessments.

Thus, to build out their product and wrangle the associated immense quantity of information, Labelbox had to deal with a number of challenges related to data handling, fetching, and searching. Labelbox sought some specific capabilities for working with their data:

## The ability to resolve data from different databases
* A fine-grained permission system for their database
* Easy database migrations in order to quickly address customer feature requests

