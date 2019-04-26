import React from "react";
import { string, bool } from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import { Figure, FigCaption } from "./styles";

// https://spectrum.chat/gatsby-js/general/using-variables-in-a-staticquery~abee4d1d-6bc4-4202-afb2-38326d91bd05
const Image = ({ src, caption, expand }) => (
  <StaticQuery
    query={ALL_IMAGES_QUERY}
    render={({ images }) => {
      const foundImage = images.edges.find((image) => image.node.relativePath === src);
      if (!foundImage) {
        console.warn("Image not found: ", src);
        return null;
      }
      return (
        <Figure expand={expand}>
          <Img fluid={foundImage.node.childImageSharp.fluid} alt={caption} />
          <FigCaption>{caption}</FigCaption>
        </Figure>
      );
    }}
  />
);

Image.propTypes = {
  src: string.isRequired,
  caption: string.isRequired,
  expand: bool,
};

Image.defaultProps = {
  expand: false,
};

export default Image;

const ALL_IMAGES_QUERY = graphql`
  query ALL_IMAGES_QUERY {
    images: allFile(
      filter: {
        extension: { regex: "/jpeg|jpg|png/" }
        sourceInstanceName: { regex: "images/work|posts/" }
      }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1128, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;
