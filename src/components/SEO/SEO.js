import React, { useContext } from "react";
import { string, bool, shape, number, arrayOf } from "prop-types";
import { Helmet } from "react-helmet";
import urljoin from "url-join";

import config from "../../../data/SiteConfig";
import LocaleContext from "../../i18n/LocaleContext";

function SEO({
  postNode,
  postSEO,
  legalDocs,
  postImage,
  prevPath,
  nextPath,
  twinPostURL,
  currentPage = "site",
  currentPath = "/",
}) {
  const { locale } = useContext(LocaleContext);

  let title;
  let description;
  let postURL;
  let imageUrl;
  let postDate;
  let prevRelURL;
  let nextRelURL;

  let localeCountryCode = {
    en: "en",
    es: "es",
  };

  let siteUrl = config.siteUrl;

  // for rel alternate
  let alternateLocale =
    locale === "en" ? localeCountryCode["es"] : localeCountryCode["en"];
  let pageURL = urljoin(siteUrl, twinPostURL);
  let alternateUrl = urljoin(siteUrl, twinPostURL);

  if (currentPage === "site" && locale === "en") {
    pageURL = siteUrl;
  } else {
    pageURL = urljoin(siteUrl, currentPath);
  }

  if (prevPath) {
    if (locale === "en") {
      prevRelURL = urljoin(siteUrl, prevPath);
    } else if (locale === "es") {
      prevRelURL = urljoin(siteUrl, locale, prevPath);
    }
  }

  if (nextPath) {
    if (locale === "en") {
      nextRelURL = urljoin(siteUrl, nextPath);
    } else if (locale === "es") {
      nextRelURL = urljoin(siteUrl, locale, nextPath);
    }
  }

  if (!postSEO) {
    title = config[locale][currentPage].title;
    description = config[locale][currentPage].description;
  }

  // load an image in schema if there is one
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
    postDate = postNode.frontmatter.date;
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
      url: config[locale].websiteSchema.url,
      name: config[locale].websiteSchema.name,
    },
    {
      "@context": "http://schema.org/",
      "@type": "Person",
      name: "Dani Lucaci",
      alternateName: "Daniel Marian Lucaci",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barcelona",
        addressCountry: "Spain",
      },
      url: "www.danilucaci.com",
      // image: "",
      sameAs: [
        config.socialLinks.twitter,
        config.socialLinks.linkedin,
        config.socialLinks.github,
      ],
      jobTitle: config[locale].websiteSchema.jobTitle,
      worksFor: {
        "@type": "Organization",
        name: "danilucaci.com",
      },
    },
  ];

  if (postSEO) {
    if (postImage) {
      schemaOrgJSONLD.push({
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        url: pageURL,
        name: title,
        alternateName: config[locale][currentPage].siteTitleAlt
          ? config[locale][currentPage].siteTitleAlt
          : "",
        headline: title,
        description,
        image: {
          "@type": "ImageObject",
          url: imageUrl,
        },
        datePublished: postDate,
        dateModified: postDate,
        author: {
          "@type": "Person",
          name: "Dani Lucaci",
        },
        publisher: {
          "@type": "Organization",
          name: "danilucaci.com",
          logo: {
            "@type": "ImageObject",
            url: "https://google.com/logo.jpg",
          },
        },
        mainEntityOfPage: pageURL,
      });
    } else {
      schemaOrgJSONLD.push({
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        url: pageURL,
        name: title,
        description,
        alternateName: config[locale][currentPage].siteTitleAlt
          ? config[locale][currentPage].siteTitleAlt
          : "",
        headline: title,
        datePublished: postDate,
        dateModified: postDate,
        author: {
          "@type": "Person",
          name: "Dani Lucaci",
        },
        publisher: {
          "@type": "Organization",
          name: "danilucaci.com",
          logo: {
            "@type": "ImageObject",
            url: "https://google.com/logo.jpg",
          },
        },
        mainEntityOfPage: pageURL,
      });
    }
  }

  return (
    <Helmet>
      <html lang={localeCountryCode[locale]} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      />
      {(postSEO || legalDocs) && <link rel="canonical" href={postURL} />}
      {!postSEO && !legalDocs && <link rel="canonical" href={pageURL} />}
      {(postSEO || legalDocs) && (
        <link
          rel="alternate"
          href={postURL}
          hrefLang={localeCountryCode[locale]}
        />
      )}
      {!postSEO && !legalDocs && (
        <link
          rel="alternate"
          href={pageURL}
          hrefLang={localeCountryCode[locale]}
        />
      )}
      <link rel="alternate" href={alternateUrl} hrefLang={alternateLocale} />
      <title>{title}</title>
      <meta name="theme-color" content={config.themeColor} />
      <meta name="description" content={description} />
      {imageUrl && <meta name="image" content={imageUrl} />}

      {/* Pagination from blog and work pages */}
      {prevRelURL && <link rel="prev" href={prevRelURL} />}
      {nextRelURL && <link rel="next" href={nextRelURL} />}

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />

      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {(postSEO || legalDocs) && <meta property="og:url" content={postURL} />}
      {(postSEO || legalDocs) && <meta property="og:type" content="article" />}
      {!postSEO && !legalDocs && <meta property="og:url" content={pageURL} />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {/* <meta property="fb:app_id" content={process.env.FACEBOOK_APP_ID} /> */}

      {/* Twitter Card tags
       * You may choose whether Twitter widgets on your site help to tailor content
       * and suggestions for Twitter users. You can opt out of having information
       * from your website used for personalization by following the instructions below.
       * Include the following snippet within the <meta> and <link> elements on your
       * pages that include Twitter for Websites widgets:
       */}
      <meta name="twitter:dnt" content="on" />
      <meta name="twitter:site" content="@danilucaci" />
      <meta name="twitter:creator" content="@danilucaci" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:card" content="summary_large_image" />}
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      {!imageUrl && <meta name="twitter:card" content="summary" />}

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  );
}

SEO.propTypes = {
  twinPostURL: string.isRequired,
  currentPath: string.isRequired,
  currentPage: string,
  prevPath: string,
  nextPath: string,
  postSEO: bool,
  postImage: string,
  postNode: shape({
    fields: shape({
      slug: string.isRequired,
    }),
    body: string.isRequired,
    timeToRead: number,
    frontmatter: shape({
      snippet: string,
      category: string,
      intro: string,
      tags: arrayOf(string),
      title: string.isRequired,
      date: string.isRequired,
      pageImage: shape({
        childImageSharp: shape({
          fluid: shape({
            aspectRatio: number.isRequired,
            base64: string.isRequired,
            sizes: string.isRequired,
            src: string.isRequired,
            srcSet: string.isRequired,
            srcSetWebp: string.isRequired,
            srcWebp: string.isRequired,
          }).isRequired,
        }).isRequired,
      }),
    }).isRequired,
  }),
  legalDocs: bool,
};

SEO.defaultProps = {
  currentPage: "site",
  prevPath: null,
  nextPath: null,
  postSEO: false,
  postImage: null,
  postNode: null,
  legalDocs: false,
};

export default SEO;
