import React from "react";
import { string, bool } from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Figure, FigCaption } from "./styles";
import useImage from "../../hooks/useImage";

function Image({ src, caption, expand, noShadow, ariaOnlyCaption }) {
  const image = useImage(src);

  return (
    <Figure expand={expand} noShadow={noShadow}>
      <GatsbyImage image={getImage(image.node)} alt={caption} />
      <FigCaption className={ariaOnlyCaption && "aria-hidden"}>
        {caption}
      </FigCaption>
    </Figure>
  );
}

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
