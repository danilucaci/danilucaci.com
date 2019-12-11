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
import AriaText from "../AriaText/AriaText";

function CaseStudyCard(props) {
  return (
    <StyledCaseStudyCard aria-labelledby="case-study-title">
      <CaseStudyImgWrapper>
        <Img
          title={props.title}
          alt={props.snippet}
          fluid={props.cardImage}
          fadeIn
        />
      </CaseStudyImgWrapper>
      <CaseStudyCardContents>
        <TagsWrapper>
          {props.tagsInCaseStudy.map((tag) => (
            <Tag key={tag}>
              <AriaText>tag: </AriaText>
              {tag}
            </Tag>
          ))}
        </TagsWrapper>
        <StyledH3 as={props.cardHeadingLevel} id="case-study-title">
          {props.title}
        </StyledH3>
        <Copy>{props.snippet}</Copy>
        <FormattedMessage id="article.link.continue">
          {(txt) => <ContinueLink to={props.slug}>{txt}</ContinueLink>}
        </FormattedMessage>
      </CaseStudyCardContents>
    </StyledCaseStudyCard>
  );
}

CaseStudyCard.propTypes = {
  title: string.isRequired,
  slug: string.isRequired,
  snippet: string.isRequired,
  tagsInCaseStudy: arrayOf(string).isRequired,
  cardImage: shape({
    aspectRatio: number.isRequired,
    sizes: string.isRequired,
    src: string.isRequired,
    srcWebp: string.isRequired,
    srcSet: string.isRequired,
    srcSetWebp: string.isRequired,
  }).isRequired,
  cardHeadingLevel: string,
};

CaseStudyCard.defaultProps = {
  cardHeadingLevel: "h3",
};

export default CaseStudyCard;
