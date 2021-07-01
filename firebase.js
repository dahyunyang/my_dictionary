import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCQt3mmcqP5mQR-vgudkkX-CM5cdfjkjng",
    authDomain: "my-dictionary-31134.firebaseapp.com",
    projectId: "my-dictionary-31134",
    storageBucket: "my-dictionary-31134.appspot.com",
    messagingSenderId: "1085130533546",
    appId: "1:1085130533546:web:12f11e70ddab8d5473fed3",
    measurementId: "G-DS5MYBL61M"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export {firestore};