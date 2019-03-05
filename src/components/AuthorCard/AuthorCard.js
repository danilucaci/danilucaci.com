import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import { theme, rem, mediaMin, mediaMax } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import SocialNav from "../SocialNav/SocialNav";

export const StyledAuthorCard = styled.footer`
  background-color: ${theme.colors.gray100};
  width: 100%;
  max-width: ${theme.contain.inner.col10};
  margin-left: auto;
  margin-right: auto;

  padding: ${rem(40)};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  margin-bottom: ${theme.spacing.components.s};

  ${mediaMin.s`
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.l`
    margin-bottom: ${theme.spacing.components.xl};
    text-align: left;
    flex-direction: row;
    padding: ${rem(64)} ${rem(48)};
  `};
`;

const AuthorImage = styled(Img)`
  display: block;
  border-radius: 50%;
  margin-bottom: ${rem(16)};
  width: ${rem(144)};
  height: ${rem(144)};

  ${mediaMin.l`
    margin-left: auto;
    margin-right: ${rem(24)};
    margin-bottom: 0;
  `};
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaMin.l`
    padding-right: ${rem(40)};
    margin-right: auto;
  `};

  ${mediaMin.xl`
    margin-top: -${rem(8)};
    padding-right: ${rem(80)};
  `};
`;

const AuthorDescription = styled(Copy)`
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  margin-bottom: ${rem(12)};
`;

const AuthorCard = (props) => {
  return (
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
