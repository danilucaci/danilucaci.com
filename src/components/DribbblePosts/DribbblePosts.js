import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useInView } from "react-intersection-observer";

import DribbblePost from "../DribbblePost/DribbblePost";
import DribbblePostPlaceholder from "../DribbblePostPlaceholder/DribbblePostPlaceholder";
import Spinner from "../Spinner/Spinner";
import useDribbblePosts from "./useDribbblePosts";
import { GridCol } from "../Grid/Grid";

import {
  Row,
  Subhead,
  StyledHR,
  ErrorMessageWrapper,
  ErrorMessage,
  StyledLoadMore,
  LoadMoreLabel,
} from "./styles";

function DribbblePosts() {
  const [
    { dribbblePosts, shotsPerPage, isLoading, isLoadingMore, isError },
    dispatch,
  ] = useDribbblePosts();

  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: "0px",
    triggerOnce: true,
  });

  const [waitingForInView, setWaitingForInView] = useState(true);

  const placeholderArr = Array.from({ length: shotsPerPage }, (v, i) => i);

  if (inView) {
    if (waitingForInView) {
      setWaitingForInView(false);
      dispatch({ type: "FETCH_INIT" });
    }
  }

  return (
    <Row spaced>
      <GridCol ref={ref}>
        <StyledHR />
        <FormattedMessage id="dribbble.header">
          {(txt) => <h2>{txt}</h2>}
        </FormattedMessage>
        <FormattedMessage id="dribbble.subhead">
          {(txt) => <Subhead>{txt}</Subhead>}
        </FormattedMessage>

        {isError && (
          <ErrorMessageWrapper>
            <FormattedMessage id="dribbble.status.error">
              {(txt) => <ErrorMessage>{txt}</ErrorMessage>}
            </FormattedMessage>
          </ErrorMessageWrapper>
        )}

        {isLoading &&
          !isError &&
          placeholderArr.map((i) => <DribbblePostPlaceholder key={i} />)}
        {!isLoading &&
          !isError &&
          dribbblePosts.map((post) => (
            <DribbblePost key={post.id} post={post} />
          ))}

        {isLoadingMore &&
          placeholderArr.map((i) => <DribbblePostPlaceholder key={i} />)}

        {!isError && (
          <StyledLoadMore onClick={() => dispatch({ type: "FETCH_MORE" })}>
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

DribbblePosts.propTypes = {};
