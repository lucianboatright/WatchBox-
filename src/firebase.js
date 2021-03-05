import firebase from 'firebase/app';

import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";


firebase.initializeApp(  {
    apiKey: "AIzaSyCsYBxKaoOHwIHoRINmVi5MsUrv4ga-4SI",
    authDomain: "watchbox-test.firebaseapp.com",
    projectId: "watchbox-test",
    storageBucket: "watchbox-test.appspot.com",
    messagingSenderId: "182887994894",
    appId: "1:182887994894:web:3e5454c06c1c034a9a8e5f"
})

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();

export default firebase;

