import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import { theme, rem, mediaMin, mediaMax } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import SocialNav from "../SocialNav/SocialNav";
import { HR } from "../HR/HR";

export const AuthorCardWrapper = styled.footer`
  width: 100%;
  max-width: ${theme.contain.inner.col10};
  margin-bottom: ${theme.spacing.components.s};

  ${mediaMin.s`
    padding-right: ${theme.gutters.m};
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.m`
    margin-bottom: ${theme.spacing.components.xl};
  `};
`;

const StyledAuthorCard = styled.div`
  padding: ${rem(24)} ${rem(40)} ${rem(32)};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${mediaMin.s`
    padding: ${rem(32)} ${rem(48)};
  `};

  ${mediaMin.m`
    text-align: left;
    flex-direction: row;
    padding: ${rem(64)} ${rem(56)};
  `};
`;

const AuthorImage = styled(Img)`
  display: block;
  border-radius: 50%;
  width: ${rem(64)};
  height: ${rem(64)};
  margin-bottom: ${rem(8)};

  ${mediaMin.m`
    margin-left: auto;
    width: ${rem(104)};
    height: ${rem(104)};
    margin-right: ${rem(24)};
    margin-bottom: 0;
  `};
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaMin.m`
    padding-right: ${rem(40)};
    margin-right: auto;
  `};

  ${mediaMin.xl`
    padding-right: ${rem(80)};
  `};
`;

const AuthorDescription = styled(Copy)`
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};

  ${mediaMax.m`
      margin-bottom: ${rem(8)}
  `};
`;

const AuthorCard = (props) => {
  return (
    <AuthorCardWrapper>
      <HR />
      <StyledAuthorCard>
        <StaticQuery
          query={AUTHOR_IMAGE_QUERY}
          render={(data) => {
            let image = data.authorImageQuery.childImageSharp.fluid;

            return (
              <FormattedMessage id="authorCardImageTitle">
                {(imageTitle) => (
                  <AuthorImage
                    title={imageTitle}
                    alt="Dani Lucaci portrait image"
                    fluid={image}
                  />
                )}
              </FormattedMessage>
            );
          }}
        />

        <AuthorInfo>
          <FormattedMessage id="authorCardName">
            {(name) => <h4>{name}</h4>}
          </FormattedMessage>
          <FormattedMessage id="authorCardDescription">
            {(description) => (
              <AuthorDescription>{description}</AuthorDescription>
            )}
          </FormattedMessage>
          <SocialNav />
        </AuthorInfo>
      </StyledAuthorCard>
      <HR />
    </AuthorCardWrapper>
  );
};

export default AuthorCard;

const AUTHOR_IMAGE_QUERY = graphql`
  query {
    authorImageQuery: file(
      relativePath: { regex: "/danilucaci_profile_image/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 104, maxHeight: 104) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
