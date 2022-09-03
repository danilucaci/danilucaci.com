/* eslint-disable no-console */
import * as Sentry from "@sentry/react";
import FontFaceObserver from "fontfaceobserver";

import { detectDataSaverMode, detectSlowConnectionType } from "./helpers";

const NODE_ENV = process.env.NODE_ENV;

export const loadFonts = () => {
  const RobotoMonoRegular = new FontFaceObserver("RobotoMono", {
    weight: 400,
    style: "normal",
  });
  const RobotoMonoItalic = new FontFaceObserver("RobotoMonoItalic", {
    weight: 400,
    style: "italic",
  });
  const LatoRegular = new FontFaceObserver("Lato", {
    weight: 400,
    style: "normal",
  });
  const LatoBold = new FontFaceObserver("LatoBold", {
    weight: 700,
    style: "normal",
  });
  const LatoItalic = new FontFaceObserver("LatoItalic", {
    weight: 400,
    style: "italic",
  });
  const WorkSansRegular = new FontFaceObserver("WorkSans", {
    weight: 400,
    style: "normal",
  });
  const WorkSansMedium = new FontFaceObserver("WorkSansMedium", {
    weight: 500,
    style: "normal",
  });
  const WorkSansBold = new FontFaceObserver("WorkSansBold", {
    weight: 700,
    style: "normal",
  });

  Promise.all([
    RobotoMonoRegular.load(),
    RobotoMonoItalic.load(),
    LatoRegular.load(),
    LatoBold.load(),
    LatoItalic.load(),
    WorkSansRegular.load(),
    WorkSansMedium.load(),
    WorkSansBold.load(),
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
      if (NODE_ENV === "development") {
        console.log(
          "%c Error loading the fonts: ",
          "color: #ff2020",
          error.message,
        );
      }
      Sentry.captureException(error);
    });
};

export const checkFontsLoaded = () => {
  if (typeof window !== "undefined") {
    if (sessionStorage.fontsLoadedPolyfill) {
      const isLoaded =
        document.documentElement.className.includes("fonts-loaded");
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
  }
};
