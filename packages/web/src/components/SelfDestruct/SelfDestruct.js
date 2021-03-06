import { useState, useEffect } from "react";

function useExpiration(time = 6000) {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // self clearing setTimeout
    let timeoutTimer = setTimeout(() => {
      setShouldRender(false);
    }, time);

    return () => clearTimeout(timeoutTimer);
  }, [time]);

  return shouldRender;
}

function useExpirationUI(time, element) {
  return useExpiration(time) ? element : null;
}

function SelfDestruct({ time, children }) {
  return useExpirationUI(time, children);
}

export default SelfDestruct;
