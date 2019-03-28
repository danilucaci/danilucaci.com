import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { HR } from "../HR/HR";
import { SectionHeader } from "../Headings/Headings";
import { DefaultLink } from "../Link/Link";

const SiblingPostsWrapper = styled.nav`
  width: 100%;
  max-width: ${theme.contain.wrapper.col10};
  margin-left: auto;
  margin-right: auto;

  padding-right: ${theme.gutters.s};
  padding-left: ${theme.gutters.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(${theme.gutters.s}, env(safe-area-inset-left));
      padding-right: max(${theme.gutters.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.s`
    padding-right: ${theme.gutters.m};
    padding-left: ${theme.gutters.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.gutters.m}, env(safe-area-inset-left));
        padding-right: max(${theme.gutters.m}, env(safe-area-inset-right));
      }
    }
  `};

  margin-bottom: ${theme.spacing.components.s};
  ${mediaMin.s`
    margin-bottom: ${theme.spacing.components.m};
  `};
  ${mediaMin.m`
    margin-bottom: ${theme.spacing.components.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-device-width: ${rem(280)}) and (min-device-height: ${rem(480)}) and (orientation: landscape) {
    margin-bottom: ${rem(64)};
  }
`;

const SiblingPostsContents = styled.div`
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
  flex: 0 1 50%;
`;

const PrevSectionHeader = styled(SectionHeader)`
  margin-bottom: ${rem(12)};

  /* Breaks line if a \n character is inside the text */
  white-space: pre-line;

  ${mediaMin.s`
    white-space: normal;
    margin-bottom: ${rem(8)};
  `};
`;

const PrevArticleLink = styled(DefaultLink)`
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
  }
  font-weight: 400;

  &:hover {
    background-color: transparent;
    text-decoration: underline;
  }
`;

const NextItemsContainer = styled.div`
  margin-left: ${rem(8)};
  flex: 0 1 50%;

  &:only-child {
    margin-left: auto;
    margin-right: 0;
  }
`;

const NextSectionHeader = styled(SectionHeader)`
  text-align: right;
  margin-bottom: ${rem(12)};
  display: block;
  margin-right: 0;
  margin-left: auto;

  /* Breaks line if a \n character is inside the text */
  white-space: pre-line;

  ${mediaMin.s`
    white-space: normal;
    margin-bottom: ${rem(8)};
  `};
`;

const NextArticleLink = styled(DefaultLink)`
  color: ${theme.colors.dark900} !important;
  display: block;

  text-align: right;
  text-decoration: none;
  font-size: ${theme.fontSizes.siblingPostsS};
  line-height: ${theme.lineHeights.siblingPostsS};

  margin-right: 0;
  margin-left: auto;

  font-weight: 400;

  ${mediaMin.s`
    font-size: ${theme.fontSizes.siblingPostsXL};
    line-height: ${theme.lineHeights.siblingPostsXL};
  `};

  .fonts-loaded & {
    font-family: ${theme.fonts.headerRegular};
  }

  &:hover {
    background-color: transparent;
    text-decoration: underline;
  }
`;

const SiblingPosts = ({
  prevSlug, prevTitle, nextSlug, nextTitle,
}) => (
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

SiblingPosts.propTypes = {
  nextTitle: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.object.isRequired]),
  nextSlug: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.object.isRequired]),
  prevSlug: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.object.isRequired]),
  prevTitle: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.object.isRequired]),
};

export default SiblingPosts;
