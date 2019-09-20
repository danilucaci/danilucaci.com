import styled from "styled-components";

import {
  RobotoMonoRegularWoff2,
  RobotoMonoRegularWoff,
  RobotoMonoItalicWoff2,
  RobotoMonoItalicWoff,
  LatoRegularWoff2,
  LatoRegularWoff,
  LatoItalicWoff2,
  LatoItalicWoff,
  LatoBoldWoff2,
  LatoBoldWoff,
  WorkSansBoldWoff2,
  WorkSansBoldWoff,
  WorkSansMediumWoff2,
  WorkSansMediumWoff,
  WorkSansRegularWoff2,
  WorkSansRegularWoff,
} from "../fonts";

export const Page = styled.div`
  /* Sticky Footer  */
  display: flex;
  flex-flow: column;
  min-height: 100vh;

  & main {
    flex: 1 0 auto;
  }

  @font-face {
    font-family: RobotoMono;
    font-style: normal;
    /* displays text with fallback font and replaces when the font is ready */
    font-display: swap;
    font-weight: 400;
    src: url('${RobotoMonoRegularWoff2}') format('woff2'), 
    url('${RobotoMonoRegularWoff}') format('woff');
  }

  @font-face {
    font-family: RobotoMonoItalic;
    font-style: italic;
    /* displays text with fallback font and replaces when the font is ready */
    font-display: swap;
    font-weight: 400;
    src: url('${RobotoMonoItalicWoff2}') format('woff2'), 
    url('${RobotoMonoItalicWoff}') format('woff');
  }

  @font-face {
    font-family: Lato;
    font-style: normal;
    /* displays text with fallback font and replaces when the font is ready */
    font-display: swap;
    font-weight: 400;
    src: url('${LatoRegularWoff2}') format('woff2'), 
    url('${LatoRegularWoff}') format('woff');
  }

  @font-face {
    font-family: LatoBold;
    font-style: normal;
    /* displays text with fallback font and replaces when the font is ready */
    font-display: swap;
    font-weight: 700;
    src: url('${LatoBoldWoff2}') format('woff2'), 
    url('${LatoBoldWoff}') format('woff');
  }

  @font-face {
    font-family: LatoItalic;
    font-style: italic;
    /* displays text with fallback font and replaces when the font is ready */
    font-display: swap;
    font-weight: 400;
    src: url('${LatoItalicWoff2}') format('woff2'), 
    url('${LatoItalicWoff}') format('woff');
  }

  @font-face {
    font-family: WorkSans;
    font-style: normal;
    /* displays text with fallback font and replaces when the font is ready */
    font-display: swap;
    font-weight: 400;
    src: url('${WorkSansRegularWoff2}') format('woff2'), 
    url('${WorkSansRegularWoff}') format('woff');
  }

  @font-face {
    font-family: WorkSansMedium;
    font-style: normal;
    /* displays text with fallback font and replaces when the font is ready */
    font-display: swap;
    font-weight: 500;
    src: url('${WorkSansMediumWoff2}') format('woff2'), 
    url('${WorkSansMediumWoff}') format('woff');
  }

  @font-face {
    font-family: WorkSansBold;
    font-style: normal;
    /* displays text with fallback font and replaces when the font is ready */
    font-display: swap;
    font-weight: 700;
    src: url('${WorkSansBoldWoff2}') format('woff2'), 
    url('${WorkSansBoldWoff}') format('woff');
  }
`;
