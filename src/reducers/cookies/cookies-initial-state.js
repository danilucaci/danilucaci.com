const cookiesInitialState = {
  hasGDPRConsent: false,
  openCookieConsent: false,
  acceptsCookie: { necessary: true, analytics: true, dismissed: false },
  deniesCookie: { necessary: true, analytics: false, dismissed: true },
  isTransitioning: false,
  initialCookieSet: false,
};

export default cookiesInitialState;
