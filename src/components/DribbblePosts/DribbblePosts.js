import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import DribbblePost from "../DribbblePost/DribbblePost";
import DribbblePostPlaceholder from "../DribbblePostPlaceholder/DribbblePostPlaceholder";
import Spinner from "../Spinner/Spinner";
import useDribbbleReducer from "./DribbblePostsReducer";
import { GridCol } from "../../../src/components/Grid/Grid";

import {
  Row,
  Subhead,
  StyledHR,
  ErrorMessageWrapper,
  ErrorMessage,
  StyledLoadMore,
  LoadMoreLabel,
} from "./styles";

import { DRIBBBLE_STATUS } from "../../i18n/i18n";

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
    <Row spaced>
      <GridCol>
        <StyledHR />
        <FormattedMessage id="dribbble.header">{(txt) => <h2>{txt}</h2>}</FormattedMessage>
        <FormattedMessage id="dribbble.subhead">
          {(txt) => <Subhead>{txt}</Subhead>}
        </FormattedMessage>

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
              <FormattedMessage id="dribbble.load.more">
                {(txt) => <LoadMoreLabel>{txt}</LoadMoreLabel>}
              </FormattedMessage>
            )}
            {(isLoading || isLoadingMore) && <Spinner dark />}
          </StyledLoadMore>
        )}
      </GridCol>
    </Row>
  );
}

export default DribbblePosts;

DribbblePosts.propTypes = {
  locale: PropTypes.string.isRequired,
};
