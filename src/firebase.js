import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDgPxFBqfB60gkNrrzI20ohr8fmaxp0DUU",
    authDomain: "e-clone-8a481.firebaseapp.com",
    projectId: "e-clone-8a481",
    storageBucket: "e-clone-8a481.appspot.com",
    messagingSenderId: "895840620088",
    appId: "1:895840620088:web:ce6621f08e2e67e01c60cd",
    measurementId: "G-636PB2NRSR"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};