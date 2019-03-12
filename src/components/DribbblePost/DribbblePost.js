import React from "react";
import PropTypes from "prop-types";
import styled, { css, keyframes } from "styled-components";

import { theme, mediaMin, rem } from "../../theme/globalStyles";

const StyledDribbblePost = styled.figure``;

const PostBGImg = styled.span`
  display: block;
  width: 100%;
  padding-bottom: 75%;
  background-color: ${theme.colors.sectionBackground};
`;

const StyledImg = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 1;
  transition: opacity 0.5s ease 0s;
`;

const StyledLink = styled.a`
  color: ${theme.colors.dark700} !important;
  text-decoration: none !important;

  display: inline-block;
  vertical-align: middle;

  &:hover {
    background-color: transparent !important;
  }

  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  margin-bottom: ${rem(24)};

  &:hover {
    ${theme.shadow.hover};
  }

  ${mediaMin.m`
    width: calc(50% - ${rem(12)});
    margin-bottom: ${rem(32)};
  
    &:nth-of-type(1n) {
      margin-right: ${rem(12)};
      margin-left: 0;
    }
  
    &:nth-of-type(2n) {
      margin-left: ${rem(12)};
      margin-right: 0;
    } 
  `};
`;

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

  if (animated) {
    if (hiDpi) {
      imgSrcSet = `${normal} 284w, ${hiDpi} 584w`;
    } else {
      imgSrcSet = `${oneX} 284w`;
    }
  } else {
    imgSrcSet = `${oneX} 284w, ${twoX} 584w`;
  }

  return (
    <StyledLink href={htmlURL} target="_blank" rel="noopener noreferrer">
      <StyledDribbblePost>
        <PostBGImg>
          <StyledImg sizes="(max-width: 936px) 100vw" srcSet={imgSrcSet} alt={title} />
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
