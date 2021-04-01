import React, { useRef, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import axios from "axios";
import { useInView } from "react-intersection-observer";

import DribbblePost from "../DribbblePost";
import DribbblePostPlaceholder from "../DribbblePostPlaceholder";
import Spinner from "../Spinner";
import useDribbblePosts from "../../hooks/useDribbblePosts";
import { Col, Row } from "../Grid";

import {
  Title,
  ErrorMessageWrapper,
  ErrorMessage,
  StyledLoadMore,
} from "./styles";

function DribbblePosts() {
  const [
    {
      dribbblePosts,
      shotsPerPage,
      dribbblePage,
      isLoading,
      isLoadingMore,
      initialFetchDone,
      isError,
      listEnd,
    },
    dispatch,
    { fetchInitialPosts, fetchMore, setListEnd },
  ] = useDribbblePosts();

  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: "0px",
    triggerOnce: true,
  });

  const buttonRef = useRef();
  const axiosSourceRef = useRef();

  const placeholderArr = Array.from({ length: shotsPerPage }, (v, i) => i);

  useEffect(() => {
    axiosSourceRef.current = axios.CancelToken.source();

    return () => {
      // Prevent memory leak when moving to another page and cancel axios request
      if (axiosSourceRef.current) {
        axiosSourceRef.current.cancel();
      }
    };
  }, [dispatch, fetchInitialPosts, inView, initialFetchDone]);

  useEffect(() => {
    if (inView && !initialFetchDone) {
      dispatch(fetchInitialPosts(axiosSourceRef.current));
    }
  }, [dispatch, fetchInitialPosts, inView, initialFetchDone]);

  useEffect(() => {
    if (
      initialFetchDone &&
      !isLoadingMore &&
      dribbblePage * shotsPerPage > dribbblePosts.length
    ) {
      dispatch(setListEnd());
    }
  }, [
    dispatch,
    dribbblePage,
    dribbblePosts.length,
    initialFetchDone,
    isLoadingMore,
    setListEnd,
    shotsPerPage,
  ]);

  return (
    <Row
      spaced
      col12
      data-testid="Dribbble__Posts__Wrapper"
      aria-labelledby="dribbble-title"
    >
      <Col ref={ref}>
        <FormattedMessage id="dribbble.header">
          {(txt) => <Title id="dribbble-title">{txt}</Title>}
        </FormattedMessage>

        {isError && (
          <ErrorMessageWrapper data-testid="Dribbble__Posts__ErrorMessage">
            <FormattedMessage id="dribbble.status.error">
              {(txt) => <ErrorMessage>{txt}</ErrorMessage>}
            </FormattedMessage>
          </ErrorMessageWrapper>
        )}

        <noscript>
          <ErrorMessageWrapper polite>
            <FormattedMessage id="dribbble.status.no.js">
              {(txt) => <ErrorMessage polite>{txt}</ErrorMessage>}
            </FormattedMessage>
          </ErrorMessageWrapper>
        </noscript>
      </Col>

      {isLoading &&
        !isError &&
        placeholderArr.map((i) => (
          <Col m={6} xxl={4} key={i}>
            <DribbblePostPlaceholder />
          </Col>
        ))}

      {!isLoading &&
        !isError &&
        dribbblePosts.map((post) => (
          <Col m={6} xxl={4} key={post.id}>
            <DribbblePost key={post.id} post={post} />
          </Col>
        ))}

      {isLoadingMore &&
        placeholderArr.map((i) => (
          <Col m={6} xxl={4} key={i}>
            <DribbblePostPlaceholder />
          </Col>
        ))}

      <Col>
        {!isError && (
          <StyledLoadMore
            ref={buttonRef}
            disabled={listEnd}
            onClick={() => {
              // remove focus after click
              if (buttonRef.current) {
                buttonRef.current.blur();
              }

              if (axiosSourceRef.current) {
                dispatch(fetchMore(axiosSourceRef.current));
              }
            }}
          >
            {listEnd ? (
              <FormattedMessage id="dribbble.no.more">
                {(txt) => <>{txt}</>}
              </FormattedMessage>
            ) : (
              <>
                {!isLoading && !isLoadingMore && (
                  <FormattedMessage id="dribbble.load.more">
                    {(txt) => <>{txt}</>}
                  </FormattedMessage>
                )}
                {(isLoading || isLoadingMore) && <Spinner />}
              </>
            )}
          </StyledLoadMore>
        )}
      </Col>
    </Row>
  );
}

export default DribbblePosts;
