import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3TExhfhe4sTO6pJSzL8vZhQUdmaIsMEI",
  authDomain: "zaio--clone-9e7bd.firebaseapp.com",
  projectId: "zaio--clone-9e7bd",
  storageBucket: "zaio--clone-9e7bd.appspot.com",
  messagingSenderId: "897410032892",
  appId: "1:897410032892:web:5073f9493d4284b0586379",
  measurementId: "G-W6KGKSHHMN"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
