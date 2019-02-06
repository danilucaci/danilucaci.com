import React from "react";
import Helmet from "react-helmet";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";

const SEO = (props) => {
  let {
    postNode,
    postPath,
    postSEO,
    legalDocs,
    postImage,
    locale = "en",
    currentPage = "site",
    currentPath = "/",
  } = props;

  let title;
  let description;
  let postURL;
  let imageUrl;
  let pageURL;

  let siteUrl = config.siteUrl;

  if (currentPage === "site" && locale === "en") {
    pageURL = siteUrl;
  } else {
    pageURL = urljoin(siteUrl, currentPath);
  }

  title = config[locale][currentPage].title;
  description = config[locale][currentPage].description;

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
      alternateName: config[locale][currentPage].siteTitleAlt
        ? config[locale][currentPage].siteTitleAlt
        : "",
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
      <html lang={locale} />
      <title>{title}</title>
      {/* General tags */}
      <meta name="description" content={description} />
      {imageUrl && <meta name="image" content={imageUrl} />}

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      {(postSEO || legalDocs) && <meta property="og:url" content={postURL} />}
      {!postSEO && !legalDocs && <meta property="og:url" content={pageURL} />}
      {postSEO && <meta property="og:type" content="article" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {imageUrl && <meta property="og:image" content={imageUrl} />}
      <meta
        property="fb:app_id"
        content={
          config[locale][currentPage].siteFBAppID
            ? config[locale][currentPage].siteFBAppID
            : ""
        }
      />

      {/* Twitter Card tags */}
      {imageUrl ? (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={imageUrl} />
        </>
      ) : (
        <meta name="twitter:card" content="summary" />
      )}
      <meta name="twitter:site" content="@danilucaci" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
