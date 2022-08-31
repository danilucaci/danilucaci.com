import { useStaticQuery, graphql } from "gatsby";
import { string } from "prop-types";

const SINGLE_IMAGE_QUERY = graphql`
  query SINGLE_IMAGE_QUERY {
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
            gatsbyImageData(width: 936, quality: 60, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;

function predicate(src) {
  return function getImage(image) {
    return image.node.relativePath === src;
  };
}

function useImage(src) {
  const { images } = useStaticQuery(SINGLE_IMAGE_QUERY);
  const image = images.edges.find(predicate(src));

  if (!image) {
    if (process.env.NODE_ENV === "development") {
      throw new Error("useImage: Image not found: ", src);
    }

    return null;
  }

  return image;
}

useImage.propTypes = {
  src: string.isRequired,
};

export default useImage;
