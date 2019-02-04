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
    padding: ${rem(16)} ${rem(24)} ${rem(16)};
  `};

  position: relative;

  &:hover {
    ${theme.shadow.hover};
  }

  &:hover {
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

const StyledH3 = styled.h3`
  margin-bottom: ${rem(8)};
`;

const Article = (props) => {
  return (
    <StyledArticle>
      <header>
        <Tags tags={props.tags} spaced />
        <StyledH3>{props.title}</StyledH3>
        <ArticleInfo date={props.date} timeToRead={props.timeToRead} />
      </header>
      <Copy className="copy">{props.snippet}</Copy>
      <FormattedMessage id="articleLinkContinue">
        {(txt) => <ContinueLink to={props.slug}>{txt}</ContinueLink>}
      </FormattedMessage>
    </StyledArticle>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  timeToRead: PropTypes.number.isRequired,
};

export default Article;
