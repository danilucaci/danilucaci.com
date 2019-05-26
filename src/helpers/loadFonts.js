import { detectDataSaverMode, detectSlowConnectionType } from "./helpers";
import * as Sentry from "@sentry/browser";

const FontFaceObserver = require("fontfaceobserver");

const NODE_ENV = process.env.NODE_ENV;

export const loadFonts = () => {
  const RobotoMonoRegular = new FontFaceObserver("Roboto Mono Regular");
  const RobotoMonoItalic = new FontFaceObserver("Roboto Mono Italic", {
    style: "italic",
  });
  const LatoRegular = new FontFaceObserver("Lato", {
    weight: 400,
  });
  const LatoBold = new FontFaceObserver("Lato Bold", {
    weight: 700,
  });
  const LatoItalic = new FontFaceObserver("Lato Italic", {
    weight: 400,
    style: "italic",
  });
  const MerriweatherBold = new FontFaceObserver("Merriweather Bold", {
    weight: 700,
  });
  const MerriweatherRegular = new FontFaceObserver("Merriweather Regular", {
    weight: 400,
  });
  const MerriweatherLight = new FontFaceObserver("Merriweather Light", {
    weight: 300,
  });

  Promise.all([
    RobotoMonoRegular.load(),
    RobotoMonoItalic.load(),
    LatoRegular.load(),
    LatoBold.load(),
    LatoItalic.load(),
    MerriweatherBold.load(),
    MerriweatherRegular.load(),
    MerriweatherLight.load(),
  ])
    .then(() => {
      document.documentElement.className += " fonts-loaded";
      // Optimization for Repeat Views
      sessionStorage.fontsLoadedPolyfill = true;
      if (NODE_ENV === "development") {
        console.log("%c Fonts loaded.", "color: #79E36B");
      }
    })
    .catch((error) => {
      Sentry.captureException(error);
    });
};

export const checkFontsLoaded = () => {
  if (sessionStorage.fontsLoadedPolyfill) {
    const isLoaded = document.documentElement.className.includes("fonts-loaded");
    // Only add the class when it is not already added
    if (!isLoaded) {
      document.documentElement.className += " fonts-loaded";
    }
    if (NODE_ENV === "development") {
      console.log("%c Fonts already loaded.", "color: #79E36B");
    }
  } else {
    // Don’t load fonts if  the user has data saver on or is on a slow connection
    if (detectDataSaverMode() || detectSlowConnectionType()) {
      return;
    }
    loadFonts();
  }
};
