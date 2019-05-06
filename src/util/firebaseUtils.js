import firebase from 'firebase/app';
import 'firebase/firebase-database';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA4eFi8qSfR6l3POO2-YYuTvYHrwcDE9f4",
    authDomain: "agn-suporte-online.firebaseapp.com",
    databaseURL: "https://agn-suporte-online.firebaseio.com",
    projectId: "agn-suporte-online",
    storageBucket: "agn-suporte-online.appspot.com",
    messagingSenderId: "390197291168"
};

// export const firebaseImpl = firebase.initializeApp(config);
firebase.initializeApp(config);

export const firebaseDatabase = firebase.database();