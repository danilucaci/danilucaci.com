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

function CaseStudyCard(props) {
  const [didLoad, setDidLoad] = React.useState(false);

  return (
    <StyledCaseStudyCard>
      <CaseStudyImgWrapper didLoad={didLoad}>
        <Img
          title={props.title}
          alt={props.snippet}
          fluid={props.cardimage}
          fadeIn
          onLoad={() => setDidLoad(true)}
        />
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
}

CaseStudyCard.propTypes = {
  title: string.isRequired,
  slug: string.isRequired,
  snippet: string.isRequired,
  tagsInCaseStudy: arrayOf(string).isRequired,
  cardimage: shape({
    aspectRatio: number.isRequired,
    sizes: string.isRequired,
    src: string.isRequired,
    srcWebp: string.isRequired,
    srcSet: string.isRequired,
    srcSetWebp: string.isRequired,
  }).isRequired,
};

export default CaseStudyCard;
