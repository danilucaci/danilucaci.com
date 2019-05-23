import React from "react";
import { useInView } from "react-intersection-observer";
import { string, bool } from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { FormattedMessage } from "react-intl";

import { Figure, FigCaption, StyledVideo, VideoIphoneXWrapper, VideoIphoneXInner } from "./styles";

function Video(props) {
  const {
    caption, expand, webmSrc, mp4Src, gifSrc, gifAlt, gifBrowserSupport, posterSrc,
  } = props;

  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: "64px",
    triggerOnce: true,
  });

  const [hasLoaded, setHasLoaded] = React.useState(false);

  React.useEffect(() => {
    setHasLoaded(true);
  }, [hasLoaded]);

  const { videos } = useStaticQuery(ALL_VIDEOS_QUERY);
  if (!videos) {
    throw new Error("Video not found");
  }
  const foundWebMSrc = videos.edges.find((video) => video.node.relativePath === webmSrc && video.node.extension === "webm");
  const foundMp4Src = videos.edges.find((video) => video.node.relativePath === mp4Src && video.node.extension === "mp4");
  const foundGifSrc = videos.edges.find((video) => video.node.relativePath === gifSrc && video.node.extension === "gif");
  const foundPosterSrc = videos.edges.find((video) => video.node.relativePath === posterSrc && video.node.extension === "png");

  // console.groupCollapsed("Video Lazy Loaded");
  // console.log("----------------------------");
  // console.log("got webmSrc: ", webmSrc);
  // console.log("found relativePath: ", foundWebMSrc.node.relativePath);
  // console.log("found publicURL: ", foundWebMSrc.node.publicURL);
  // console.log("found format: ", foundWebMSrc.node.extension);
  // console.log("----------------------------");
  // console.groupEnd();

  return (
    <Figure expand={expand}>
      <VideoIphoneXWrapper>
        <VideoIphoneXInner ref={ref}>
          <StyledVideo
            autoPlay
            loop
            muted
            playsInline
            controls
            poster={foundPosterSrc.node.publicURL || ""}
            inView={inView}
            hasLoaded={hasLoaded}
          >
            {inView && (
              <React.Fragment>
                {foundWebMSrc && <source src={foundWebMSrc.node.publicURL} type="video/webm" />}
                {foundMp4Src && <source src={foundMp4Src.node.publicURL} type="video/mp4" />}
                {foundGifSrc && (
                  <React.Fragment>
                    <p>{gifBrowserSupport}</p>
                    <a href={foundGifSrc.node.publicURL} alt={gifAlt}>
                      {gifAlt}
                    </a>
                  </React.Fragment>
                )}
              </React.Fragment>
            )}
            <noscript>
              <React.Fragment>
                {foundWebMSrc && <source src={foundWebMSrc.node.publicURL} type="video/webm" />}
                {foundMp4Src && <source src={foundMp4Src.node.publicURL} type="video/mp4" />}
                {foundGifSrc && (
                  <React.Fragment>
                    <p>{gifBrowserSupport}</p>
                    <a href={foundGifSrc.node.publicURL} alt={gifAlt}>
                      {gifAlt}
                    </a>
                  </React.Fragment>
                )}
                <FormattedMessage id="js.disabled">{(txt) => <p>{txt}</p>}</FormattedMessage>
              </React.Fragment>
            </noscript>
          </StyledVideo>
        </VideoIphoneXInner>
      </VideoIphoneXWrapper>
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
