import React from "react";
import { string, shape, number } from "prop-types";
import Img from "gatsby-image";
import { useIntl } from "react-intl";

import {
  StyledCaseStudyCard,
  CaseStudyImgWrapper,
  CaseStudyCardContents,
  StyledH3,
  ContinueLink,
} from "./styles";

import { Copy } from "../Copy";

function CaseStudyCard({ title, snippet, cardImage, slug, cardHeadingLevel }) {
  const intl = useIntl();
  const linkText = intl.formatMessage({ id: "article.link.continue.text" });
  const arrowText = intl.formatMessage({ id: "article.link.continue.arrow" });

  return (
    <StyledCaseStudyCard aria-labelledby={slug}>
      <CaseStudyImgWrapper>
        <Img title={title} alt={snippet} fluid={cardImage} fadeIn />
      </CaseStudyImgWrapper>
      <CaseStudyCardContents>
        <StyledH3 as={cardHeadingLevel} id={slug}>
          {title}
        </StyledH3>
        <Copy>{snippet}</Copy>
        <ContinueLink to={slug} aria-label={`${linkText} ${title}`}>
          {linkText}
          <span aria-hidden="true">{arrowText}</span>
        </ContinueLink>
      </CaseStudyCardContents>
    </StyledCaseStudyCard>
  );
}

CaseStudyCard.propTypes = {
  title: string.isRequired,
  slug: string.isRequired,
  snippet: string.isRequired,
  cardHeadingLevel: string,
  cardImage: shape({
    aspectRatio: number.isRequired,
    sizes: string.isRequired,
    src: string.isRequired,
    srcWebp: string.isRequired,
    srcSet: string.isRequired,
    srcSetWebp: string.isRequired,
  }).isRequired,
};

CaseStudyCard.defaultProps = {
  cardHeadingLevel: "h3",
};

export default CaseStudyCard;
