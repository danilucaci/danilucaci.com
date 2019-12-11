import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const signInAnonymously = () => auth.signInAnonymously();
export const signOut = () => auth.signOut();

export default firebase;
