import React from "react";
import { string, bool } from "prop-types";
import Img from "gatsby-image";

import { Figure, FigCaption } from "./styles";
import useImage from "../../hooks/useImage";

const Image = ({ src, caption, expand, noShadow, ariaOnlyCaption }) => {
  const foundImage = useImage(src);

  if (!foundImage) {
    if (process.env.NODE_ENV === "development") {
      throw new Error("Image: Image not found: ", src);
    }

    return null;
  }

  return (
    <Figure expand={expand} noShadow={noShadow}>
      <Img fluid={foundImage.node.childImageSharp.fluid} alt={caption} fadeIn />
      <FigCaption className={ariaOnlyCaption && "aria-hidden"}>
        {caption}
      </FigCaption>
    </Figure>
  );
};

Image.propTypes = {
  src: string.isRequired,
  caption: string.isRequired,
  expand: bool,
  noShadow: bool,
  ariaOnlyCaption: bool,
};

Image.defaultProps = {
  expand: false,
  noShadow: false,
  ariaOnlyCaption: false,
};

export default Image;
