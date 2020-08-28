import { useStaticQuery, graphql } from "gatsby";
import { string } from "prop-types";

function useImage(src) {
  // eslint-disable-next-line no-use-before-define
  const { images } = useStaticQuery(SINGLE_IMAGE_QUERY);
  const foundImage = images.edges.find(
    (image) => image.node.relativePath === src,
  );

  if (!foundImage) {
    if (process.env.NODE_ENV === "development") {
      throw new Error("useImage: Image not found: ", src);
    }

    return null;
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
            fluid(maxWidth: 936, quality: 60) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
