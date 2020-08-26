import localePaths from "../i18n/localePaths";

export const TEST_GATSBY_NODE_EDGES = {
  en: [
    {
      node: {
        fields: { slug: `${localePaths["en"].work}/case-study-1` },
        frontmatter: {
          title: "case study 1 title",
          date: "2020-01-20",
          category: "work",
          tags: ["react"],
          posted: true,
          snippet: "case study 1 snippet",
          twinPost: `${localePaths["es"].work}/trabajo-1`,
          locale: "en",
          cardImage: {
            childImageSharp: {
              fluid: {
                src: "case-study-1-img-1-src.png",
                srcSet:
                  "/static/case-study-1-img/19561/img_presentation.png 186w,\n/static/case-study-1-img/769ff/img_presentation.png 372w,\n/static/case-study-1-img/56bad/img_presentation.png 744w,\n/static/case-study-1-img/7cdbc/img_presentation.png 1116w,\n/static/case-study-1-img/262df/img_presentation.png 1488w,\n/static/case-study-1-img/22f13/img_presentation.png 2048w",
                srcWebp: "/static/case-study-1-img/10d7e/img_presentation.webp",
                srcSetWebp:
                  "/static/case-study-1-img/8454d/img_presentation.webp 186w,\n/static/case-study-1-img/6c71d/img_presentation.webp 372w,\n/static/case-study-1-img/10d7e/img_presentation.webp 744w,\n/static/case-study-1-img/2cc04/img_presentation.webp 1116w,\n/static/case-study-1-img/26f9b/img_presentation.webp 1488w,\n/static/case-study-1-img/96ec1/img_presentation.webp 2048w",
                aspectRatio: 1.3285714285714285,
                sizes: "(max-width: 744px) 100vw, 744px",
                base64:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAACAElEQVQoz11T7Y7aMBDk3atK/dmqb1G1j1G1NARyIYFKla5FBxfyQYy/YzsHN7YDlc5aohjv7MzsOjOlNBOacqWHIYbEP1wIqfDyJvRgulNPKEU2trNhGHpmemZfpnVBCs6sc4Mx/yPUvV6vRbnZ7XbWOlSf4dcTUh2PlHHKBaHMGINjSilSL5fL9bastXErpQIKBDOwN93p+dhQJoRSeBhr94cD5yKCI+Dpaf/j5/zjp8/v3n/48vXbr2TBhfTMgMEJrES3zo1aa4FSWo/jCCMAf58viz8Vo2S/P6AfSZIC4sFcqKpuyNmDu54ADMMS4ry0ITJnD+vHvzu8xFpFUXowck5EVHUHTuRCDMBQzhjXUhqtI3hdlFV1RDtG50KtfGKmQoIQMIDxsGC2vvnIuzep3GwJOUsBQb4XWZbfZcu6aaNs8BvrkIcpD0HzxFyWaIvD/LTG9iFf38BSHeuW+6oKV8CNYHaM82B6kp2vi7btgucXX2tdTGDCYZuBNsqGZ3BCofD+XQRvNlsw+3LKM6+yGzM5i6Y9QfbUsDGOSkaS+MTFqusG0i6h2+nq5pkJ2XY9btidGcNFY+PFmpi3v70jfzYGz2FUoELEtsXAbDFnF1qNFauky1Vd13g3oYvJIm39nJUWIe6fjghX9x6hnHn8t5vPkzRdLRCL5SrLcfQKgDpQ+3cy3AcAAAAASUVORK5CYII=",
              },
            },
          },
        },
      },
    },
  ],
  es: [
    {
      node: {
        fields: { slug: `${localePaths["es"].work}/trabajo-1` },
        frontmatter: {
          title: "título del trabajo 1",
          date: "2020-01-20",
          category: "work",
          tags: ["react"],
          posted: true,
          snippet: "trabajo 1 snippet",
          twinPost: `${localePaths["en"].work}/case-study-1`,
          locale: "es",
          cardImage: {
            childImageSharp: {
              fluid: {
                src: "trabajo-1-img-1-src.png",
                srcSet:
                  "/static/trabajo-1-img/19561/img_presentation.png 186w,\n/static/trabajo-1-img/769ff/img_presentation.png 372w,\n/static/trabajo-1-img/56bad/img_presentation.png 744w,\n/static/trabajo-1-img/7cdbc/img_presentation.png 1116w,\n/static/trabajo-1-img/262df/img_presentation.png 1488w,\n/static/trabajo-1-img/22f13/img_presentation.png 2048w",
                srcWebp: "/static/trabajo-1-img/10d7e/img_presentation.webp",
                srcSetWebp:
                  "/static/trabajo-1-img/8454d/img_presentation.webp 186w,\n/static/trabajo-1-img/6c71d/img_presentation.webp 372w,\n/static/trabajo-1-img/10d7e/img_presentation.webp 744w,\n/static/trabajo-1-img/2cc04/img_presentation.webp 1116w,\n/static/trabajo-1-img/26f9b/img_presentation.webp 1488w,\n/static/trabajo-1-img/96ec1/img_presentation.webp 2048w",
                aspectRatio: 1.3285714285714285,
                sizes: "(max-width: 744px) 100vw, 744px",
                base64:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAACAElEQVQoz11T7Y7aMBDk3atK/dmqb1G1j1G1NARyIYFKla5FBxfyQYy/YzsHN7YDlc5aohjv7MzsOjOlNBOacqWHIYbEP1wIqfDyJvRgulNPKEU2trNhGHpmemZfpnVBCs6sc4Mx/yPUvV6vRbnZ7XbWOlSf4dcTUh2PlHHKBaHMGINjSilSL5fL9bastXErpQIKBDOwN93p+dhQJoRSeBhr94cD5yKCI+Dpaf/j5/zjp8/v3n/48vXbr2TBhfTMgMEJrES3zo1aa4FSWo/jCCMAf58viz8Vo2S/P6AfSZIC4sFcqKpuyNmDu54ADMMS4ry0ITJnD+vHvzu8xFpFUXowck5EVHUHTuRCDMBQzhjXUhqtI3hdlFV1RDtG50KtfGKmQoIQMIDxsGC2vvnIuzep3GwJOUsBQb4XWZbfZcu6aaNs8BvrkIcpD0HzxFyWaIvD/LTG9iFf38BSHeuW+6oKV8CNYHaM82B6kp2vi7btgucXX2tdTGDCYZuBNsqGZ3BCofD+XQRvNlsw+3LKM6+yGzM5i6Y9QfbUsDGOSkaS+MTFqusG0i6h2+nq5pkJ2XY9btidGcNFY+PFmpi3v70jfzYGz2FUoELEtsXAbDFnF1qNFauky1Vd13g3oYvJIm39nJUWIe6fjghX9x6hnHn8t5vPkzRdLRCL5SrLcfQKgDpQ+3cy3AcAAAAASUVORK5CYII=",
              },
            },
          },
        },
      },
    },
  ],
};
