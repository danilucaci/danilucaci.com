import { useEffect, useState, useRef } from "react";

import { signInAnonymously, auth, signOut } from "../firebase/firebase";

function useFirebaseAnonymousAuth(predicate = false) {
  const [userToken, setUserToken] = useState(null);
  const [error, setError] = useState(null);
  const unsubscribeFromAuth = useRef(null);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (predicate) {
      signInAnonymously().catch((err) => {
        if (mounted.current) {
          setError(err.message);
        }
      });
    }

    return () => {
      if (userToken) {
        signOut();
      }
    };
  }, [predicate]);

  useEffect(() => {
    (unsubscribeFromAuth.current = auth.onAuthStateChanged(
      async function handleUserSnapshot(user) {
        if (mounted.current && user) {
          const token = await user.getIdToken().catch((err) => {
            setError(err.message);
          });

          setUserToken(token);
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

    return () => {
      if (unsubscribeFromAuth.current) {
        unsubscribeFromAuth.current();
      }
    };
  }, []);

  return { userToken, error };
}

export default useFirebaseAnonymousAuth;
