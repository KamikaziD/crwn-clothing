import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAcw3tA13i9z7V_TqPxJTDkk01MOfdKC5w",
    authDomain: "crwn-db-69144.firebaseapp.com",
    projectId: "crwn-db-69144",
    storageBucket: "crwn-db-69144.appspot.com",
    messagingSenderId: "931905880867",
    appId: "1:931905880867:web:9486b2c8713b7bf3534296",
    measurementId: "G-PCDJGJ2CE4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;