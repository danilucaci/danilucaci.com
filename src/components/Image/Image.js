import React from "react";
import { string, bool } from "prop-types";
import Img from "gatsby-image";

import { Figure, FigCaption } from "./styles";
import useImage from "../../hooks/useImage";

const Image = ({ src, caption, expand, noShadow }) => {
  const foundImage = useImage(src);

  if (!foundImage) {
    throw new Error("Image not found: ", src);
  }

  return (
    <Figure expand={expand} noShadow={noShadow}>
      <Img fluid={foundImage.node.childImageSharp.fluid} alt={caption} fadeIn />
      <FigCaption>{caption}</FigCaption>
    </Figure>
  );
};

Image.propTypes = {
  src: string.isRequired,
  caption: string.isRequired,
  expand: bool,
  noShadow: bool,
};

Image.defaultProps = {
  expand: false,
  noShadow: false,
};

export default Image;
