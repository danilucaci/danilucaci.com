import React from "react";
import { string, node, bool } from "prop-types";

import { Figure, FigCaption, StyledVideo, VideoIphoneXWrapper, VideoIphoneXInner } from "./styles";

const Video = ({ caption, children, expand }) => (
  <Figure expand={expand}>
    <VideoIphoneXWrapper>
      <VideoIphoneXInner>
        <StyledVideo autoPlay loop muted playsInline controls>
          {children}
        </StyledVideo>
      </VideoIphoneXInner>
    </VideoIphoneXWrapper>
    <FigCaption>{caption}</FigCaption>
  </Figure>
);

Video.propTypes = {
  caption: string.isRequired,
  children: node.isRequired,
  expand: bool,
};

Video.defaultProps = {
  expand: false,
};

export default Video;
