import React, { useState, useRef } from "react";
import { FormattedMessage } from "react-intl";
import { useInView } from "react-intersection-observer";

import DribbblePost from "../DribbblePost/DribbblePost";
import DribbblePostPlaceholder from "../DribbblePostPlaceholder/DribbblePostPlaceholder";
import Spinner from "../Spinner/Spinner";
import useDribbblePosts from "./useDribbblePosts";
import { GridCol, GridRow } from "../Grid/Grid";

import {
  Title,
  ErrorMessageWrapper,
  ErrorMessage,
  StyledLoadMore,
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

  const buttonRef = useRef();

  const [waitingForInView, setWaitingForInView] = useState(true);

  const placeholderArr = Array.from({ length: shotsPerPage }, (v, i) => i);

  if (inView) {
    if (waitingForInView) {
      setWaitingForInView(false);
      dispatch({ type: "FETCH_INIT" });
    }
  }

  return (
    <GridRow spaced col12>
      <GridCol ref={ref}>
        <FormattedMessage id="dribbble.header">
          {(txt) => <Title>{txt}</Title>}
        </FormattedMessage>

        {isError && (
          <ErrorMessageWrapper>
            <FormattedMessage id="dribbble.status.error">
              {(txt) => <ErrorMessage>{txt}</ErrorMessage>}
            </FormattedMessage>
          </ErrorMessageWrapper>
        )}
      </GridCol>

      {isLoading &&
        !isError &&
        placeholderArr.map((i) => (
          <GridCol m={6} xxl={4} key={i}>
            <DribbblePostPlaceholder />
          </GridCol>
        ))}

      {!isLoading &&
        !isError &&
        dribbblePosts.map((post) => (
          <GridCol m={6} xxl={4} key={post.id}>
            <DribbblePost key={post.id} post={post} />
          </GridCol>
        ))}

      {isLoadingMore &&
        placeholderArr.map((i) => (
          <GridCol m={6} xxl={4} key={i}>
            <DribbblePostPlaceholder />
          </GridCol>
        ))}

      <GridCol>
        {!isError && (
          <StyledLoadMore
            ref={buttonRef}
            onClick={() => {
              // remove focus after click
              if (buttonRef.current) {
                buttonRef.current.blur();
              }

              dispatch({ type: "FETCH_MORE" });
            }}
          >
            {!isLoading && !isLoadingMore && (
              <FormattedMessage id="dribbble.load.more">
                {(txt) => <>{txt}</>}
              </FormattedMessage>
            )}
            {(isLoading || isLoadingMore) && <Spinner />}
          </StyledLoadMore>
        )}
      </GridCol>
    </GridRow>
  );
}

export default DribbblePosts;

DribbblePosts.propTypes = {};
