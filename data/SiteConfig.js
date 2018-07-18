module.exports = {
  siteTitle: "danilucaci.com UX/UI Designer", // Site title.
  siteTitleShort: "danilucaci.com", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "danilucaci.com Personal Blog", // Alternative site title for SEO.
  siteLogo: "/logo/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://wwwdanilucaci.com", // Domain of your website without pathPrefix.
  pathPrefix: "/danilucaci", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "danilucaci.com Personal Blog.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Dani Lucaci", // Username to display in the author segment.
  userTwitter: "@danilucaci", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "North Pole, Earth", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription: "I am a UX/UI Designer based in Barcelona.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/danilucaci",
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
  copyright: "&copy;2018 Copyright Dani Lucaci. <br /> All rights reserved.",
  builtWith: "This site is built with GatsbyJS and hosted on Netlify.",
  themeColor: "#c62828",
  backgroundColor: "#e0e0e0",
};
