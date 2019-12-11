import React, { useState, useRef } from "react";
import { FormattedMessage } from "react-intl";
import { useInView } from "react-intersection-observer";

import DribbblePost from "../DribbblePost/DribbblePost";
import DribbblePostPlaceholder from "../DribbblePostPlaceholder/DribbblePostPlaceholder";
import Spinner from "../Spinner/Spinner";
import useDribbblePosts from "./useDribbblePosts";
import { Col, Row } from "../Grid/Grid";

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
      </Col>
    </Row>
  );
}

export default DribbblePosts;
