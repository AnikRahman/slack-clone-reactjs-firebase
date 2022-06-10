// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyASFrE-k9ukjUWbe_S4L4c5ysdl3dr46ng",
    authDomain: "slack-b204a.firebaseapp.com",
    projectId: "slack-b204a",
    storageBucket: "slack-b204a.appspot.com",
    messagingSenderId: "276205746987",
    appId: "1:276205746987:web:417eeb1b07dabb8a9da36e",
    measurementId: "G-WKP4LXTP3Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };