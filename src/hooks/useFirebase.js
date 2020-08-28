import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
};

/**
 * var apps: firebase.app.App[];
 * A (read-only) array of all initialized apps.
 */
function getFirebaseInstance(firebase) {
  return (
    firebase.apps.find((a) => a.name === "[DANI_LUCACI_COM]") ||
    firebase.initializeApp(firebaseConfig, "[DANI_LUCACI_COM]")
  );
}

/**
 * Returns a lazy loaded memoized instance of firebase initialized on mount
 * to avoid errors when being called in node environments (gatsby builds in node).
 *
 * Imports firebase when the privacy consent is accepted.
 * @param {boolean} predicate Consent accepted.
 *
 * @return Instance of the firebase initialized app and any errors.
 */
function useFirebase(predicate = false) {
  const [firebaseInstance, setFirebaseInstance] = useState(null);
  const [firebaseError, setFirebaseError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function importFirebaseModules() {
      // eslint-disable-next-line no-unused-vars
      const [firebase, auth] = await Promise.all([
        import("firebase/app"),
        import("firebase/auth"),
      ]).catch((error) => {
        if (mounted) {
          setFirebaseError(error.message);
        }
      });

      if (mounted) {
        setFirebaseInstance(getFirebaseInstance(firebase));
      }
    }

    if (!firebaseInstance && predicate) {
      importFirebaseModules();
    }

    return () => {
      mounted = false;
    };
  }, [firebaseInstance, predicate]);

  return [firebaseInstance, firebaseError];
}

export default useFirebase;
