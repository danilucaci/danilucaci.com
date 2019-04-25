exports.onClientEntry = () =>
  /*
   * Polyfills via polyfill.io
   */
  new Promise((resolve, reject) => {
    // Global callback for polyfill.io script
    // eslint-disable-next-line no-underscore-dangle
    window.__polyfills_loaded__ = () => {
      console.log("%c Polyfill Loaded", "color: #79E36B");
      resolve();
    };
    const features = [];
    if (!("Intl" in window)) {
      features.push("Intl%2CIntl.~locale.en%2CIntl.~locale.es");
    }
    if (!("fetch" in window)) {
      features.push("fetch");
    }
    // Use 'always' flag to download polyfills regardless of user agent.
    // Features are added to the list only if they are not supported.
    if (features.length) {
      const s = document.createElement("script");
      s.src = `https://polyfill.io/v3/polyfill.min.js?flags=gated%7Calways&callback=__polyfills_loaded__&features=${features.join("%2C")}`;
      s.defer = true;
      s.async = true;
      s.crossOrigin = "anonymous";
      s.onerror = reject;
      document.head.appendChild(s);
    } else {
      resolve();
    }
  });
