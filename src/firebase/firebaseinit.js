import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyA011btxNuYdmDKO-YqLk8WpjCo9309b2o",
    authDomain: "invoice-app-2df95.firebaseapp.com",
    projectId: "invoice-app-2df95",
    storageBucket: "invoice-app-2df95.appspot.com",
    messagingSenderId: "613738314914",
    appId: "1:613738314914:web:61a8269d4b8411cd532bfb"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export default firebaseApp.firestore();