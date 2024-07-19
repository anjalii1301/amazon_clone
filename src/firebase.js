// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCnIdjH_6-RA0o9_jjrfhlCIax5GCE37fg",
    authDomain: "clone-3ba30.firebaseapp.com",
    projectId: "clone-3ba30",
    storageBucket: "clone-3ba30.appspot.com",
    messagingSenderId: "1028244435570",
    appId: "1:1028244435570:web:c5a998ebf46dd576a948eb",
    measurementId: "G-TXS9E95SHS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};