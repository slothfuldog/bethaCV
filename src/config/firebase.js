// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyA4Nf-bekUwMcEdRxT3O9zG3mjsyVmjC8o",

  authDomain: "mycv-cffc2.firebaseapp.com",

  projectId: "mycv-cffc2",

  storageBucket: "mycv-cffc2.appspot.com",

  messagingSenderId: "750966274805",

  appId: "1:750966274805:web:bbb62a1772a077c280a3bc",

  measurementId: "G-31GBKFNE9J"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);