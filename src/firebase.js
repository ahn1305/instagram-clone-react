import firebase from "firebase";


const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyALOzHwqxkV44KsWUXWwy3THp-coyCr4gw",
    authDomain: "ashwin-s-instaclone.firebaseapp.com",
    projectId: "ashwin-s-instaclone",
    storageBucket: "ashwin-s-instaclone.appspot.com",
    messagingSenderId: "848191013526",
    appId: "1:848191013526:web:701b6b2bb9dc853fd4b8b7",
    measurementId: "G-4MT2WFFY1N"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage };