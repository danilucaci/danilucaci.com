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

  ${(props) => (props.isLoadingMore ? "cursor: wait" : "cursor: auto")}
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
    status: 0,
    statusText: "",
    posts: [],
  });

  // Set isLoading by default to true, if set in .useEffect it will be changed on each render
  // and the cause a new render
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoadingMore, setIsLoadingMore] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [dataFetched, setDataFetched] = React.useState(false);
  const [fetchedShotsPerPage, setFetchedShotsPerPage] = React.useState(SHOTS_PER_PAGE);

  // Create index's in the placeholder array to use as a key in the render method with .map()
  // Show as many placeholder items as posts I want on the page
  // This way I don't get reflow
  const placeholderArr = Array.from(new Array(SHOTS_PER_PAGE), (val, index) => index + 1);

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
            status: dribbbleRes.status,
            statusText: dribbbleRes.statusText,
            posts: dribbbleRes.data,
          }));

          /**
          |--------------------------------------------------
          | Handle each loading variable separetely
          | to avoid rendering placeholders
          | for the already fetched shots
          | and only add new placeholders for the incomming shots
          |--------------------------------------------------
          */
          if (isLoading) setIsLoading(false);
          if (isLoadingMore) setIsLoadingMore(false);
          setDataFetched(true);
        }
      } catch (error) {
        console.warn(error);
        if (!didCancel) {
          setIsLoading(false);
          setIsLoadingMore(false);
          setDataFetched(true);
          setIsError(true);
        }
      }
    };

    if (dataFetched !== true && !didCancel) {
      getDribbblePosts();
    }

    return () => {
      // Prevent memory leak
      didCancel = true;
    };
  }, [
    dribbblePosts,
    isError,
    dataFetched,
    isLoading,
    isLoadingMore,
    SHOTS_PER_PAGE,
    fetchedShotsPerPage,
  ]);

  function loadMorePosts() {
    setFetchedShotsPerPage(fetchedShotsPerPage + SHOTS_PER_PAGE);
    setDataFetched(false);
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
        {isLoadingMore && <Spinner />}
      </StyledLoadMore>
    </DribbblePostsWrapper>
  );
}

export default DribbblePosts;

DribbblePosts.propTypes = {
  locale: PropTypes.string.isRequired,
};
