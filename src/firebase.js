import firebase from 'firebase';

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

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebaseApp.firestore();

const storage = firebaseApp.storage();

export { auth, db, storage };
