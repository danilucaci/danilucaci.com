import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import axios from "axios";
import { FormattedMessage } from "react-intl";

import DribbblePostPlaceholder from "../DribbblePostPlaceholder/DribbblePostPlaceholder";
import DribbblePost from "../DribbblePost/DribbblePost";
import { theme, mediaMin, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import { LoadComments } from "../Button/Button";
import Spinner from "../Spinner/Spinner";

import { DRIBBBLE_STATUS } from "../../i18n/i18n";

const GATSBY_DRIBBBLE_TOKEN = process.env.GATSBY_DRIBBBLE_TOKEN;

const DribbblePostsWrapper = styled.section`
  max-width: ${theme.contain.wrapper.col10};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${rem(32)};

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
    margin-bottom: ${rem(64)};
  `};
`;

const DribbblePostH1 = styled.h1`
  margin-top: ${rem(16)};
  margin-bottom: ${rem(8)};
`;

const DribbbleSubhead = styled(Copy)`
  margin-bottom: ${rem(32)};

  ${mediaMin.s`
      margin-bottom: ${rem(48)};
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

function DribbblePosts({ locale }) {
  // How many posts per page and placeholder elements
  // Also handles how many more shots to load
  // when the "Load More..." button is pressed
  const SHOTS_PER_PAGE = 4;
  const dribbblePage = 1;

  const [dribbblePosts, setDribbblePosts] = React.useState({
    posts: [],
  });

  // Set isLoading by default to true
  // If set in useEffect() it will be changed on each render
  // and the cause a new render
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoadingMore, setIsLoadingMore] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [postsFetched, setPostsFetched] = React.useState(false);
  const [fetchedShotsPerPage, setFetchedShotsPerPage] = React.useState(SHOTS_PER_PAGE);

  /**
  /* --------------------------------------------------
   * Create index's in the placeholder array to use as a key in the render method with .map()
   * Show as many placeholder items as posts I want on the page
   * This way I don't get reflow
   * --------------------------------------------------
   * Steps:
   * 1 - Create a new Array with a length = to SHOTS_PER_PAGE (SHOTS_PER_PAGE = 4, 4 elements)
   * 2 - The second argument for Array.from() is a map function that runs on each element
   * The array is initialized with `undefined` on each position.
   * The value of `v` below will be `undefined`.
   */
  const placeholderArr = Array.from({ length: SHOTS_PER_PAGE }, (v, i) => i);

  React.useEffect(() => {
    let didCancel = false;

    const getDribbblePosts = async () => {
      try {
        // If isLoading is set here it will cause a rerender
        // setIsLoading(true);
        const dribbbleRes = await axios.get(`https://api.dribbble.com/v2/user/shots?access_token=${GATSBY_DRIBBBLE_TOKEN}&page=${dribbblePage}&per_page=${fetchedShotsPerPage}`);

        // didCancel gets set to true when the component unmounts in the return from useEffect
        if (!didCancel) {
          setDribbblePosts((prevState) => ({
            ...prevState,
            posts: dribbbleRes.data,
          }));

          /**
           * --------------------------------------------------
           *  Handle each loading variable separetely
           *  to avoid rendering placeholders for the already fetched shots
           *  and only add new placeholders for the incomming shots
           */
          if (isLoading) setIsLoading(false);
          if (isLoadingMore) setIsLoadingMore(false);
          setPostsFetched(true);
        }
      } catch (error) {
        console.warn(error);
        if (!didCancel) {
          setIsLoading(false);
          setIsLoadingMore(false);
          setPostsFetched(true);
          setIsError(true);
        }
      }
    };

    if (!postsFetched && !didCancel) {
      getDribbblePosts();
    }

    return () => {
      // Prevent memory leak when moving to another page
      didCancel = true;
    };
  }, [dribbblePosts, fetchedShotsPerPage, postsFetched, isLoading, isLoadingMore, isError]);

  // To load more posts, add SHOTS_PER_PAGE to fetchedShotsPerPage,
  // The axios.get() url will change and request more posts
  // Initially requests fetchedShotsPerPage = SHOTS_PER_PAGE
  // Load more happens and requests fetchedShotsPerPage + SHOTS_PER_PAGE
  // 4 posts, 4 + 4 = 8 posts, 4 + 4 + 4 = 12 posts ...
  function loadMorePosts() {
    setFetchedShotsPerPage(fetchedShotsPerPage + SHOTS_PER_PAGE);
    setPostsFetched(false);
    setIsLoadingMore(true);
  }

  return (
    <DribbblePostsWrapper>
      <FormattedMessage id="dribbbleHeader">
        {(txt) => <DribbblePostH1>{txt}</DribbblePostH1>}
      </FormattedMessage>
      <FormattedMessage id="dribbbleSubhead">
        {(txt) => <DribbbleSubhead>{txt}</DribbbleSubhead>}
      </FormattedMessage>
      {isError && <ErrorMessage>{DRIBBBLE_STATUS[locale].error}</ErrorMessage>}

      {isLoading && placeholderArr.map((i) => <DribbblePostPlaceholder key={i} />)}
      {!isLoading && dribbblePosts.posts.map((post) => <DribbblePost key={post.id} post={post} />)}

      {isLoadingMore && placeholderArr.map((i) => <DribbblePostPlaceholder key={i} />)}

      <StyledLoadMore onClick={loadMorePosts} isLoadingMore={isLoadingMore}>
        {!isLoadingMore && (
          <FormattedMessage id="dribbbleLoadMore">
            {(txt) => <LoadMoreLabel>{txt}</LoadMoreLabel>}
          </FormattedMessage>
        )}
        {isLoadingMore && <Spinner dark />}
      </StyledLoadMore>
    </DribbblePostsWrapper>
  );
}

export default DribbblePosts;

DribbblePosts.propTypes = {
  locale: PropTypes.string.isRequired,
};
