import WrapPage from "./wrap-page";

export const wrapPageElement = WrapPage;

export function onClientEntry() {
  return new Promise((resolve, reject) => {
    /*
     * Polyfills via polyfill.io
     */
    // Global callback for polyfill.io script
    // eslint-disable-next-line no-underscore-dangle
    window.__polyfills_loaded__ = () => {
      resolve();
    };
    const features = [];
    if (!("Intl" in window)) {
      features.push("Intl%2CIntl.~locale.en%2CIntl.~locale.es");
    }
    if (!("fetch" in window)) {
      features.push("fetch");
    }
    if (
      !("IntersectionObserver" in window) ||
      !("IntersectionObserverEntry" in window) ||
      !("intersectionRatio" in window.IntersectionObserverEntry.prototype)
    ) {
      features.push("IntersectionObserver%2CIntersectionObserverEntry");
    }
    // Use 'always' flag to download polyfills regardless of user agent.
    // Features are added to the list only if they are not supported.
    if (features.length) {
      const s = document.createElement("script");
      s.src = `https://polyfill.io/v3/polyfill.min.js?flags=gated%7Calways&callback=__polyfills_loaded__&features=${features.join(
        "%2C",
      )}`;
      s.defer = true;
      s.async = true;
      s.crossOrigin = "anonymous";
      s.onerror = reject;
      document.head.appendChild(s);
    } else {
      resolve();
    }
  });
}
