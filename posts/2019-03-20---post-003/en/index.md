---
title: "How to Add a GDPR Compliant Mailchimp Form on a Gatsby.js Site"
slug: "gdpr mailchimp form on gatsby site"
date: "2019-03-20"
category: "blog"
intro: "Having a newsletter is must for any blogger.
|
But before you can start building your own, first need to be sure you are compliant with Europe’s GDPR laws.
|
In this articule you will learn how you can build you own GDPR Compliant Mailchimp form with Gatsby.js."
snippet: "How I added a GDPR compliant Mailchimp form to my Gatsby.js personal blog."
tags:
    - gatsby.js
    - forms
posted: false
locale: "en"
twinPost: "cumplir rgpd con Mailchimp y Gatsby.js"
---

## What Do You Need To Get Started

First of all, you need to install the Mailchimp plugin:

You can either install it with npm:

```jsx
npm install gatsby-plugin-mailchimp
```

Or with yarn:

```jsx
yarn add gatsby-plugin-mailchimp
```

Then you need to add it to your site’s `gatsby-config` file.

```jsx
plugins: [
  ...
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
        endpoint:
        "your-mailchimp-endpoint",
    },
  },
]
```

