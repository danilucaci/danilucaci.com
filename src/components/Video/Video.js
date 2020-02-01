import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { string, number, bool } from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { useIntl } from "react-intl";

import {
  Figure,
  FigCaption,
  StyledVideo,
  VideoOuterWrapper,
  VideoInnerWrapper,
  FallbackVideo,
} from "./styles";

function getVideoSrc({ videos = [], src = "", extension = "" }) {
  const result = videos.edges.find(
    (video) =>
      video.node.relativePath === src && video.node.extension === extension,
  );

  if (result && result.node && result.node.publicURL) {
    return result.node.publicURL;
  } else {
    return null;
  }
}

function getPosterSrc({ videos = [], src = "" }) {
  const result = videos.edges.find(
    (video) =>
      video.node.relativePath === src &&
      video.node.extension.match(/png|jpeg|jpg/),
  );

  if (result && result.node && result.node.publicURL) {
    return result.node.publicURL;
  } else {
    return null;
  }
}

function Video({
  caption,
  expand,
  videoWidth,
  videoHeight,
  webmSrc,
  mp4Src,
  gifSrc,
  gifAlt,
  gifBrowserSupport,
  posterSrc,
}) {
  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: "64px",
    triggerOnce: true,
  });

  const [jsLoaded, setJSLoaded] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    setJSLoaded(true);
  }, [jsLoaded]);

  const { videos } = useStaticQuery(ALL_VIDEOS_QUERY);

  if (!videos) {
    if (process.env.NODE_ENV === "development") {
      throw new Error("Videos not found!");
    }

    return null;
  }

  const videoWebMSrc = getVideoSrc({
    videos: videos,
    src: webmSrc,
    extension: "webm",
  });

  const videoMp4Src = getVideoSrc({
    videos: videos,
    src: mp4Src,
    extension: "mp4",
  });

  const fallbackGifSrc = getVideoSrc({
    videos: videos,
    src: gifSrc,
    extension: "gif",
  });

  const videoPosterSrc = getPosterSrc({ videos: videos, src: posterSrc });

  return (
    <Figure expand={expand}>
      {jsLoaded && (
        <VideoOuterWrapper videoWidth={videoWidth} videoHeight={videoHeight}>
          <VideoInnerWrapper className="video-inner-wrapper" ref={ref}>
            <StyledVideo
              loop
              muted
              playsInline
              controls
              preload="none"
              crossOrigin="anonymous"
              poster={videoPosterSrc || ""}
              inView={inView}
              jsLoaded={jsLoaded}
            >
              {inView && (
                <>
                  {videoWebMSrc && (
                    <source src={videoWebMSrc} type="video/webm" />
                  )}
                  {videoMp4Src && <source src={videoMp4Src} type="video/mp4" />}
                  {fallbackGifSrc && (
                    <>
                      <p>{gifBrowserSupport}</p>
                      <a href={fallbackGifSrc} alt={gifAlt}>
                        {gifAlt}
                      </a>
                    </>
                  )}
                </>
              )}
            </StyledVideo>
          </VideoInnerWrapper>
        </VideoOuterWrapper>
      )}

      <noscript>
        <FallbackVideo
          loop
          muted
          playsInline
          controls
          preload="none"
          poster={videoPosterSrc || ""}
        >
          {videoWebMSrc && <source src={videoWebMSrc} type="video/webm" />}
          {videoMp4Src && <source src={videoMp4Src} type="video/mp4" />}
          {fallbackGifSrc && (
            <>
              <p>{gifBrowserSupport}</p>
              <a href={fallbackGifSrc} alt={gifAlt}>
                {gifAlt}
              </a>
            </>
          )}
          <p>{intl.formatMessage({ id: "js.disabled" })}</p>
        </FallbackVideo>
      </noscript>
      <FigCaption>{caption}</FigCaption>
    </Figure>
  );
}

Video.propTypes = {
  caption: string.isRequired,
  posterSrc: string.isRequired,
  webmSrc: string.isRequired,
  mp4Src: string.isRequired,
  gifSrc: string.isRequired,
  gifAlt: string.isRequired,
  gifBrowserSupport: string.isRequired,
  videoWidth: number.isRequired,
  videoHeight: number.isRequired,
  expand: bool,
};

Video.defaultProps = {
  expand: false,
};

export default Video;

const ALL_VIDEOS_QUERY = graphql`
  query ALL_VIDEOS_QUERY {
    videos: allFile(
      filter: {
        extension: { regex: "/webm|mp4|gif|png|jpeg|jpg/" }
        sourceInstanceName: { regex: "/work/" }
      }
    ) {
      edges {
        node {
          publicURL
          relativePath
          extension
        }
      }
    }
  }
`;
