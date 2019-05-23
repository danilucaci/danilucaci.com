import React from "react";
import PropTypes from "prop-types";

import { StyledDribbblePost, PostBGImg, StyledImg, StyledLink } from "./styles";

function DribbblePost(props) {
  /**
  |--------------------------------------------------
  | The normal image is typically 400x300, but may be smaller
  | if created before October 4th, 2012.
  | The width and height provide the size of the normal image.
  | The hidpi image may or may not be present, but will always be 800x600.
  | The teaser image is typically 200x150, but may be smaller
  | if created before October 4th, 2012.
  | If the animated attribute of the shot is true,
  | the highest resolution image available (hidpi or normal)
  | will be animated (smaller images will be stills).
  |--------------------------------------------------
  */
  const title = props.post.title;
  // const description = props.post.description;
  const animated = props.post.animated;
  const htmlURL = props.post.html_url;
  const normal = props.post.images.normal;
  const hiDpi = props.post.images.hidpi;
  const oneX = props.post.images.one_x;
  const twoX = props.post.images.two_x;
  // const fourX = props.post.images.four_x;

  let imgSrcSet = "";
  let imgFallbackSrc = "";

  if (animated) {
    if (hiDpi) {
      imgSrcSet = `${normal} 284w, ${hiDpi} 584w`;
      imgFallbackSrc = normal;
    } else {
      imgSrcSet = `${oneX} 284w`;
      imgFallbackSrc = oneX;
    }
  } else {
    imgSrcSet = `${oneX} 284w, ${twoX} 584w`;
    imgFallbackSrc = oneX;
  }

  return (
    <StyledLink href={htmlURL} target="_blank" rel="noopener noreferrer" alt={title}>
      <StyledDribbblePost>
        <PostBGImg>
          <StyledImg
            sizes="(max-width: 936px) 100vw"
            srcSet={imgSrcSet}
            src={imgFallbackSrc}
            alt={title}
          />
        </PostBGImg>
      </StyledDribbblePost>
    </StyledLink>
  );
}

export default DribbblePost;

DribbblePost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    animated: PropTypes.bool,
    html_url: PropTypes.string.isRequired,
    images: PropTypes.objectOf(PropTypes.string.isRequired),
  }).isRequired,
};
