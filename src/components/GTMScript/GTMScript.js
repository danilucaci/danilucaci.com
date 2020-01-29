import React, { useContext, useEffect, useState, useRef } from "react";
import Helmet from "react-helmet";
import { CookiesContext } from "../../context/CookiesContext";
import { sendGTMConsent } from "../../helpers/ga";

function GTMScript() {
  const [{ hasGDPRConsent }] = useContext(CookiesContext);
  const [GTMConsentSent, setGTMConsentSent] = useState(false);
  const timeoutRef = useRef();

  useEffect(() => {
    if (hasGDPRConsent && !GTMConsentSent) {
      // Send the GTM Consent on the next tick, after the script is mounted.
      timeoutRef.current = setTimeout(() => {
        sendGTMConsent();
        setGTMConsentSent(true);
      }, 0);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [GTMConsentSent, hasGDPRConsent]);

  if (hasGDPRConsent) {
    return (
      <Helmet>
        {"<!-- Google Tag Manager -->"}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});let f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-TJ6RBXR');`}
        </script>
        {"<!-- End Google Tag Manager -->"}
      </Helmet>
    );
  } else {
    return null;
  }
}

export default GTMScript;
