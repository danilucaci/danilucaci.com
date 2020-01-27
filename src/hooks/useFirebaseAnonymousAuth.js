import { useEffect, useState, useRef } from "react";
import { bool } from "prop-types";
import { useFirebase } from "./";

/**
 * Log in users anonymously when the privacy consent is accepted.
 * @param {boolean} predicate Consent accepted.
 */
function useFirebaseAnonymousAuth(predicate = false) {
  const [userToken, setUserToken] = useState(null);
  const [error, setError] = useState(null);
  const [auth, setAuth] = useState(null);
  const unsubscribeFromAuth = useRef(null);

  const [firebaseInstance, firebaseError] = useFirebase(predicate);

  useEffect(() => {
    let mounted = true;

    if (predicate && mounted && firebaseInstance && !auth) {
      setAuth(firebaseInstance.auth());
    }

    return () => {
      mounted = false;
    };
  }, [firebaseInstance, auth, predicate]);

  useEffect(() => {
    let mounted = true;

    if (firebaseError && mounted) {
      setError(firebaseError);
    }

    return () => {
      mounted = false;
    };
  }, [firebaseError]);

  useEffect(() => {
    let mounted = true;

    if (auth && predicate && !auth.currentUser) {
      auth.signInAnonymously().catch((err) => {
        if (mounted) {
          setError(err.message);
        }
      });
    }

    return () => {
      mounted = false;
    };
  }, [auth, predicate]);

  useEffect(() => {
    let mounted = true;

    if (auth && auth.hasOwnProperty("currentUser") && !predicate) {
      auth.signOut().then(() => {
        if (mounted) {
          setAuth(null);
        }
      });
    }

    return () => {
      mounted = false;
    };
  }, [auth, predicate]);

  useEffect(() => {
    let mounted = true;

    if (auth) {
      unsubscribeFromAuth.current = auth.onAuthStateChanged(
        async function handleUserSnapshot(user) {
          if (mounted && user) {
            const token = await user.getIdToken().catch((err) => {
              setError(err.message);
            });

            if (!userToken && predicate) {
              setUserToken(token);
            }
          } else {
            if (mounted && userToken) {
              /* User signed out => `user = null` */
              setUserToken(null);
            }
          }
        },
        function handleSnapshotError(err) {
          if (mounted) {
            setError(err.message);
          }
        },
      );
    }

    return () => {
      if (unsubscribeFromAuth.current) {
        unsubscribeFromAuth.current();
      }

      mounted = false;
    };
  }, [auth, predicate, userToken]);

  return { userToken, error };
}

useFirebaseAnonymousAuth.propTypes = {
  predicate: bool.isRequired,
};

export default useFirebaseAnonymousAuth;
