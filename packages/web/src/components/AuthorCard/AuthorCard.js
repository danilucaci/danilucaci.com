import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useIntl } from "react-intl";

import SocialNav from "../SocialNav";
import {
  AuthorCardWrapper,
  AuthorCardInner,
  AuthorImage,
  AuthorInfo,
  AuthorDescription,
  StyledHR,
} from "./styles";

function AuthorCard() {
  const intl = useIntl();
  // eslint-disable-next-line no-use-before-define
  const queryData = useStaticQuery(AUTHOR_IMAGE_QUERY);

  return (
    <AuthorCardWrapper>
      <StyledHR />
      <AuthorCardInner>
        <AuthorImage
          alt={intl.formatMessage({ id: "author.card.image.alt" })}
          fluid={queryData.authorImageQuery.childImageSharp.fluid}
        />
        <AuthorInfo>
          <h3>{intl.formatMessage({ id: "author.card.name" })}</h3>
          <AuthorDescription>
            {intl.formatMessage({ id: "author.card.description" })}
          </AuthorDescription>
          <SocialNav />
        </AuthorInfo>
      </AuthorCardInner>
    </AuthorCardWrapper>
  );
}

export default AuthorCard;

const AUTHOR_IMAGE_QUERY = graphql`
  query {
    authorImageQuery: file(
      relativePath: { regex: "/danilucaci_profile_image/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 104, maxHeight: 104, cropFocus: NORTH, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
