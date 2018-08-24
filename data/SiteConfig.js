module.exports = {
  siteTitle: "Dani Lucaci UX/UI Designer and Front–End Developer.", // Site title.
  siteTitleShort: "danilucaci.com", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Dani Lucaci Personal Website and Blog", // Alternative site title for SEO.
  siteLogo: "svg/logo.svg", // Logo used for SEO and manifest.
  siteUrl: "https://www.danilucaci.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "My personal blog where I write about UX/UI Design and Front–End Development - Dani Lucaci UX/UI Designer and Front–End Developer.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  disqusShortname: "https-danilucaci.com", // Disqus shortname.
  postDefaultCategoryID: "blog", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "YYYY MMMM DD", // Date format for display.
  userName: "danilucaci", // Username to display in the author segment.
  userTwitter: "@danilucaci", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "North Pole, Earth", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  socialLinks: {
    github: "https://github.com/danilucaci",
    twitter: "https://twitter.com/danilucaci",
    linkedin: "https://www.linkedin.com/in/danielmlucaci",
    dribbble: "https://dribbble.com/danilucaci",
  },
  userDescription:
    "Hi! I’m Dani. UX/UI Designer and Front–End Developer. I prototype, design and develop interfaces that have a strong focus on accesibility, performance and user interaction. I use the latest front-end techniques and design methods to create scalable and easy to use experiences.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/danilucaci/danilucaci",
      iconClassName: "fa fa-github",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/danilucaci",
      iconClassName: "fa fa-twitter",
    },
    {
      label: "Email",
      url: "mailto:danilucaci@gmail.com",
      iconClassName: "fa fa-envelope",
    },
  ],
  copyright: "&copy;2018 Copyright Dani Lucaci. All rights reserved.", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#141C29", // Used for setting manifest and progress theme colors.
  backgroundColor: "#E8E9EB", // Used for setting manifest background color.
};
