import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import { theme, rem, mediaMin, mediaMax } from "../../theme/globalStyles";
import { HR } from "../HR/HR";
import { SectionHeader } from "../Headings/Headings";
import LocaleLink from "../LocaleLink/LocaleLink";

const SiblingPostsWrapper = styled.div`
  width: 100%;
  max-width: ${theme.contain.content};
  margin-left: auto;
  margin-right: auto;

  margin-bottom: ${rem(32)};

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    margin-bottom: ${rem(56)};
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};

  ${mediaMin.l`
  margin-bottom: ${rem(80)};
`};
`;

const SiblingPostsContents = styled.nav`
  display: flex;

  padding-top: ${rem(16)};
  padding-bottom: ${rem(48)};

  ${mediaMin.s`
  padding-top: ${rem(32)};
  padding-bottom: ${rem(80)};
`};
`;

const PreviousItemsContainer = styled.div`
  margin-right: ${rem(8)};
  flex: 1 1 50%;
`;

const PrevSectionHeader = styled(SectionHeader)`
  margin-bottom: ${rem(12)};

  ${mediaMin.s`
  margin-bottom: ${rem(8)};
`};
`;

const PrevArticleLink = styled(LocaleLink)`
  color: ${theme.colors.dark900} !important;
  text-decoration: none;
  font-size: ${theme.fontSizes.siblingPostsS};
  line-height: ${theme.lineHeights.siblingPostsS};

  display: block;
  margin-right: 0;
  margin-left: auto;

  ${mediaMin.s`
  font-size: ${theme.fontSizes.siblingPostsXL};
  line-height: ${theme.lineHeights.siblingPostsXL};
`};

  .fonts-loaded & {
    font-family: ${theme.fonts.headerRegular};
    font-weight: 400;
  }

  &:hover {
    background-color: transparent;
    text-decoration: underline;
  }
`;

const NextItemsContainer = styled.div`
  margin-left: ${rem(8)};
  flex: 1 1 50%;
`;

const NextSectionHeader = styled(SectionHeader)`
  text-align: right;
  margin-bottom: ${rem(12)};

  ${mediaMin.s`
  margin-bottom: ${rem(8)};
`};
`;

const NextArticleLink = styled(LocaleLink)`
  color: ${theme.colors.dark900} !important;
  text-align: right;
  text-decoration: none;
  font-size: ${theme.fontSizes.siblingPostsS};
  line-height: ${theme.lineHeights.siblingPostsS};

  display: block;
  margin-right: 0;
  margin-left: auto;

  ${mediaMin.s`
  font-size: ${theme.fontSizes.siblingPostsXL};
  line-height: ${theme.lineHeights.siblingPostsXL};
`};

  .fonts-loaded & {
    font-family: ${theme.fonts.headerRegular};
    font-weight: 400;
  }

  &:hover {
    background-color: transparent;
    text-decoration: underline;
  }
`;

const SiblingPosts = ({ prevSlug, prevTitle, nextSlug, nextTitle }) => {
  return (
    <SiblingPostsWrapper>
      <HR />
      <SiblingPostsContents>
        {prevSlug && (
          <PreviousItemsContainer>
            <FormattedMessage id="articlePrev">
              {(txt) => <PrevSectionHeader>{txt}</PrevSectionHeader>}
            </FormattedMessage>
            <PrevArticleLink to={prevSlug}>{prevTitle}</PrevArticleLink>
          </PreviousItemsContainer>
        )}
        {nextSlug && (
          <NextItemsContainer>
            <FormattedMessage id="articleNext">
              {(txt) => <NextSectionHeader>{txt}</NextSectionHeader>}
            </FormattedMessage>
            <NextArticleLink to={nextSlug}>{nextTitle}</NextArticleLink>
          </NextItemsContainer>
        )}
      </SiblingPostsContents>
      <HR />
    </SiblingPostsWrapper>
  );
};

SiblingPosts.propTypes = {
  nextTitle: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
  nextSlug: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
  prevSlug: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
  prevTitle: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
};

export default SiblingPosts;
