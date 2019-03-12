import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import axios from "axios";
import { FormattedMessage } from "react-intl";

import DribbblePostPlaceholder from "../DribbblePostPlaceholder/DribbblePostPlaceholder";
import DribbblePost from "../DribbblePost/DribbblePost";
import { theme, mediaMin, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";

import { DRIBBBLE_STATUS } from "../../i18n/i18n";

const GATSBY_DRIBBBLE_TOKEN = process.env.GATSBY_DRIBBBLE_TOKEN;

const DribbblePostsWrapper = styled.section`
  max-width: ${theme.contain.wrapper.col10};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${theme.spacing.components.s};

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.m`
    margin-bottom: ${theme.spacing.components.xl};
  `};
`;

const DribbblePostH1 = styled.h2`
  margin-bottom: ${rem(8)};
`;

const DribbbleSubhead = styled(Copy)`
  margin-bottom: ${rem(32)};
`;

const ErrorMessage = styled.p`
  color: ${theme.colors.danger500};
  font-weight: 700;

  & .fonts-loaded {
    font-family: ${theme.fonts.bodyBold};
  }

  margin-top: ${rem(32)};
  margin-bottom: ${rem(32)};
`;

function DribbblePosts({ locale }) {
  const [dribbbleRes, setDribbbleRes] = React.useState({
    status: 0,
    statusText: "",
    posts: [],
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [dataFetched, setDataFetched] = React.useState(false);

  const shotsPerPage = 6;

  // Create index's in the placeholder array to use as a key in the render method with .map()
  // Show as many placeholder items as posts I want on the page
  // This way I don't get reflow
  const placeholderArr = Array.from(new Array(shotsPerPage), (val, index) => index + 1);

  React.useEffect(() => {
    let didCancel = false;

    const getDribbblePosts = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const dribbblePosts = await axios.get(`https://api.dribbble.com/v2/user/shots?access_token=${GATSBY_DRIBBBLE_TOKEN}&per_page=${shotsPerPage}`);

        if (!didCancel) {
          setDribbbleRes({
            status: dribbblePosts.status,
            statusText: dribbblePosts.statusText,
            posts: dribbblePosts.data,
          });

          setIsLoading(false);
          setDataFetched(true);
        }
      } catch (error) {
        console.warn(error);
        setIsLoading(false);
        setDataFetched(true);
        setIsError(true);
      }
    };

    if (dataFetched !== true) {
      getDribbblePosts();
    }
    return () => {
      console.log(didCancel);
      didCancel = true;
    };
  }, [dribbbleRes, isError, dataFetched, isLoading]);

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
      {!isLoading && dribbbleRes.posts.map((post) => <DribbblePost key={post.id} post={post} />)}
    </DribbblePostsWrapper>
  );
}

export default DribbblePosts;

DribbblePosts.propTypes = {
  locale: PropTypes.string.isRequired,
};
