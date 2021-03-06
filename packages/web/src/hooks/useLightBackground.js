import { useLayoutEffect } from "react";

function useLightBackground() {
  useLayoutEffect(() => {
    const isLoaded = document.body.className.includes("grey-background");

    // Only add the class when it is not already added
    if (!isLoaded) {
      document.body.className += " grey-background";
    }

    return () => {
      document.querySelector("body").classList.remove("grey-background");
    };
  }, []);
}

export default useLightBackground;
