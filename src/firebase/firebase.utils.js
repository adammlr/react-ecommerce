import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBjXFAlKS4a4p0xuSvzfTH4zfnr093ycEM",
  authDomain: "ecommerce-b16c3.firebaseapp.com",
  databaseURL: "https://ecommerce-b16c3.firebaseio.com",
  projectId: "ecommerce-b16c3",
  storageBucket: "",
  messagingSenderId: "1041032321020",
  appId: "1:1041032321020:web:a39e4c77499270fc"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
