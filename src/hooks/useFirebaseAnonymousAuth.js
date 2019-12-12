import { useEffect, useState, useRef } from "react";
import { bool } from "prop-types";
import useFirebase from "./useFirebase";

/**
 * Loggin a user anonymously when the privacy consent is accepted.
 * @param {boolean} predicate Consent accepted.
 */
function useFirebaseAnonymousAuth(predicate) {
  const [userToken, setUserToken] = useState(null);
  const [error, setError] = useState(null);
  const [auth, setAuth] = useState(null);
  const unsubscribeFromAuth = useRef(null);
  const mounted = useRef(false);

  const { firebaseInstance, firebaseError } = useFirebase();

  useEffect(() => {
    if (firebaseInstance && !auth && mounted.current) {
      setAuth(firebaseInstance.auth());
    }
  }, [firebaseInstance, auth]);

  useEffect(() => {
    if (firebaseError && mounted.current) {
      setError(firebaseError);
    }
  }, [firebaseError]);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (auth && predicate && !auth.currentUser) {
      auth.signInAnonymously().catch((err) => {
        if (mounted.current) {
          setError(err.message);
        }
      });
    }
  }, [auth, predicate, userToken]);

  useEffect(() => {
    if (auth && auth.currentUser && !predicate) {
      auth.signOut();
    }
  }, [auth, predicate, userToken]);

  useEffect(() => {
    if (auth) {
      (unsubscribeFromAuth.current = auth.onAuthStateChanged(
        async function handleUserSnapshot(user) {
          if (mounted.current && user) {
            const token = await user.getIdToken().catch((err) => {
              setError(err.message);
            });

            if (!userToken && predicate) {
              setUserToken(token);
            }
          } else {
            if (mounted.current && userToken) {
              /* User signed out => `user = null` */
              setUserToken(null);
            }
          }
        },
      )),
        function handleSnapshotError(err) {
          if (mounted.current) {
            setError(err.message);
          }
        };
    }

    return () => {
      if (unsubscribeFromAuth.current) {
        unsubscribeFromAuth.current();
      }
    };
  }, [auth, predicate, userToken]);

  return { userToken, error };
}

useFirebaseAnonymousAuth.propTypes = {
  predicate: bool.isRequired,
};

export default useFirebaseAnonymousAuth;
