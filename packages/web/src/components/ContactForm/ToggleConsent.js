import { useEffect } from "react";

function ToggleConsent({ values, setConsentAccepted, currentConsentAccepted }) {
  useEffect(() => {
    if (!currentConsentAccepted && values.consentAccepted) {
      setConsentAccepted(values.consentAccepted);
    }
  }, [currentConsentAccepted, setConsentAccepted, values.consentAccepted]);

  return null;
}

export default ToggleConsent;
