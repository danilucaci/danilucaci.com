---
title: "Como hacer mejores gifs 3"
description: "Como hacer mejores gifs, que pesan menos."
date: "2018-12-01"
category: "blog"
intro: "Los gifs molan, pero pesan demasiado.
|
Haz esto para mejorarlos."
snippet: "Los gifs molan, pero pesan demasiado."
tags:
    - css3
    - perfmatters
posted: true
locale: "es"
twinPost: "How to make better gifs 3"
---

##Como hacer videos mas ligeros

Los gifs pesan demasiado.

```jsx
class Index extends Component {
  getCaseStudyList() {
    let caseStudyList = [];

    this.props.data.work.edges.forEach((edge) => {
      caseStudyList.push({
        slug: edge.node.fields.slug,
        tagsInCaseStudy: edge.node.frontmatter.tags,
        title: edge.node.frontmatter.title,
        date: edge.node.frontmatter.date,
        description: edge.node.frontmatter.description,
        image: edge.node.frontmatter.image.childImageSharp.fluid,
      });
    });

    return caseStudyList;
  }

  render() {
    const caseStudyList = this.getCaseStudyList();

    let locale = this.props.pageContext.locale;
    let changeLanguage = "";

    if (locale === "en") {
      changeLanguage = "/es";
    } else if (locale === "es") {
      changeLanguage = "/";
    }

    return (
      <Layout location={this.props.location} locale={locale}>
        <SEO />
        <SiteHeader locale={locale} />
        <Main role="main">
          <SEO />
          <IndexHeader>
            <FormattedMessage id="indexH1">
              {(txt) => <StyledH1>{txt}</StyledH1>}
            </FormattedMessage>
            <FormattedMessage id="indexSubhead">
              {(txt) => <Subhead>{txt}</Subhead>}
            </FormattedMessage>
            <Subhead />
          </IndexHeader>
          <AltStack>
            <StackContents>
              <FormattedMessage id="indexServicesHeading">
                {(txt) => <ServicesH2>{txt}</ServicesH2>}
              </FormattedMessage>
              <ServicesItem>
                <FormattedMessage id="indexServices1">
                  {(txt) => <ServicesH4>{txt}</ServicesH4>}
                </FormattedMessage>
                <BulletList>
                  <FormattedMessage id="indexServicesList01">
                    {(txt) => <BulletListItem>{txt}</BulletListItem>}
                  </FormattedMessage>
                  <FormattedMessage id="indexServicesList02">
                    {(txt) => <BulletListItem>{txt}</BulletListItem>}
                  </FormattedMessage>
                  <FormattedMessage id="indexServicesList03">
                    {(txt) => <BulletListItem>{txt}</BulletListItem>}
                  </FormattedMessage>
                  <FormattedMessage id="indexServicesList04">
                    {(txt) => <BulletListItem>{txt}</BulletListItem>}
                  </FormattedMessage>
                </BulletList>
              </ServicesItem>
              <ServicesItem>
                <ServicesH4>UI Design</ServicesH4>
                <BulletList>
                  <BulletListItem>Competitor Research</BulletListItem>
                  <BulletListItem>Wireframing</BulletListItem>
                  <BulletListItem>Lo–Fi Prototypes</BulletListItem>
                  <BulletListItem>Hi–Fi Prototypes</BulletListItem>
                </BulletList>
              </ServicesItem>
              <ServicesItem>
                <ServicesH4>Front&ndash;End Development</ServicesH4>
                <BulletList>
                  <BulletListItem>Competitor Research</BulletListItem>
                  <BulletListItem>Wireframing</BulletListItem>
                  <BulletListItem>Lo–Fi Prototypes</BulletListItem>
                  <BulletListItem>Hi–Fi Prototypes</BulletListItem>
                </BulletList>
              </ServicesItem>
            </StackContents>
          </AltStack>
          <Stack>
            <StackContents>
              <CaseStudiesH2>Case Studies</CaseStudiesH2>
              <CaseStudiesCopy>
                Case studies showcasing my discovery, research, prototyping and
                designing iterative process.
              </CaseStudiesCopy>
              {caseStudyList.map((caseStudyCard) => (
                <CaseStudyCard
                  key={caseStudyCard.title}
                  slug={caseStudyCard.slug}
                  tagsInCaseStudy={caseStudyCard.tagsInCaseStudy}
                  title={caseStudyCard.title}
                  date={caseStudyCard.date}
                  description={caseStudyCard.description}
                  image={caseStudyCard.image}
                />
              ))}
            </StackContents>
          </Stack>
        </Main>
        <Stack>
          <ContactCard />
        </Stack>
        <SiteFooter gray changeLanguage={changeLanguage} locale={locale} />
      </Layout>
    );
  }
}
```
