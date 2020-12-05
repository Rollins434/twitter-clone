/* eslint-disable no-unused-vars */
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line no-unused-vars
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDiNsaCUpS5dvV5AsDlN3WDwXaD2PjedwY",
    authDomain: "clone-twitter-basic.firebaseapp.com",
    projectId: "clone-twitter-basic",
    storageBucket: "clone-twitter-basic.appspot.com",
    messagingSenderId: "814374080944",
    appId: "1:814374080944:web:63c43678730491f613c675",
    measurementId: "G-BQVVSL25N2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;