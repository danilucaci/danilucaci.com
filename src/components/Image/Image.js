import React from "react";
import { string, bool } from "prop-types";
import Img from "gatsby-image";

import { Figure, FigCaption } from "./styles";
import useImage from "../../hooks/useImage";

const Image = ({ src, caption, expand }) => {
  const foundImage = useImage(src);

  if (!foundImage) {
    throw new Error("Image not found: ", src);
  }

  return (
    <Figure expand={expand}>
      <Img fluid={foundImage.node.childImageSharp.fluid} alt={caption} />
      <FigCaption>{caption}</FigCaption>
    </Figure>
  );
};

Image.propTypes = {
  src: string.isRequired,
  caption: string.isRequired,
  expand: bool,
};

Image.defaultProps = {
  expand: false,
};

export default Image;
