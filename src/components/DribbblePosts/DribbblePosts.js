import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import DribbblePostPlaceholder from "../DribbblePostPlaceholder/DribbblePostPlaceholder";
import DribbblePost from "../DribbblePost/DribbblePost";
import { theme, mediaMin, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import { LoadComments } from "../Button/Button";
import Spinner from "../Spinner/Spinner";
import useDribbbleReducer from "./DribbblePostsReducer";

import { DRIBBBLE_STATUS } from "../../i18n/i18n";

const DribbblePostsWrapper = styled.section`
  max-width: ${theme.contain.inner.col10};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${rem(32)};

  ${mediaMin.s`
    margin-bottom: ${rem(64)};
  `};
`;

const ErrorMessageWrapper = styled.div`
  background-color: ${theme.colors.danger100};
  display: block;
  padding: ${rem(16)} ${rem(16)};
  border-left: ${rem(4)} solid ${theme.colors.danger600};
  margin-bottom: ${rem(32)};
`;

const ErrorMessage = styled.p`
  color: ${theme.colors.danger600};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyRegular};
  }
`;

const StyledLoadMore = styled(LoadComments)`
  margin: ${rem(16)} auto;
  display: block;
`;

const LoadMoreLabel = styled.span`
  display: inline-block;
`;

function DribbblePosts({ locale }) {
  // -------------shotsPerPage-------------
  // How many posts per page and placeholder elements
  // Also handles how many more shots to load
  // when the "Load More..." button is pressed
  const {
    dribbblePosts,
    shotsPerPage,
    isLoading,
    isLoadingMore,
    isError,
    loadMorePosts,
  } = useDribbbleReducer();

  /**
  /* --------------------------------------------------
   * Create index's in the placeholder array to use as a key in the render method with .map()
   * Show as many placeholder items as posts I want on the page
   * This way I don't get reflow
   * --------------------------------------------------
   * Steps:
   * 1 - Create a new Array with a length = to shotsPerPage (shotsPerPage = 4, 4 elements)
   * 2 - The second argument for Array.from() is a map function that runs on each element
   * The array is initialized with `undefined` on each position.
   * The value of `v` below will be `undefined`.
   */
  const placeholderArr = Array.from({ length: shotsPerPage }, (v, i) => i);

  return (
    <DribbblePostsWrapper>
      {isError && (
        <ErrorMessageWrapper>
          <ErrorMessage>{DRIBBBLE_STATUS[locale].error}</ErrorMessage>
        </ErrorMessageWrapper>
      )}

      {isLoading && !isError && placeholderArr.map((i) => <DribbblePostPlaceholder key={i} />)}
      {!isLoading &&
        !isError &&
        dribbblePosts.map((post) => <DribbblePost key={post.id} post={post} />)}

      {isLoadingMore && placeholderArr.map((i) => <DribbblePostPlaceholder key={i} />)}

      {!isError && (
        <StyledLoadMore onClick={loadMorePosts}>
          {!isLoading && !isLoadingMore && (
            <FormattedMessage id="dribbbleLoadMore">
              {(txt) => <LoadMoreLabel>{txt}</LoadMoreLabel>}
            </FormattedMessage>
          )}
          {(isLoading || isLoadingMore) && <Spinner dark />}
        </StyledLoadMore>
      )}
    </DribbblePostsWrapper>
  );
}

export default DribbblePosts;

DribbblePosts.propTypes = {
  locale: PropTypes.string.isRequired,
};
