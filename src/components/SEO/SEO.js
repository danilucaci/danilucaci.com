import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";

const SEO = (props) => {
  let {
    postNode,
    postSEO,
    legalDocs,
    postImage,
    locale = "en",
    twinPostURL,
    currentPage = "site",
    currentPath = "/",
  } = props;

  let title;
  let description;
  let postURL;
  let imageUrl;
  let pageURL;

  let localeCountryCode = {
    en: "en",
    es: "es",
  };

  let siteUrl = config.siteUrl;

  let alternateLocale =
    locale === "en" ? localeCountryCode["es"] : localeCountryCode["en"];

  let alternateUrl = (pageURL = urljoin(siteUrl, twinPostURL));

  if (currentPage === "site" && locale === "en") {
    pageURL = siteUrl;
  } else {
    pageURL = urljoin(siteUrl, currentPath);
  }

  if (!postSEO) {
    title = config[locale][currentPage].title;
    description = config[locale][currentPage].description;
  }

  if (postImage) {
    if (locale === "en") {
      imageUrl = urljoin(siteUrl, postImage);
    } else if (locale === "es") {
      imageUrl = urljoin(siteUrl, locale, postImage);
    }
  }

  if (postSEO) {
    title = postNode.frontmatter.title;
    description = postNode.frontmatter.snippet;
    postURL = urljoin(siteUrl, currentPath);
  }

  if (legalDocs) {
    title = postNode.frontmatter.title;
    postURL = urljoin(siteUrl, currentPath);
  }

  let schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: pageURL,
      name: title,
      alternateName: config[locale][currentPage].titleAlt,
    },
  ];

  if (postSEO) {
    if (postImage) {
      schemaOrgJSONLD.push(
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": postURL,
                name: title,
                image: imageUrl,
              },
            },
          ],
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url: pageURL,
          name: title,
          alternateName: config[locale][currentPage].siteTitleAlt
            ? config[locale][currentPage].siteTitleAlt
            : "",
          headline: title,
          image: {
            "@type": "ImageObject",
            url: imageUrl,
          },
          description,
        }
      );
    } else {
      schemaOrgJSONLD.push(
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": postURL,
                name: title,
              },
            },
          ],
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url: pageURL,
          name: title,
          alternateName: config[locale][currentPage].siteTitleAlt
            ? config[locale][currentPage].siteTitleAlt
            : "",
          headline: title,
          description,
        }
      );
    }
  }

  return (
    <Helmet>
      <html lang={localeCountryCode[locale]} />
      {(postSEO || legalDocs) && <link rel="canonical" href={postURL} />}
      {!postSEO && !legalDocs && <link rel="canonical" href={pageURL} />}

      {(postSEO || legalDocs) && (
        <link
          rel="alternate"
          href={postURL}
          hreflang={localeCountryCode[locale]}
        />
      )}
      {!postSEO && !legalDocs && (
        <link
          rel="alternate"
          href={pageURL}
          hreflang={localeCountryCode[locale]}
        />
      )}

      <link rel="alternate" href={alternateUrl} hreflang={alternateLocale} />

      <title>{title}</title>
      {/* General tags */}
      <meta name="description" content={description} />
      {imageUrl && <meta name="image" content={imageUrl} />}

      {/* You may choose whether Twitter widgets on your site help to tailor content and suggestions for Twitter users. You can opt out of having information from your website used for personalization by following the instructions below. Include the following snippet within the <meta> and <link> elements on your pages that include Twitter for Websites widgets: */}
      <meta name="twitter:dnt" content="on" />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      {(postSEO || legalDocs) && <meta property="og:url" content={postURL} />}
      {(postSEO || legalDocs) && <meta property="og:type" content="article" />}

      {!postSEO && !legalDocs && <meta property="og:url" content={pageURL} />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {imageUrl && <meta property="og:image" content={imageUrl} />}
      <meta property="fb:app_id" content={process.env.FACEBOOK_APP_ID} />

      {/* Twitter Card tags */}
      {imageUrl && <meta name="twitter:card" content="summary_large_image" />}
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      {!imageUrl && <meta name="twitter:card" content="summary" />}

      <meta name="twitter:site" content="@danilucaci" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

SEO.propTypes = {
  locale: PropTypes.string.isRequired,
  twinPostURL: PropTypes.string.isRequired,
  currentPath: PropTypes.string.isRequired,
  currentPage: PropTypes.string,
  postSEO: PropTypes.bool,
  postImage: PropTypes.string,
  postNode: PropTypes.object,
};

export default SEO;
