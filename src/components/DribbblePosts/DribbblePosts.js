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

const ErrorMessage = styled.p`
  color: ${theme.colors.danger500};
  font-weight: 700;

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyBold};
  }

  margin-top: ${rem(32)};
  margin-bottom: ${rem(32)};
`;

const StyledLoadMore = styled(LoadComments)`
  margin: ${rem(16)} auto;
  display: block;
`;

const LoadMoreLabel = styled.span`
  display: inline-block;
`;

const NoMore = styled.div`
  background-color: transparent;
  border: 2px solid ${theme.colors.gray400};
  border-radius: ${theme.borderRadius.buttons};
  margin: ${rem(16)} auto;
  display: block;
  text-align: center;

  padding: ${rem(14)} ${rem(24)} ${rem(16)};
  height: ${rem(56)};

  width: 100%;

  ${mediaMin.xxs`  
    max-width: ${rem(320)};
  `};
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
    noMoreShots,
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
      {isError && <ErrorMessage>{DRIBBBLE_STATUS[locale].error}</ErrorMessage>}

      {isLoading && placeholderArr.map((i) => <DribbblePostPlaceholder key={i} />)}
      {!isLoading && dribbblePosts.map((post) => <DribbblePost key={post.id} post={post} />)}

      {isLoadingMore && placeholderArr.map((i) => <DribbblePostPlaceholder key={i} />)}

      {!noMoreShots ? (
        <StyledLoadMore onClick={loadMorePosts}>
          {!isLoading && !isLoadingMore && (
            <FormattedMessage id="dribbbleLoadMore">
              {(txt) => <LoadMoreLabel>{txt}</LoadMoreLabel>}
            </FormattedMessage>
          )}
          {(isLoading || isLoadingMore) && <Spinner dark />}
        </StyledLoadMore>
      ) : (
        <NoMore>
          <FormattedMessage id="dribbbleNoMore">
            {(txt) => <LoadMoreLabel>{txt}</LoadMoreLabel>}
          </FormattedMessage>
        </NoMore>
      )}
    </DribbblePostsWrapper>
  );
}

export default DribbblePosts;

DribbblePosts.propTypes = {
  locale: PropTypes.string.isRequired,
};
