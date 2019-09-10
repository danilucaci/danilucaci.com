import { useStaticQuery, graphql } from "gatsby";
import { string } from "prop-types";

function useImage(src) {
  const { images } = useStaticQuery(SINGLE_IMAGE_QUERY);
  const foundImage = images.edges.find(
    (image) => image.node.relativePath === src,
  );

  if (!foundImage) {
    throw new Error("Image not found: ", src);
  }

  return foundImage === "" ? "" : foundImage;
}

useImage.propTypes = {
  src: string.isRequired,
};

export default useImage;

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
            fluid(maxWidth: 936, quality: 50) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
