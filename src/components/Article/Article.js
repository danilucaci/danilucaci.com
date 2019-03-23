import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import { theme, mediaMin, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import Tags from "../Tags/Tags";
import ArticleInfo from "../ArticleInfo/ArticleInfo";
import { BoldLink } from "../Link/Link";

const StyledArticle = styled.article`
  background-color: ${theme.colors.gray100};
  padding: ${rem(12)} ${rem(16)} ${rem(16)} ${rem(16)};
  margin-bottom: ${theme.gutters.m};

  ${mediaMin.s`
    padding: ${rem(16)} ${rem(32)} ${rem(24)} ${rem(32)};
  `};

  &:hover {
    ${theme.shadow.hover};

    & h3 {
      color: ${theme.colors.main600};
    }
  }
`;

const ContinueLink = styled(BoldLink)`
  display: block;

  padding-top: ${rem(16)};
  padding-bottom: ${rem(16)};

  &:hover {
    background-color: transparent;
  }
`;

const ArticleCopy = styled(Copy)`
  margin-top: ${rem(12)};
  margin-bottom: ${rem(16)};
`;

const StyledH3 = styled.h3`
  margin-top: ${rem(8)};
  margin-bottom: ${rem(12)};
`;

const Article = (props) => (
  <StyledArticle>
    <header>
      <Tags tags={props.tags} />
      <StyledH3>{props.title}</StyledH3>
      <ArticleInfo date={props.date} timeToRead={props.timeToRead} />
    </header>
    <ArticleCopy className="copy">{props.snippet}</ArticleCopy>
    <FormattedMessage id="articleLinkContinue">
      {(txt) => <ContinueLink to={props.slug}>{txt}</ContinueLink>}
    </FormattedMessage>
  </StyledArticle>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  timeToRead: PropTypes.number.isRequired,
};

export default Article;
