import React from "react";
import { string, object } from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
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
        <GatsbyImage image={cardImage} title={title} alt={snippet} />
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
  cardImage: object.isRequired,
};

CaseStudyCard.defaultProps = {
  cardHeadingLevel: "h3",
};

export default CaseStudyCard;
