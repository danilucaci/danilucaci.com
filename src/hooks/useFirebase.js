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
 * @return Instance of the firebase initialized app and any errors.
 */
function useFirebase() {
  const [firebaseInstance, setFirebaseInstance] = useState(null);
  const [firebaseError, setFirebaseError] = useState(null);

  useEffect(() => {
    async function importFirebaseModules() {
      const firebaseAppImport = import("firebase/app");
      const firebaseAuthImport = import("firebase/auth");

      const [firebase, _] = await Promise.all([
        firebaseAppImport,
        firebaseAuthImport,
      ]).catch((error) => {
        setFirebaseError(error.message);
      });

      setFirebaseInstance(getFirebaseInstance(firebase));
    }

    if (!firebaseInstance) {
      importFirebaseModules();
    }
  }, [firebaseInstance]);

  return { firebaseInstance, firebaseError };
}

export default useFirebase;
