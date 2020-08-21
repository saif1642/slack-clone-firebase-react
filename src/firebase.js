import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC__iZr1WjzFKud2kz6b-xEkqKpaHsYTEs",
    authDomain: "slack-clone-bb752.firebaseapp.com",
    databaseURL: "https://slack-clone-bb752.firebaseio.com",
    projectId: "slack-clone-bb752",
    storageBucket: "slack-clone-bb752.appspot.com",
    messagingSenderId: "262765278853",
    appId: "1:262765278853:web:aa9a0682cc7ae395171bec",
    measurementId: "G-PPTFJ5CVZY"
};


firebase.initializeApp(firebaseConfig);

export default firebase;
