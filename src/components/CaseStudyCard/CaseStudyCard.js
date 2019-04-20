import React from "react";
import { string, shape, number, arrayOf } from "prop-types";
import Img from "gatsby-image";
import { FormattedMessage } from "react-intl";

import {
  StyledCaseStudyCard,
  CaseStudyImgWrapper,
  CaseStudyCardContents,
  StyledH3,
  Tag,
  TagsWrapper,
  ContinueLink,
} from "./styles";

import { Copy } from "../Copy/Copy";

const CaseStudyCard = (props) => (
  <StyledCaseStudyCard>
    <CaseStudyImgWrapper>
      <Img title={props.title} alt={props.snippet} fluid={props.image} />
    </CaseStudyImgWrapper>
    <CaseStudyCardContents>
      <TagsWrapper>
        {props.tagsInCaseStudy.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsWrapper>
      <StyledH3>{props.title}</StyledH3>
      <Copy>{props.snippet}</Copy>
      <FormattedMessage id="article.link.continue">
        {(txt) => <ContinueLink to={props.slug}>{txt}</ContinueLink>}
      </FormattedMessage>
    </CaseStudyCardContents>
  </StyledCaseStudyCard>
);

CaseStudyCard.propTypes = {
  title: string.isRequired,
  slug: string.isRequired,
  snippet: string.isRequired,
  tagsInCaseStudy: arrayOf(string).isRequired,
  image: shape({
    aspectRatio: number.isRequired,
    sizes: string.isRequired,
    src: string.isRequired,
    srcSet: string.isRequired,
  }).isRequired,
};

export default CaseStudyCard;
