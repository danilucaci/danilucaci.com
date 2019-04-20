import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { FormattedMessage } from "react-intl";

import SocialNav from "../SocialNav/SocialNav";
import {
  AuthorCardWrapper,
  AuthorCardInner,
  AuthorImage,
  AuthorInfo,
  AuthorDescription,
  StyledHR,
} from "./styles";

const AuthorCard = () => (
  <AuthorCardWrapper>
    <StyledHR />

    <AuthorCardInner>
      <StaticQuery
        query={AUTHOR_IMAGE_QUERY}
        render={(data) => {
          let image = data.authorImageQuery.childImageSharp.fluid;

          return (
            <FormattedMessage id="author.card.image.alt">
              {(msg) => <AuthorImage alt={msg} fluid={image} />}
            </FormattedMessage>
          );
        }}
      />

      <AuthorInfo>
        <FormattedMessage id="author.card.name">{(name) => <h3>{name}</h3>}</FormattedMessage>
        <FormattedMessage id="author.card.description">
          {(description) => <AuthorDescription>{description}</AuthorDescription>}
        </FormattedMessage>
        <SocialNav />
      </AuthorInfo>
    </AuthorCardInner>
  </AuthorCardWrapper>
);

export default AuthorCard;

const AUTHOR_IMAGE_QUERY = graphql`
  query {
    authorImageQuery: file(relativePath: { regex: "/danilucaci_profile_image/" }) {
      childImageSharp {
        fluid(maxWidth: 104, maxHeight: 104, cropFocus: NORTH, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
