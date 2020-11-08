// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJeJVja6aF53GjJDS7uNtyf4jym5nEogs",
  authDomain: "poster-2020.firebaseapp.com",
  databaseURL: "https://poster-2020.firebaseio.com",
  projectId: "poster-2020",
  storageBucket: "poster-2020.appspot.com",
  messagingSenderId: "1001072989545",
  appId: "1:1001072989545:web:8cfaf88d75efdec68999f8",
  measurementId: "G-Q2F4KD9ZRY",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();

export type Timestamp = firebase.firestore.Timestamp;
export const Timestamp = firebase.firestore.Timestamp;
export const tsFromDate = firebase.firestore.Timestamp.fromDate;
